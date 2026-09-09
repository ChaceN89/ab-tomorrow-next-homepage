/**
 * @file PolicyText.jsx
 * @module PolicyText
 * @desc A reusable component for paragraphs of text in policies.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PolicyText({ children }) {
  return <div className="text-gray-700 mt-2">{children}</div>;
}
