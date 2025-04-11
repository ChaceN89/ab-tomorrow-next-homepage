/**
 * @file LessonPlanResourceContext.jsx
 * @module Context/LessonPlans
 * @desc Context provider for lesson plan data, filters, and loading state in the Resources section.
 *       Prevents re-fetching on page change and supports custom filtering logic.
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 */

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LessonPlanContext = createContext();

export function LessonPlanResourceProvider({ children }) {
  const [lessonPlans, setLessonPlans] = useState(null);
  const [loading, setLoading] = useState(false);



  const fetchLessonPlans = async () => {
    if (lessonPlans) return;
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/lesson-plans`);
      if (!res.ok) throw new Error("Failed to fetch lesson plans");

      const data = await res.json();
      setLessonPlans(data);
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
        lessonPlans,
        loading,
        fetchLessonPlans,
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
