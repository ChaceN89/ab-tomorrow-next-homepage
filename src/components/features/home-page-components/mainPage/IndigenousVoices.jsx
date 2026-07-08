/**
 * @file IndigenousVoices.jsx
 * @module Home/IndigenousVoices
 * @desc Indigenous Voices section introducing the new module and land acknowledgment.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 8, 2025
 */

import React from 'react';
import SectionHeader from '@/components/common/headers/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import HexButton from '@/components/common/hexButton/HexButton';
import MediaFrame from '@/components/common/mediaFrame/MediaFrame';
import { indigenousVoicesData } from '@/data/home-page-data/indigenousVoicesData';
import { useTranslations } from 'next-intl';

export default function IndigenousVoices() {
  const t = useTranslations('HomePage.IndigenousVoices');
  const tOther = useTranslations('Other');

  const richTextComponents = {
    Bold: (chunks) => <span className="font-semibold">{chunks}</span>,
  };

  const title = t(indigenousVoicesData.titleKey);
  const headerDescription = t.rich(indigenousVoicesData.description1Key, richTextComponents);
  const content = t.rich(indigenousVoicesData.contentKey, richTextComponents);

  const featuresList = indigenousVoicesData.keyFeatures.featuresList.map((f) => ({ icon: f.icon, text: t.rich(f.textKey, richTextComponents) }));

  let keyFeaturesTitle = indigenousVoicesData.keyFeatures.title || '';
  if (indigenousVoicesData.keyFeatures.titleKey) {
    try { keyFeaturesTitle = tOther(indigenousVoicesData.keyFeatures.titleKey); } catch (e) { /* fallback to default */ }
  }

  // button text: use `Other.ExploreTheModule`, fallback to data
  let buttonText = indigenousVoicesData.buttonText;
  if (indigenousVoicesData.buttonTextKey) {
    try {
      buttonText = tOther(indigenousVoicesData.buttonTextKey);
    } catch (e) {
      /* fallback to provided string */
    }
  }

  // land acknowledgment
  let landHeading = indigenousVoicesData.landAcknowledgment.heading || '';
  let landText = indigenousVoicesData.landAcknowledgment.text || '';
  try {
    if (indigenousVoicesData.landAcknowledgment.headingKey) landHeading = t(indigenousVoicesData.landAcknowledgment.headingKey);
    if (indigenousVoicesData.landAcknowledgment.textKey) landText = t.rich(indigenousVoicesData.landAcknowledgment.textKey, richTextComponents);
  } catch (e) { /* fallback to provided strings if translations missing */ }

  return (
    <section className="bg-tertiary">
      <div className="home-section home-y-padding space-y-10 ">

        {/* === Header === */}
        <SectionHeader
          title={title}
          description={headerDescription}
        />

        {/* === Module Section === */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
          {/* Media (Video) */}
          <div className="order-1 xl:order-2 w-full h-full xl:col-span-2">
            <MediaFrame
              preload
              type="video"
              videoSrc={indigenousVoicesData.media.video.youtubeSrc}
              alt={indigenousVoicesData.media.video.title}
              title={indigenousVoicesData.media.video.title}
              className="h-64 md:h-80 lg:h-96"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 xl:col-span-3">
            {content}
            <div className="p-4 bg-tertiary-alt/20 rounded-xl">
              <NumberedHexList
                title={keyFeaturesTitle}
                featuresList={featuresList}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <HexButton hoverColor={"accent"} link={indigenousVoicesData.buttonLink}>
            {buttonText}
          </HexButton>
        </div>

        {/* === Separator === */}
        <div className="w-full border-t border-gray-400 dark:border-gray-600" />

        {/* === Land Acknowledgment Section === */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pt-4">
          {/* Media (Image) */}
          <div className="order-1 w-full h-full lg:col-span-2">
            <MediaFrame
              preload
              type="image"
              imgSrc={indigenousVoicesData.media.img.src}
              alt={indigenousVoicesData.media.img.title}
              title={""}
              className="h-80 lg:h-96"
            />
          </div>

          {/* Acknowledgment Text */}
          <div className="order-2 space-y-4 lg:col-span-3">
            <h3 className="text-2xl font-bold ">{landHeading}</h3>
            <div className="text-lg leading-relaxed">{landText}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
