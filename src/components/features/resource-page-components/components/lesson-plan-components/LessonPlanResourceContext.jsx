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

import { createContext, useCallback, useContext, useState } from "react";
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

function isMeaningfulString(value) {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized !== "" && normalized !== "n/a" && normalized !== "na";
}

function hasMeaningfulLocaleValue(value) {
  if (value == null) return false;

  if (typeof value === "string") return isMeaningfulString(value);

  if (Array.isArray(value)) {
    return value.some((item) => hasMeaningfulLocaleValue(item));
  }

  if (typeof value === "object") {
    return Object.values(value).some((item) => hasMeaningfulLocaleValue(item));
  }

  return false;
}

function detectLessonPlanLanguages(plan) {
  const localeFields = [
    plan.title,
    plan.description,
    plan.approximateTime,
    plan.files,
    plan.relatedResources,
    plan.searchTerms,
    plan.learningOutcomes,
  ];

  const hasEnglish = localeFields.some((field) => {
    if (!field || typeof field !== "object" || Array.isArray(field)) return false;
    return hasMeaningfulLocaleValue(field.en);
  });

  const hasFrench = localeFields.some((field) => {
    if (!field || typeof field !== "object" || Array.isArray(field)) return false;
    return hasMeaningfulLocaleValue(field.fr);
  });

  return {
    hasEnglish,
    hasFrench,
  };
}

export function LessonPlanResourceProvider({ children }) {
  const locale = useLocale();

  const [lessonPlans, setLessonPlans] = useState(null);
  const [loadedLocale, setLoadedLocale] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeFilters, setThemeFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [subjectFilters, setSubjectFilters] = useState({});
  const [gradeFilters, setGradeFilters] = useState({});
  const [tagFilters, setTagFilters] = useState({});
  const [searchText, setSearchText] = useState("");
  const [hasVideos, setHasVideos] = useState(false);

  const [numResults, setNumResults] = useState(0);

  const normalizeLessonPlan = useCallback(
    (plan) => {
      const videoIds = Array.isArray(plan.videoIds) ? plan.videoIds : [];
      const languageAvailability = detectLessonPlanLanguages(plan);

      return {
        id: plan.id,
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
        availableLanguages: {
          en: languageAvailability.hasEnglish,
          fr: languageAvailability.hasFrench,
        },
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
      const tags = [...new Set(normalized.flatMap((l) => l.tags || []))].filter(Boolean);

      setThemeFilters(themes.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setToolFilters(tools.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setSubjectFilters(subjects.reduce((acc, s) => ({ ...acc, [s]: true }), {}));
      setGradeFilters(grades.reduce((acc, g) => ({ ...acc, [g]: true }), {}));
      // Tags should start unselected and only filter when one is selected.
      setTagFilters(tags.reduce((acc, tag) => ({ ...acc, [tag]: false }), {}));

      setNumResults(normalized.length);
    } catch (err) {
      console.error("❌ Lesson plans fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }, [lessonPlans, loadedLocale, locale, normalizeLessonPlan]);

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
        tagFilters,
        setTagFilters,
        searchText,
        setSearchText,
        hasVideos,
        setHasVideos,
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
