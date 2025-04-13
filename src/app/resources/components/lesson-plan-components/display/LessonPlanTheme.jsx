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
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import LessonPlan from "./LessonPlan";

export default function LessonPlanTheme({ theme, lessonPlans = [] }) {
  if (!lessonPlans.length) return null;

  return (
    <Element
      name={theme}
      className="bg-tertiary/20 px-6 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden relative"
    >
      <HexSeparator rows={3} hexClass="bg-tertiary-alt/20" />
      <div className="relative">
        <h2 className="text-4xl font-bold border-b border-black py-4">{theme}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
          {lessonPlans.map((plan) => (
            <LessonPlan key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </Element>
  );
}
