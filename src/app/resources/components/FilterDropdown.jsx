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
import { Link, scroller } from "react-scroll"; // ✅ make sure `scroller` is imported
import { FaChevronRight } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { RiFocus3Line } from "react-icons/ri";
import Tooltip from "@/components/media/Tooltip";


export default function FilterDropdown({
  label,
  filterMap,
  setFilterMap,
  showScrollLinks = false,
  showFocusButton = false,
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
            <React.Fragment key={item}>
              <div className="flex items-center justify-between gap-1 w-full">
                {/* Left: Filter toggle + Solo button */}

                
                <div className="flex items-center gap-1 flex-1 min-w-0">
        
                  <div className="min-w-0 flex-1">
                    <button
                      className={`px-3 py-1 rounded-full border text-sm cursor-pointer truncate min-w-0 transition-colors w-full 
                        ${filterMap[item] ? "bg-primary text-white" : "bg-gray-300 text-black"}`}
                      onClick={() =>
                        setFilterMap((prev) => ({
                          ...prev,
                          [item]: !prev[item],
                        }))
                      }
                    >
                      <Tooltip text={`Toggle: ${item}`} openDuration={400}>
                        <span className="inline-block max-w-full truncate">{item}</span>
                      </Tooltip>
                    </button>
                  </div>

                  {/* Solo (Focus) button */}
                  {showFocusButton && (
                    <Tooltip text="Show only this filter" openDuration={600}>
                      <button
                        onClick={() => {
                          setFilterMap(
                            Object.fromEntries(
                              Object.keys(filterMap).map((key) => [key, key === item])
                            )
                          );
                          scroller.scrollTo("resources-container", {
                            offset: -80,
                            duration: 800,
                          });
                        }}
                        className="text-xs text-black px-2 py-1 rounded-full border bg-white hover:bg-gray-200 transition flex items-center w-full  h-full"
                      >
                        <RiFocus3Line className="inline-block" />
                      </button>
                    </Tooltip>
                  )}
                </div>

                {/* Optional scroll link */}
                {showScrollLinks && filterMap[item] && (
                  <Tooltip text="Scroll to section" openDuration={500}>
                    <Link
                      to={item}
                      smooth
                      offset={-80}
                      duration={700}
                      className="group cursor-pointer flex-shrink-0"
                    >
                      <div className="w-6">
                        <IoArrowRedo className="inline-block w-full text-xl group-hover:text-2xl transition-all duration-200 text-black hover:text-tertiary-alt" />
                      </div>
                    </Link>
                  </Tooltip>
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
