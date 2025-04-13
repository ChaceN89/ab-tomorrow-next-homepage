/**
 * @file LinkListSection.jsx
 * @module UI/Resources/LinkListSection
 * @desc Reusable list section for files or links (PDFs, external URLs, etc.).
 *
 * @props {string} title - Section title (e.g. "Lesson Files", "Related Links")
 * @props {Array} items - List of objects with `{ title, link }`
 * @props {React.ElementType} icon - Icon component to display next to each link
 */

import React from "react";

export default function LinkListSection({ title, items = [], iconClassName, icon: Icon }) {
  if (!items?.length) return null;

  return (
    <div className="mt-2">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="text-xs text-blue-700 mt-1 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex gap-1 items-center"
              onClick={(e) => e.stopPropagation()} // Prevent parent click event
            >
              {Icon && <Icon className={ `shrink-0 ${iconClassName}`} />} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
