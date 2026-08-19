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
 * @updated Aug 19, 2026
 */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiPushpin2Fill, RiPushpin2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SideBarWrapper({
  children,
  minDistFromTop = 48,
  className = "pt-4.5 lg:pt-0",
  minBreakpoint = 768, // tailwind's `md`
  onPinnedChange,
}) {
  const t = useTranslations("Pages.ResourcesPage");
  const COLLAPSED_HANDLE_WIDTH = 40;
  const HOVER_REOPEN_DELAY_MS = 260;
  const HOVER_ACTIVATION_TOP_GUTTER = 64;

  const wrapperRef = useRef(null);
  const hoverSuppressUntilRef = useRef(0);
  const [lock, setLock] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isPinnedOpen, setIsPinnedOpen] = useState(true);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);

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
  const [expandedPanelWidth, setExpandedPanelWidth] = useState(null);
  const [expandedPanelHeight, setExpandedPanelHeight] = useState(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const nextWidth = entry.contentRect.width;
        const nextHeight = entry.contentRect.height;
        setWrapperWidth(nextWidth);
        // Preserve the largest observed width so collapsed mode can still expand over content.
        setExpandedPanelWidth((prev) => (prev == null ? nextWidth : Math.max(prev, nextWidth)));
        // Preserve largest observed height so collapsed rail keeps full height.
        setExpandedPanelHeight((prev) => (prev == null ? nextHeight : Math.max(prev, nextHeight)));
      }
    });

    resizeObserver.observe(wrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      setIsPinnedOpen(true);
      setIsHoverExpanded(false);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    if (typeof onPinnedChange === "function") {
      onPinnedChange(isPinnedOpen);
    }
  }, [isPinnedOpen, onPinnedChange]);

  const isHoverSuppressed = () => Date.now() < hoverSuppressUntilRef.current;

  const isPastTopHoverGutter = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeY = event.clientY - rect.top;
    return relativeY > HOVER_ACTIVATION_TOP_GUTTER;
  };

  const handlePinToggle = () => {
    setIsPinnedOpen((prev) => {
      const nextPinnedOpen = !prev;

      // When switching to collapsed mode from the pin button, avoid instant re-open from hover.
      if (!nextPinnedOpen) {
        setIsHoverExpanded(false);
        hoverSuppressUntilRef.current = Date.now() + HOVER_REOPEN_DELAY_MS;
      }

      return nextPinnedOpen;
    });
  };


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

  const shouldCollapse = isLargeScreen && !isPinnedOpen;
  const isExpanded = !shouldCollapse || isHoverExpanded;
  const panelTranslateX = shouldCollapse && !isExpanded
    ? `calc(-100% + ${COLLAPSED_HANDLE_WIDTH}px)`
    : "0";
  const isCollapsedView = shouldCollapse && !isExpanded;

  // Keep sticky behavior consistent with pinned mode: only fix after lock threshold.
  const shouldUseOverlayPosition = isLargeScreen && lock;
  const panelWidth = shouldCollapse
    ? (expandedPanelWidth || wrapperWidth || "100%")
    : (wrapperWidth || "100%");

  const wrapperStyle = shouldUseOverlayPosition
    ? {
      position: "fixed",
      top: `${minDistFromTop}px`,
      width: panelWidth,
      zIndex: 4,
      minHeight: isCollapsedView ? `calc(100vh - ${minDistFromTop}px)` : undefined,
      maxHeight: `calc(100vh - ${minDistFromTop}px)`,
      overflowY: "auto",
    }
    : {
      position: "relative",
      width: panelWidth,
      zIndex: shouldCollapse ? 4 : "auto",
      minHeight: isCollapsedView ? expandedPanelHeight || undefined : undefined,
    };

  return (
    <div className="w-full" ref={wrapperRef} style={{ position: "relative" }}>
      <motion.div
        animate={{ x: panelTranslateX }}
        transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.75 }}
        style={{
          ...wrapperStyle,
        }}
        onMouseEnter={() => {
          // Ignore top-edge hover so pin-area interactions do not auto-popout.
          // Expansion still works when entering/living below the top gutter.
        }}
        onMouseMove={(event) => {
          if (
            shouldCollapse &&
            !isHoverExpanded &&
            !isHoverSuppressed() &&
            isPastTopHoverGutter(event)
          ) {
            setIsHoverExpanded(true);
          }
        }}
        onMouseLeave={() => {
          if (shouldCollapse) setIsHoverExpanded(false);
        }}
        className={
          className +
          ` scroll-element md:pb-[28rem] rounded-lg shadow-md border border-black/30 overflow-hidden px-1 bg-gray-200`
        }
      >
        {isLargeScreen && (
          <button
            type="button"
            onClick={handlePinToggle}
            className="absolute top-2 z-20 h-8 w-8 rounded-full border border-black/25 bg-white text-black hover:bg-white cursor-pointer flex items-center justify-center"
            style={isCollapsedView ? { right: `${(COLLAPSED_HANDLE_WIDTH - 36) / 2}px` } : { right: "0.25rem" }}
            title={isPinnedOpen ? "Switch to hover-expand mode" : "Keep sidebar open"}
            aria-label={isPinnedOpen ? "Switch to hover-expand mode" : "Keep sidebar open"}
          >
            {isPinnedOpen ? <RiPushpin2Fill size={16} /> : <RiPushpin2Line size={16} />}
          </button>
        )}

        {isCollapsedView ? (
          <div className="absolute inset-y-0 right-0 w-10 z-10 flex items-start justify-center pt-14 pointer-events-none">
            <span
              className="text-xs font-semibold tracking-wide text-black/90"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {t("filters.collapsedTab")}
            </span>
          </div>
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}
