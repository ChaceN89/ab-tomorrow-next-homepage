/**
 * @file FilterByText.jsx
 * @module UI/Resources/Filters/FilterByText
 * @desc Stacked search fields for title, description, and hashtags.
 */

"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";
import FilterTextInput from "./FilterTextInput";

export default function FilterByText() {
  const {
    titleFilter,
    setTitleFilter,
    descFilter,
    setDescFilter,
    hashtagFilter,
    setHashtagFilter,
  } = useVideoResource();

  return (
    <div className="flex flex-col gap-4">
      <FilterTextInput
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        placeholder="Search title"
      />
      <FilterTextInput
        value={descFilter}
        onChange={(e) => setDescFilter(e.target.value)}
        placeholder="Search description"
      />
      <FilterTextInput
        value={hashtagFilter}
        onChange={(e) => setHashtagFilter(e.target.value)}
        placeholder="Search tags"
      />
    </div>
  );
}
