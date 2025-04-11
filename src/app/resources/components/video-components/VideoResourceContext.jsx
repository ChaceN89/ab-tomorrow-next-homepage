
/**
 * @file VideoResourceContext.jsx
 * @module Context/VideoResources
 * @desc Context for handling videos, filtering, and search.
*/
"use client";
import { createContext, useContext, useEffect, useState } from "react";
const VideoContext = createContext();

export function VideoResourceProvider({ children }) {

  // videos and the loading state
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  // Filters for categories,tools, seach text, and toogle for 360 videos
  const [categoryFilters, setCategoryFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [searchText, setSearchText] = useState("");
  const [only360, setOnly360] = useState(false);
  const [hasLessonPlans, setHasLessonPlans] = useState(false);

  const [numResults, setNumResults] = useState(0)

  // Fetches videos from the API
  const fetchVideos = async () => {
    if (videos) {
      setLoading(false);
      return
    };
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos`);
      const data = await res.json();
      setVideos(data);

      // Init filter states
      const categories = [...new Set(data.map((v) => v.category))];
      const tools = [...new Set(data.flatMap((v) => v.tools || []))];

      setCategoryFilters(categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {}));
      setToolFilters(tools.reduce((acc, tool) => ({ ...acc, [tool]: true }), {}));

      // Set the number of results
      setNumResults(data.length);

    } catch (err) {
      console.error("❌ Video fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

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
