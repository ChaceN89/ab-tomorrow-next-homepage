/**
 * @file ModalLessonPlan.jsx
 * @module UI/Resources/ModalLessonPlan
 * @desc Fetches and displays a single lesson plan for use in modal views.
 *
 * @features
 * - Tries to retrieve from context first
 * - Falls back to API request if not found
 * - Graceful loading and error handling
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 */

"use client";

import React, { useEffect, useState } from "react";
import { useLessonPlanResource } from "../LessonPlanResourceContext";
import LessonPlanDetails from "./LessonPlanDetails";

export default function ModalLessonPlan({ id }) {
  const { lessonPlans } = useLessonPlanResource();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localPlan = lessonPlans?.find((lp) => String(lp.id) === String(id));

    if (localPlan) {
      setPlan(localPlan);
      setLoading(false);
    } else {
      const fetchPlan = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/lesson-plans/${id}`);
          if (!res.ok) throw new Error(`Error fetching lesson plan: ${res.statusText}`);
          const data = await res.json();
          setPlan(data);
        } catch (err) {
          console.error("❌ Failed to fetch lesson plan:", err);
          setPlan(null);
        } finally {
          setLoading(false);
        }
      };

      fetchPlan();
    }
  }, [id, lessonPlans]);

  if (loading) return <div className="p-10">Loading lesson plan data...</div>;
  if (!plan) return <div className="p-10">Lesson plan not found.</div>;

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <LessonPlanDetails plan={plan} />
    </div>
  );
}
