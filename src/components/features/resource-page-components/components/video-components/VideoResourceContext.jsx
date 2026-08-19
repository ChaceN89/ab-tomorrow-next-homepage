
/**
 * @file VideoResourceContext.jsx
 * @module Context/VideoResources
 * @desc Context for handling videos, filtering, and search.
*/
"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { useLocale } from "next-intl";
import {
  formatCategoryLabel,
  getLocalizedValue,
  getSearchTerms,
} from "@/utils/resourceNormalizeUtils";
const VideoContext = createContext();

export function VideoResourceProvider({ children }) {
  const locale = useLocale();

  // videos and the loading state
  const [videos, setVideos] = useState(null);
  const [loadedLocale, setLoadedLocale] = useState(null);
  const [loading, setLoading] = useState(true);

  // Filters for categories,tools, seach text, and toogle for 360 videos
  const [categoryFilters, setCategoryFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [searchText, setSearchText] = useState("");
  const [only360, setOnly360] = useState(false);
  const [hasLessonPlans, setHasLessonPlans] = useState(false);

  const [numResults, setNumResults] = useState(0);

  const normalizeVideo = useCallback((video, lessonPlanMap) => {
    const lessonPlanIds = Array.isArray(video.lessonPlanIds) ? video.lessonPlanIds : [];

    return {
      id: video.id,
      category: formatCategoryLabel(video.categoryId, locale),
      title: getLocalizedValue(video.title, locale),
      description: getLocalizedValue(video.description, locale),
      hashtags: getSearchTerms(video.searchTerms, locale),
      tools: [],
      media: {
        type: video.media?.type || "youtube",
        url: video.media?.url || "",
        thumbnailUrl: video.media?.thumbnailUrl || video.media?.thumbUrl || "",
        is360: Boolean(video.media?.is360),
      },
      lessonPlans: lessonPlanIds
        .map((lessonPlanId) => {
          const plan = lessonPlanMap.get(lessonPlanId);

          return {
            title:
              getLocalizedValue(plan?.title, locale) ||
              (locale === "fr" ? "Plan de lecon" : "Lesson Plan"),
            link: `/${locale}/resources/lesson-plans?lesson-plan=${lessonPlanId}`,
          };
        })
        .filter((plan) => Boolean(plan.link)),
      lessonPlanIds,
    };
  }, [locale]);

  // Fetches videos from the API
  const fetchVideos = useCallback(async () => {
    if (videos && loadedLocale === locale) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {

      // Temp Local Json until API is created and deployed
      const res = await fetch('/api-static-data/videos.json');
      const lessonPlansRes = await fetch('/api-static-data/lessonPlans.json');

      // API version for when API is created and deployed
      // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos`);

      if (!res.ok) throw new Error('Failed to fetch videos');
      if (!lessonPlansRes.ok) throw new Error('Failed to fetch lesson plans');

      const data = await res.json();
      const lessonPlans = await lessonPlansRes.json();
      const lessonPlanMap = new Map(lessonPlans.map((plan) => [plan.id, plan]));

      const normalized = data.map((video) => normalizeVideo(video, lessonPlanMap));
      setVideos(normalized);
      setLoadedLocale(locale);

      // Init filter states
      const categories = [...new Set(normalized.map((v) => v.category))];
      const tools = [...new Set(normalized.flatMap((v) => v.tools || []))];

      setCategoryFilters(categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {}));
      setToolFilters(tools.reduce((acc, tool) => ({ ...acc, [tool]: true }), {}));

      // Set the number of results
      setNumResults(normalized.length);

    } catch (err) {
      console.error("❌ Video fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }, [loadedLocale, locale, normalizeVideo, videos]);

  return (
    <VideoContext.Provider
      value={{
        fetchVideos,
        videos,
        loading,
        categoryFilters,
        setCategoryFilters,
        toolFilters,
        setToolFilters,
        searchText,
        setSearchText,
        only360,
        setOnly360,
        hasLessonPlans,
        setHasLessonPlans,
        numResults,
        setNumResults
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideoResource() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideoResource must be inside VideoResourceProvider");
  return ctx;
}
