/**
 * @file LessonThemeList.jsx
 * @module UI/Resources/LessonThemeList
 * @desc Groups and renders lesson plans by theme, similar to video category grouping.
 */

"use client";

import React, { useEffect } from "react";
import { useLessonPlanResource } from "../LessonPlanResourceContext";
import LessonPlanTheme from "./LessonPlanTheme";

export default function LessonThemeList() {
  const {
    lessonPlans,
    themeFilters,
    toolFilters,
    subjectFilters,
    gradeFilters,
    searchText,
    setNumResults,
  } = useLessonPlanResource();

  const grouped = {};
  const lowerSearch = searchText.toLowerCase();

  lessonPlans?.forEach((lp) => {
    const matchesTheme = themeFilters[lp.theme];
    const matchesTool = lp.tools?.some((t) => toolFilters[t]);
    const matchesSubject = lp.subjects?.some((s) => subjectFilters[s]);
    const matchesGrade = lp.grades?.some((g) => gradeFilters[g]);

    const matchesSearch =
      lp.title.toLowerCase().includes(lowerSearch) ||
      lp.description?.toLowerCase().includes(lowerSearch) ||
      lp.tags?.some((tag) => tag.toLowerCase().includes(lowerSearch));

    if (matchesTheme && matchesTool && matchesSubject && matchesGrade && matchesSearch) {
      if (!grouped[lp.theme]) grouped[lp.theme] = [];
      grouped[lp.theme].push(lp);
    }
  });

  useEffect(() => {
    const total = Object.values(grouped).reduce((acc, arr) => acc + arr.length, 0);
    setNumResults(total);

    if (total === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [grouped]);

  return (
    <div className="py-4 space-y-4 mb-4 relative">
      {Object.keys(grouped).length === 0 && (
        <div className="text-center h-[40vh] flex items-center justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">No Results Found</h2>
            <div className="text-2xl">No lesson plans found. Try adjusting the filters.</div>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([theme, plans]) => (
        <LessonPlanTheme key={theme} theme={theme} lessonPlans={plans} />
      ))}
    </div>
  );
}
