/**
 * @file Intro.jsx
 * @module Intro
 * @desc Intro section of the homepage. Displays welcome message, simulator overview, and embedded media.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import React from 'react';

import MediaFrame from '@/components/media/MediaFrame';
import { introData } from '@/data/introData';

export default function Intro() {
  return (
    <div className="bg-primary ">
      <div className="home-section">
        <div className="pt-5 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-center gap-4">
          <img src={'/site-logos/logo-lg.png'} alt="Alberta Tomorrow Logo" className="h-40 w-40 object-contain large-shadow" />
          <h2 className="text-4xl font-bold text-tertiary uppercase text-center large-shadow title-font">
            {introData.title}
          </h2>
        </div>

        <div className="text-center text-black mt-6 md:mt-16 space-y-4  text-lg">
          {introData.description}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 my-6 md:my-12  sm:px-12 lg:px-2 2xl:px-20 ">
          {introData.media.map((item, index) => (
            <MediaFrame
              key={index}
              type={item.type}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className='h-5'></div>
      </div>
    </div>
  );
}
