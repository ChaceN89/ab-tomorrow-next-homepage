"use client";

/**
 * @file VideoResourceContext.jsx
 * @module Context/VideoResources
 * @desc Context for handling videos, filtering, and search.
 */

import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

export function VideoResourceProvider({ children }) {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  // Filters
  const [categoryFilters, setCategoryFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [titleFilter, setTitleFilter] = useState("");
  const [descFilter, setDescFilter] = useState("");
  const [hashtagFilter, setHashtagFilter] = useState("");
  const [only360, setOnly360] = useState(false);

  const fetchVideos = async () => {
    if (videos) return;
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
    } catch (err) {
      console.error("❌ Video fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videos,
        loading,
        categoryFilters,
        setCategoryFilters,
        toolFilters,
        setToolFilters,
        titleFilter,
        setTitleFilter,
        descFilter,
        setDescFilter,
        hashtagFilter,
        setHashtagFilter,
        only360,
        setOnly360,
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
