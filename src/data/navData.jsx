/**
 * @file navData.jsx
 * @module navData
 * @desc Nav Data.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Mar 21, 2025
 * @updated Mar 21, 2025
 * 
 */
import { FaVideo, FaBolt, FaBookOpen,FaUserPlus, FaMapMarkedAlt, FaClipboardList  } from "react-icons/fa";
import { GiFlatPawPrint } from "react-icons/gi";

import { FaQuestionCircle } from "react-icons/fa";     // FAQs
import { FaUsers } from "react-icons/fa";              // Board of Directors
import { FaHandshake } from "react-icons/fa";          // Partners
import { FaCalendarAlt } from "react-icons/fa";        // Events
import { FaEnvelope } from "react-icons/fa";           // Contact

import { FaHome, FaInfoCircle, FaWrench, FaGraduationCap } from "react-icons/fa";

// for drops downs and nav bar mobile verison 
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
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// the donate button infoamtion 
export const donateInfo = {
  title: "Donate",
  altTitle: "Make A Donation",
  href: "https://www.canadahelps.org/en/dn/60256?v2=true"
}

export const extraPages =[
  {label: "Sign Up", icon: <FaUserPlus />, href: "https://www.simulator.albertatomorrow.ca/" },
  { label: "Privacy Policy", icon: <FaEnvelope />, router: "/Privacy-Policy" },
  { label: "Terms of Use", icon: <FaEnvelope />, router: "/Terms-of-Use" },
]


//all the links that scroll on the home page
export const scrollLinks = [
  { label: "Home", scrollTo: "hero", icon: <FaHome /> },
  { label: "Intro", scrollTo: "intro", icon: <FaBookOpen /> },
  { label: "Tool Overview", scrollTo: "tools", icon: <FaWrench /> },
  { label: "Education", scrollTo: "education", icon: <FaGraduationCap /> },
  { label: "About", scrollTo: "about", icon: <FaInfoCircle /> },
];

// the tools drop down to external links
export const toolsDropDown = {
  title: "Tools",
  list:[
    {label: "Land Use Simulator", icon: <FaMapMarkedAlt />, href: "https://www.simulator.albertatomorrow.ca" },
    {label: "Energy Tomorrow", icon: <FaBolt />, href: "https://www.youtube.com/watch?v=Uca8En3ZHH0" },
    {label: "Wildlife Tomorrow", icon: <GiFlatPawPrint />, href: "https://www.simulator.albertatomorrow.ca" },
    {label: "Videos", icon: <FaVideo />, href: "https://www.simulator.albertatomorrow.ca/#/dashboard/videos" },
    {label: "Lesson Plans", icon: <FaClipboardList />, href: "https://www.simulator.albertatomorrow.ca/#/lesson-plans" },
  ]
}

// the learn more drop down to other pages
export const learnMoreDropDown = {
  title: "Learn More",
  list:[
    { label: "FAQs", icon: <FaQuestionCircle />, router: "/FAQs" },
    { label: "Board of Directors", icon: <FaUsers />, router: "/Board-of-Directors" },
    { label: "Partners", icon: <FaHandshake />, router: "/Partners" },
    { label: "Events", icon: <FaCalendarAlt />, router: "/Events" },
    { label: "Contact", icon: <FaEnvelope />, router: "/Contact" },
  ]
}
