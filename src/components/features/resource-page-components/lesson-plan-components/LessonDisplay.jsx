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
import SideBarWrapper, { SIDEBAR_TRANSITION } from "@/components/layout/shell/SideBarWrapper";
import { useLessonPlanResource } from "./LessonPlanResourceContext";
import PulseLoader from "@/components/common/PulseLoader";
import { useEffect, useState } from "react";
import LessonPlanFilters from "./LessonPlanFilters";
import LessonPlanThemeList from "./display/LessonPlanThemeList";

export default function LessonDisplay() {
  const { fetchLessonPlans, lessonPlans, loading } = useLessonPlanResource();
  const [isSidebarPinned, setIsSidebarPinned] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const isReady = !loading && Array.isArray(lessonPlans);

  // Fetch lesson plans when the component mounts
  useEffect(() => {
    fetchLessonPlans();
  }, [fetchLessonPlans]);

  useEffect(() => {
    if (!isReady) {
      setContentVisible(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => setContentVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, [isReady]);

  return (
    <div className="flex flex-col md:flex-row gap-3 lg:gap-4 px-2 ">
      {/* Filters Sidebar */}
      <aside
        className={`w-full pt-4 md:flex-none ${isSidebarPinned ? "md:w-[15rem] xl:w-[21rem]" : "md:w-10"
          }`}
        style={{ transition: `width ${SIDEBAR_TRANSITION}` }}
      >
        <SideBarWrapper onPinnedChange={setIsSidebarPinned}>
          <LessonPlanFilters />
        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="relative min-h-[30vh] min-w-0 flex-1 h-fit">
        {isReady && (
          <div className={`transition-opacity duration-500 motion-reduce:transition-none ${contentVisible ? "opacity-100" : "opacity-0"}`}>
            <LessonPlanThemeList />
          </div>
        )}
        <div
          aria-hidden={isReady && contentVisible}
          className={`absolute inset-0 z-10 transition-opacity duration-500 motion-reduce:transition-none ${
            isReady && contentVisible ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <PulseLoader showWheel loadingText="Fetching Lesson Plans" />
        </div>
      </main>
    </div>
  );
}
