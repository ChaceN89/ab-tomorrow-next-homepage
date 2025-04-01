/**
 * @file MemberCard.jsx
 * @module MemberCard
 * @desc Renders a responsive, interactive card component for displaying Board Member information. 
 *       Includes hover and click expansion behavior, image loading animation with gradient blur placeholder.
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 *
 * @dependencies
 * - React
 * - next/image
 *
 * @notes
 * - Uses mobile/desktop detection to control expansion behavior.
 * - Applies gradient gray blur effect while image is loading.
 * - Supports hover and click-to-expand interactions.
 */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PulseLoader from "@/components/common/PulseLoader";

export default  function MemberCard({ member }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsExpanded((prev) => !prev);
  };

  const isActive = isMobile ? isExpanded : isHovered;

  return (
    <div
      className="group bg-gray-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-black overflow-hidden max-w-md mx-auto"
      onClick={handleClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative w-52 h-52 transition-all duration-500 ease-in-out group-hover:w-60 rounded-[50%] group-hover:rounded-[1rem] shadow-inner-lg border border-black/50 overflow-hidden ">
        <Image
          src={`/board-of-directors/${member.image}`}
          alt={member.name}
          fill
          className={`w-full h-full object-cover object-top z-10 transition-all duration-500 ease-in-out rounded-[50%] group-hover:rounded-[1rem] ${
            isLoaded ? "opacity-100" : "opacity-0  "
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <PulseLoader/>    
        )}
      </div>

      <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-600 font-medium">{member.title}</p>
      <div className="w-full h-[2px] bg-black opacity-50 mt-1.5" />

      <div
        className={`grid transition-all duration-700 ease-in-out overflow-hidden mt-3 ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-20"
        }`}
      >
        <p className="text-sm text-gray-800">{member.bio}</p>
      </div>
    </div>
  );
}
