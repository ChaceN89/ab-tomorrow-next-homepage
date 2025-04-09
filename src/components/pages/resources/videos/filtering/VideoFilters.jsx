/**
 * @file VideoFilters.jsx
 * @module UI/Resources/VideoFilters
 * @desc Displays all video filter controls (category, tool, text, and 360° toggle).
 */

"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";
import { Link } from "react-scroll";

export default function VideoFilters() {
  const {
    videos,
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
  } = useVideoResource();

  return (
    <div className="flex flex-col gap-6 mb-8">
      <p>Total Videos: {videos?.length || 0}</p>

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
  );
}
