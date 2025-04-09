"use client";

import React from "react";
import { useVideoResource } from "../VideoResourceContext";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <input
        type="text"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        placeholder="Search title"
        className="border px-4 py-2 rounded"
      />
      <input
        type="text"
        value={descFilter}
        onChange={(e) => setDescFilter(e.target.value)}
        placeholder="Search description"
        className="border px-4 py-2 rounded"
      />
      <input
        type="text"
        value={hashtagFilter}
        onChange={(e) => setHashtagFilter(e.target.value)}
        placeholder="Search hashtags"
        className="border px-4 py-2 rounded"
      />
    </div>
  );
}
