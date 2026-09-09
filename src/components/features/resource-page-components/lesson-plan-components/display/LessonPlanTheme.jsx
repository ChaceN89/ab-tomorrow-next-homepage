/**
 * @file LessonPlanTheme.jsx
 * @module UI/Resources/LessonPlanTheme
 * @desc Renders a section of lesson plans under a single theme, with a styled header.
 *
 * @props {string} theme - The theme label.
 * @props {Array} lessonPlans - List of lesson plan objects in this theme.
 */

import React from "react";
import { Element } from "react-scroll";
import LessonPlanCard from "./LessonPlanCard";

export default function LessonPlanTheme({ theme, lessonPlans = [], isSidebarPinned = true }) {
  if (!lessonPlans.length) return null;

  const gridClassName = isSidebarPinned
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-4"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-4";

  return (
    <Element
      name={theme}
      className="bg-tertiary/30 px-6 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden relative"
    >
      <div className="relative">
        <h2 className="text-4xl font-bold border-b border-black py-4">{theme} - {lessonPlans.length}</h2>

        <div className={gridClassName}>
          {lessonPlans.map((plan) => (
            <LessonPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </Element>
  );
}
