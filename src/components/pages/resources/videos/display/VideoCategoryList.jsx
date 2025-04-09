// components/pages/resources/videos/VideoCategoryList.jsx
import React from "react";
import VideoCategory from "./VideoCategory";
import { useVideoResource } from "../VideoResourceContext";

export default function VideoCategoryList() {
  const {
    videos,
    categoryFilters,
    toolFilters,
    titleFilter,
    descFilter,
    hashtagFilter,
    only360,
  } = useVideoResource();

  const grouped = {};

  videos.forEach((v) => {
    const matchesCategory = categoryFilters[v.category];
    const matchesTool = v.tools?.some((t) => toolFilters[t]);
    const matchesTitle = v.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesDesc = v.description.toLowerCase().includes(descFilter.toLowerCase());
    const matchesHashtag = v.hashtags?.toLowerCase().includes(hashtagFilter.toLowerCase());
    const matches360 = only360 ? v.media?.is360 : true;

    if (
      matchesCategory &&
      matchesTool &&
      matchesTitle &&
      matchesDesc &&
      matchesHashtag &&
      matches360
    ) {
      if (!grouped[v.category]) grouped[v.category] = [];
      grouped[v.category].push(v);
    }
  });

  return (
    <div className="p-4 space-y-4">
      {Object.entries(grouped).map(([category, vids]) => (
        <VideoCategory key={category} category={category} videos={vids} />
      ))}
    </div>
  );
}
