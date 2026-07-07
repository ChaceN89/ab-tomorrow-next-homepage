/**
 * @file NavDropdown.jsx
 * @module NavDropdown
 * @description 
 *   A dropdown menu component for the navigation bar. Displays a toggleable menu 
 *   with dynamic items, supporting localized navigation links.
 *
 * @props {Array} items - Dropdown items containing labelKey, icon, href, router, or scrollTo.
 * @props {string} titleKey - Translation key for the dropdown title.
 * @props {string} translationNamespace - Translation namespace for the dropdown title and item labels.
 * @props {boolean} [openToLeft=false] - If true, aligns the dropdown to the right.
 *
 * @author Chace Nielson
 * @created 2025-01-10
 * @updated July 7, 2026 - set up translations
 */

import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import LinkItem from "./LinkItem";
import { dropdownVariants } from "@/data/navData";

export default function NavDropdown({ items, titleKey, translationNamespace, openToLeft = false }) {
  const t = useTranslations(translationNamespace);

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropRef = useRef(null);
  const boundaryValue = 100;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const isMouseOutOfBounds = (rect, mouseX, mouseY) => {
    if (!rect) return true;

    return (
      mouseX < rect.left - boundaryValue ||
      mouseX > rect.right + boundaryValue ||
      mouseY < rect.top - 10 ||
      mouseY > rect.bottom + boundaryValue
    );
  };

  const handleMouseLeave = (event) => {
    const btnRect = btnRef.current?.getBoundingClientRect();
    const dropRect = dropRef.current?.getBoundingClientRect();
    const { clientX: mouseX, clientY: mouseY } = event;

    if (isMouseOutOfBounds(btnRect, mouseX, mouseY) && isMouseOutOfBounds(dropRect, mouseX, mouseY)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousemove", handleMouseLeave);
    } else {
      document.removeEventListener("mousemove", handleMouseLeave);
    }

    return () => document.removeEventListener("mousemove", handleMouseLeave);
  }, [isOpen]);

  return (
    <div className="relative w-auto">
      <button
        ref={btnRef}
        onClick={toggleDropdown}
        className="w-full flex items-center whitespace-nowrap"
      >
        <span className="relative z-10 flex items-center nav-element-default nav-element-default-hover">
          {t(titleKey)}
          <FaChevronRight
            size={12}
            className={`transition-transform duration-400 ${isOpen ? "rotate-90 translate-0.5" : "rotate-0"}`}
          />
        </span>
      </button>

      {isOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            ref={dropRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className={`absolute ${openToLeft ? "right-0" : "left-0"} nav-dropdown-background`}
          >
            {items.map((item, index) => (
              <div
                key={item.labelKey || index}
                className={`nav-dropdown-cell ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${index === items.length - 1 ? "rounded-b-lg" : ""}`}
              >
                <LinkItem
                  href={item.href}
                  router={item.router}
                  scrollTo={item.scrollTo}
                  disableActive
                  className="nav-dropdown-cell"
                >
                  <div className="nav-dropdown-item">
                    {item.icon}
                    {item.labelKey ? t(item.labelKey) : item.label}
                  </div>
                </LinkItem>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}