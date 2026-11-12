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

  useEffect(() => {
    let disposed = false;
    let instance;
    let panoramaController;
    const container = containerRef.current;

    const initialize = async () => {
      try {
        const { default: videojs } = await import("video.js");
        const panorama = is360 ? await import("./panoramaRenderer") : null;
        if (disposed) return;
        videojs.addLanguage("fr", frenchLanguage);

        const element = document.createElement("video");
        element.className = "video-js vjs-big-play-centered";
        element.setAttribute("crossorigin", "anonymous");
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
          controlBar: { pictureInPictureToggle: !is360 },
          userActions: { hotkeys: true },
          html5: { nativeTextTracks: false },
        });
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
          trackElement.track.mode = trackLanguage === language ? "showing" : "disabled";
          trackElement.addEventListener("load", () => formatSubtitleCues(trackElement.track));
          trackElement.addEventListener("error", () => subtitleFailed(url, new Error("Subtitle track failed to load")));
          tracks.push(trackElement);
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
  }, [player, enSubtitle, frSubtitle, language]);

  useEffect(() => {
    panoramaRef.current?.setLabels(panoramaLabels());
  }, [language]);

  useEffect(() => {
    if (!player || player.isDisposed()) return;
    player.language(language);
    for (const track of Array.from(player.textTracks())) {
      if (track.kind === "subtitles") {
        track.mode = track.language === language ? "showing" : "disabled";
      }
    }
  }, [player, language, enSubtitle, frSubtitle]);

  return <div ref={containerRef} className={styles.primaryVideo} />;
}
