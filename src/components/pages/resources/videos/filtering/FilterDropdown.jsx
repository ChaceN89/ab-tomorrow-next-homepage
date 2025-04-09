/**
 * @file FilterDropdown.jsx
 * @module UI/Resources/FilterDropdown
 * @desc Generic dropdown component to toggle filters (category, tools, etc.) with animation.
 *       Optionally includes scroll links to anchor sections.
 *
 * @props {string} label - The dropdown label (e.g., "Filter by Category")
 * @props {object} filterMap - Object with boolean values keyed by filter option
 * @props {function} setFilterMap - Setter function for updating the filter object
 * @props {boolean} showScrollLinks - If true, displays react-scroll "Go to" links beside each option
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Apr 8, 2025
 */

"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterDropdown({
  label,
  filterMap,
  setFilterMap,
  showScrollLinks = false,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 font-semibold text-left bg-gray-100 hover:bg-gray-200 transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Animate height change */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
          open ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-wrap gap-2">
          {Object.keys(filterMap).map((item) => (
            <div key={item} className="flex items-center gap-2">
              <button
                className={`px-4 py-1 rounded-full border text-sm ${
                  filterMap[item]
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() =>
                  setFilterMap((prev) => ({
                    ...prev,
                    [item]: !prev[item],
                  }))
                }
              >
                {item}
              </button>

              {showScrollLinks && (
                <Link
                  to={item}
                  smooth
                  offset={-100}
                  duration={500}
                  className="text-xs text-blue-600 underline cursor-pointer"
                >
                  Go
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
