/**
 * @file MediaFrame.jsx
 * @module UI/Media
 * @desc Displays primary HTML5 videos with subtitles, YouTube fallbacks, or static images.
 *
 * @features
 * - Prefers primary video URLs with native controls and localized WebVTT subtitles.
 * - Uses YouTube when a primary URL is absent.
 * - Supports optional image fallback for non-video content.
 * - Shows a loading animation (PulseLoader) until content is fully loaded.
 * - If a `thumbUrl` is provided, it shows a thumbnail overlay with a custom play button before playing the video.
 * - Uses `react-youtube` and `next/image` for optimized media handling.
 * - Fully responsive with Tailwind utility classes and animation support.
 *
 * @props
 * @param {string} [videoSrc] - YouTube video ID, used when primary playback is unavailable.
 * @param {string} [primaryUrl] - Preferred HTML5 video URL.
 * @param {Object} [subtitles] - English/French WebVTT URLs keyed by language.
 * @param {string} [alt] - Alt text for images or thumbnails.
 * @param {string} [title] - Optional title to display above the media.
 * @param {string} [description] - Optional description displayed below the media.
 * @param {string} [className="h-64"] - Additional Tailwind classes for customizing height/layout.
 * @param {boolean} [showWheel=false] - Whether to show the loading spinner animation.
 * @param {string|null} [thumbUrl] - Optional YouTube thumbnail to show before video is played.
 *
 * @dependencies
 * - react-youtube
 * - next/image
 * - react-icons (for play button styling)
 * - PulseLoader (custom visual loading animation)
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Jul 7, 2026 - Updated 
 */

"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PulseLoader from "@/components/common/PulseLoader";
import Image from "next/image";
import YouTube from 'react-youtube';
import PlayButton from "./PlayButton";
import { getMessages } from "@/i18n/messages";
import { getLocalizedValue } from "@/utils/resourceNormalizeUtils";
import styles from "./MediaFrame.module.css";

// Utility functions for pausing other videos and unmounting the YouTube player
import { pauseOtherVideos, unmountYouTubePlayer } from "./youtubePlayerUtils";

import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";

export default function MediaFrame(props) {
  return <MediaFrameContent key={`${props.primaryUrl || ""}:${props.videoSrc || ""}`} {...props} />;
}

