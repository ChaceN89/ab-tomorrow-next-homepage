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
  FaVideo, FaTree, FaLeaf, FaHistory, FaMapMarkedAlt, FaFlask, FaChartLine, FaCloudSunRain, FaGlobeAmericas,
  FaBinoculars, FaMap, FaBalanceScale, FaClipboardList, FaUserCog, FaCogs, FaAtom, FaWater,
  FaMicroscope, FaUserFriends, FaBookOpen
} from "react-icons/fa";

// ======== Key Features ========

export const keyFeaturesData = {
  // translation key: `HomePage.TeacherTools.keyFeatures.title`
  titleKey: 'keyFeatures.title',
  list: [
    { icon: <FaVideo />, textKey: 'keyFeatures.items.videosAndLandUsePractices' },
    { icon: <FaLeaf />, textKey: 'keyFeatures.items.ecosystemsAndResources' },
    { icon: <FaHistory />, textKey: 'keyFeatures.items.pastAndFutureLandscapes' },
    { icon: <FaMapMarkedAlt />, textKey: 'keyFeatures.items.futurePlan' },
    { icon: <FaFlask />, textKey: 'keyFeatures.items.waterQualityAndObservations' },
    { icon: <FaChartLine />, textKey: 'keyFeatures.items.reports' },
    { icon: <FaCloudSunRain />, textKey: 'keyFeatures.items.climateScenarios' },
    { icon: <FaGlobeAmericas />, textKey: 'keyFeatures.items.guardiansOfTheIce' },
    { icon: <FaBinoculars />, textKey: 'keyFeatures.items.naturalRegionsVirtualTours' },
    { icon: <FaMap />, textKey: 'keyFeatures.items.indigenousMapOverlays' },
    { icon: <FaBalanceScale />, textKey: 'keyFeatures.items.indicators' }
  ]
};

// ======== Teacher Resources ========

export const teacherResourcesData = {
  titleKey: 'teacherDashboard.title',
  list: [
    { icon: <FaClipboardList />, textKey: 'teacherDashboard.resources' },
    { icon: <FaUserCog />, textKey: 'teacherDashboard.controlPanel' }
  ]
};

// ======== Curriculum Connections ========
export const curriculumConnectionsData = {
  // title uses `curriculumConnections.title` under translations
  titleKey: 'curriculumConnections.title',
  list: [
    {
      id: 'grade1',
      title: 'Grade 1',
      items: {
        Science: ["Living Systems"],
        "Social Studies": ["Time and Place"]
      },
      icon: <FaUserFriends />
    },
    {
      id: 'grade2',
      title: 'Grade 2',
      items: {
        Science: ["Earth Systems", "Living Systems"],
        "Social Studies": ["Time and Place"]
      },
      icon: <FaGlobeAmericas />
    },
    {
      id: 'grade3',
      title: 'Grade 3',
      items: {
        Science: ["Matter", "Earth Systems", "Living Systems"],
        "Social Studies": ["Social Time and Place"]
      },
      icon: <FaCogs />
    },
    {
      id: 'grade4',
      title: 'Grade 4',
      items: {
        Science: ["Earth Systems", "Living Systems"]
      },
      icon: <FaTree />
    },
    {
      id: 'grade5',
      title: 'Grade 5',
      items: {
        Science: ["Energy"],
        "Social Studies": ["Citizenship"]
      },
      icon: <FaAtom />
    },
    {
      id: 'grade6',
      title: 'Grade 6 Science',
      items: {
        "Energy": [],
        "Earth Systems": [],
        "Living Systems": []
      },
      icon: <FaGlobeAmericas />
    },
    {
      id: 'grade7',
      title: 'Grade 7 Science',
      items: {
        "Interactions and Ecosystems": [],
        "Plants for Food and Fibre": []
      },
      icon: <FaLeaf />
    },
    {
      id: 'grade8',
      title: 'Grade 8 Science',
      items: {
        "Freshwater and Saltwater Systems": []
      },
      icon: <FaWater />
    },
    {
      id: 'grade9',
      title: 'Grade 9',
      items: {
        Science: ["Biological Diversity", "Environmental Chemistry"],
        "Social Studies": ["Governance and Rights", "Economic Systems in Canada"]
      },
      icon: <FaFlask />
    },
    {
      id: 'science10',
      title: 'Science 10',
      items: {
        "Energy Flow in Global Systems": []
      },
      icon: <FaAtom />
    },
    {
      id: 'science20',
      title: 'Science 20',
      items: {
        "Chemical Change": [],
        "Change in Living Systems": [],
        "Chemistry and the Environment": []
      },
      icon: <FaMicroscope />
    },
    {
      id: 'biology20',
      title: 'Biology 20',
      items: {
        "Energy and Matter Exchange in the Biosphere": []
      },
      icon: <FaLeaf />
    },
    {
      id: 'cts',
      title: 'CTS',
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
      id: 'postSecondary',
      title: 'Post-Secondary',
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
