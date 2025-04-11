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
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scroll

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restore scroll
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className="relative bg-white  border  border-black rounded-lg p-6 shadow-xl w-[90vw] max-w-xl max-h-[90vh] overflow-y-auto "
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-secondary  hover:text-accent hover:cursor-pointer"
        >
          <FaTimes size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}
