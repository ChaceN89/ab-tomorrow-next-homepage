/**
 * @file LessonPlanResourceContext.jsx
 * @module Context/LessonPlans
 * @desc Context for handling lesson plans, filters, and search.
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Apr 13, 2025
 */

"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import {
  formatGradeLabel,
  formatSubjectLabel,
  formatThemeLabel,
  getLocalizedArray,
  getLocalizedLinks,
  getLocalizedValue,
  getSearchTerms,
} from "@/utils/resourceNormalizeUtils";

const LessonPlanContext = createContext();

export function LessonPlanResourceProvider({ children }) {
  const locale = useLocale();

  const [lessonPlans, setLessonPlans] = useState(null);
  const [loadedLocale, setLoadedLocale] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeFilters, setThemeFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [subjectFilters, setSubjectFilters] = useState({});
  const [gradeFilters, setGradeFilters] = useState({});
  const [searchText, setSearchText] = useState("");

  const [numResults, setNumResults] = useState(0);

  const normalizeLessonPlan = useCallback(
    (plan) => {
      const videoIds = Array.isArray(plan.videoIds) ? plan.videoIds : [];

      return {
        ...plan,
        theme: formatThemeLabel(plan.themeId, locale),
        title: getLocalizedValue(plan.title, locale),
        description: getLocalizedValue(plan.description, locale),
        approximateTime: getLocalizedValue(plan.approximateTime, locale),
        files: getLocalizedLinks(plan.files, locale),
        relatedUrls: getLocalizedLinks(plan.relatedResources, locale),
        grades: (plan.gradeIds || []).map((gradeId) => formatGradeLabel(gradeId, locale)),
        subjects: (plan.subjectIds || []).map((subjectId) => formatSubjectLabel(subjectId, locale)),
        tools: getLocalizedArray(plan.tools, locale),
        tags: getSearchTerms(plan.searchTerms, locale),
        learningOutcomes: getLocalizedArray(plan.learningOutcomes, locale),
        videos: videoIds,
      };
    },
    [locale]
  );

  const fetchLessonPlans = useCallback(async () => {
    if (lessonPlans && loadedLocale === locale) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Temp Local JSon until API is created and deployed
      const res = await fetch(`/api-static-data/lessonPlans.json`);


      // API version for when API is created and deployed
      // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/lesson-plans`);


      if (!res.ok) throw new Error("Failed to fetch lesson plans");

      const data = await res.json();
      const normalized = data.map(normalizeLessonPlan);
      setLessonPlans(normalized);
      setLoadedLocale(locale);

      // Initialize filter options
      const themes = [...new Set(normalized.map((l) => l.theme))];
      const tools = [...new Set(normalized.flatMap((l) => l.tools || []))];
      const subjects = [...new Set(normalized.flatMap((l) => l.subjects || []))];
      const grades = [...new Set(normalized.flatMap((l) => l.grades || []))];

      setThemeFilters(themes.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setToolFilters(tools.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setSubjectFilters(subjects.reduce((acc, s) => ({ ...acc, [s]: true }), {}));
      setGradeFilters(grades.reduce((acc, g) => ({ ...acc, [g]: true }), {}));

      setNumResults(normalized.length);
    } catch (err) {
      console.error("❌ Lesson plans fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }, [lessonPlans, loadedLocale, locale, normalizeLessonPlan]);

  useEffect(() => {
    fetchLessonPlans();
  }, [fetchLessonPlans, locale]);

  return (
    <LessonPlanContext.Provider
      value={{
        fetchLessonPlans,
        lessonPlans,
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
        setNumResults,
      }}
    >
      {children}
    </LessonPlanContext.Provider>
  );
}

export function useLessonPlanResource() {
  const ctx = useContext(LessonPlanContext);
  if (!ctx) throw new Error("useLessonPlanResource must be used within LessonPlanResourceProvider");
  return ctx;
}
