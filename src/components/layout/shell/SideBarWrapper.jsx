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
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SIDEBAR_TOP_GAP = 12;
const COMPACT_SCREEN_BREAKPOINT = 1280;
// Keep in sync with the layout column transition in VideoDisplay / LessonDisplay.
const SIDEBAR_TRANSITION = "0.5s ease-in-out";

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
  const [isCompactScreen, setIsCompactScreen] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(minDistFromTop);
  const [isPinnedOpen, setIsPinnedOpen] = useState(true);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);

  // Track screen size
  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setIsLargeScreen(screenWidth >= minBreakpoint);
      setIsCompactScreen(screenWidth >= minBreakpoint && screenWidth < COMPACT_SCREEN_BREAKPOINT);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [minBreakpoint]);

  useEffect(() => {
    if (!isLargeScreen) {
      setIsPinnedOpen(true);
      setIsHoverExpanded(false);
    } else {
      setIsPinnedOpen(!isCompactScreen);
      setIsHoverExpanded(false);
    }
  }, [isCompactScreen, isLargeScreen]);

  useEffect(() => {
    if (!isLargeScreen) return;

    const navbar = document.querySelector("[data-site-navbar]");
    if (!navbar) {
      setSidebarTop(minDistFromTop + SIDEBAR_TOP_GAP);
      return;
    }

    const updateSidebarTop = () => {
      const navbarHeight = navbar.getBoundingClientRect().height;
      setSidebarTop(
        navbar.dataset.hidden === "true"
          ? SIDEBAR_TOP_GAP
          : Math.max(minDistFromTop, navbarHeight) + SIDEBAR_TOP_GAP
      );
    };

    updateSidebarTop();
    const observer = new MutationObserver(updateSidebarTop);
    observer.observe(navbar, { attributes: true, attributeFilter: ["data-hidden"] });
    window.addEventListener("resize", updateSidebarTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSidebarTop);
    };
  }, [isLargeScreen, minDistFromTop]);

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
      setLock(top <= sidebarTop);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minDistFromTop, isLargeScreen, sidebarTop]);

  const shouldCollapse = isLargeScreen && !isPinnedOpen;
  const isExpanded = !shouldCollapse || isHoverExpanded;
  const isCollapsedView = shouldCollapse && !isExpanded;

  // Keep sticky behavior consistent with pinned mode: only fix after lock threshold.
  const shouldUseOverlayPosition = isLargeScreen && lock;
  const panelHeight = isLargeScreen
    ? `calc(100dvh - ${sidebarTop}px - ${SIDEBAR_TOP_GAP}px)`
    : undefined;

  // Width comes from CSS (same values as the layout column) so it always follows the current screen size.
  const panelWidthClassName = isCollapsedView ? "md:w-10" : "md:w-[15rem] xl:w-[21rem]";

  // Width uses the same duration/easing as the layout column so the two move in lockstep.
  const wrapperStyle = shouldUseOverlayPosition
    ? {
      position: "fixed",
      top: `${sidebarTop}px`,
      height: panelHeight,
      maxHeight: panelHeight,
      zIndex: 4,
      overflowY: "auto",
      overflowX: "hidden",
      transition: `width ${SIDEBAR_TRANSITION}, top 0.3s ease-in-out, height 0.3s ease-in-out`,
    }
    : {
      position: "relative",
      height: panelHeight,
      zIndex: shouldCollapse ? 4 : "auto",
      overflowY: isLargeScreen ? "auto" : undefined,
      overflowX: isLargeScreen ? "hidden" : undefined,
      transition: `width ${SIDEBAR_TRANSITION}`,
    };

  return (
    <div className="w-full" ref={wrapperRef} style={{ position: "relative" }}>
      <div
        style={wrapperStyle}
        onMouseEnter={() => {
          // Ignore top-edge hover so pin-area interactions do not auto-popout.
          // Expansion still works when entering/living below the top gutter.
        }}
        onMouseMove={(event) => {
          if (
            shouldCollapse &&
            !isCompactScreen &&
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
          ` ${panelWidthClassName} w-full scroll-element pb-8 md:pb-96 rounded-lg shadow-md border border-black/30 overflow-hidden px-1 bg-gray-200`
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

        <AnimatePresence initial={false} mode="wait">
          {isCollapsedView ? (
            <motion.div
              key="collapsed-label"
              className="absolute inset-y-0 right-0 w-10 z-10 flex items-start justify-center pt-14 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.36, delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.28 } }}
            >
              <span
                className="text-xs font-semibold tracking-wide text-black/90"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {t("filters.collapsedTab")}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded-content"
              className="relative md:w-[calc(15rem-10px)] xl:w-[calc(21rem-10px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
