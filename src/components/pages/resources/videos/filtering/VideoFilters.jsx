/**
 * @file VideoFilters.jsx
 * @module UI/Resources/VideoFilters
 * @desc Displays all video filter controls (category, tool, text, and 360° toggle).
 */

"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";
import FilterByCategory from "./FilterByCategory";
import FilterByTool from "./FilterByTool";
import FilterByText from "./FilterByText";

export default function VideoFilters() {
  const {
    videos,
    only360,
    setOnly360,
  } = useVideoResource();

  return (
    <div className="flex flex-col gap-6 mb-8">
      <p>Total Videos: {videos?.length || 0}</p>
      <FilterByCategory />
      <FilterByTool />
      <FilterByText />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={only360}
          onChange={() => setOnly360(!only360)}
        />
        <span>360° only</span>
      </label>
    </div>
  );
}
