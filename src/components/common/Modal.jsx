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
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import SlideTransition from "../animations/SlideTransition";

export default function Modal({ children, onClose }) {
  const modalRef = useRef(null);


  const [isVisible, setIsVisible] = useState(true); // Modal visibility state


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsVisible(false); // First trigger animation
      setTimeout(() => onClose(), 500); // Match SlideTransition duration
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 500); // Match SlideTransition duration
  };

  
  return (
    <div
      className="fixed inset-0 z-[9990] flex justify-center items-end  bg-black/50 overflow-y-auto h-full w-full overflow-hidden min-w-screen min-h-screen"
      onClick={handleOverlayClick}
    >    
      <AnimatePresence>
        {isVisible && (
          <SlideTransition
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
              className="relative bg-white border border-black rounded-lg p-4 shadow-xl w-full 
              mb-2
              min-w-[90vw] 
              max-w-[92vw] max-h-[90vh]

              md:min-w-[95vw] md:min-h-[80vh]
              md:max-w-[95vw] md:max-h-[86vh]

                              lg:min-h-[80vh]
                              lg:max-h-[90vh]
               overflow-y-auto custom-scrollbar
              "
            >
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-2 right-2 text-secondary hover:text-accent hover:cursor-pointer"
              >
                <FaTimes size={22} />
              </button>
              {children}
            </div>
          </SlideTransition>
        )}
      </AnimatePresence>
    </div>
  );
}