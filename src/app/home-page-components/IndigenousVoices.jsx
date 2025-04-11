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
import SectionHeader from '@/components/common/SectionHeader';
import NumberedHexList from '@/components/common/numberedHexList/NumberedHexList';
import HexButton from '@/components/common/hexButton/HexButton';
import MediaFrame from '@/components/media/MediaFrame';
import { indigenousVoicesData } from '@/data/home-page-data/indigenousVoicesData';

export default function IndigenousVoices() {
  return (
    <section className="bg-tertiary">
      <div className="home-section home-y-padding space-y-10 ">

        {/* === Header === */}
        <SectionHeader
          title={indigenousVoicesData.title}
          description={indigenousVoicesData.description}
        />

        {/* === Module Section === */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
          {/* Media (Video) */}
          <div className="order-1 xl:order-2 w-full h-full xl:col-span-2">
            <MediaFrame
              type="video"
              videoSrc={indigenousVoicesData.media.video.youtubeSrc}
              alt={indigenousVoicesData.media.video.title}
              title={indigenousVoicesData.media.video.title}
              className="h-64 md:h-80 lg:h-96"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 xl:col-span-3">
            {indigenousVoicesData.content}
            <div className="p-4 bg-tertiary-alt/20 rounded-xl">
              <NumberedHexList
                title={indigenousVoicesData.keyFeatures.title}
                featuresList={indigenousVoicesData.keyFeatures.featuresList}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <HexButton hoverColor={"accent"} link={indigenousVoicesData.buttonLink}>
            {indigenousVoicesData.buttonText}
          </HexButton>
        </div>

        {/* === Separator === */}
        <div className="w-full border-t border-gray-400 dark:border-gray-600" />

        {/* === Land Acknowledgment Section === */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pt-4">
          {/* Media (Image) */}
          <div className="order-1 w-full h-full lg:col-span-2">
            <MediaFrame
              type="image"
              imgSrc={indigenousVoicesData.media.img.src}
              alt={indigenousVoicesData.media.img.title}
              title={""}
              className="h-80 lg:h-96"
            />
          </div>

          {/* Acknowledgment Text */}
          <div className="order-2 space-y-4 lg:col-span-3">
            <h3 className="text-2xl font-bold ">
              {indigenousVoicesData.landAcknowledgment.heading}
            </h3>
            <div className="text-lg leading-relaxed">
              {indigenousVoicesData.landAcknowledgment.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
