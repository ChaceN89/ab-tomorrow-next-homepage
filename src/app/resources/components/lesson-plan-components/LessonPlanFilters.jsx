/**
 * @file LessonPlanFilter.jsx
 * @module UI/Resources/LessonPlanFilters
 * @desc Displays all lesson plan filter controls (theme, tool, subject, grade, and search).
 */

"use client";

import React from "react";
import { useLessonPlanResource } from "./LessonPlanResourceContext";
import FilterDropdown from "../FilterDropdown";

export default function LessonPlanFilter() {
  const {
    loading,
    themeFilters,
    setThemeFilters,
    toolFilters,
    setToolFilters,
    subjectFilters,
    setSubjectFilters,
    gradeFilters,
    setGradeFilters,
    searchText,
    setSearchText,
    numResults,
  } = useLessonPlanResource();

  return (
    <div className="flex flex-col py-2 gap-4 w-full">
      <p>
        {loading
          ? "Loading lesson plans..."
          : numResults > 0
          ? `${numResults} Lesson Plan${numResults > 1 ? "s" : ""}`
          : "No lesson plans found"}
      </p>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Lesson Plans..."
        className="border px-4 py-2 rounded w-full"
      />

      <FilterDropdown
        label="Filter by Theme"
        filterMap={themeFilters}
        setFilterMap={setThemeFilters}
        showScrollLinks
        showFocusButton
      />

      <FilterDropdown
        label="Filter by Tool"
        filterMap={toolFilters}
        setFilterMap={setToolFilters}
      />

      <FilterDropdown
        label="Filter by Subject"
        filterMap={subjectFilters}
        setFilterMap={setSubjectFilters}
      />

      <FilterDropdown
        label="Filter by Grade"
        filterMap={gradeFilters}
        setFilterMap={setGradeFilters}
      />
    </div>
  );
}
