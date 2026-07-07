/**
 * @file TagList.jsx
 * @module UI/Resources/TagList
 * @desc Reusable tag list component for displaying labeled pills with optional expand/collapse.
 *
 * @props {string} label - Section title (e.g. "Grades", "Subjects")
 * @props {Array<string>} items - List of string values to render as pill-style tags
 * @props {string} pillClass - Tailwind utility classes to customize pill styling
 *
 * @example
 * <TagList
 *   label="Grades"
 *   items={["Grade 5", "Grade 6", ...]}
 *   pillClass="bg-gray-100 border border-gray-300 text-gray-700"
 * />
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated Apr 13, 2025
 */

"use client";

import React, { useState } from "react";

export default function TagList({ label, items = [], pillClass = "" }) {
  const [expanded, setExpanded] = useState(false);

  if (!items.length) return null;

  const numberOVisiblefItems = 20;

  const visibleItems = expanded ? items : items.slice(0, numberOVisiblefItems);
  const hiddenCount = items.length - numberOVisiblefItems;

  return (
    <div className="text-xs text-gray-500 flex flex-wrap gap-1 mt-1">
      <strong className="w-full text-gray-600">{label}:</strong>
      {visibleItems.map((item, idx) => (
        <span key={idx} className={`px-2 py-0.5 rounded-full ${pillClass}`}>
          {item}
        </span>
      ))}
      {hiddenCount > 0 && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className={`px-2 py-0.5 rounded-full underline text-blue-600 cursor-pointer hover:text-blue-900 ${pillClass}`}
        >
           +{hiddenCount} more
        </button>
      )}
      {expanded && hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(false)}
          className="ml-2 underline text-blue-600 cursor-pointer hover:text-blue-900"
        >
          Show less
        </button>
      )}
    </div>
  );
}
