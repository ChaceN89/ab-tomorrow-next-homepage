/**
 * @file interactiveToolsData.jsx
 * @module interactiveToolsData
 * @desc Contains metadata for Alberta Tomorrow's interactive tools, including title, icon, status, description, and external link.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import EnergyTomorrowLogo from '../assets/tool-logos/energy-tomorrow-logo.png';
import SimulatorLogo from '../assets/site-logos/logo-lg.png';
import WildlifeTomorrowLogo from '../assets/tool-logos/wildlife-tomorrow-logo.png';

export const interactiveToolsData = [
  {
    name: 'Land Use Simulator',
    icon: SimulatorLogo,
    description: 'Explore how land use decisions impact Alberta’s landscapes. Compare past and present, create custom development plans, and analyze the effects of agriculture, oil & gas, forestry, and more.',
    link: 'https://www.simulator.albertatomorrow.ca',
    buttonText: 'Try the Simulator',
  },
  {
    name: 'Energy Tomorrow',
    icon: EnergyTomorrowLogo,
    description: 'Learn how energy production impacts Alberta’s economy and environment.',
    inDevelopment: true,
    link: null,
    buttonText: 'Coming Soon',
  },
  {
    name: 'Wildlife Tomorrow',
    icon: WildlifeTomorrowLogo,
    description: 'Explore conservation efforts and the impact of land use on Alberta’s wildlife.',
    inDevelopment: true,
    link: null,
    buttonText: 'Coming Soon',
  },
];