function MediaFrameContent({
  type = "image",
  imgSrc = "",
  videoSrc = "",
  primaryUrl = "",
  subtitles = {},
  alt = "",
  title = "",
  description = "",
  className = "aspect-video",
  maxSize = "max-w-lg",
  showWheel = false,
  preload = false,
  preloadVideo = false,
  captionLanguage = "en",
}) {
  const [videoError, setVideoError] = useState("");
  const nativeVideoUrl = getLocalizedValue(primaryUrl).trim();
  const isNativeVideo = Boolean(nativeVideoUrl);
  const subtitleLanguage = captionLanguage.startsWith("fr") ? "fr" : "en";
  const mediaMessages = getMessages(subtitleLanguage).MediaFrame;

  const thumbnailSrc =
    imgSrc || (type === "video" && videoSrc ? `https://img.youtube.com/vi/${videoSrc}/hqdefault.jpg` : "");

  const { trackEvent } = useGoogleAnalytics();

  // see if the vide can start being loaded
  const [canStartVidLoad, setCanStartVidLoad] = useState(preloadVideo)

  // laod and playing(if video) state
  const [imgLoaded, setImgLoaded] = useState(thumbnailSrc ? false : true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // video playing state
  const [videoIsPlaying, setvideoIsPlaying] = useState(false)


  // get access to the video player is its active
  const playerRef = useRef(null);
  const nativePlayerRef = useRef(null);
  const shouldPlayWhenReadyRef = useRef(false);

  const [playerReady, setPlayerReady] = useState(false);

  const handleVideoReady = (event) => {
    playerRef.current = event.target;
    setPlayerReady(true);
    setVideoLoaded(true);

    // Mark iframe as ready so shared pause utilities only message initialized players.
    try {
      const iframeEl = event?.target?.getIframe?.();
      if (iframeEl) iframeEl.setAttribute("data-yt-ready", "1");
    } catch (err) {
      // ignore iframe marker failures; they should not block playback
    }

    if (shouldPlayWhenReadyRef.current) {
      shouldPlayWhenReadyRef.current = false;
      myOnPlay();
      event.target.playVideo();
    }
  };


  // function to play the video and pause all other videos
  const myOnPlay = () => {
    setvideoIsPlaying(true);
    setVideoError("");
    pauseOtherVideos(isNativeVideo ? "" : videoSrc, {
      excludeNativeVideo: nativePlayerRef.current,
    });
  }

  const playNativeVideo = () => {
    const player = nativePlayerRef.current;
    if (!player) return;
    shouldPlayWhenReadyRef.current = false;
    player.play().catch((error) => {
      console.error("Native video playback failed:", error);
      setVideoError(mediaMessages.playbackError);
      setvideoIsPlaying(false);
    });
  };

  const handleNativeReady = () => {
    setPlayerReady(true);
    setVideoLoaded(true);
    if (shouldPlayWhenReadyRef.current) playNativeVideo();
  };

  const handleNativeError = () => {
    console.error("Primary video failed to load:", nativeVideoUrl, nativePlayerRef.current?.error);
    shouldPlayWhenReadyRef.current = false;
    setvideoIsPlaying(false);
    setVideoError(mediaMessages.loadError);
  };

  // Play the video from the thumbnail click event
  const playVideo = () => {
    if (type !== "video") return;

    trackEvent("MediaFrame", "Play", `Video Started: ${videoSrc}`);

    if (isNativeVideo && nativePlayerRef.current?.error) {
      setVideoError("");
      shouldPlayWhenReadyRef.current = true;
      nativePlayerRef.current.load();
      return;
    }

    if (!canStartVidLoad) {
      shouldPlayWhenReadyRef.current = true;
      setCanStartVidLoad(true);
      return;
    }

    if (!playerReady || !(isNativeVideo ? nativePlayerRef.current : playerRef.current)) {
      shouldPlayWhenReadyRef.current = true;
      return;
    }

    if (isNativeVideo) {
      playNativeVideo();
      return;
    }

    myOnPlay();
    playerRef.current.playVideo();
  };

  // Pause the video when the component unmounts
  useEffect(() => {
    return () => {
      unmountYouTubePlayer(playerRef);
    };
  }, []);

  const selectNativeSubtitleLanguage = useCallback(() => {
    const player = nativePlayerRef.current;
    if (!player) return;
    for (const track of player.textTracks) {
      track.mode = track.language === subtitleLanguage ? "showing" : "disabled";
    }
  }, [subtitleLanguage]);

  const subtitleTrackRef = useCallback((element) => {
    if (!element) return;
    const formatCues = () => {
      const cues = element.track.cues;
      if (!cues) return;
      // YouTube-exported VTT files pin cues to the left edge; normalize for native playback.
      for (const cue of cues) {
        cue.text = cue.text
          .replace(/<\d{2}:\d{2}(?::\d{2})?\.\d{3}>/g, "")
          .replace(/<\/?c(?:\.[^>]*)?>/g, "")
          .trim();
        cue.align = "center";
        cue.position = 50;
        cue.positionAlign = "center";
        cue.size = 90;
        cue.line = "auto";
        cue.snapToLines = true;
      }
    };
    element.addEventListener("load", formatCues);
    if (element.readyState === 2) formatCues();
    return () => element.removeEventListener("load", formatCues);
  }, []);

  useEffect(() => {
    selectNativeSubtitleLanguage();
  }, [selectNativeSubtitleLanguage, canStartVidLoad, isNativeVideo]);

  // if neither image or video is provided, return null
  if (!thumbnailSrc && !videoSrc && !nativeVideoUrl) {
    return null;
  }

  const shouldShowLoader =
    type === "video"
      ? (canStartVidLoad ? !videoLoaded : !imgLoaded && Boolean(thumbnailSrc))
      : showWheel && !imgLoaded;

  const normalizedCaptionLanguage = ["en", "fr", "fr-ca"].includes(captionLanguage)
    ? captionLanguage
    : "en";

  return (
    <div className={`w-full ${maxSize} mx-auto text-center space-y-2 text-inherit`}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className={`${styles.viewport} relative rounded-lg shadow-lg overflow-hidden small-shadow ${className}`}>

        <PulseLoader
          showWheel={type === "video" ? canStartVidLoad || !thumbnailSrc : showWheel}
          className={`transition-opacity duration-800 pointer-events-none ${shouldShowLoader && !videoError ? "opacity-100" : "opacity-0"
            }`}
        />

        {(type === "image" || (type === "video" && thumbnailSrc)) &&
          <Image
            unoptimized
            src={thumbnailSrc || '/ui-elements/placeholder.jpg'}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            aria-hidden={type === "video" && videoLoaded}
            className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${type === "video" ? "z-10 pointer-events-none" : ""} ${imgLoaded && !(type === "video" && videoLoaded) ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImgLoaded(true)}
            loading={preload ? "eager" : "lazy"}
          />
        }

        {/* Video component */}
        {type === "video" && canStartVidLoad && isNativeVideo && (
          <video
            ref={nativePlayerRef}
            data-media-frame
            src={nativeVideoUrl}
            poster={thumbnailSrc || undefined}
            controls
            playsInline
            crossOrigin="anonymous"
            preload="auto"
            aria-label={title || alt}
            onCanPlay={handleNativeReady}
            onLoadedMetadata={selectNativeSubtitleLanguage}
            onPlay={myOnPlay}
            onError={handleNativeError}
            className={`${styles.nativeVideo} relative h-full w-full bg-black`}
          >
            {["en", "fr"].map((language) => {
              const src = getLocalizedValue(subtitles?.[language]).trim();
              return src ? (
                <track
                  key={`${language}:${src}`}
                  kind="subtitles"
                  src={src}
                  srcLang={language}
                  label={getMessages(language).MediaFrame.subtitleLabel}
                  default={language === subtitleLanguage}
                  ref={subtitleTrackRef}
                  onError={() => {
                    console.error("Video subtitles failed to load:", src);
                    setVideoError(mediaMessages.subtitleError);
                  }}
                />
              ) : null;
            })}
          </video>
        )}

        {type == "video" && canStartVidLoad && !isNativeVideo &&
          // <div className="bg-black">
          <YouTube
            videoId={videoSrc}
            onReady={handleVideoReady}
            loading="lazy"
            iframeClassName="yt-frame"
            onPlay={() => myOnPlay()}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                cc_load_policy: 1,
                hl: normalizedCaptionLanguage === "fr-ca" ? "fr" : normalizedCaptionLanguage,
                cc_lang_pref: normalizedCaptionLanguage,
              },
            }}
            className={`w-full h-full transition-opacity duration-500 motion-reduce:transition-none ${(videoLoaded || !thumbnailSrc) ? "opacity-100" : "opacity-0"
              }`}
          />
        }

        {/* Button over video to trigger playing */}
        {(type == "video" && !videoIsPlaying) &&
          <PlayButton
            videoLoaded={videoLoaded}
            handlePlayClick={playVideo}
            canPlayVideo={playerReady}
            preload={preloadVideo}
          />
        }
      </div>

      {videoError && <p role="alert" className="text-sm text-red-700">{videoError}</p>}
      {description && <div className="text-left pt-1.5">{description}</div>}
    </div>
  )
}