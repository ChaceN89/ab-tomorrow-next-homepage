/**
 * @file VideoFilters.jsx
 * @module UI/Resources/VideoFilters
 * @desc Displays all video filter controls (category, tool, text, and 360° toggle).
 */

"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";
import FilterByText from "./FilterByText";
import FilterDropdown from "./FilterDropdown";

export default function VideoFilters() {
  const {
    videos,
    categoryFilters,
    setCategoryFilters,
    toolFilters,
    setToolFilters,
    only360,
    setOnly360,
  } = useVideoResource();

  return (
    <div className="flex flex-col  py-4 px-2 gap-4 w-full">
      <p>Total Videos: {videos?.length || 0}</p>

      <FilterByText />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={only360}
          onChange={() => setOnly360(!only360)}
        />
        <span>360° only</span>
      </label>

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
