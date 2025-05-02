/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc A parallax-style call-to-action section encouraging users to launch the Alberta Tomorrow simulator.
 *       Includes a frosted glass text panel with a quote, image, and button. Responsive and mobile-friendly.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Apr 1, 2025
 *
 * @see https://www.simulator.albertatomorrow.ca/ | Alberta Tomorrow Simulator
 */

// data
import { callToActionData } from "@/data/home-page-data/callToActionData";

// components
import Image from "next/image";
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";
import HexButton from "@/components/common/hexButton/HexButton";

export default function CallToAction() {
  return (
    <BackgroundWrapper
      background={callToActionData.background}
      backgroundSm={callToActionData.backgroundSm}
      fixed
      className="py-24 z-0 relative"
    >
      <div className="relative z-30 flex flex-col lg:flex-row gap-10 justify-center items-center text-center text-white px-10">
        {/* Side Image (hidden on mobile) */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            unoptimized
            src={callToActionData.sideImage}
            alt="Alberta Watersheds"
            width={400}
            height={400}
            className="max-h-96 object-contain  "
          />
        </div>

        {/* Frosted Glass Content Card */}
        <div className="bg-secondary/40 backdrop-blur-3xl rounded-2xl border border-white/20 shadow-xl p-8 w-full max-w-3xl space-y-6 small-shadow overflow-hidden flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-white font-display">
            {callToActionData.heading}
          </h2>
          <p className="text-lg text-gray-200 font-body">{callToActionData.description}</p>

          {/* Quote */}
          <div className="flex items-start gap-2 mt-6 max-w-2xl px-4">
            {/* Quote Icon */}
            <div className="hidden md:block shrink-0 mt-1">
              <Image
                unoptimized
                src={callToActionData.quoteIcon}
                alt="Quote Icon"
                width={32}
                height={32}
              />
            </div>

            {/* Vertical Line */}
            <div className="w-px bg-accent-alt opacity-50" />

            {/* Quote Text */}
            <blockquote className="text-xs sm:text-sm text-accent-alt italic space-y-2 text-start">
              <p>{callToActionData.quote.text}</p>
              <footer className="not-italic font-medium mt-1">
                {callToActionData.quote.author}
              </footer>
            </blockquote>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <HexButton scrollTo={callToActionData.scrollLink}>{callToActionData.linkText}</HexButton>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
