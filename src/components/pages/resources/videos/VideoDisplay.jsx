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

          {/* random content */}
          {/* <h2 className="font-bold text-lg mb-2  bg-white border p-4 ">
            <div className="space-y-6">

            <div>Filter 1</div>
            <div>Filter 2</div>
            <div>Filter 3</div>
            <div>Filter 4</div>
            <div>Filter 5</div>
            <div>Filter 5</div>
            </div>
          </h2> */}
          <VideoFilters/>

        </SideBarWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        {/* <div className="h-128 bg-slate-200">videos</div>
        <div className="h-128 bg-slate-400">videos</div>
        <div className="h-128 bg-slate-500">videos</div> */}
        <VideoCategoryList/>
      </main>
    </div>
  );
  

  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-pink-300 min-h-screen">
      {/* Filters Sidebar */}
      <div className="sm:w-64 sm:sticky sm:top-[100px] self-start h-fit bg-yellow-300 p-4 rounded-xl shadow-md transition-all duration-500 ease-in-out animate-slide-down">
        Filters
      </div>
  
      {/* Main Content */}
      <div className="flex-1 bg-green-400 p-4 rounded-xl space-y-6">
        <div className="h-128 bg-slate-200">videos</div>
        <div className="h-128 bg-slate-400">videos</div>
        <div className="h-128 bg-slate-500">videos</div>
      </div>
    </div>
  );
  
  
  return(
    <div className="bg-pink-300 relative">
      <div className="sm:absolute sm:w-32 bg-yellow-300 h-128" >Filters</div>
      <div className="sm:ml-32 bg-green-400 h-128">Videos</div>
    </div>
  )


  return (
    <div className="space-y-12 mb-20">

        <VideoFilters/>
        <VideoCategoryList/>
    </div>
  );
}
