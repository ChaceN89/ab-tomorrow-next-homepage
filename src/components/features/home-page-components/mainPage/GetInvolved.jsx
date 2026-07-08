/**
 * @file GetInvolved.jsx
 * @module Home/GetInvolved
 * @desc Section promoting sponsorship and the Canada Tomorrow initiative.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

// Components
import SectionHeader from "@/components/common/headers/SectionHeader";
import HexButton from "@/components/common/hexButton/HexButton";
import MediaFrame from "@/components/common/mediaFrame/MediaFrame";
import Image from "next/image";
import { useTranslations } from "next-intl";

import SponsorPackageBtn from "../../our-partner-componets/SponsorPackageBtn";

export default function GetInvolved() {
  const t = useTranslations("HomePage.GetInvolved");

  return (
    <section className="bg-primary">
      <div className="home-section home-y-padding space-y-10 text-white">
        {/* Section Header */}
        <SectionHeader
          shadow
          title={t("title")}
          description={t("description1")}
        />

        {/* Sponsorship Button */}
        <div className="flex justify-center">
          <SponsorPackageBtn />
        </div>

        {/* Canada Tomorrow Initiative */}
        <div className="flex flex-col items-center justify-center small-shadow">
          <h3 className="text-xl lg:text-2xl font-bold">
            {t("title2")}
          </h3>
          <p className="mt-4 text-base max-w-3xl mx-auto text-gray-200">
            {t("description2")}
          </p>
        </div>

        {/* Logos + Video */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 max-w-5xl mx-auto px-10">
          <div className="flex md:flex-col items-center md:items-start gap-2">
            <Image
              unoptimized
              src="/tool-logos/canada-tomorrow-logo.png"
              alt="Canada Tomorrow Logo"
              width={240}
              height={120}
              className="w-auto h-auto max-w-40 sm:max-w-52 md:max-w-60 large-shadow"
            />
            <Image
              unoptimized
              src="/tool-logos/bc-tomorrow-logo.png"
              alt="BC Tomorrow Logo"
              width={240}
              height={120}
              className="w-auto h-auto max-w-40 sm:max-w-52 md:max-w-60 large-shadow"
            />
          </div>

          <MediaFrame
            preload
            type="video"
            videoSrc="vRLmJ_2zab0"
            alt="Canada Tomorrow Initiative"
            title="Canada Tomorrow Initiative"
          />
        </div>

        {/* Visit Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 max-w-5xl mx-auto px-10">
          <HexButton
            color="accent"
            textColor="black"
            hoverColor="tertiary"
            link="https://www.canadatomorrow.ca/"
          >
            <div className="min-w-52">{t("buttons.visitCanadaTomorrow")}</div>
          </HexButton>
          <HexButton
            color="accent"
            textColor="black"
            hoverColor="tertiary"
            link="https://www.bctomorrow.ca/"
          >
            <div className="min-w-52">{t("buttons.visitBCTomorrow")}</div>
          </HexButton>
        </div>
      </div>
    </section>
  );
}
