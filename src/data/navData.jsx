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

// Icons
import {
  FaVideo,
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
  href: "https://www.canadahelps.org/en/dn/60256?v2=true"
};

// Extra links at the footer
export const extraPages = [
  { labelKey: "signUp", icon: <FaUserPlus />, href: "https://www.simulator.albertatomorrow.ca/" },
  { labelKey: "privacyPolicy", icon: <FaEnvelope />, router: "/privacy-policy" },
  { labelKey: "termsOfUse", icon: <FaEnvelope />, router: "/terms-of-use" },
];


export const educationTools = [
  { labelKey: "landUseSimulator", icon: <FaMapMarkedAlt />, href: "https://www.simulator.albertatomorrow.ca" },
  // { label: "Energy Tomorrow", scrollTo: "tools", icon: <FaBolt /> },
  // { label: "Wildlife Tomorrow", scrollTo: "tools", icon: <GiFlatPawPrint /> },
];

// Scroll Links in the home page
export const scrollLinks = [
  { labelKey: "home", scrollTo: "hero", icon: <FaHome /> },
  { labelKey: "intro", scrollTo: "intro", icon: <FaBookOpen /> },
  { labelKey: "tools", scrollTo: "tools", icon: <FaWrench /> },
  { labelKey: "education", scrollTo: "education", icon: <FaGraduationCap /> },
  { labelKey: "about", scrollTo: "about", icon: <FaInfoCircle /> },
];

// the tools drop down to external links
export const toolsDropDown = {
  titleKey: "label",
  translationNamespace: "NavBar.resources",
  list: [
    ...educationTools,
    { labelKey: "lessonPlans", icon: <FaClipboardList />, router: "/resources/lesson-plans" },
    { labelKey: "videos", icon: <FaVideo />, router: "/resources/videos" },
  ]
};

// the learn more drop down to other pages
export const learnMoreDropDown = {
  titleKey: "label",
  translationNamespace: "NavBar.learnMore",
  list: [
    { labelKey: "faqs", icon: <FaQuestionCircle />, router: "/faqs" },
    { labelKey: "boardOfDirectors", icon: <FaUsers />, router: "/board-of-directors" },
    { labelKey: "partners", icon: <FaHandshake />, router: "/our-partners" },
    // { labelKey: "events", icon: <FaCalendarAlt />, router: "/events" }, // removing the evnts page 
    { labelKey: "contact", icon: <FaEnvelope />, router: "/contact" },
  ]
};