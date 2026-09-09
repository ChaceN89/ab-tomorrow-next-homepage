/**
 * @file PolicySubSection.jsx
 * @module PolicySubSection
 * @desc A reusable component for subsection titles inside policy sections.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PolicySubSection({ title, children }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
}
