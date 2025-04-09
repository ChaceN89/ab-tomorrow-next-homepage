"use client";

import React from "react";
import { Link } from "react-scroll";

import { useVideoResource } from "@/components/pages/resources/videos/VideoResourceContext";
import { groupVideosByCategory } from "@/utils/videoResouceUtils";
import VideoCategory from "./VideoCategory";
import VideoCategoryList from "./VideoCategoryList";
import VideoFilters from "./filtering/VideoFilters";

import "./VideoDisplay.styles.css"
import SideBarWrapper from "@/components/common/sidebarWrapper/SideBarWrapper";

export default function VideoDisplay() {
  const {
    videos,
    loading,

  } = useVideoResource();

  if (loading || !videos) return <div>Loading videos...</div>;




  return (
    <div className="flex flex-col md:flex-row min-h-[75vh]  ">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-48 ">
        <SideBarWrapper>
          <VideoFilters/>
        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        <VideoCategoryList/>
      </main>
    </div>
  );
}
