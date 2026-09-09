/**
 * @file CurriculumDropDown.jsx
 * @module UI/CurriculumDropDown
 * @desc Dropdown component to toggle the display of curriculum learning outcomes with optional sub-bullets.
 *
 * @props {string} title - The title of the dropdown (e.g., grade level).
 * @props {Object} learningOutcomes - Learning outcomes organized by subject and their specific topics.
 *
 * @example
 * <CurriculumDropDown 
 *    title="Grade 6"
 *    learningOutcomes={{
 *      Science: ["Energy", "Living Systems"],
 *      "Social Studies": ["Citizenship"]
 *    }}
 * />
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CurriculumDropDown({ learningOutcomes, title }) {
  const [isOpen, setIsOpen] = useState(false); // open state

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-start items-center w-full text-left hover:cursor-pointer"
        aria-expanded={isOpen}
      >
        <h4 className="font-semibold text-base">{title}</h4>
        {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] mt-2" : "max-h-0"
        }`}
      >
        <ul className="list-disc list-inside pl-2 text-sm text-gray-700 space-y-1">
          {Object.entries(learningOutcomes).map(([subject, outcomes], index) => (
            subject ? (
              <li key={index}>
                <span className="font-semibold text-secondary">{subject}</span>
                <ul className="list-[circle] list-inside pl-4 mt-1 text-gray-700 space-y-0.5">
                  {outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </li>
            ) : (
              outcomes.map((outcome, idx) => (
                <li key={`${index}-${idx}`} className="pl-1">{outcome}</li>
              ))
            )
          ))}
        </ul>

      </div>
    </div>
  );
}
