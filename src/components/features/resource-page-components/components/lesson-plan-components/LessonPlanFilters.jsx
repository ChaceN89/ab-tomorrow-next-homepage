/**
 * @file LessonPlanFilter.jsx
 * @module UI/Resources/LessonPlanFilters
 * @desc Displays all lesson plan filter controls (theme, tool, subject, grade, and search).
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Feb 10, 2026
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
          ? `${numResults} Lesson Plan${numResults > 1 ? "s" : ""} found`
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
        showFocusButton // for goin to theme sections- only for this component as others don't have specific sections
        initialOpen
      />

      {/* filter for tools - only one tool at the moment so no need for this */}
      {/* <FilterDropdown
        label="Filter by Tool"
        filterMap={toolFilters}
        setFilterMap={setToolFilters}
      /> */}

      <FilterDropdown
        label="Filter by Subject"
        filterMap={subjectFilters}
        setFilterMap={setSubjectFilters}
        showFocusButton
      />

      <FilterDropdown
        label="Filter by Grade"
        filterMap={gradeFilters}
        setFilterMap={setGradeFilters}
        showFocusButton
        sortAlphabetically
      />
    </div>
  );
}
