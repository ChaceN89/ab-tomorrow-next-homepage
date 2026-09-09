// components/pages/resources/videos/VideoCategoryList.jsx
import React, { useEffect, useMemo } from "react";
import VideoCategory from "./VideoCategory";
import { useVideoResource } from "../VideoResourceContext";

export default function VideoCategoryList() {
  const {
    videos,
    categoryFilters,
    toolFilters,
    tagFilters,
    searchText,
    only360,
    hasLessonPlans,
    hasFrench,
    setNumResults,
  } = useVideoResource();

  // lowercase the seach text to better match
  const lowerSearch = searchText.toLowerCase();

  const grouped = useMemo(() => {
    const nextGrouped = {};
    const selectedTags = Object.keys(tagFilters).filter((tag) => tagFilters[tag]);

    videos.forEach((v) => {
      const matchesCategory = categoryFilters[v.category];
      const matchesTool =
        !Object.keys(toolFilters).length ||
        !v.tools?.length ||
        v.tools.some((t) => toolFilters[t]);
      const matches360 = only360 ? v.media?.is360 : true;
      const matchesHasLessonPlans = hasLessonPlans ? (v.lessonPlans?.length || 0) > 0 : true;
      const matchesFrench = hasFrench ? (v.availableLanguages || []).includes("fr") : true;
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => (v.hashtags || []).includes(tag));

      const matchesSearch =
        (v.title || "").toLowerCase().includes(lowerSearch) ||
        (v.description || "").toLowerCase().includes(lowerSearch) ||
        v.hashtags?.some((tag) => tag.toLowerCase().includes(lowerSearch));

      if (
        matchesCategory &&
        matchesTool &&
        matchesSearch &&
        matches360 &&
        matchesHasLessonPlans &&
        matchesFrench &&
        matchesTag
      ) {
        if (!nextGrouped[v.category]) nextGrouped[v.category] = [];
        nextGrouped[v.category].push(v);
      }
    });

    return nextGrouped;
  }, [
    categoryFilters,
    hasFrench,
    hasLessonPlans,
    lowerSearch,
    only360,
    tagFilters,
    toolFilters,
    videos,
  ]);

  const totalResults = useMemo(
    () => Object.values(grouped).reduce((acc, arr) => acc + arr.length, 0),
    [grouped]
  );

  // update the number of results from interanall search
  useEffect(() => {
    setNumResults(totalResults);

    if (totalResults === 0) {
      const container = document.getElementById("resources-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth" });
      }
    }

  }, [setNumResults, totalResults]);

  return (
    <div className="py-4 space-y-4 mb-4 relative">
      {Object.keys(grouped).length === 0 && (
        <div className="text-center  h-[40vh] flex items-center justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">No Results Found</h2>
            <div className="text-2xl"> No videos found. Try adjusting the filters.</div>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([category, vids]) => (
        <VideoCategory key={category} category={category} videos={vids} />
      ))}
    </div>
  );
}
