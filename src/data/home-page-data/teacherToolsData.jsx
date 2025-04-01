/**
 * @file teacherToolsData.js
 * @module Data/TeacherTools
 * @desc Provides data used in the Teacher Tools section of the Alberta Tomorrow homepage.
 *       Includes Key Features, Teacher Dashboard Resources, and Curriculum Connections.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

import {
  FaVideo,FaTree, FaLeaf, FaHistory, FaMapMarkedAlt, FaFlask, FaChartLine, FaCloudSunRain, FaGlobeAmericas,
  FaBinoculars, FaMap, FaBalanceScale, FaClipboardList, FaUserCog, FaCogs, FaAtom, FaWater,
  FaMicroscope, FaUserFriends, FaBookOpen
} from "react-icons/fa";

// ======== Key Features ========

export const keyFeaturesData = {
  title: "Key Features",
  list: [
    { icon: <FaVideo />, text: "View videos and discover the potential benefits and impacts of different land-uses and land-use practices in Alberta" },
    { icon: <FaLeaf />, text: "Improve your understanding of Alberta’s ecosystems and environmental resources" },
    { icon: <FaHistory />, text: "See what’s happened in your area in the last century, and see what it might look like 30 years from now" },
    { icon: <FaMapMarkedAlt />, text: "Develop your own plan for Alberta’s future" },
    { icon: <FaFlask />, text: "Track and share water quality and land-use observations with other classes throughout Alberta" },
    { icon: <FaChartLine />, text: "Create and submit reports with project findings" },
    { icon: <FaCloudSunRain />, text: "Explore 3 different climate change scenarios for Alberta’s future, including temperature and precipitation graphs" },
    { icon: <FaGlobeAmericas />, text: "Experience Watersheds, Glaciers and Climate Change with our Guardians of the Ice Video Series" },
    { icon: <FaBinoculars />, text: "View 360 Virtual Tours of Alberta’s Natural Regions including plants, animals, and land use" },
    { icon: <FaMap />, text: "Explore Indigenous Map Overlays for Alberta including Traditional Territories and Treaty Areas" },
    { icon: <FaBalanceScale />, text: "Land use plan using Environmental/Social Economic Indicators or Indigenous Indicators" }
  ]
};

// ======== Teacher Resources ========

export const teacherResourcesData = {
  title: "Teacher Dashboard",
  list: [
    { icon: <FaClipboardList />, text: "Teacher resources including lesson plans and videos" },
    { icon: <FaUserCog />, text: "Control panel interface to manage your students and class observations" }
  ]
};

// ======== Curriculum Connections ========
export const curriculumConnectionsData = {
  title: "Course & Curriculum Connections",
  list: [
    {
      title: "Grade 1",
      items: {
        Science: ["Living Systems"],
        "Social Studies": ["Time and Place"]
      },
      icon: <FaUserFriends />
    },
    {
      title: "Grade 2",
      items: {
        Science: ["Earth Systems", "Living Systems"],
        "Social Studies": ["Time and Place"]
      },
      icon: <FaGlobeAmericas />
    },
    {
      title: "Grade 3",
      items: {
        Science: ["Matter", "Earth Systems", "Living Systems"],
        "Social Studies": ["Social Time and Place"]
      },
      icon: <FaCogs />
    },
    {
      title: "Grade 4",
      items: {
        Science: ["Earth Systems", "Living Systems"]
      },
      icon: <FaTree />
    },
    {
      title: "Grade 5",
      items: {
        Science: ["Energy"],
        "Social Studies": ["Citizenship"]
      },
      icon: <FaAtom />
    },
    {
      title: "Grade 6 Science",
      items: {
        "Energy": [],
        "Earth Systems": [],
        "Living Systems": []
      },
      icon: <FaGlobeAmericas />
    },
    {
      title: "Grade 7 Science",
      items: {
        "Interactions and Ecosystems": [],
        "Plants for Food and Fibre": []
      },
      icon: <FaLeaf />
    },
    {
      title: "Grade 8 Science",
      items: {
        "Freshwater and Saltwater Systems": []
      },
      icon: <FaWater />
    },
    {
      title: "Grade 9",
      items: {
        Science: ["Biological Diversity", "Environmental Chemistry"],
        "Social Studies": ["Governance and Rights", "Economic Systems in Canada"]
      },
      icon: <FaFlask />
    },
    {
      title: "Science 10",
      items: {
        "Energy Flow in Global Systems": []
      },
      icon: <FaAtom />
    },
    {
      title: "Science 20",
      items: {
        "Chemical Change": [],
        "Change in Living Systems": [],
        "Chemistry and the Environment": []
      },
      icon: <FaMicroscope />
    },
    {
      title: "Biology 20",
      items: {
        "Energy and Matter Exchange in the Biosphere": []
      },
      icon: <FaLeaf />
    },
    {
      title: "CTS",
      items: {
        "Agriculture": [],
        "Environmental Studies": [],
        "Forestry": [],
        "Primary Resources": [],
        "Wildlife": []
      },
      icon: <FaClipboardList />
    },
    {
      title: "Post-Secondary",
      items: {
        "Environmental Studies": [],
        "Urban/Rural Planning": [],
        "Biology": [],
        "Ecology": []
      },
      icon: <FaClipboardList />
    },

  ]
};
