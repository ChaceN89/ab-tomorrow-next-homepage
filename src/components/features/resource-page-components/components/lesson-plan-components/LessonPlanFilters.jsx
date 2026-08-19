/**
 * @file LessonPlanFilter.jsx
 * @module UI/Resources/LessonPlanFilters
 * @desc Displays all lesson plan filter controls (theme, tool, subject, grade, and search).
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated July 21 2026 - added translations 
 */

"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLessonPlanResource } from "./LessonPlanResourceContext";
import FilterDropdown from "../FilterDropdown";

export default function LessonPlanFilter() {
  const t = useTranslations("Pages.ResourcesPage");
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
    tagFilters,
    setTagFilters,
    searchText,
    setSearchText,
    hasVideos,
    setHasVideos,
    numResults,
  } = useLessonPlanResource();

  return (
    <div className="flex flex-col py-2 gap-4 w-full">
      <p>
        {loading
          ? "Loading lesson plans..."
          : numResults > 0
            ? `${numResults} ${t("lessonPlansFound")}`
            : "No lesson plans found"}
      </p>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Lesson Plans..."
        className="border px-4 py-2 rounded w-full"
      />

      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasVideos}
            onChange={() => setHasVideos(!hasVideos)}
          />
          <span>Has associated videos</span>
        </label>
      </div>

      <FilterDropdown
        label={t("filters.theme")}
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
        label={t("filters.subject")}
        filterMap={subjectFilters}
        setFilterMap={setSubjectFilters}
        showFocusButton
      />

      <FilterDropdown
        label={t("filters.grade")}
        filterMap={gradeFilters}
        setFilterMap={setGradeFilters}
        showFocusButton
        sortAlphabetically
      />

      <FilterDropdown
        label={t("filters.tags")}
        filterMap={tagFilters}
        setFilterMap={setTagFilters}
        wrapItems
      />
    </div>
  );
}
