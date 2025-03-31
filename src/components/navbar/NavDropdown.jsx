/**
 * @file NavDropdown.jsx
 * @module NavDropdown
 * @description 
 *   A dropdown menu component for the navigation bar. Displays a toggleable menu 
 *   with dynamic items, supporting both navigation links and logout actions. 
 *   Includes mouse-out boundary detection for closing the dropdown menu.
 *
 * @example
 *   <NavDropdown items={[
 *     { label: "Profile", icon: <FaUser />, href: "/profile" },
 *     { label: "Logout", icon: <FaSignOutAlt />, logoutAction: true, action: handleLogout }
 *   ]} />
 *
 * @author Chace Nielson
 * @created 2025-01-10
 * @updated 2025-03-21
 */

import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import LinkItem from "./LinkItem";
import { motion, AnimatePresence } from "framer-motion";
import { dropdownVariants } from "../../data/navData";


export default function NavDropdown({ items, title, openToLeft = false }){

  // References 
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropRef = useRef(null);
  const boundaryValue = 200;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const isMouseOutOfBounds = (rect, mouseX, mouseY) => {
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
      {/* Toggle Button */}
      <button
        ref={btnRef}
        onClick={toggleDropdown}
        className=" w-full flex items-center whitespace-nowrap"
      >
        <span className="relative z-10 flex items-center nav-element-default nav-element-default-hover">
          {title}
          <FaChevronRight
            size={12}
            className={`transition-transform duration-400 ${isOpen ? "rotate-90 translate-0.5" : "rotate-0"}`}
          />
        </span>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <AnimatePresence mode="watch">
          <motion.div
            ref={dropRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className={`absolute ${openToLeft ? "right-0" : "left-0"} nav-dropdown-background `}
            >
            {items.map((item, index) => (
              <div
                key={index}
                className={`nav-dropdown-cell ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${index === items.length - 1 ? "rounded-b-lg" : ""}`}
              >
                <LinkItem
                  href={item.href}
                  router={item.router}
                  scrollTo={item.scrollTo}
                  disableActive // no active styles needed in dropdown
                  className="nav-dropdown-cell" // this applies the hover background etc.
                >
                  <div className="nav-dropdown-item ">
                    {item.icon}
                    {item.label}
                  </div>
                </LinkItem>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};