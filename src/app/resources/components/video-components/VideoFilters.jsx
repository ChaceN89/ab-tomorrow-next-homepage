/**
 * @file VideoFilters.jsx
 * @module UI/Resources/VideoFilters
 * @desc Displays all video filter controls (category, tool, text, and 360° toggle).
 */

"use client";

import React from "react";
import { useVideoResource } from "./VideoResourceContext";
import FilterDropdown from "../FilterDropdown";

export default function VideoFilters() {
  const {
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
    numResults
  } = useVideoResource();

  return (
    <div className="flex flex-col py-4 gap-4 w-full">
      <p>
        {loading
          ? "Loading videos..."
          : numResults > 0
          ? `${numResults} Video${numResults > 1 ? "s" : ""}`
          : "No videos found"}
      </p>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Videos..."
        className="border px-4 py-2 rounded w-full"
      />


      <div className="flex flex-wrap gap-4">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={only360}
            onChange={() => setOnly360(!only360)}
            />
          <span>360° only</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasLessonPlans}
            onChange={() => setHasLessonPlans(!hasLessonPlans)}
            />
          <span>With Lesson Plans</span>
        </label>
      </div>

      <FilterDropdown
        label="Filter by Category"
        filterMap={categoryFilters}
        setFilterMap={setCategoryFilters}
        showScrollLinks={true}
      />

      <FilterDropdown
        label="Filter by Tool"
        filterMap={toolFilters}
        setFilterMap={setToolFilters}
      />
    </div>
  );
}
