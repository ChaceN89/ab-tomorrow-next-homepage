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
