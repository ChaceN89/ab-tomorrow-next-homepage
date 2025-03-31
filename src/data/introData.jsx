/**
 * @file introData.js
 * @module introData
 * @desc Contains structured content for the Intro page, including title, description, and media blocks
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import simHistoric from '../assets/simulator-screenshots/sim-8-new-historic.jpg';
import simClimate from '../assets/simulator-screenshots/sim-7-new-climate-planning.jpg';

// To bold text within a paragraph for this data
function BoldText({ children }) {
  return <span className="text-tertiary">{children}</span>;
}


export const introData = {
  title: "Envision a Sustainable Future",
  description: (
    <>
      <p>
        Alberta’s rapid growth has built a strong economy — but it’s also placed pressure on the <BoldText> forests, grasslands, and rivers</BoldText> that sustain it.
      </p>
      <p>
        <BoldText>Alberta Tomorrow</BoldText> is an interactive <BoldText>educational simulator</BoldText> that helps you explore sustainable land-use planning. Compare past and present landscapes, create your own development plans, and analyze the impact of agriculture, oil and gas, forestry, and more. You can even geotag photos, videos, and water data as part of your learning journey.
      </p>
    </>
  ),
  media: [
    {
      type: "video",
      src: "MHDH_m0agFM",
      title: "Award-Winning Education",
      description: (
        <p>
          The <BoldText>Alberta Emerald Foundation </BoldText>recognized Alberta Tomorrow for its impact on sustainability education, emphasizing its role in fostering awareness and understanding of responsible land use and environmental stewardship.
        </p>
      ),
    },
    {
      type: "video",
      src: "Q6-l7HymJTQ",
      title: "Planning for a Better Future",
      description: (
        <p className="space-y-2">
      
          <span>
            It shows how agriculture, oil and gas, and forestry impact the environment over time, using <BoldText>real landscape imagery.</BoldText> Users can also collect and save water data, images, videos, and other field observations.
          </span>
        </p>
      ),
    },
    {
      type: "image",
      src: simHistoric,
      alt: "Historic Landscape Simulation",
      title: "Historic Landscape Simulation",
      description: (
        <p>
          Visualize <BoldText>historical changes</BoldText> in Alberta’s natural landscapes using real imagery. 
        </p>
      ),
    },
    {
      type: "image",
      src: simClimate,
      alt: "Climate Planning Simulation",
      title: "Climate Planning Simulation",
      description: (
        <p>
          See the current landscape in <BoldText>30+ areas in Alberta.</BoldText> Draw your own plan for Alberta and see the potential outcomes! 
        </p>
      ),
    },
  ],
};
