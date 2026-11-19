"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { getMessages } from "@/i18n/messages";
import { getLocalizedValue } from "@/utils/resourceNormalizeUtils";
import { formatSubtitleCues } from "./subtitleUtils";
import frenchLanguage from "video.js/dist/lang/fr.json";
import "video.js/dist/video-js.css";
import styles from "./MediaFrame.module.css";

export default function PrimaryVideo({
  src,
  is360,
  poster,
  label,
  subtitles,
  language,
  videoRef,
  onReady,
  onPlay,
  onError,
  onSubtitleError,
}) {
  const containerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const ready = useEffectEvent(() => onReady());
  const playing = useEffectEvent(() => onPlay());
  const failed = useEffectEvent((error) => onError(error));
  const subtitleFailed = useEffectEvent((url, error) => onSubtitleError(url, error));
  const initialLanguage = useRef(language);
  const languageRef = useRef(language);
  languageRef.current = language;
  const captionsEnabledRef = useRef(true);
  const panoramaRef = useRef(null);
  const panoramaLabels = useEffectEvent(() => {
    const messages = getMessages(language).MediaFrame;
    return {
      canvas: messages.panoramaInstructions,
      hint: messages.panoramaHint,
      planet: messages.panoramaPlanet,
      reset: messages.panoramaReset,
    };
  });
  const enSubtitle = getLocalizedValue(subtitles?.en).trim();
  const frSubtitle = getLocalizedValue(subtitles?.fr).trim();
  const subtitlePosition = subtitles?.position;

  useEffect(() => {
    let disposed = false;
    let instance;
    let panoramaController;
    let volumePanel;
    let handleControlClick;
    let handleControlKeyDown;
    let handleVolumeDismiss;
    let handleVolumeEscape;
    let handleVolumeChange;
    const container = containerRef.current;
    const removeControlListeners = () => {
      if (instance && !instance.isDisposed()) {
        if (handleControlClick) instance.el().removeEventListener("click", handleControlClick, true);
        if (handleControlKeyDown) instance.el().removeEventListener("keydown", handleControlKeyDown, true);
        if (handleVolumeChange) instance.off("volumechange", handleVolumeChange);
      }
      if (handleVolumeDismiss) document.removeEventListener("pointerdown", handleVolumeDismiss, true);
      if (handleVolumeEscape) document.removeEventListener("keydown", handleVolumeEscape);
    };

    const initialize = async () => {
      try {
        const { default: videojs } = await import("video.js");
        const panorama = is360 ? await import("./panoramaRenderer") : null;
        if (disposed) return;
        videojs.addLanguage("fr", frenchLanguage);

        const element = document.createElement("video");
        element.className = "video-js vjs-big-play-centered";
        element.setAttribute("playsinline", "");
        element.setAttribute("data-media-frame", "");
        element.setAttribute("aria-label", label);
        container.appendChild(element);

        instance = videojs(element, {
          controls: true,
          preload: "auto",
          poster,
          fill: true,
          language: initialLanguage.current,
          playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
          controlBar: {
            volumePanel: { inline: false },
            pictureInPictureToggle: false,
            children: [
              "playToggle",
              "volumePanel",
              "progressControl",
              "currentTimeDisplay",
              "timeDivider",
              "durationDisplay",
              "remainingTimeDisplay",
              "playbackRateMenuButton",
              "subsCapsButton",
              "fullscreenToggle",
            ],
          },
          userActions: { hotkeys: true },
          html5: { nativeTextTracks: false },
        });
        const playerElement = instance.el();
        volumePanel = playerElement.querySelector(".vjs-volume-panel");
        const volumeButton = volumePanel?.querySelector(".vjs-mute-control");
        const captionsButton = playerElement.querySelector(".vjs-subs-caps-button");
        const updateVolumeButtonLabel = () => {
          if (!volumeButton) return;
          volumeButton.setAttribute("aria-label", "Volume");
          volumeButton.setAttribute("title", "Volume");
          const controlText = volumeButton.querySelector(".vjs-control-text");
          if (controlText) controlText.textContent = "Volume";
        };
        const updateCaptionsButton = (enabled) => {
          captionsButton?.setAttribute("aria-pressed", String(enabled));
          captionsButton?.classList.toggle("media-captions-off", !enabled);
        };
        const closeVolumePopup = () => {
          volumePanel?.classList.remove("media-volume-open");
          volumeButton?.setAttribute("aria-expanded", "false");
        };
        const activateControl = (button) => {
          if (button.matches(".vjs-mute-control")) {
            const isOpen = volumePanel.classList.toggle("media-volume-open");
            volumeButton?.setAttribute("aria-expanded", String(isOpen));
            return;
          }

          closeVolumePopup();
          captionsEnabledRef.current = !captionsEnabledRef.current;
          for (const track of Array.from(instance.textTracks())) {
            if (track.kind === "subtitles") {
              track.mode = captionsEnabledRef.current && track.language === languageRef.current
                ? "showing"
                : "disabled";
            }
          }
          updateCaptionsButton(captionsEnabledRef.current);
        };
        const findCustomControl = (event) => {
          const target = event.target instanceof Element ? event.target : null;
          return target?.closest(".vjs-volume-panel .vjs-mute-control, .vjs-subs-caps-button");
        };

        updateVolumeButtonLabel();
        updateCaptionsButton(captionsEnabledRef.current);
        handleVolumeChange = updateVolumeButtonLabel;
        instance.on("volumechange", handleVolumeChange);
        handleControlClick = (event) => {
          const button = findCustomControl(event);
          if (!button) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          activateControl(button);
        };
        handleControlKeyDown = (event) => {
          if (event.key !== " " && event.key !== "Enter") return;
          const button = findCustomControl(event);
          if (!button) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          activateControl(button);
        };
        handleVolumeDismiss = (event) => {
          if (volumePanel?.contains(event.target)) return;
          closeVolumePopup();
        };
        handleVolumeEscape = (event) => {
          if (event.key === "Escape") closeVolumePopup();
        };
        playerElement.addEventListener("click", handleControlClick, true);
        playerElement.addEventListener("keydown", handleControlKeyDown, true);
        document.addEventListener("pointerdown", handleVolumeDismiss, true);
        document.addEventListener("keydown", handleVolumeEscape);
        instance.el().setAttribute("aria-label", label || getMessages(initialLanguage.current).MediaFrame.videoLabel);
        videoRef.current = instance.tech({ IWillNotUseThisInPlugins: true }).el();
        instance.on("canplay", ready);
        instance.on("play", playing);
        instance.on("error", () => failed(instance.error()));
        if (panorama) {
          panoramaController = panorama.createPanoramaRenderer({
            video: videoRef.current,
            container: instance.el(),
            labels: panoramaLabels(),
            onError: failed,
            onTap: () => {
              if (instance.paused()) instance.play()?.catch(() => {});
              else instance.pause();
            },
          });
          panoramaRef.current = panoramaController;
        }
        instance.src({
          src,
          type: /\.m3u8(?:[?#]|$)/i.test(src)
            ? "application/x-mpegURL"
            : /\.webm(?:[?#]|$)/i.test(src) ? "video/webm" : "video/mp4",
        });
        setPlayer(instance);
      } catch (error) {
        if (!disposed) {
          removeControlListeners();
          panoramaController?.dispose();
          panoramaRef.current = null;
          if (instance && !instance.isDisposed()) instance.dispose();
          videoRef.current = null;
          container.replaceChildren();
          failed(error);
        }
      }
    };

    initialize();
    return () => {
      disposed = true;
      removeControlListeners();
      panoramaController?.dispose();
      panoramaRef.current = null;
      videoRef.current = null;
      if (instance && !instance.isDisposed()) instance.dispose();
      container.replaceChildren();
    };
  }, [src, is360, poster, label, videoRef]);

  useEffect(() => {
    if (!player || player.isDisposed()) return;
    const controller = new AbortController();
    const tracks = [];
    const blobUrls = [];
    subtitleFailed(null, null);
    [["en", enSubtitle], ["fr", frSubtitle]]
      .filter(([, url]) => url)
      .forEach(async ([trackLanguage, url]) => {
        try {
          // Fetch explicitly so HTTP and invalid-VTT failures reach the visible error message.
          const response = await fetch(url, { signal: controller.signal });
          if (!response.ok) throw new Error(`Subtitle request failed: ${response.status}`);
          const text = await response.text();
          if (!text.trimStart().startsWith("WEBVTT")) throw new Error("Invalid WebVTT subtitles");
          if (controller.signal.aborted || player.isDisposed()) return;
          const blobUrl = URL.createObjectURL(new Blob([text], { type: "text/vtt" }));
          blobUrls.push(blobUrl);
          const trackElement = player.addRemoteTextTrack({
            kind: "subtitles",
            src: blobUrl,
            srclang: trackLanguage,
            label: getMessages(trackLanguage).MediaFrame.subtitleLabel,
            default: trackLanguage === language,
          }, false);
          trackElement.track.mode = captionsEnabledRef.current && trackLanguage === language
            ? "showing"
            : "disabled";
          trackElement.addEventListener("load", () => formatSubtitleCues(trackElement.track, subtitlePosition));
          trackElement.addEventListener("error", () => subtitleFailed(url, new Error("Subtitle track failed to load")));
          tracks.push(trackElement);
          const captionsButton = player.el().querySelector(".vjs-subs-caps-button");
          captionsButton?.setAttribute("aria-pressed", String(captionsEnabledRef.current));
          captionsButton?.classList.toggle("media-captions-off", !captionsEnabledRef.current);
        } catch (error) {
          if (!controller.signal.aborted) {
            subtitleFailed(url, error);
          }
        }
      });

    return () => {
      controller.abort();
      if (!player.isDisposed()) tracks.forEach((track) => player.removeRemoteTextTrack(track));
      blobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [player, enSubtitle, frSubtitle, subtitlePosition, language]);

  useEffect(() => {
    panoramaRef.current?.setLabels(panoramaLabels());
  }, [language]);

  useEffect(() => {
    if (!player || player.isDisposed()) return;
    player.language(language);
    for (const track of Array.from(player.textTracks())) {
      if (track.kind === "subtitles") {
        track.mode = captionsEnabledRef.current && track.language === language
          ? "showing"
          : "disabled";
      }
    }
    const captionsButton = player.el().querySelector(".vjs-subs-caps-button");
    captionsButton?.setAttribute("aria-pressed", String(captionsEnabledRef.current));
    captionsButton?.classList.toggle("media-captions-off", !captionsEnabledRef.current);
  }, [player, language, enSubtitle, frSubtitle]);

  return <div ref={containerRef} className={styles.primaryVideo} />;
}
