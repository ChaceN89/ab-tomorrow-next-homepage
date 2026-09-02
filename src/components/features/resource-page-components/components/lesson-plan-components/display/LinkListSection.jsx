/**
 * @file LinkListSection.jsx
 * @module UI/Resources/LinkListSection
 * @desc Reusable list section for files or links (PDFs, external URLs, etc.).
 *
 * @props {string} title - Section title (e.g. "Lesson Files", "Related Links")
 * @props {Array} items - List of objects with `{ title, link }`
 * @props {React.ElementType} icon - Icon component to display next to each link
 */

"use client";

import { useState } from "react";

export default function LinkListSection({
  title,
  items = [],
  iconClassName,
  icon: Icon,
  maxVisibleItems = 2,
  seeMoreText = "See more",
  seeLessText = "See less",
}) {
  const [expanded, setExpanded] = useState(false);

  if (!items?.length) return null;

  const shouldShowToggle = items.length > maxVisibleItems;
  const visibleItems = shouldShowToggle && !expanded ? items.slice(0, maxVisibleItems) : items;

  const onLinkClick = (e, url) => {
    if (!url) return;
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-2">
      <div className="font-semibold">{title}</div>
      <ul className="text-xs text-blue-700 mt-1 space-y-1">
        {visibleItems.map((item, idx) => {
          const safeUrl = item?.link || item?.url || item?.href || "";
          const safeTitle = item?.title || item?.label || item?.name || "Missing";

          if (!safeUrl) {
            return (
              <li key={idx} className="text-gray-500">
                <span className="flex items-center gap-1 text-left">
                  {Icon && <Icon className={`shrink-0 ${iconClassName}`} />} {safeTitle}
                </span>
              </li>
            );
          }

          return (
            <li key={idx}>
              <button
                type="button"
                onClick={(e) => onLinkClick(e, safeUrl)}
                className="hover:underline flex gap-1 items-center text-left hover:cursor-pointer"
              >
                {Icon && <Icon className={`shrink-0 ${iconClassName}`} />} {safeTitle}
              </button>
            </li>
          );
        })}
      </ul>

      {shouldShowToggle && (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setExpanded((current) => !current);
          }}
          className="mt-1 text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
        >
          {expanded ? seeLessText : seeMoreText}
        </button>
      )}
    </div>
  );
}
