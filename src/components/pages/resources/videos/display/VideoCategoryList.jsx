// components/pages/resources/videos/VideoCategoryList.jsx
import React, { useEffect } from "react";
import VideoCategory from "./VideoCategory";
import { useVideoResource } from "../VideoResourceContext";

export default function VideoCategoryList() {
  const {
    videos,
    categoryFilters,
    toolFilters,
    searchText,
    only360,
    setNumResults,
  } = useVideoResource();

  // grouped objects for display
  const grouped = {};

  // lowercase the seach text to better match
  const lowerSearch = searchText.toLowerCase();

  videos.forEach((v) => {
    const matchesCategory = categoryFilters[v.category];
    const matchesTool = v.tools?.some((t) => toolFilters[t]);
    const matches360 = only360 ? v.media?.is360 : true;

    const matchesSearch =
      v.title.toLowerCase().includes(lowerSearch) ||
      v.description.toLowerCase().includes(lowerSearch) ||
      v.hashtags?.some((tag) => tag.toLowerCase().includes(lowerSearch));

    if (matchesCategory && matchesTool && matchesSearch && matches360) {
      if (!grouped[v.category]) grouped[v.category] = [];
      grouped[v.category].push(v);
    }
  });

  // update the number of results from interanall search
  useEffect(() => {
    const total = Object.values(grouped).reduce((acc, arr) => acc + arr.length, 0);
    setNumResults(total);
  }, [grouped]);

  return (
    <div className="py-4 space-y-4 mb-4">
      {Object.entries(grouped).map(([category, vids]) => (
        <VideoCategory key={category} category={category} videos={vids} />
      ))}
    </div>
  );
}
