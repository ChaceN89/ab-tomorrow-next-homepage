import React from "react";
import {
  champions,
  mentors,
  ambassadors,
  supporters,
  pastSponsors,
} from "@/data/partnerData";  

import PartnerShowcase from "./PartnersShowcase";
import PageHeader from "@/components/common/PageHeader";

export default function OurPartners() {

  return (
    <div className='page-width '>
      <div className='page'>
        <PageHeader title='Our Partners' subtitle="We are grateful to the Alberta Tomorrow sponsors for making Alberta Tomorrow possible." />
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
          <PartnerShowcase title="Past Sponsors" partners={pastSponsors} />
        </div>
      </div>
    </div>
  )

  return (
    <section className="section py-12 mt-20">
      <PageTitle title="Our Partners" />
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Partners</h1>
        <p className="text-lg text-gray-600 mt-2">
          We are grateful to the Alberta Tomorrow sponsors for making Alberta Tomorrow possible.
        </p>
      </div>

      <div className="flex flex-col items-center text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Be Part of Our Story</h2>
        <p className="text-lg text-gray-600 mt-2">
          Download our sponsorship package today to learn more about becoming a partner.
        </p>

        <a
          href="/static/pdfs/AlbertaTomorrowSponsorshipPackage.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Download Sponsorship Package 📄
        </a>
      </div>



      <div className="mt-12 space-y-12">
        <PartnerShowcase title="Champions" partners={champions} showDescriptions />
        <PartnerShowcase title="Ambassadors" partners={ambassadors} showDescriptions />
        <PartnerShowcase title="Mentors" partners={mentors} />
        <PartnerShowcase title="Supporters" partners={supporters} />
        <PartnerShowcase title="Past Sponsors" partners={pastSponsors} />
      </div>
    </section>
  );
}
