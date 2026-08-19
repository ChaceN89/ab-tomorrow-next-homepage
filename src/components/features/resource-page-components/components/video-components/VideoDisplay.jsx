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
import VideoFilters from "./VideoFilters";
import SideBarWrapper from "@/components/layout/shell/SideBarWrapper";
import VideoCategoryList from "./display/VideoCategoryList";
import { useVideoResource } from "@/components/features/resource-page-components/components/video-components/VideoResourceContext";
import PulseLoader from "@/components/common/PulseLoader";
import { useEffect, useState } from "react";

export default function VideoDisplay() {
  const { videos, loading, fetchVideos } = useVideoResource();
  const [isSidebarPinned, setIsSidebarPinned] = useState(true);

  // Fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] gap-3 lg:gap-4 px-2 ">
      {/* Filters Sidebar */}
      <aside
        className={`w-full pt-4 transition-[width] duration-300 ${isSidebarPinned ? "md:w-[15rem] xl:w-[21rem]" : "md:w-10"
          }`}
      >
        <SideBarWrapper onPinnedChange={setIsSidebarPinned}>
          <VideoFilters />
        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-fit">
        {loading || !videos ? (
          <div className="relative mt-20">
            <PulseLoader showWheel loadingText="Fetching Videos" />
          </div>
        ) : (
          <div >
            <VideoCategoryList />
          </div>
        )}
      </main>
    </div>
  );
}
