/**
 * @file VideoDisplay.jsx
 * @module UI/Resources/VideoDisplay
 * @desc Top-level video display layout component for the Alberta Tomorrow Resources section.
 *
 * @features
 * - Renders the full video browsing interface including filter sidebar and video categories.
 * - Uses `VideoFilters` for search/filter tools.
 * - Uses `VideoCategoryList` to organize and render filtered video data.
 * - Includes a sticky sidebar wrapper for consistent UX on larger screens.
 * - Displays a loading spinner using `PulseLoader` until videos are fetched.
 *
 * @dependencies
 * - VideoResourceContext (for shared state and video data)
 * - VideoFilters (sidebar component for filters)
 * - SideBarWrapper (responsive sticky sidebar utility)
 * - VideoCategoryList (grouped video rendering)
 * - PulseLoader (loading indicator)
 * 
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */
"use client";
import SideBarWrapper from "@/components/common/SideBarWrapper";
import { useLessonPlanResource } from "@/app/resources/components/lesson-plan-components/LessonPlanResourceContext";
import PulseLoader from "@/components/common/PulseLoader";
import { useEffect } from "react";
import LessonPlanFilters from "./LessonPlanFilters";
import LessonPlanThemeList from "./display/LessonPlanThemeList";

export default function LessonDisplay() {
  const { fetchLessonPlans, lessonPlans, loading, } = useLessonPlanResource();

  // Fetch videos when the component mounts
  useEffect(() => {
    fetchLessonPlans();
  }, [lessonPlans]);

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] gap-2 px-2 ">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-52 xl:w-72 pt-4 ">
        <SideBarWrapper>
          <LessonPlanFilters/>
        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-fit">
        { loading || !lessonPlans ? (
          <div className="relative mt-20">
            <PulseLoader showWheel loadingText="Fetching Lesson Plans"/>
          </div>
        ) : (
          <div >
            <LessonPlanThemeList/>
          </div>
        )}
      </main>
    </div>
  );
}
