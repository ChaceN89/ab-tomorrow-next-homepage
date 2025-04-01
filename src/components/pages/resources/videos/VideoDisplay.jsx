/**
 * @file VideoDisplay.jsx
 * @module UI/Resources/VideoDisplay
 * @desc Fetches and displays video content from the API, grouped by category, with toggle filters.
 *       Filters include category, tool, title, description, hashtags, and 360° video toggle.
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

"use client";

import React, { useEffect, useState } from "react";
import MediaFrame from "@/components/media/MediaFrame";
import { Link, Element } from "react-scroll";

export default function VideoDisplay() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categoryFilters, setCategoryFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});

  const [titleFilter, setTitleFilter] = useState("");
  const [descFilter, setDescFilter] = useState("");
  const [hashtagFilter, setHashtagFilter] = useState("");
  const [only360, setOnly360] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos`
        );

        console.log("📺 Fetching videos from API...");
        if (!res.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await res.json();
        setVideos(data);

        // Init filter states
        const categories = [...new Set(data.map((v) => v.category))];
        const tools = [...new Set(data.flatMap((v) => v.tools || []))];

        setCategoryFilters(
          categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
        );
        setToolFilters(
          tools.reduce((acc, tool) => ({ ...acc, [tool]: true }), {})
        );
      } catch (error) {
        console.error("❌ Failed to load videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const groupedVideos = groupVideosByCategory(videos);

  if (loading) return <div>Loading videos...</div>;

  return (
    <div className="space-y-12">
      {/* === Filters === */}
      <div className="flex flex-col gap-6 mb-8">
        <p>Total Videos: {videos.length}</p>

        {/* Category Toggles */}
        <div>
          <h3 className="font-semibold mb-2">Filter by Category:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(categoryFilters).map((category) => (
              <div key={category} className="flex items-center gap-2">
                <button
                  className={`px-4 py-1 rounded-full border ${
                    categoryFilters[category]
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={() =>
                    setCategoryFilters((prev) => ({
                      ...prev,
                      [category]: !prev[category],
                    }))
                  }
                >
                  {category}
                </button>
                <Link
                  to={category}
                  smooth
                  offset={-100}
                  duration={500}
                  className="text-sm text-blue-600 underline cursor-pointer"
                >
                  Go to
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* Tool Toggles */}
        <div>
          <h3 className="font-semibold mb-2">Filter by Tool:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(toolFilters).map((tool) => (
              <button
                key={tool}
                className={`px-4 py-1 rounded-full border ${
                  toolFilters[tool]
                    ? "bg-secondary text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() =>
                  setToolFilters((prev) => ({
                    ...prev,
                    [tool]: !prev[tool],
                  }))
                }
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Text Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
            placeholder="Search title"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            value={descFilter}
            onChange={(e) => setDescFilter(e.target.value)}
            placeholder="Search description"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            value={hashtagFilter}
            onChange={(e) => setHashtagFilter(e.target.value)}
            placeholder="Search hashtags"
            className="border px-4 py-2 rounded"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={only360}
              onChange={() => setOnly360(!only360)}
            />
            <span>360° only</span>
          </label>
        </div>
      </div>

      {/* === Display Videos === */}
      {Object.keys(groupedVideos)
        .filter((category) => categoryFilters[category])
        .map((category) => {
          const vids = groupedVideos[category].filter((v) => {
            const matchesTool = v.tools?.some((t) => toolFilters[t]);
            const matchesTitle = v.title
              .toLowerCase()
              .includes(titleFilter.toLowerCase());
            const matchesDesc = v.description
              .toLowerCase()
              .includes(descFilter.toLowerCase());
            const matchesHashtag = v.hashtags
              ?.toLowerCase()
              .includes(hashtagFilter.toLowerCase());
            const matches360 = only360 ? v.media?.is360 : true;

            return (
              matchesTool &&
              matchesTitle &&
              matchesDesc &&
              matchesHashtag &&
              matches360
            );
          });

          if (vids.length === 0) return null;

          return (
            <Element
                name={category}
                key={category}
                className="space-y-6 bg-tertiary-alt/20 p-4 rounded-3xl"
              >
                <h2 className="text-2xl font-bold border-b border-black pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vids.map((video) => (
                    <MediaFrame
                      key={video.id}
                      type="video"
                      src={extractYouTubeId(video.media.url)}
                      title={video.title}
                      description={video.description}
                      className="h-80"
                    />
                  ))}
                </div>
              </Element>
          
          );
        })}
    </div>
  );
}

// === Utilities ===
function extractYouTubeId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

function groupVideosByCategory(videos) {
  return videos.reduce((acc, video) => {
    const category = video.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(video);
    return acc;
  }, {});
}
