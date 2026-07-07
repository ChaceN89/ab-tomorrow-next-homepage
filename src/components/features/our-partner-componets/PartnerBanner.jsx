"use client";

/**
 * @file PartnerBanner.jsx
 * @module PartnerBanner
 * @desc A unified sponsor banner that acts as a sidebar on large screens and a bottom banner on small screens.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated July 7, 2026 - set up translations
 */

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// data
import { bannerPartners } from "@/data/page-data/partnerData";

// components
import Tooltip from "@/components/common/Tooltip";

// styles
import "./partnerBanner.styles.css";

function getPartnerName(t, partner) {
  return partner.titleKey ? t(partner.titleKey) : partner.name;
}

function PartnerList() {
  const t = useTranslations("Pages.Partners");

  // Use a deterministic order for server/client parity to avoid hydration mismatches.
  const longList = useMemo(() => {
    const stablePartners = [...bannerPartners].sort((a, b) => a.id.localeCompare(b.id));

    return stablePartners
      .concat(stablePartners)
      .concat(stablePartners)
      .concat(stablePartners)
      .concat(stablePartners);
  }, []);

  return (
    <ul className="flex flex-wrap lg:flex-col gap-4 justify-center items-center">
      {longList.map((partner, index) => {
        const partnerName = getPartnerName(t, partner);

        return (
          <li key={`${partner.id}-${index}`}>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row lg:flex-col gap-2 items-center"
            >
              <Tooltip
                text={(
                  <span>
                    {t("banner.tooltipLabel")}: <i>{partnerName}</i>
                  </span>
                )}
                openDuration={200}
              >
                <div className="relative w-44 h-28">
                  <Image
                    src={`/partners/${partner.logo}`}
                    alt={partnerName}
                    fill
                    unoptimized
                    className={`object-contain ${partner.partnerClass || ""}`}
                    priority={index < 5}
                  />
                </div>
              </Tooltip>

              <div className="hidden lg:block w-full h-[0.5px] bg-black opacity-20" />
              <div className="block lg:hidden w-[0.5px] h-full bg-black opacity-20 ml-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function PartnerBanner() {
  return (
    <div className="z-[999]">
      <div className="hidden lg:block partner-banner-vertical scroll-element">
        <PartnerList />
      </div>

      <div className="lg:hidden partner-banner-horizontal scroll-element">
        <PartnerList />
      </div>
    </div>
  );
}