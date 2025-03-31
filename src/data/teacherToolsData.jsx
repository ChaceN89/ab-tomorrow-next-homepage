import {
  FaVideo,
  FaLeaf,
  FaHistory,
  FaMapMarkedAlt,
  FaFlask,
  FaChartLine,
  FaCloudSunRain,
  FaGlobeAmericas,
  FaBinoculars,
  FaMap,
  FaBalanceScale,
  FaClipboardList,
  FaUserCog,
  FaCogs,
  FaAtom,
  FaWater,
  FaMicroscope,
  FaUserFriends,
  FaBookOpen,
  FaTree,
} from 'react-icons/fa';

// The key features
export const keyFeatures = [
  {
    icon: <FaVideo />,
    text: "View videos and discover the potential benefits and impacts of different land-uses and land-use practices in Alberta",
  },
  {
    icon: <FaLeaf />,
    text: "Improve your understanding of Alberta’s ecosystems and environmental resources",
  },
  {
    icon: <FaHistory />,
    text: "See what’s happened in your area in the last century, and see what it might look like 30 years from now",
  },
  {
    icon: <FaMapMarkedAlt />,
    text: "Develop your own plan for Alberta’s future",
  },
  {
    icon: <FaFlask />,
    text: "Track and share water quality and land-use observations with other classes throughout Alberta",
  },
  {
    icon: <FaChartLine />,
    text: "Create and submit reports with project findings",
  },
  {
    icon: <FaCloudSunRain />,
    text: "Explore 3 different climate change scenarios for Alberta’s future, including temperature and precipitation graphs",
  },
  {
    icon: <FaGlobeAmericas />,
    text: "Experience Watersheds, Glaciers and Climate Change with our Guardians of the Ice Video Series featuring the Athabasca Glacier and University of Alberta’s Ice Core Lab and our 360 Videos of the Bow River Watershed",
  },
  {
    icon: <FaBinoculars />,
    text: "View 360 Virtual Tours of Alberta’s Natural Regions including plants, animals, climate, landforms, geography and land use",
  },
  {
    icon: <FaMap />,
    text: "Explore Indigenous Map Overlays for Alberta including Traditional Territories, Treaty Areas, Traditional Languages, Metis Regions, Settlements and Reserves and Residential School Locations",
  },
  {
    icon: <FaBalanceScale />,
    text: "Land use plan using either Environmental/Social Economic Indicators or Indigenous Indicators for Watershed Study Areas or Traditional Lands",
  }
];

// for teachers
export const teacherResources = [
  {
    icon: <FaClipboardList />,
    text: "Teacher resources including lesson plans and videos",
  },
  {
    icon: <FaUserCog />,
    text: "Control panel interface to manage your students and class observations",
  }
];

// Course and Curriculum Connections
export const curriculumConnections = [
  {
    title: "Grade 1 Science",
    items: ["Living Systems"],
    icon: <FaLeaf />,
  },
  {
    title: "Grade 2 Science",
    items: ["Earth Systems", "Living Systems"],
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Grade 3 Science",
    items: ["Matter", "Earth Systems", "Living Systems"],
    icon: <FaCogs />,
  },
  {
    title: "Grade 4 Science",
    items: ["Earth Systems", "Living Systems"],
    icon: <FaTree />,
  },
  {
    title: "Grade 5 Science",
    items: ["Energy",],
    icon: <FaAtom />,
  },
  {
    title: "Grade 6 Science",
    items: ["Energy", "Earth Systems", "Living Systems"],
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Grade 7 Science",
    items: ["Interactions and Ecosystems", "Plants for Food and Fibre"],
    icon: <FaLeaf />,
  },
  {
    title: "Grade 8 Science",
    items: ["Freshwater and Saltwater Systems"],
    icon: <FaWater />,
  },
  {
    title: "Science 9",
    items: ["Biological Diversity", "Environmental Chemistry"],
    icon: <FaFlask />,
  },
  {
    title: "Science 10",
    items: ["Energy Flow in Global Systems"],
    icon: <FaAtom />,
  },
  {
    title: "Science 20",
    items: ["Chemical Change", "Change in Living Systems", "Chemistry and the Environment"],
    icon: <FaMicroscope />,
  },
  {
    title: "Biology 20",
    items: ["Energy and Matter Exchange in the Biosphere"],
    icon: <FaLeaf />,
  },
  {
    title: "CTS",
    items: ["Agriculture", "Environmental Studies", "Forestry", "Primary Resources", "Wildlife"],
    icon: <FaClipboardList />,
  },
  {
    title: "Social Studies 9",
    items: ["Issues for Canadians: Governance and Rights", "Economic Systems in Canada"],
    icon: <FaBalanceScale />,
  },
  {
    title: "Grade 1 Social Studies",
    items: ["Time and Place"],
    icon: <FaUserFriends />,
  },
  {
    title: "Grade 2 Social Studies",
    items: ["Time and Place",],
    icon: <FaUserFriends />,
  },
  {
    title: "Grade 3 Social Studies",
    items: ["Social Time and Place"],
    icon: <FaBookOpen />,
  },
  {
    title: "Grade 5 Social Studies",
    items: ["Citizenship"],
    icon: <FaBalanceScale />,
  },
];
