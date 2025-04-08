/**
 * @file PartnerBanner.jsx
 * @module PartnerBanner
 * @desc A unified sponsor banner that acts as a sidebar on large screens and a bottom banner on small screens.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 25, 2025
 */

// data
import { bannerPartners } from "@/data/page-data/partnerData";

// components
import Tooltip from "@/components/media/Tooltip";
import Image from "next/image";

// styles
import "./partnerBanner.styles.css";

// shuffle the partners
const shuffledPartners = [...bannerPartners].sort(() => Math.random() - 0.5);
const longList = shuffledPartners.concat(shuffledPartners).concat(shuffledPartners).concat(shuffledPartners).concat(shuffledPartners);

function PartnerList() {
  return (
    <ul className="flex flex-wrap lg:flex-col gap-4 justify-center items-center ">
      {longList.map((partner, index) => (
        <li key={index}>
          <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-2 items-center">
            <Tooltip text={<span>Partner: <i>{partner.name}</i></span>} openDuration={200}>
              <div className="relative w-44 h-28"> {/* Controls size */}
                <Image
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  fill
                  unoptimized
                  className={`object-contain ${partner.partnerClass}`}
                  priority={index < 5}
                />
              </div>
            </Tooltip>

            {/* Divider */}
            <div className="hidden lg:block w-full h-[0.5px] bg-black opacity-20" />
            <div className="block lg:hidden w-[0.5px] h-full bg-black opacity-20 ml-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}



// Export two lists with different styles based on screen size
export default function PartnerBanner() {
  return (
    <div className="z-[999]">
      {/* Desktop Version */}
      <div className="hidden lg:block partner-banner-vertical scroll-element">
        <PartnerList/>
      </div>
      <div className="lg:hidden partner-banner-horizontal scroll-element">
        <PartnerList/>    
      </div>
    </div>
  );
}