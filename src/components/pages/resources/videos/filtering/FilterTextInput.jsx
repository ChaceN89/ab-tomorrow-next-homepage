/**
 * @file FilterTextInput.jsx
 * @module UI/Filters/FilterTextInput
 * @desc A reusable input component for text-based filters in the resource system.
 *
 * @props {string} value - The current value of the filter input
 * @props {function} onChange - Callback for updating the filter
 * @props {string} placeholder - Placeholder text
 */

"use client";

import React from "react";

export default function FilterTextInput({ value, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border px-4 py-2 rounded w-full"
      />
    </div>
  );
}
