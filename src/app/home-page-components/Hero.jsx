"use client";

/**
 * @file Hero.jsx
 * @module Home/Hero
 * @desc The top section of the Alberta Tomorrow homepage featuring a parallax background,
 *       award logos, and a call-to-action button.
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Parallax-style hero background using `BackgroundWrapper`
 * - Displays Emerald Award badges
 * - Launch Simulator call-to-action using `HexButton`
 *
 * @dependencies
 * - BackgroundWrapper.jsx
 * - HexButton.jsx
 * - Static assets from `public/ui-elements` and `public/awards`
 */
import Image from "next/image";
import { heroData } from "@/data/home-page-data/heroData";

// components
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";
import HexButton from "@/components/common/hexButton/HexButton";

export default function Hero() {
  return (
    <BackgroundWrapper
      background={heroData.background}
      backgroundSm={heroData.backgroundSm}
      className="text-white flex justify-center items-end text-center h-[94dvh] sm:h-[90vh] lg:h-screen overflow-hidden "
    >
      <div className="relative z-10 h-full flex flex-col justify-end items-center space-y-4 pb-8 sm:pb-10 fade-in">
        <div className="flex justify-center items-center gap-3 sm:gap-12 md:gap-20 lg:gap-32">
          {heroData.awards.map((award, index) => (
            <Image
              key={index}
              src={award.src}
              alt={award.alt}
              width={160}
              height={160}
              className="h-24 sm:h-44 w-auto award-shadow"
              priority={index < 2} // prioritize first couple of images
            />
          ))}
        </div>
        <HexButton link={heroData.ctaLink} name="Launch Simulator" />
      </div>
    </BackgroundWrapper>
  );
}
