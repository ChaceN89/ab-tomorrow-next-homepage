/**
 * @file Modal.jsx
 * @module UI/General/Modal
 * @desc A reusable and accessible modal component for overlays and popups.
 *
 * @features
 * - Closes on Escape key press
 * - Closes on overlay (outside) click
 * - Optional close button
 * - Responsive & accessible design
 *
 * @props {React.ReactNode} children - Modal content
 * @props {Function} onClose - Callback triggered when modal is dismissed
 *
 * @example
 * <Modal onClose={() => setShow(false)}>
 *   <h2>Title</h2>
 *   <p>Body content...</p>
 * </Modal>
 * 
 * @see {@link https://react-icons.github.io/react-icons/ | react-icons}
 * 
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Apr 11, 2025
 */

"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import SlideTransition from "../layout/scroll/SlideTransition";

export default function Modal({ children, onClose, TopBackGroundClass, Title, HeaderAction = null }) {
  const modalRef = useRef(null);
  const closeTimerRef = useRef(null);
  const isClosingRef = useRef(false);

  const [isVisible, setIsVisible] = useState(true); // Modal visibility state

  const beginClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    setIsVisible(false);
    closeTimerRef.current = setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") beginClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      document.body.style.overflow = previousOverflow;
    };
  }, [beginClose]);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      beginClose();
    }
  };

  const handleClose = () => {
    beginClose();
  };


  return (
    <div
      className={`fixed inset-0 z-[9990] flex items-center justify-center overflow-hidden pt-14 pb-4 md:pt-24 lg:pt-16 transition-colors duration-500 ${isVisible ? "bg-black/50" : "bg-black/0 pointer-events-none"}`}
      onClick={handleOverlayClick}
    >
      <AnimatePresence>
        {isVisible && (
          <SlideTransition
            className="h-full"
            enter="right" // Slide in from the right
            exit="left"   // Slide out to the left
            duration={0.5} // Match the timeout duration
            translationDist={800} // Customize the slide distance
            delay={0.2} // Optional: Customize the delay
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              className="relative flex h-full max-h-full flex-col bg-white border-2 border-black rounded-lg shadow-xl w-full
              min-w-[85vw] 
              max-w-[94vw] md:max-w-[92vw]
               overflow-hidden
              "
            >
              <div className={`sticky top-0 z-20 border-b border-black/30 bg-primary/50 px-2 py-2 ${TopBackGroundClass || ""}`}>
                <div className="relative flex min-h-8 items-center justify-center gap-2">
                  {HeaderAction ? (
                    <div className="absolute left-0">{HeaderAction}</div>
                  ) : null}

                  {Title ? (
                    <h2 className="px-12 text-center text-sm font-semibold uppercase tracking-wide text-black/85">
                      {Title}
                    </h2>
                  ) : null}

                  <button
                    onClick={handleClose}
                    aria-label="Close modal"
                    className="absolute right-0 inline-flex h-8 w-8 items-center justify-center rounded-full text-secondary transition-colors hover:cursor-pointer hover:bg-black/20 hover:text-accent"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto scroll-element p-4">
                {children}
              </div>
            </div>
          </SlideTransition>
        )}
      </AnimatePresence>
    </div>
  );
}