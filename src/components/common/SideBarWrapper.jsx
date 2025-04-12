/**
 * @file SideBarWrapper.jsx
 * @module UI/Layout/SideBarWrapper
 * @desc A responsive wrapper component that conditionally applies fixed positioning to its children 
 *       once they reach a defined distance from the top of the screen (used for sticky sidebars).
 *
 * @features
 * - Automatically "locks" the sidebar in place when scrolled past a minimum distance from top
 * - Only activates fixed behavior on screens above a defined breakpoint (default: `md`)
 * - Reverts to normal flow (relative positioning) on smaller screens
 * - Accepts custom padding or utility classes via `className` prop
 *
 * @props {ReactNode} children - The content to render inside the wrapper
 * @props {number} minDistFromTop - The minimum distance from the top before fixing the element (default: 48px)
 * @props {string} className - Tailwind or custom classes applied to the inner wrapper
 * @props {number} minBreakpoint - Minimum screen width (in px) to apply sticky behavior (default: 768 for `md`)
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Apr 8, 2025
 */
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SideBarWrapper({
  children,
  minDistFromTop = 48,
  className = "pt-4.5 lg:pt-0",
  minBreakpoint = 768, // tailwind's `md`
}) {
  const wrapperRef = useRef(null);
  const [lock, setLock] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Track screen size
  useEffect(() => {
    const updateSize = () => {
      setIsLargeScreen(window.innerWidth >= minBreakpoint);
    };
    updateSize();
  
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [minBreakpoint]);
  
  // Add ResizeObserver to track wrapper width
  const [wrapperWidth, setWrapperWidth] = useState(null);
  
  useEffect(() => {
    if (!wrapperRef.current) return;
  
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setWrapperWidth(entry.contentRect.width);
      }
    });
  
    resizeObserver.observe(wrapperRef.current);
  
    return () => resizeObserver.disconnect();
  }, []);
  

  // Track scroll only on large screens
  useEffect(() => {
    if (!isLargeScreen) return;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const top = wrapperRef.current.getBoundingClientRect().top;
      setLock(top <= minDistFromTop);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minDistFromTop, isLargeScreen]);

  const wrapperStyle = isLargeScreen && lock
    ? {
        position: "fixed",
        top: `${minDistFromTop}px`,
        width: wrapperWidth || "100%",
        zIndex: 4,
        maxHeight: `calc(100vh - ${minDistFromTop}px)`,
        overflowY: "auto",
      }
    : { position: "relative" };

  return (
    <div className="w-full" ref={wrapperRef} style={{ position: "relative" }}>
      <div style={wrapperStyle} className={className+ " scroll-element pb-[28rem] bg-primary/10 rounded-lg shadow-md border border-black/30 overflow-hidden px-1"}>
        {children}
      </div>
    </div>
  );
}
