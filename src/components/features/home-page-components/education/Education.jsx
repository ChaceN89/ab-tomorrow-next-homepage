/**
 * @file Education.jsx
 * @module Pages/Education
 * @desc Full Education section component for the Alberta Tomorrow homepage.
 *       Displays the main education call-to-action, embedded media content, and
 *       a highlight of the Water Rangers testing kit. Uses a fixed background image.
 * 
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 26, 2025
 *
 * @features
 * - Section header with dynamic title and description from `educationData`
 * - Custom HexButton linking to a virtual/in-class visit sign-up form
 * - Responsive grid of educational YouTube videos
 * - Promo layout for Water Rangers Kit including image, title, and description
 * - Fixed parallax-style background with `BackgroundWrapper`
 *
 * @dependencies
 * - `BackgroundWrapper` for fixed background layout
 * - `SectionHeader` for the section title + description
 * - `HexButton` for CTA links
 * - `MediaFrame` for reusable video/image display
 * - `educationData` (from @/data/educationData)
 * - Parallax background image (from @/assets/ui-elements/parallax-1.jpg)
 */


// UI Components
import BackgroundWrapper from '@/components/layout/shell/BackgroundWrapper';
import SectionHeader from '@/components/common/headers/SectionHeader';
import MediaFrame from '@/components/common/mediaFrame/MediaFrame';
import HexButton from '@/components/common/hexButton/HexButton';
import FloorMapOrderQr from './FloorMapOrderQr';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Data
import { educationData } from '@/data/home-page-data/educationData';

export default function Education() {
  const t = useTranslations('HomePage.Education');
  const [waterRangerImageLoaded, setWaterRangerImageLoaded] = useState(false);
  const [floorMapImageLoaded, setFloorMapImageLoaded] = useState(false);

  const richTextComponents = {
    Bold: (chunks) => (
      <span className="text-tertiary">
        {chunks}
      </span>
    )
  };

  return (
    <BackgroundWrapper background={'/ui-elements/parallax-1.jpg'} backgroundSm={null} fixed blur lazy>
      <div className='home-section home-y-padding space-y-10'>
        <SectionHeader
          title={t(educationData.titleKey)}
          description={t.rich(educationData.descriptionKey, richTextComponents)}
        />

        {/* Link to sign up for classes */}
        <div className="flex justify-center">
          <HexButton
            color='accent'
            hoverColor='primary'
            textColor='black'
            hoverTextColor='white'
            link={"https://docs.google.com/forms/d/e/1FAIpQLSfUWfMWO5LKtOtLHmLbdZ5SR3lhTqmWn0xTzE8elyFb3WTchA/viewform?vc=0&c=0&w=1&flr=0"}
          >
            {t(educationData.media[0].titleKey)}
          </HexButton>
        </div>

        {/* Media Frame Grid for videos */}
        <div className='grid-section'>
          {educationData.media.map((item, index) => (
            <MediaFrame
              key={index}
              type={item.type}
              videoSrc={item.videoSrc}
              alt={t(item.titleKey)}
              title={t(item.titleKey)}
              description={<p>{t.rich(item.descriptionKey, richTextComponents)}</p>}
            />
          ))}
        </div>

        <div className="space-y-10">
          <div className="mx-auto grid w-full grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-lg shadow-lg small-shadow md:mx-0">
              <Image
                unoptimized
                src={educationData.waterRangerKit.img}
                alt={t(educationData.waterRangerKit.titleKey)}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                onLoad={() => setWaterRangerImageLoaded(true)}
                className={`object-cover transition-opacity duration-500 ${waterRangerImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <div className="space-y-3 text-left">
              <h3 className="text-2xl font-semibold">
                {t(educationData.waterRangerKit.titleKey)}
              </h3>
              <div className="space-y-3">
                <p>{t.rich(educationData.waterRangerKit.descriptionKey, richTextComponents)}</p>
                <div className="rounded-xl border border-primary/20 bg-white/90 p-3 lg:py-6 xl:py-12">
                  <p className="text-base font-bold leading-relaxed sm:text-lg">
                    {t(educationData.waterRangerKit.contactKey)}{' '}
                    <a
                      className="font-bold text-tertiary underline underline-offset-2"
                      href={`mailto:${educationData.contactEmail}`}
                    >
                      {educationData.contactEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 md:items-stretch md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <a
              className="group relative mx-auto block aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg small-shadow md:my-auto md:aspect-auto md:h-full md:max-h-[36rem] md:max-w-lg md:mx-0"
              href={educationData.floormap.floorMapOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(educationData.floormap.floorMapImageAltKey)}
            >
              <Image
                unoptimized
                src={educationData.floormap.floorMapImg}
                alt={t(educationData.floormap.floorMapImageAltKey)}
                fill
                sizes="(max-width: 768px) 90vw, 320px"
                onLoad={() => setFloorMapImageLoaded(true)}
                className={`object-contain transition-[opacity,transform] duration-500 group-hover:scale-[1.02] ${floorMapImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </a>
            <div className="space-y-3 text-left">
              <h3 className="text-2xl font-semibold">
                {t(educationData.floormap.floorMapTitleKey)}
              </h3>
              <div className="space-y-3">
                <p>{t(educationData.floormap.floorMapDescriptionKey)}</p>
                <div>
                  <p>{t(educationData.floormap.floorMapOverlaysTitleKey)}</p>
                  <ul className="list-disc pl-5">
                    {educationData.floormap.floorMapOverlayKeys.map((key) => (
                      <li key={key}>{t(key)}</li>
                    ))}
                  </ul>
                </div>
                <p>{t(educationData.floormap.floorMapBundleKey)}</p>
                <p className="font-semibold">{t(educationData.floormap.floorMapFrenchAvailabilityKey)}</p>
                <FloorMapOrderQr
                  src={educationData.floormap.floorMapQrImg}
                  alt={t(educationData.floormap.floorMapQrAltKey)}
                  instruction={t(educationData.floormap.floorMapQrInstructionKey)}
                  moreInfo={t(educationData.floormap.floorMapMoreInfoKey)}
                  contactEmail={educationData.contactEmail}
                  orderUrl={educationData.floormap.floorMapOrderUrl}
                  expandLabel={t(educationData.floormap.floorMapQrExpandKey)}
                  closeLabel={t(educationData.floormap.floorMapQrCloseKey)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
