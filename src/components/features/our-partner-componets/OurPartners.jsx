/**
 * @file OurPartners.jsx
 * @module Pages/OurPartners
 * @desc Displays all localized partner and sponsor information, categorized and organized on the Our Partners page.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Jul 14, 2026 - added partner page translations
 *
 * @dependencies
 * - next-intl
 * - react-scroll
 * - partnerData
 * - PartnersShowcase
 * - PageHeader
 * - SponsorPackageBtn
 * - SponsorshipTable
 */

"use client";

import { useTranslations } from "next-intl";
import { Link as ScrollLink } from "react-scroll";

import {
  champions,
  mentors,
  ambassadors,
  supporters,
  pastSponsors,
  partnerTitleData,
  sponsorCategory,
  sponsorCategoryTitleKeys
} from "@/data/page-data/partnerData";

import PartnerShowcase from "./PartnersShowcase";
import PageHeader from "@/components/common/headers/PageHeader";
import SponsorPackageBtn from "./SponsorPackageBtn";
import SponsorshipTable from "./SponsorshipTable";

export default function OurPartners() {
  const t = useTranslations("Pages.Partners");

  return (
    <div className="page-width">
      <div className="page">
        <PageHeader
          title={t(partnerTitleData.titleKey)}
          subtitle={t(partnerTitleData.subtitleKey)}
        />

        <div className="flex justify-start mb-8">
          <ScrollLink
            to="sponsor-package"
            smooth
            duration={1000}
            offset={-50}
            className="cursor-pointer text-center py-2 px-4 border rounded-lg bg-primary text-white hover:bg-primary-alt transition duration-300"
          >
            {t(partnerTitleData.buttonKey)}
          </ScrollLink>
        </div>

        <div className="mt-12 space-y-12">
          <div className="flex flex-col 2xl:flex-row gap-8">
            <PartnerShowcase
              title={t(
                sponsorCategoryTitleKeys[sponsorCategory.CHAMPIONS]
              )}
              partners={champions}
              showDescriptions
            />

            <div className="hidden lg:block border-l-2 border-black/20 mx-2" />

            <PartnerShowcase
              title={t(
                sponsorCategoryTitleKeys[sponsorCategory.AMBASSADORS]
              )}
              partners={ambassadors}
              showDescriptions
            />
          </div>

          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />

          <PartnerShowcase
            title={t(
              sponsorCategoryTitleKeys[sponsorCategory.MENTORS]
            )}
            partners={mentors}
          />

          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />

          <PartnerShowcase
            title={t(
              sponsorCategoryTitleKeys[sponsorCategory.SUPPORTERS]
            )}
            partners={supporters}
          />

          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />

          <PartnerShowcase
            title={t(
              sponsorCategoryTitleKeys[sponsorCategory.PAST_SPONSORS]
            )}
            partners={pastSponsors}
            disableLink
          />
        </div>

        <div
          id="sponsor-package"
          className="flex justify-center items-center my-8 p-8"
        >
          <SponsorPackageBtn />
        </div>

        <SponsorshipTable />
      </div>
    </div>
  );
}