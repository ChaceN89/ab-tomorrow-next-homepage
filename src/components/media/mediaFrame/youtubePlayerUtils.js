/**
 * @file youtubePlayerUtils.js
 * @module Utils/YouTubePlayer
 * @desc Utility functions for managing embedded YouTube player behavior across components.
 *
 * @features
 * - Pauses all other YouTube iframes except a target video.
 * - Safely pauses a specific video by ref.
 * - Plays a video with retry logic if the YouTube player is not yet ready.
 *
 * @exports
 * - pauseOtherVideos
 * - pauseThisVideo
 * - playYouTubeVideo
 *
 * @author Chace Nielson
 * @created Apr 12, 2025
 * @updated Apr 12, 2025
 */

export const pauseOtherVideos = (excludeVideoSrc = "") => {
  const allIframes = document.querySelectorAll("iframe.yt-frame");

  allIframes.forEach((iframe) => {
    if (excludeVideoSrc && iframe.src.includes(excludeVideoSrc)) return;

    try {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: [],
        }),
        "*"
      );
    } catch (err) {
      console.warn("🛑 Failed to postMessage to iframe:", err);
    }
  });
};

export function pauseThisVideo(playerRef) {
  if (!playerRef?.current) {
    console.warn("🎬 No player reference found.");
    return;
  }

  const player = playerRef.current;

  if (typeof player.pauseVideo === "function") {
    player.pauseVideo();
  } else {
    console.warn("🎬 Player is not ready to pause video.");
  }
}

export function playYouTubeVideo(playerRef, onPlay = () => {}, retryDelay = 300) {
  if (!playerRef?.current) {
    console.warn("🎬 No player reference found.");
    return;
  }

  const player = playerRef.current;

  const tryPlay = () => {
    if (typeof player.playVideo === "function") {
      onPlay();
      player.playVideo();
    } else {
      console.warn(`🎥 YouTube player not ready yet. Retrying in ${retryDelay}ms...`);
      setTimeout(() => {
        if (typeof player.playVideo === "function") {
          onPlay();
          player.playVideo();
        } else {
          console.error("❌ Failed to play video: player is still not ready.");
        }
      }, retryDelay);
    }
  };

  tryPlay();
}
