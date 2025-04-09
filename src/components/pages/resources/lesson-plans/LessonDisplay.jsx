"use client";
import { useLessonPlanResource } from "./LessonPlanResourceContext";


export default function LessonDisplay() {
  // const {
  //   lessonPlans,
  //   loading,
  //   applyFilters,
  //   categoryFilters,
  //   setCategoryFilters,
  //   tagFilters,
  //   setTagFilters,
  //   search,
  //   setSearch,
  // } = useLessonPlanResource();

  // if (loading) return <div>Loading lesson plans...</div>;

  // const filtered = lessonPlans.filter(applyFilters);

  return (
    <div>
      <div>Lesson pLans</div>
      {/* <p>Total Lesson Plans: {filtered.length}</p> */}
      {/* Render filters + cards for each filtered lesson plan */}
    </div>
  );
}
