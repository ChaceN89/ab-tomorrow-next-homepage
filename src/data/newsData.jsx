/**
 * @file newsData.jsx
 * @module newsData
 * @desc Contains the data for the news items displayed in the popup on initial site load.
 * 
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 * @see {@link https://react-icons.github.io/react-icons/icons?name=fa | React Icons}
 * 
 * @author Chace Nielson
 * @created Mar 18, 2025
 * @updated Mar 18, 2025
 */

import { FaGlobe, FaBolt, FaCalendarAlt, FaFeather } from "react-icons/fa"; // Import icons

/**
 * List of new updates to be displayed in the popup. Remove items afte they have become irrelevant. as all will be displayed on the site in order
 */
export const newsItems = [
  // {
  //   icon: <FaGlobe className="text-accent text-2xl" />, // Earth icon
  //   title: "New Feature: Interactive Maps!",
  //   description: "Explore wildlife data with our brand new interactive maps.",
  //   link: "https://www.simulator.albertatomorrow.ca/maps",
  // },
  // {
  //   icon: <FaBolt className="text-yellow-400 text-2xl" />, // Lightning icon
  //   title: "Energy Tomorrow Update",
  //   description: "Learn about the latest improvements to our energy simulator.",
  //   link: "https://www.simulator.albertatomorrow.ca/energy",
  // },
  // {
  //   icon: <FaCalendarAlt className="text-black text-2xl" />, // Calendar icon
  //   title: "Upcoming Events",
  //   description: "Join our live webinar on conservation strategies!",
  //   link: "https://www.simulator.albertatomorrow.ca/events",
  // },
  {
    icon: <FaFeather className="text-green-600 text-2xl" />, // Feather icon representing Indigenous heritage
    title: "ALL NEW Indigenous Voices Module",
    description:
      'Featuring Province-wide Map Overlays, “Stoney Stories” videos in both languages, and land use planning using Stoney Nakoda lands and indicators!',
    link: "https://www.simulator.albertatomorrow.ca/indigenous-voices",
  },
];
