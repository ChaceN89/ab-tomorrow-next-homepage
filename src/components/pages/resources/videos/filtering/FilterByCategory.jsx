"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";
import { Link } from "react-scroll";

import { IoArrowRedo } from "react-icons/io5";


export default function FilterByCategory() {
  const { categoryFilters, setCategoryFilters } = useVideoResource();

  return (
    <div>
      <h3 className="font-semibold mb-2">Filter by Category:</h3>
      <div className="flex flex-wrap gap-2">
        {Object.keys(categoryFilters).map((category) => (
          <div key={category} className="flex items-center gap-2">
            <button
              className={`px-4 py-1 rounded-full border ${
                categoryFilters[category]
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() =>
                setCategoryFilters((prev) => ({
                  ...prev,
                  [category]: !prev[category],
                }))
              }
            >
              {category}
            </button>
            <Link
              to={category}
              smooth
              offset={-100}
              duration={500}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              <IoArrowRedo className="inline-block" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
