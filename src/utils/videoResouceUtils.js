import { getLocalizedValue } from "./resourceNormalizeUtils.js";

export function normalizeVideoMedia(video) {
  const media = video?.media || {};
  const youtubeUrl = getLocalizedValue(media.youtubeUrl) || getLocalizedValue(media.url);

  return {
    type: media.type || "youtube",
    primaryUrl: getLocalizedValue(media.primaryUrl).trim(),
    youtubeUrl,
    // Keep the existing YouTube URL field for cards, thumbnails and external links.
    url: youtubeUrl,
    thumbnailUrl: getLocalizedValue(media.thumbnailUrl) || getLocalizedValue(media.thumbUrl),
    is360: Boolean(media.is360),
  };
}

export function extractYouTubeId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

export function groupVideosByCategory(videos) {
  return videos.reduce((acc, video) => {
    const category = video.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(video);
    return acc;
  }, {});
}
