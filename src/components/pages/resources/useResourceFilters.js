/**
 * @file useResourceFilters.js
 * @desc Reusable filter hook for resource pages like videos or lessons
 */

import { useState } from "react";

export function useResourceFilters(items, config = {}) {
  const {
    getCategory = (item) => item.category,
    getTags = (item) => item.tools || [], // can be tools, subjects, etc.
  } = config;

  const [categoryFilters, setCategoryFilters] = useState({});
  const [tagFilters, setTagFilters] = useState({});
  const [search, setSearch] = useState("");

  const initializeFilters = (items) => {
    const categories = [...new Set(items.map(getCategory))];
    const tags = [...new Set(items.flatMap(getTags))];

    setCategoryFilters(categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {}));
    setTagFilters(tags.reduce((acc, tag) => ({ ...acc, [tag]: true }), {}));
  };

  const applyFilters = (item) => {
    const matchesCategory = categoryFilters[getCategory(item)];
    const matchesTag = getTags(item).some((tag) => tagFilters[tag]);
    const matchesSearch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesTag && matchesSearch;
  };

  return {
    categoryFilters,
    setCategoryFilters,
    tagFilters,
    setTagFilters,
    search,
    setSearch,
    applyFilters,
    initializeFilters,
  };
}
