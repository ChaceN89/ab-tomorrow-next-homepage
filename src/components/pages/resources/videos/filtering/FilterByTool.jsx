"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";

export default function FilterByTool() {
  const { toolFilters, setToolFilters } = useVideoResource();

  return (
    <div>
      <h3 className="font-semibold mb-2">Filter by Tool:</h3>
      <div className="flex flex-wrap gap-2">
        {Object.keys(toolFilters).map((tool) => (
          <button
            key={tool}
            className={`px-4 py-1 rounded-full border ${
              toolFilters[tool]
                ? "bg-secondary text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() =>
              setToolFilters((prev) => ({
                ...prev,
                [tool]: !prev[tool],
              }))
            }
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
