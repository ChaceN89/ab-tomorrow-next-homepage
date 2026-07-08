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

export const pauseOtherVideos = (excludeVideoSrc = "", { maxRetries = 1, retryDelay = 200 } = {}) => {
  // Only target iframes that have been marked ready by `MediaFrame`'s onReady handler
  const allIframes = document.querySelectorAll('iframe.yt-frame[data-yt-ready="1"]');

  const sendPause = (iframe, attemptsLeft) => {
    if (!iframe || !iframe.src) return;

    // skip if this iframe matches the excluded video src
    if (excludeVideoSrc && iframe.src.includes(excludeVideoSrc)) return;

    // Only target iframes that have JS API enabled
    try {
      const srcUrl = new URL(iframe.src, window.location.href);
      if (!srcUrl.searchParams.get("enablejsapi")) return;

      const msg = JSON.stringify({ event: "command", func: "pauseVideo", args: [] });

      // prefer posting to the iframe origin when possible
      const targetOrigin = srcUrl.origin || "*";

      if (iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage(msg, targetOrigin);
        } catch (err) {
          if (attemptsLeft > 0) {
            setTimeout(() => sendPause(iframe, attemptsLeft - 1), retryDelay);
          } else {
            // last resort: try with wildcard origin
            try {
              iframe.contentWindow.postMessage(msg, "*");
            } catch (err2) {
              console.warn("🛑 Failed to postMessage to iframe after retries:", err2);
            }
          }
        }
      } else if (attemptsLeft > 0) {
        setTimeout(() => sendPause(iframe, attemptsLeft - 1), retryDelay);
      }
    } catch (err) {
      // If parsing the URL failed, skip this iframe
      if (attemptsLeft > 0) {
        setTimeout(() => sendPause(iframe, attemptsLeft - 1), retryDelay);
      }
    }
  };

  allIframes.forEach((iframe) => sendPause(iframe, maxRetries));
};

export function unmountYouTubePlayer(playerRef) {
  if (!playerRef?.current) return;

  try {
    // remove ready marker from underlying iframe if present
    try {
      const iframeEl = playerRef.current.getIframe?.();
      if (iframeEl) iframeEl.removeAttribute("data-yt-ready");
    } catch (err) {
      // ignore
    }
    // Stop playback
    playerRef.current.stopVideo?.();   // Preferred: stops and resets
    playerRef.current.pauseVideo?.();  // Backup: just pause
    playerRef.current.destroy?.();     // ✅ Fully removes the iframe
  } catch (err) {
    console.warn("🎬 Failed to destroy YouTube player on unmount:", err);
  }

  // Ensure the ref is cleared
  playerRef.current = null;
}
