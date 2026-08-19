/**
 * @file HexSeparator.jsx
 * @module HexSeparator
 * @desc A customizable, interlocking hexagonal grid used as a visual separator between sections.
 *       The component supports both top and bottom alignment, background inheritance, and responsive flexibility.
 *       Can be used to enhance visual storytelling and section transitions on landing pages.
 *
 * @component
 * @prop {number} rows - The number of hexagon rows to display (default: 4).
 * @prop {number} cols - The number of hexagons per row (default: 80).
 * @prop {string} parentClass - Tailwind or custom classes for the outer wrapper. Controls height, padding, and background color.
 * @prop {string} hexClass - Classes applied to each hexagon element. Useful for customizing color, opacity, or hover effects.
 * @prop {boolean} bottom - If true, renders the grid starting from the bottom up using `flex-col-reverse`.
 * @prop {boolean} randomColors - If true, applies a deterministic mixed-color pattern to the hexagons.
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 24, 2025
 */

"use client";

import "./HexSeparator.styles.css";
import { useEffect, useMemo, useRef, useState } from "react";

export default function HexSeparator({
  rows = 4,
  cols,
  parentClass = "bg-primary h-0",
  hexClass = "bg-primary-alt opacity-50",
  bottom = false,
  randomColors = false,
  minCols = 8,
  overscanCols = 4,
  maxCells = 3000,
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth || 0);
    };

    updateWidth();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const colorClasses = ["bg-primary", "bg-accent", "bg-tertiary", "bg-secondary"];
  const HEX_STEP_PX = 60; // width + gap from CSS (41 + 19)

  const computedCols = useMemo(() => {
    if (typeof cols === "number" && cols > 0) return cols;
    const baseCols = Math.ceil(containerWidth / HEX_STEP_PX);
    return Math.max(minCols, baseCols + overscanCols * 2);
  }, [cols, containerWidth, minCols, overscanCols]);

  const effectiveRows = useMemo(() => {
    if (!maxCells || maxCells <= 0) return rows;
    const maxRowsFromCap = Math.max(1, Math.floor(maxCells / Math.max(1, computedCols)));
    return Math.min(rows, maxRowsFromCap);
  }, [computedCols, maxCells, rows]);

  function getColorClass(rowIndex, colIndex) {
    const colorIndex = (rowIndex * 7 + colIndex * 3) % colorClasses.length;

    return `${colorClasses[colorIndex]} ${hexClass}`;
  }

  return (
    <div ref={containerRef} className={`relative ${parentClass}`}>
      <div className={`absolute bottom-0 hex-grid ${bottom ? "bottom-hex-grid" : ""}`}>
        {Array.from({ length: effectiveRows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`hex-row ${rowIndex % 2 !== 0 ? "hex-row-offset" : ""}`}
          >
            {Array.from({ length: computedCols }).map((_, colIndex) => (
              <div
                key={`hex-${rowIndex}-${colIndex}`}
                className={`hexagon ${randomColors ? getColorClass(rowIndex, colIndex) : hexClass}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}