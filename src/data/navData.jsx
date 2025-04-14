/**
 * @file navData.jsx
 * @module data/navData
 * @desc Navigation and dropdown data for Alberta Tomorrow website.
 *       Includes scrollable home page links, dropdown menu items, external resource links, and donation link.
 *       Also includes Framer Motion dropdown animation variants.
 *
 * @structure
 * - scrollLinks: Array of in-page navigation links (uses scroll).
 * - toolsDropDown: Dropdown list for external learning tools.
 * - learnMoreDropDown: Dropdown list for informational pages.
 * - extraPages: Miscellaneous links such as Terms and Privacy.
 * - donateInfo: Data for the donation button.
 * - dropdownVariants: Framer Motion animation config for dropdowns.
 *
 * @example
 * {
 *   label: "Home",
 *   scrollTo: "hero",
 *   icon: <FaHome />
 * }
 *
 * @author Chace Nielson
 * @created Mar 21, 2025
 * @updated April 1st, 2025
 */

// icons
// Icons
import {
  FaVideo,
  FaBolt,
  FaBookOpen,
  FaUserPlus,
  FaMapMarkedAlt,
  FaClipboardList,
  FaQuestionCircle,
  FaUsers,
  FaHandshake,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaWrench,
  FaGraduationCap
} from "react-icons/fa";

import { GiFlatPawPrint } from "react-icons/gi";

// for drops downs associated with the navbar (dropdowns and mobile dropdown)
export const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

// the donate button info (in nav and footer) 
export const donateInfo = {
  title: "Donate",
  altTitle: "Make A Donation",
  href: "https://www.canadahelps.org/en/dn/60256?v2=true"
}

// Extra links at the footer
export const extraPages =[
  { label: "Sign Up ", icon: <FaUserPlus />, href: "https://www.simulator.albertatomorrow.ca/" },
  { label: "Privacy Policy", icon: <FaEnvelope />, router: "/privacy-policy" },
  { label: "Terms of Use", icon: <FaEnvelope />, router: "/terms-of-use" },
]

export const educationTools = [
  { label: "Land Use Simulator", icon: <FaMapMarkedAlt />, href: "https://www.simulator.albertatomorrow.ca" },
  { label: "Energy Tomorrow", scrollTo: "tools", icon: <FaBolt /> },
  { label: "Wildlife Tomorrow", scrollTo: "tools", icon: <GiFlatPawPrint /> },
];

// Scroll Links in the home page
export const scrollLinks = [
  { label: "Home", scrollTo: "hero", icon: <FaHome /> },
  { label: "Intro", scrollTo: "intro", icon: <FaBookOpen /> },
  { label: "Tools", scrollTo: "tools", icon: <FaWrench /> },
  { label: "Education", scrollTo: "education", icon: <FaGraduationCap /> },
  { label: "About", scrollTo: "about", icon: <FaInfoCircle /> },
];

// the tools drop down to external links
export const toolsDropDown = {
  title: "Resources",
  list:[
    {label: "Lesson Plans", icon: <FaClipboardList />, router: "/resources/lesson-plans" },
    {label: "Videos", icon: <FaVideo />, router: "/resources/videos" },
    ...educationTools,
  ]
}

// the learn more drop down to other pages
export const learnMoreDropDown = {
  title: "Learn More",
  list:[
    { label: "FAQs", icon: <FaQuestionCircle />, router: "/faqs" },
    { label: "Board of Directors", icon: <FaUsers />, router: "/board-of-directors" },
    { label: "Partners", icon: <FaHandshake />, router: "/our-partners" },
    { label: "Events", icon: <FaCalendarAlt />, router: "/events" },
    { label: "Contact", icon: <FaEnvelope />, router: "/contact" },
  ]
}