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
import SectionHeader from '@/components/common/headers/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import CurriculumDropDown from './CurriculumDropDown';
import HexButton from '@/components/common/hexButton/HexButton';
import { useTranslations } from 'next-intl';

export default function TeacherTools() {
  const t = useTranslations('HomePage.TeacherTools');
  const other = useTranslations('Other');

  const safeT = (key, fallback) => {
    if (!key) return fallback;
    try {
      return t(key);
    } catch (e) {
      return fallback;
    }
  };

  const makeKey = (s) => (s ? String(s).replace(/[^A-Za-z0-9]/g, '') : s);

  // Map key features and resources to translated lists when keys are available
  const keyFeaturesList = keyFeaturesData.list.map((item) => ({
    icon: item.icon,
    text: safeT(item.textKey, '') || item.textKey || ''
  }));

  const teacherResourcesList = teacherResourcesData.list.map((item) => ({
    icon: item.icon,
    text: safeT(item.textKey, '') || item.textKey || ''
  }));

  const curriculumConnectionsList = curriculumConnectionsData.list.map((feature) => ({
    icon: feature.icon,
    text: (
      <CurriculumDropDown
        learningOutcomes={Object.fromEntries(
          Object.entries(feature.items).map(([subject, outcomes]) => {
            const subjectKey = makeKey(subject);
            const label = safeT(`curriculumConnections.subjects.${subjectKey}`, subject);
            const translatedOutcomes = (outcomes || []).map((o) => {
              const key = makeKey(o);
              return safeT(`curriculumConnections.subjects.${key}`, o);
            });
            return [label, translatedOutcomes];
          })
        )}
        title={
          feature.id ? (t(`curriculumConnections.grades.${feature.id}.title`) || feature.title) : feature.title
        }
      />
    ),
  }));

  return (
    <section className="bg-primary">
      <div className="home-section home-y-padding space-y-8">
        <SectionHeader
          title={safeT('title', 'Features and Curriculum Connections')}
          description={t.rich('description1', { Bold: (chunks) => <span className="text-tertiary">{chunks}</span> })}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="space-y-8">
            <NumberedHexList
              featuresList={keyFeaturesList}
              title={safeT(keyFeaturesData.titleKey, 'Key Features')}
            />
            <NumberedHexList
              featuresList={teacherResourcesList}
              title={safeT(teacherResourcesData.titleKey, 'Teacher Dashboard')}
            />
          </div>
          <NumberedHexList
            featuresList={curriculumConnectionsList}
            title={safeT(curriculumConnectionsData.titleKey, 'Course & Curriculum Connections')}
          />
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-6 bg-primary-alt/30 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-5 text-center">
            <HexButton link="https://simulator.albertatomorrow.ca">{other('signUp')}</HexButton>
            <HexButton asLink link="/resources/lesson-plans">{other('lessonPlans')}</HexButton>

          </div>

          {/* Curriculum Guide */}
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="text-sm text-secondary max-w-2xl">
              {safeT('description2', 'There are curriculum links to many other grades and subjects. New lesson plans and materials are continually under development. For a full breakdown of the Alberta Program of Studies Connections and Suggested Activities see the full curriculum guide.')}
            </p>
            <HexButton
              textColor="black"
              color="accent"
              link="https://drive.google.com/file/d/11vSSdwLW5-WPsmBgZje7sfwCij6UEUZG/view"
            >
              {safeT('button', 'Full Curriculum Guide')}
            </HexButton>
          </div>
        </div>
      </div>
    </section>
  );
}
