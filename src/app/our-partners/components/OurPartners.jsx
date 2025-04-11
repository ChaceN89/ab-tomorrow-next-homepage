/**
 * @file OurPartners.jsx
 * @module Pages/OurPartners
 * @desc Displays all partner and sponsor information, categorized and organized on the "Our Partners" page.
 *       Utilizes the Partner Data and PartnerShowcase components to render categorized sponsor sections.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Imports and displays categorized partner data (Champions, Ambassadors, Mentors, Supporters, Past Sponsors).
 * - Renders each category using the reusable `PartnerShowcase` component.
 * - Includes a page header and section dividers for clear visual separation.
 * - Provides a downloadable sponsorship package link (optional section at the bottom - currently commented).
 *
 * @dependencies
 * - partnerData: Contains all sponsor data and categories.
 * - PartnerShowcase: Reusable component to render partner logos and descriptions.
 * - PageHeader: Displays page title and subtitle.
 */
"use client"; // This file is a client component
// Data
import {
  champions,
  mentors,
  ambassadors,
  supporters,
  pastSponsors,
  partnerTitleData,
} from "@/data/page-data/partnerData";  

// Components
import PartnerShowcase from "./PartnersShowcase";
import PageHeader from "@/components/common/PageHeader";
import SponsorPackageBtn from "@/app/our-partners/components/SponsorPackageBtn";
import SponsorshipTable from "./SponsorshipTable";

// import { Link as ScrollLink } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";


export default function OurPartners() {
  return (
    <div className='page-width '>
      <div className='page'>
        <PageHeader title={partnerTitleData.title} subtitle={partnerTitleData.subtitle} />

        {/* scroll link to the sponsor section */}
        <div className="flex justify-start mb-8">

          <ScrollLink to={"sponsor-package"} smooth duration={1000} offset={-50} className="cursor-pointer text-center py-2 px-4 border rounded-lg bg-primary text-white hover:bg-primary-alt transition duration-300">
            Learn About Becoming a Sponsor
          </ScrollLink>
        </div>

        <div className="mt-12 space-y-12">
          <div className="flex flex-col 2xl:flex-row gap-8">
            {/* Left Column */}
            <PartnerShowcase title="Champions" partners={champions} showDescriptions />

            {/* Vertical Divider */}
            <div className="hidden lg:block border-l-2 border-black/20 mx-2" />

            {/* Right Column */}
            <PartnerShowcase title="Ambassadors" partners={ambassadors} showDescriptions />
          </div>
          {/* line */}
          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />

          <PartnerShowcase title="Mentors" partners={mentors} />
          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />

          <PartnerShowcase title="Supporters" partners={supporters} />
          <div className="hidden lg:block border-b-2 border-black/20 mx-2" />
          <PartnerShowcase title="Past Sponsors" partners={pastSponsors} disableLink />
        </div>


        <div id='sponsor-package' className="flex justify-center items-center my-8 p-8">
          <SponsorPackageBtn/>
        </div>
          <SponsorshipTable/>
      </div>
    </div>
  )

}
