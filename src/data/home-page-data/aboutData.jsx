/**
 * @file aboutData.js
 * @module Data/About
 * @desc Provides the content and key features used on the Alberta Tomorrow About page.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

import { FaFlask, FaHandshake, FaChalkboardTeacher } from 'react-icons/fa';

// get involved section data/ our story section
export const OurStoryData = {
  title: "Be Part of Our Story",
  description:"Join us in shaping Alberta's future. Together, we can make a difference. Download our sponsorship package today to learn more about becoming a partner.",
}

// about section data
export const aboutData = {
  title: "About Alberta Tomorrow",
  description:
    "Alberta Tomorrow was originally created in 2005 by Matthew Carlson and Dr. Brad Stelfox of the ALCES group. Since then, Alberta Tomorrow has been used extensively by teachers and students throughout Alberta.",
  content: [
    "Alberta Tomorrow is critically reviewed and bias-neutral. Continued development is overseen by a steering committee comprised of representatives from industry, non-profits, and government. The application is:",
    "The Alberta Tomorrow program is overseen by the Alberta Tomorrow Foundation, a registered charity in Canada. The Foundation's Board of Directors includes representatives from the education, non-profit, government, and industry sectors.",
  ],
  buttonText: "Meet the Board of Directors",
  buttonLink: "/board-of-directors",
  mission:
    "To deliver a platform that empowers youth to design and sustain a future for our shared ecosystem.",
  vision: "An informed society actively fostering sustainable futures.",
  keyFeatures: [
    {
      icon: <FaFlask />,
      text: <p><span className="font-semibold">Peer</span> reviewed by qualified scientists</p>,
    },
    {
      icon: <FaHandshake />,
      text: <p><span className="font-semibold">Endorsed</span> by environmentally focused non-profits, industry, and government</p>,
    },
    {
      icon: <FaChalkboardTeacher />,
      text: "Teacher tested",
    },
  ],
};
