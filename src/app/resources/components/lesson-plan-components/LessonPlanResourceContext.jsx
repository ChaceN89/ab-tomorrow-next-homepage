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

import { createContext, useContext, useEffect, useState } from "react";

const LessonPlanContext = createContext();

export function LessonPlanResourceProvider({ children }) {
  const [lessonPlans, setLessonPlans] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeFilters, setThemeFilters] = useState({});
  const [toolFilters, setToolFilters] = useState({});
  const [subjectFilters, setSubjectFilters] = useState({});
  const [gradeFilters, setGradeFilters] = useState({});
  const [searchText, setSearchText] = useState("");

  const [numResults, setNumResults] = useState(0);

  const fetchLessonPlans = async () => {
    if (lessonPlans) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Temp Local JSon until API is created and deployed
      const res = await fetch(`/api-static-data/lesson-plans.json`);

      // API version for when API is created and deployed
      // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/lesson-plans`);
      
      
      if (!res.ok) throw new Error("Failed to fetch lesson plans");

      const data = await res.json();
      setLessonPlans(data);

      // Initialize filter options
      const themes = [...new Set(data.map((l) => l.theme))];
      const tools = [...new Set(data.flatMap((l) => l.tools || []))];
      const subjects = [...new Set(data.flatMap((l) => l.subjects || []))];
      const grades = [...new Set(data.flatMap((l) => l.grades || []))];

      setThemeFilters(themes.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setToolFilters(tools.reduce((acc, t) => ({ ...acc, [t]: true }), {}));
      setSubjectFilters(subjects.reduce((acc, s) => ({ ...acc, [s]: true }), {}));
      setGradeFilters(grades.reduce((acc, g) => ({ ...acc, [g]: true }), {}));

      setNumResults(data.length);
    } catch (err) {
      console.error("❌ Lesson plans fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLessonPlans();
  }, []);

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
