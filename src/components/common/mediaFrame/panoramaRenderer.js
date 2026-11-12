import {
  Euler,
  Matrix3,
  Matrix4,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  VideoTexture,
  WebGLRenderer,
} from "three";

const DEFAULT_FOV = 80;
const MIN_FOV = 35;
const MAX_FOV = 120;
// Vertical FOV that makes a nadir-facing stereographic view show the whole sphere.
const PLANET_FOV = 164;
const MAX_PITCH = 89;
const TAP_MS = 350;
const TAP_PX = 6;

const ICONS = {
  planet: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M4.5 9.5c5 2.5 10 2.5 15 0M4.5 14.5c5-2.5 10-2.5 15 0" opacity=".7"/></svg>',
  reset: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v5h5"/></svg>',
};

const VERTEX_SHADER = `
  varying vec2 vPosition;
  void main() {
    vPosition = position.xy;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Casts a ray per pixel and looks it up in the equirectangular frame. Sampling by
// direction (instead of mapping the video onto a mesh) means the left/right edges of
// the frame are joined by texture wrapping and the projection can morph between
// rectilinear and stereographic ("little planet") views.
const FRAGMENT_SHADER = `
  uniform sampler2D map;
  uniform mat3 viewRotation;
  uniform float aspect;
  uniform float scale;
  uniform float planet;
  varying vec2 vPosition;
  const float PI = 3.141592653589793;
  void main() {
    vec2 p = vec2(vPosition.x * aspect, vPosition.y);
    float rho = length(p) * scale;
    float theta = mix(atan(rho), 2.0 * atan(0.5 * rho), planet);
    vec2 side = rho > 1e-5 ? normalize(p) * sin(theta) : vec2(0.0);
    vec3 ray = viewRotation * vec3(side, -cos(theta));
    vec2 uv = vec2(
      atan(ray.x, -ray.z) / (2.0 * PI) + 0.5,
      asin(clamp(ray.y, -1.0, 1.0)) / PI + 0.5
    );
    gl_FragColor = texture2D(map, uv);
  }
