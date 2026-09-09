/**
 * @file Intro.jsx
 * @module Intro
 * @desc Intro section of the homepage. Displays welcome message, simulator overview, and embedded media.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated July 7, 2026 - set up translations
 */

import { useTranslations } from "next-intl";

import MediaFrame from "@/components/common/mediaFrame/MediaFrame";
import { introData } from "@/data/home-page-data/introData";

export default function Intro() {
  const t = useTranslations("HomePage.Intro");

  const richTextComponents = {
    Bold: (chunks) => (
      <span className="text-tertiary">
        {chunks}
      </span>
    )
  };

  return (
    <div className="bg-primary">
      <div className="home-section">
        <div className="pt-5 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-center gap-4">
          <img
            src="/site-logos/logo-lg.png"
            alt="Alberta Tomorrow Logo"
            className="h-40 w-40 object-contain large-shadow"
          />

          <h2 className="text-4xl font-bold text-tertiary uppercase text-center large-shadow title-font">
            {t("title")}
          </h2>
        </div>

        <div className="text-center text-black mt-6 md:mt-16 space-y-4 text-lg">
          <p>{t.rich("description1", richTextComponents)}</p>
          <p>{t.rich("description2", richTextComponents)}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 my-6 md:my-12 sm:px-12 lg:px-2 2xl:px-20">
          {introData.media.map((item, index) => (
            <MediaFrame
              preload
              key={index}
              type={item.type}
              videoSrc={item.videoSrc}
              imgSrc={item.imgSrc}
              alt={item.altKey ? t(item.altKey) : t(item.titleKey)}
              title={t(item.titleKey)}
              description={
                <p>
                  {t.rich(item.descriptionKey, richTextComponents)}
                </p>
              }
              showWheel
            />
          ))}
        </div>

        <div className="h-5"></div>
      </div>
    </div>
  );
}