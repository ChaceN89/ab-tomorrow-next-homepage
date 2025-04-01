/**
 * @file TeacherTools.jsx
 * @module Home/TeacherTools
 * @desc Section showcasing key features, teacher resources, and curriculum connections for the Alberta Tomorrow simulator.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

import React from 'react';
import { keyFeaturesData, teacherResourcesData, curriculumConnectionsData } from '@/data/home-page-data/teacherToolsData';
import SectionHeader from '@/components/common/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import CurriculumDropDown from './CurriculumDropDown';
import HexButton from '@/components/common/hexButton/HexButton';

export default function TeacherTools() {
  // Generate list with dropdown for curriculum connections
  const curriculumConnectionsList = curriculumConnectionsData.list.map((feature) => ({
    icon: feature.icon,
    text: (
      <CurriculumDropDown
        learningOutcomes={feature.items}
        title={feature.title || "Curriculum"}
      />
    ),
  }));

  return (
    <section className="bg-primary">
      <div className="home-section home-y-padding space-y-8">
        <SectionHeader
          title="Features and Curriculum Connections"
          description="The Alberta Tomorrow Simulator is a powerful tool for teaching about land use, climate change, and the environment. It is designed to be used in a variety of subjects and grades, and is aligned with the Alberta Program of Studies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4">
          <div className="space-y-16">
            <NumberedHexList
              featuresList={keyFeaturesData.list}
              title={keyFeaturesData.title}
            />
            <NumberedHexList
              featuresList={teacherResourcesData.list}
              title={teacherResourcesData.title}
            />
          </div>
          <NumberedHexList
            featuresList={curriculumConnectionsList}
            title={curriculumConnectionsData.title}
          />
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-6 bg-tertiary-alt/30 border border-accent-alt/30 backdrop-blur-3xl rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-5 text-center">
            <HexButton link="https://simulator.albertatomorrow.ca">Sign Up</HexButton>
            <HexButton asLink link="/resources/lesson-plans">Lesson Plans</HexButton>

          </div>

          {/* Curriculum Guide */}
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="text-sm text-secondary max-w-2xl">
              There are curriculum links to many other grades and subjects. New lesson plans and materials are continually under development. For a full breakdown of the Alberta Program of Studies Connections and Suggested Activities see the full curriculum guide.
            </p>
            <HexButton
              textColor="black"
              color="accent"
              link="https://drive.google.com/file/d/11vSSdwLW5-WPsmBgZje7sfwCij6UEUZG/view"
            >
              Full Curriculum Guide
            </HexButton>
          </div>
        </div>
      </div>
    </section>
  );
}
