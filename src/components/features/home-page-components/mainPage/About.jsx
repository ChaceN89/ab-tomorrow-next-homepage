/**
 * @file About.jsx
 * @module Home/About
 * @desc About section detailing Alberta Tomorrow’s history, mission, vision, and key features.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import HexButton from '@/components/common/hexButton/HexButton';
import { aboutData } from '@/data/home-page-data/aboutData';

export default function About() {
  return (
    <section className="bg-accent  pb-2">
      <div className="home-section home-y-padding space-y-10">

        <SectionHeader
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className="space-y-4 text-lg leading-relaxed">
          <p>{aboutData.content[0]}</p>

          <div className="p-4 bg-accent-alt/40 rounded-xl">
            <NumberedHexList featuresList={aboutData.keyFeatures} />
          </div>

          <p>{aboutData.content[1]}</p>

          <div className="mt-4 flex justify-center">
            <HexButton asLink link={aboutData.buttonLink}>
              {aboutData.buttonText}
            </HexButton>
          </div>

        </div>

        <div className="space-y-2 mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-secondary-alt">Mission:</h3>
            <p className="text-lg">{aboutData.mission}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary-alt">Vision:</h3>
            <p className="text-lg">{aboutData.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
