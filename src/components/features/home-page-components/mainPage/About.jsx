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
import SectionHeader from '@/components/common/headers/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import HexButton from '@/components/common/hexButton/HexButton';
import { aboutData } from '@/data/home-page-data/aboutData';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('HomePage.About');

  const richTextComponents = {
    Bold: (chunks) => (
      <span className="font-semibold">
        {chunks}
      </span>
    ),
  };

  const featuresList = aboutData.keyFeatures.map((f) => ({ icon: f.icon, text: t.rich(f.textKey, richTextComponents) }));

  return (
    <section className="bg-accent  pb-2">
      <div className="home-section home-y-padding space-y-10">

        <SectionHeader
          title={t(aboutData.titleKey)}
          description={t.rich(aboutData.description1Key, { Bold: (chunks) => <span className="text-tertiary">{chunks}</span> })}
        />

        <div className="space-y-4 text-lg leading-relaxed">
          <p>{t(aboutData.description2Key)}</p>

          <div className="p-4 bg-accent-alt/40 rounded-xl">
            <NumberedHexList featuresList={featuresList} />
          </div>

          <p>{t(aboutData.description3Key)}</p>

          <div className="mt-4 flex justify-center">
            <HexButton asLink link={aboutData.buttonLink}>
              {t(aboutData.buttonKey)}
            </HexButton>
          </div>

        </div>

        <div className="space-y-2 mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-secondary-alt">{t(aboutData.mission.titleKey)}</h3>
            <p className="text-lg">{t(aboutData.mission.descriptionKey)}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary-alt">{t(aboutData.vision.titleKey)}</h3>
            <p className="text-lg">{t(aboutData.vision.descriptionKey)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
