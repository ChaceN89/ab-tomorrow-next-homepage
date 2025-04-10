/**
 * @file GetInvolved.jsx
 * @module Home/GetInvolved
 * @desc Section promoting sponsorship and the Canada Tomorrow initiative.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */
import { FaFile } from "react-icons/fa";

// Components
import SectionHeader from "@/components/common/SectionHeader";
import HexButton from "@/components/common/hexButton/HexButton";
import MediaFrame from "@/components/media/MediaFrame";

// Data
import { OurStoryData } from "@/data/home-page-data/aboutData";
import SponsorPackageBtn from "@/components/common/SponsorPackageBtn";

export default function GetInvolved() {
  return (
    <section className="bg-primary">
      <div className="home-section home-y-padding space-y-10 text-white">
        {/* Section Header */}
        <SectionHeader
          shadow
          title={OurStoryData.title}
          description={OurStoryData.description}
        />

        {/* Sponsorship Button */}
        <div className="flex justify-center">
          <SponsorPackageBtn/>
        </div>

        {/* Canada Tomorrow Initiative */}
        <div className="flex flex-col items-center justify-center small-shadow">
          <h3 className="text-xl lg:text-2xl font-bold">
            Launch the App in Your Own Province
          </h3>
          <p className="mt-4 text-base max-w-3xl mx-auto text-gray-200">
            We are excited to launch the Canada Tomorrow initiative to allow students, teachers, and the public across Canada to learn about sustainable planning and climate change.
          </p>
        </div>

        {/* Logos + Video */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 max-w-5xl mx-auto px-10">
          <div className="flex md:flex-col items-center md:items-start gap-2">
            <img
              src="tool-logos/canada-tomorrow-logo.png"
              alt="Canada Tomorrow Logo"
              className="max-w-40 sm:max-w-52 md:max-w-60 large-shadow"
            />
            <img
              src="tool-logos/bc-tomorrow-logo.png"
              alt="BC Tomorrow Logo"
              className="max-w-40 sm:max-w-52 md:max-w-60 large-shadow"
            />
          </div>

          <MediaFrame
            type="video"
            videoSrc="vRLmJ_2zab0"
            alt="Canada Tomorrow Initiative"
            title="Canada Tomorrow Initiative"
            className="h-80 md:h-96 w-full max-w-3xl"
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
            <div className="min-w-52">Visit Canada Tomorrow</div>
          </HexButton>
          <HexButton
            color="accent"
            textColor="black"
            hoverColor="tertiary"
            link="https://www.bctomorrow.ca/"
          >
            <div className="min-w-52">Visit BC Tomorrow</div>
          </HexButton>
        </div>
      </div>
    </section>
  );
}
