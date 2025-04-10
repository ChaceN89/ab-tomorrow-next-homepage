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
import { FaChevronRight } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";


export default function FilterDropdown({
  label,
  filterMap,
  setFilterMap,
  showScrollLinks = false,
  initialOpen = false,
}) {
  const [open, setOpen] = useState(initialOpen);


  const toggleAll = () => {
    const allTrue = Object.values(filterMap).every((val) => val);
    setFilterMap((prev) =>
      Object.fromEntries(
        Object.keys(prev).map((key) => [key, !allTrue])
      )
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        className="cursor-pointer w-full flex items-center justify-between px-4 py-3 font-semibold text-left bg-gray-100 hover:bg-tertiary transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <FaChevronRight
          size={12}
          className={`transition-transform duration-400 ${open ? "rotate-90 translate-0.5" : "rotate-0"}`}
        />
      </button>



      <div
        className={`origin-top transition-transform duration-400 ease-in-out transform overflow-hidden ${
          open ? "scale-y-100" : "scale-y-0 h-0"
        }`}
      >
        
     

        <div className="flex flex-col gap-2 p-4">
          <button
            onClick={toggleAll}
            className={`px-4 py-1 rounded-full border text-sm cursor-pointer text-start whitespace-nowrap truncate transition-colors
              ${
                Object.values(filterMap).every((val) => val)
                  ? "bg-gray-200 text-black hover:opacity-70"
                  : "bg-primary-alt text-white hover:opacity-90"
              }`}
          >
            {Object.values(filterMap).every((val) => val)
              ? "Unselect All Categories"
              : "Select All Categories"}
          </button>
          <div className="w-full border-b border-gray-600" />

          {Object.keys(filterMap).map((item, index, arr) => (
            < React.Fragment key={item}>
            <div key={item} className="flex items-start justify-between gap-0.5">
              <button
                className={`px-4 py-1 rounded-full border text-sm cursor-pointer text-start whitespace-nowrap truncate hover:opacity-40 ${
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

              {(showScrollLinks && filterMap[item] )&& (
                <Link
                  to={item}
                  smooth
                  offset={-80}
                  duration={1000}
                  className="group cursor-pointer "
                >
                  <div className="w-6">
                    <IoArrowRedo className="inline-block w-full text-xl group-hover:text-2xl transition-all duration-200 text-black hover:text-tertiary-alt " />
                  </div>
                </Link>
              )}
            </div>
            {index < arr.length - 1 && (
                <div className="w-full border-b border-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
