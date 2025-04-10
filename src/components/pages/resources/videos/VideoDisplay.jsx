/**
 * 
 */

"use client";
import VideoFilters from "./filtering/VideoFilters";
import SideBarWrapper from "@/components/common/sidebarWrapper/SideBarWrapper";
import VideoCategoryList from "./display/VideoCategoryList";
import { useVideoResource } from "./VideoResourceContext";
import PulseLoader from "@/components/common/PulseLoader";

export default function VideoDisplay() {
  const {
    videos,
    loading,
  } = useVideoResource();

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] gap-2 px-2 ">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-52 xl:w-72  ">
        <SideBarWrapper>
          <VideoFilters/>
        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        { loading || !videos ? (
          <div className="relative mt-20">
            <PulseLoader showWheel loadingText="Fetching Videos"/>
          </div>
        ) : (
          <VideoCategoryList/>
        )}
      </main>
    </div>
  );
}
