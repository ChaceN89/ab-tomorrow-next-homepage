// components/pages/resources/videos/VideoCategoryList.jsx
import React, { useEffect, useMemo, useRef } from "react";
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
    hasEnglishSubtitles,
    hasFrenchSubtitles,
    setNumResults,
  } = useVideoResource();

  // lowercase the seach text to better match
  const lowerSearch = searchText.toLowerCase();

  const grouped = useMemo(() => {
    const nextGrouped = {};
    const hasActiveCategoryFilter = Object.values(categoryFilters).some(Boolean);
    const hasActiveToolFilter = Object.values(toolFilters).some(Boolean);
    const selectedTags = Object.keys(tagFilters).filter((tag) => tagFilters[tag]);

    videos.forEach((v) => {
      const matchesCategory = !hasActiveCategoryFilter || categoryFilters[v.category];
      const matchesTool =
        !hasActiveToolFilter ||
        !v.tools?.length ||
        v.tools.some((t) => toolFilters[t]);
      const matches360 = only360 ? v.media?.is360 : true;
      const matchesHasLessonPlans = hasLessonPlans ? (v.lessonPlans?.length || 0) > 0 : true;
      const matchesEnglishSubtitles = hasEnglishSubtitles
        ? (v.availableSubtitleLanguages || []).includes("en")
        : true;
      const matchesFrenchSubtitles = hasFrenchSubtitles
        ? (v.availableSubtitleLanguages || []).includes("fr")
        : true;
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
        matchesEnglishSubtitles &&
        matchesFrenchSubtitles &&
        matchesTag
      ) {
        if (!nextGrouped[v.category]) nextGrouped[v.category] = [];
        nextGrouped[v.category].push(v);
      }
    });

    return nextGrouped;
  }, [
    categoryFilters,
    hasEnglishSubtitles,
    hasFrenchSubtitles,
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
  const previousTotalResultsRef = useRef(null);

  useEffect(() => {
    setNumResults(totalResults);

    const previousTotalResults = previousTotalResultsRef.current;
    previousTotalResultsRef.current = totalResults;

    if (totalResults === 0 || (previousTotalResults > 1 && totalResults === 1)) {
      const container = document.getElementById("resources-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [setNumResults, totalResults]);

  return (
    <div className="relative space-y-4 pt-4 pb-4">
      {Object.keys(grouped).length === 0 && (
        <div className="text-center  h-[40vh] flex items-center justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">No Results Found</h2>
            <div className="text-2xl"> No videos found. Try adjusting the filters.</div>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([category, vids]) => (
        <VideoCategory
          key={category}
          category={category}
          videos={vids}
        />
      ))}
    </div>
  );
}
