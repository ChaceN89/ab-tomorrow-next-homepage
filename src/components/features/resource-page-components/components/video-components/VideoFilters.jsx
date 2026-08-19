/**
 * @file VideoFilters.jsx
 * @module UI/Resources/VideoFilters
 * @desc Displays all video filter controls (category, tool, text, and 360° toggle).
 * @updated July 21 2026 - added translations 
 
*/

"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useVideoResource } from "./VideoResourceContext";
import FilterDropdown from "../FilterDropdown";

export default function VideoFilters() {
  const t = useTranslations("Pages.ResourcesPage");
  const {
    loading,
    categoryFilters,
    setCategoryFilters,
    toolFilters,
    setToolFilters,
    tagFilters,
    setTagFilters,
    searchText,
    setSearchText,
    only360,
    setOnly360,
    hasLessonPlans,
    setHasLessonPlans,
    hasFrench,
    setHasFrench,
    numResults
  } = useVideoResource();

  return (
    <div className="flex flex-col py-2 gap-4 w-full">
      <p>
        {loading
          ? t("loadingVideos")
          : numResults > 0
            ? `${numResults} ${t("videosFound")}`
            : t("noVideosFound")}
      </p>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={t("searchVideosPlaceholder")}
        className="border px-4 py-2 rounded w-full"
      />


      <div className="flex flex-wrap gap-4">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={only360}
            onChange={() => setOnly360(!only360)}
          />
          <span>{t("filters.only360")}</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasLessonPlans}
            onChange={() => setHasLessonPlans(!hasLessonPlans)}
          />
          <span>{t("filters.hasLessonPlans")}</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasFrench}
            onChange={() => setHasFrench(!hasFrench)}
          />
          <span>{t("filters.frenchAvailable")}</span>
        </label>
      </div>

      <FilterDropdown
        label={t("filters.category")}
        filterMap={categoryFilters}
        setFilterMap={setCategoryFilters}
        showScrollLinks
        showFocusButton
        initialOpen
      />

      <FilterDropdown
        label={t("filters.tags")}
        filterMap={tagFilters}
        setFilterMap={setTagFilters}
        wrapItems
      />

      {/* <FilterDropdown
        label={t("filters.tool")}
        filterMap={toolFilters}
        setFilterMap={setToolFilters}
      /> */}
    </div>
  );
}
