/**
 * @file MediaFrame.jsx
 * @module UI/Media
 * @desc A reusable media component for displaying either YouTube videos or static images with optional titles, descriptions, loading states, and custom thumbnail overlays.
 *
 * @features
 * - Displays YouTube video embeds with customizable options.
 * - Supports optional image fallback for non-video content.
 * - Shows a loading animation (PulseLoader) until content is fully loaded.
 * - If a `thumbUrl` is provided, it shows a thumbnail overlay with a custom play button before playing the video.
 * - Uses `react-youtube` and `next/image` for optimized media handling.
 * - Fully responsive with Tailwind utility classes and animation support.
 *
 * @props
 * @param {string} src - YouTube video ID or image path.
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
import React, { useEffect, useRef, useState } from "react";
import PulseLoader from "@/components/common/PulseLoader";
import Image from "next/image";
import YouTube from 'react-youtube';
import { useInView } from "react-intersection-observer";
import PlayButton from "./PlayButton";

// Utility functions for pausing other videos and unmounting the YouTube player
import { pauseOtherVideos, unmountYouTubePlayer } from "./youtubePlayerUtils";

import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";

export default function MediaFrame({
  type = "image",
  imgSrc = "",
  videoSrc = "",
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

  const thumbnailSrc =
    imgSrc || (type === "video" && videoSrc ? `https://img.youtube.com/vi/${videoSrc}/hqdefault.jpg` : "");

  const { ref, inView } = useInView({
    triggerOnce: true,     // only trigger once
    threshold: 0.2,        // 20% of the component must be visible
    rootMargin: "300px 0px", // begin loading shortly before entering viewport
  });

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
  const shouldPlayWhenReadyRef = useRef(false);

  const [playerReady, setPlayerReady] = useState(false);

  const handleVideoReady = (event) => {
    playerRef.current = event.target;
    setPlayerReady(true);
    setVideoLoaded(true);

    if (shouldPlayWhenReadyRef.current) {
      shouldPlayWhenReadyRef.current = false;
      myOnPlay();
      event.target.playVideo();
    }
  };


  // function to play the video and pause all other videos
  const myOnPlay = () => {
    setvideoIsPlaying(true);
    pauseOtherVideos(videoSrc);
  }

  // Play the video from the thumbnail click event
  const playVideo = () => {
    if (type !== "video") return;

    trackEvent("MediaFrame", "Play", `Video Started: ${videoSrc}`);

    if (!canStartVidLoad) {
      shouldPlayWhenReadyRef.current = true;
      setCanStartVidLoad(true);
      return;
    }

    if (!playerReady || !playerRef.current) {
      shouldPlayWhenReadyRef.current = true;
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

  // if neither image or video is provided, return null
  if (!thumbnailSrc && !videoSrc) {
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

      <div ref={ref} className={`relative rounded-lg shadow-lg overflow-hidden small-shadow ${className}`}>

        {(inView || preload || preloadVideo) && (<>

          <PulseLoader
            showWheel={type === "video" ? canStartVidLoad || !thumbnailSrc : showWheel}
            className={`transition-opacity duration-800 pointer-events-none ${shouldShowLoader ? "opacity-100" : "opacity-0"
              }`}
          />

          {/* Load img if image or load it as thumnail if video is the type */}
          {(
            type == "image" ||  // if an image 
            (type == "video" && thumbnailSrc &&  // or its a video with a thumbnail
              (!videoLoaded || !videoIsPlaying) // and if its a video with a thumbn ail its either not loaded or not playing
            )
          ) &&
            <Image
              unoptimized
              src={thumbnailSrc || '/ui-elements/placeholder.jpg'}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"
                }`}
              onLoad={() => setImgLoaded(true)}
              loading={preload ? "eager" : "lazy"}
            />
          }

          {/* Video component */}
          {type == "video" && canStartVidLoad &&
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
              className={`w-full h-full transition duration-200 ${(videoIsPlaying || !thumbnailSrc) ? "opacity-100" : "opacity-0" // if video is playing or no thumbnail show it
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
        </>)}
      </div>

      {description && <div className="text-left pt-1.5">{description}</div>}
    </div>
  )
}