`;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const radians = (degrees) => (degrees * Math.PI) / 180;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const lerp = (a, b, t) => a + (b - a) * t;
const scaleOf = (fov) => Math.tan(radians(fov) / 2);
const lerpFov = (a, b, t) =>
  (2 * Math.atan(Math.exp(lerp(Math.log(scaleOf(a)), Math.log(scaleOf(b)), t))) * 180) / Math.PI;

export function createPanoramaRenderer({ video, container, labels, onError, onTap }) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const renderer = new WebGLRenderer({ antialias: false, alpha: false });
  const texture = new VideoTexture(video);
  // Video frames are already display-referred; no colour conversion is applied either way.
  texture.wrapS = RepeatWrapping;

  const rotation = new Matrix3();
  const euler = new Euler(0, 0, 0, "YXZ");
  const matrix = new Matrix4();
  const material = new ShaderMaterial({
    uniforms: {
      map: { value: texture },
      viewRotation: { value: rotation },
      aspect: { value: 16 / 9 },
      scale: { value: scaleOf(DEFAULT_FOV) },
      planet: { value: 0 },
    },
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    depthTest: false,
    depthWrite: false,
  });
  const geometry = new PlaneGeometry(2, 2);
  const quad = new Mesh(geometry, material);
  quad.frustumCulled = false;
  const scene = new Scene();
  scene.add(quad);
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute("role", "img");
  canvas.className = "media-panorama";
  canvas.style.visibility = "hidden";

  const controls = document.createElement("div");
  controls.className = "media-panorama-controls";
  const makeButton = (name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = ICONS[name];
    return button;
  };
  const planetButton = makeButton("planet");
  const resetButton = makeButton("reset");
  controls.append(planetButton, resetButton);
  const hint = document.createElement("div");
  hint.className = "media-panorama-hint";
  hint.setAttribute("aria-hidden", "true");
  container.append(canvas, controls, hint);

  const previousOpacity = video.style.opacity;
  video.style.opacity = "0";

  const setLabels = (next) => {
    canvas.setAttribute("aria-label", next.canvas);
    hint.textContent = next.hint;
    planetButton.title = next.planet;
    planetButton.setAttribute("aria-label", next.planet);
    resetButton.title = next.reset;
    resetButton.setAttribute("aria-label", next.reset);
  };
  setLabels(labels);

  // `pose` is the user's view; `shown` is what is currently drawn (it differs mid-animation).
  const pose = { yaw: 0, pitch: 0, fov: DEFAULT_FOV, planet: 0 };
  const shown = { ...pose };
  let animation = null;
  let velocity = { yaw: 0, pitch: 0 };
  let failed = false;
  let started = false;
  let hintTimer = 0;
  let lastTime = 0;
  const pointers = new Map();
  let drag = null;
  let pinchDistance = 0;

  const dismissHint = () => {
    clearTimeout(hintTimer);
    hint.classList.add("hidden");
  };
  const stopAnimation = () => {
    if (!animation) return;
    Object.assign(pose, shown);
    animation = null;
  };
  const animateTo = (to, duration, from = shown) => {
    velocity = { yaw: 0, pitch: 0 };
    if (reducedMotion.matches || duration <= 0) {
      animation = null;
      Object.assign(pose, to);
      return;
    }
    // Take the short way round so resetting never spins the view through 360 degrees.
    const yawDelta = ((((to.yaw - from.yaw) % 360) + 540) % 360) - 180;
    animation = { from: { ...from }, to: { ...to, yaw: from.yaw + yawDelta }, start: null, duration };
  };
  const isDefaultView = () =>
    Math.abs(pose.yaw % 360) < 0.5 && Math.abs(pose.pitch) < 0.5 &&
    Math.abs(pose.fov - DEFAULT_FOV) < 0.5 && pose.planet < 0.01;
  const reset = () => animateTo({ yaw: 0, pitch: 0, fov: DEFAULT_FOV, planet: 0 }, 900);
  const togglePlanet = () => {
    if (pose.planet > 0.5) reset();
    else animateTo({ yaw: pose.yaw, pitch: -MAX_PITCH, fov: PLANET_FOV, planet: 1 }, 1400);
  };
  const zoom = (factor) => {
    if (pose.planet > 0.01) return;
    pose.fov = clamp(pose.fov * factor, MIN_FOV, MAX_FOV);
  };

  const degreesPerPixel = () => shown.fov / Math.max(canvas.clientHeight, 1);

  const resize = () => {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    material.uniforms.aspect.value = width / height;
  };
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  const pointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    stopAnimation();
    dismissHint();
    canvas.focus({ preventScroll: true });
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    velocity = { yaw: 0, pitch: 0 };
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchDistance = Math.hypot(a.x - b.x, a.y - b.y);
      drag = null;
    } else {
      drag = { x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, time: performance.now(), moved: false };
    }
  };
  const pointerMove = (event) => {
    const point = pointers.get(event.pointerId);
    if (!point) return;
    point.x = event.clientX;
    point.y = event.clientY;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDistance && distance) zoom(pinchDistance / distance);
      pinchDistance = distance;
      return;
    }
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > TAP_PX) drag.moved = true;
    drag.x = event.clientX;
    drag.y = event.clientY;
    const k = degreesPerPixel();
    // Dragging "pulls" the scene: moving right turns the camera left, moving down tilts it up.
    pose.yaw -= dx * k;
    pose.pitch = clamp(pose.pitch + dy * k, -MAX_PITCH, MAX_PITCH);
    const blend = 0.4;
    velocity = { yaw: lerp(velocity.yaw, -dx * k * 60, blend), pitch: lerp(velocity.pitch, dy * k * 60, blend) };
  };
  const pointerUp = (event) => {
    if (!pointers.delete(event.pointerId)) return;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    pinchDistance = 0;
    if (pointers.size === 1) {
      // Resume dragging with the remaining finger without a jump.
      const [point] = [...pointers.values()];
      drag = { x: point.x, y: point.y, startX: point.x, startY: point.y, time: performance.now(), moved: true };
      return;
    }
    if (!drag) return;
    const wasTap = !drag.moved && performance.now() - drag.time < TAP_MS && event.type === "pointerup";
    drag = null;
    if (wasTap) {
      velocity = { yaw: 0, pitch: 0 };
      onTap?.();
    }
  };
  const wheel = (event) => {
    // Plain scrolling must keep scrolling the page; trackpad pinch arrives as ctrl+wheel.
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    stopAnimation();
    dismissHint();
    zoom(Math.exp(event.deltaY * 0.005));
  };
  const keyDown = (event) => {
    stopAnimation();
    const turn = 5;
    switch (event.key) {
      case "ArrowLeft": pose.yaw -= turn; break;
      case "ArrowRight": pose.yaw += turn; break;
      case "ArrowUp": pose.pitch = clamp(pose.pitch + turn, -MAX_PITCH, MAX_PITCH); break;
      case "ArrowDown": pose.pitch = clamp(pose.pitch - turn, -MAX_PITCH, MAX_PITCH); break;
      case "+": case "=": zoom(0.9); break;
      case "-": case "_": zoom(1.1); break;
      case "Home": reset(); break;
      default: return;
    }
    dismissHint();
    velocity = { yaw: 0, pitch: 0 };
    event.preventDefault();
    event.stopPropagation();
  };
  const stopPropagation = (event) => event.stopPropagation();
  const contextLost = (event) => {
    event.preventDefault();
    reportFailure(new Error("360 video WebGL context lost"));
  };
  function reportFailure(error) {
    if (failed) return;
    failed = true;
    renderer.setAnimationLoop(null);
    onError(error);
  }
  renderer.debug.onShaderError = () => reportFailure(new Error("360 video shader failed to compile"));

  const onPlanetClick = () => { stopAnimation(); dismissHint(); togglePlanet(); };
  const onResetClick = () => { stopAnimation(); dismissHint(); reset(); };
  planetButton.addEventListener("click", onPlanetClick);
  resetButton.addEventListener("click", onResetClick);
  controls.addEventListener("pointerdown", stopPropagation);
  canvas.addEventListener("pointerdown", pointerDown);
  canvas.addEventListener("pointermove", pointerMove);
  canvas.addEventListener("pointerup", pointerUp);
  canvas.addEventListener("pointercancel", pointerUp);
  canvas.addEventListener("lostpointercapture", pointerUp);
  canvas.addEventListener("wheel", wheel, { passive: false });
  canvas.addEventListener("keydown", keyDown);
  canvas.addEventListener("webglcontextlost", contextLost);

  const startIntro = () => {
    // A "little planet" that unfolds into the normal view shows the user it is a full sphere.
    animateTo(
      { yaw: 0, pitch: 0, fov: DEFAULT_FOV, planet: 0 },
      2600,
      { yaw: 120, pitch: -MAX_PITCH, fov: PLANET_FOV, planet: 1 },
    );
    hintTimer = setTimeout(dismissHint, 7000);
  };

  const advance = (time) => {
    const dt = Math.min((time - lastTime) / 1000, 0.1) || 0;
    lastTime = time;
    if (animation) {
      animation.start ??= time;
      const t = clamp((time - animation.start) / animation.duration, 0, 1);
      const e = easeInOut(t);
      const { from, to } = animation;
      shown.yaw = lerp(from.yaw, to.yaw, e);
      shown.pitch = lerp(from.pitch, to.pitch, e);
      shown.fov = lerpFov(from.fov, to.fov, e);
      shown.planet = lerp(from.planet, to.planet, e);
      if (t >= 1) {
        Object.assign(pose, to);
        animation = null;
      }
    } else {
      const coasting = !drag && pointers.size === 0 && !reducedMotion.matches &&
        (Math.abs(velocity.yaw) > 0.5 || Math.abs(velocity.pitch) > 0.5);
      if (coasting) {
        pose.yaw += velocity.yaw * dt;
        pose.pitch = clamp(pose.pitch + velocity.pitch * dt, -MAX_PITCH, MAX_PITCH);
        const decay = Math.exp(-dt * 4);
        velocity = { yaw: velocity.yaw * decay, pitch: velocity.pitch * decay };
      } else if (!drag) {
        velocity = { yaw: 0, pitch: 0 };
      }
      Object.assign(shown, pose);
    }
    resetButton.hidden = !animation && isDefaultView();
    planetButton.classList.toggle("active", shown.planet > 0.5);
  };

  renderer.setAnimationLoop((time) => {
    if (video.readyState < 2) return;
    try {
      if (!started) {
        started = true;
        canvas.style.visibility = "visible";
        if (!reducedMotion.matches) {
          startIntro();
          // Draw the first frame in the planet pose so there is no flash of the final view.
          Object.assign(shown, animation.from);
        }
      }
      advance(time);
      // Positive yaw turns the camera right, matching the arrow keys.
      euler.set(radians(shown.pitch), -radians(shown.yaw), 0);
      rotation.setFromMatrix4(matrix.makeRotationFromEuler(euler));
      material.uniforms.scale.value = scaleOf(shown.fov);
      material.uniforms.planet.value = shown.planet;
      renderer.render(scene, camera);
    } catch (error) {
      reportFailure(error);
    }
  });

  return {
    setLabels,
    dispose() {
      clearTimeout(hintTimer);
      observer.disconnect();
      renderer.setAnimationLoop(null);
      planetButton.removeEventListener("click", onPlanetClick);
      resetButton.removeEventListener("click", onResetClick);
      controls.removeEventListener("pointerdown", stopPropagation);
      canvas.removeEventListener("pointerdown", pointerDown);
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerup", pointerUp);
      canvas.removeEventListener("pointercancel", pointerUp);
      canvas.removeEventListener("lostpointercapture", pointerUp);
      canvas.removeEventListener("wheel", wheel);
      canvas.removeEventListener("keydown", keyDown);
      canvas.removeEventListener("webglcontextlost", contextLost);
      canvas.remove();
      controls.remove();
      hint.remove();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      video.style.opacity = previousOpacity;
    },
  };
}
