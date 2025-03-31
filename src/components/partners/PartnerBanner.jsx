/**
 * @file PartnerBanner.jsx
 * @module PartnerBanner
 * @desc A unified sponsor banner that acts as a sidebar on large screens and a bottom banner on small screens.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 25, 2025
 */

import React from "react";
import { bannerPartners } from "../../data/partnerData";
import Tooltip from "../media/Tooltip";
import "./partnerBanner.styles.css";
import Image from "next/image";

// shuffle the partners
const shuffledPartners = [...bannerPartners].sort(() => Math.random() - 0.5);
const longList = shuffledPartners.concat(shuffledPartners).concat(shuffledPartners).concat(shuffledPartners).concat(shuffledPartners);

function PartnerList() {
  return (
    <ul >
      {longList.map((partner, index) => (
        <li key={index}>
            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-2">
              <Tooltip key={index} text={"Partner: " + partner.name} openDuration={300}>
                <Image
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  width={112}
                  height={112}
                  unoptimized
                  className={partner.partnerClass}
                  priority={index < 5}
                />            
              </Tooltip>
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
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block partner-banner-vertical scroll-element">
        <PartnerList/>
      </div>
      <div className="lg:hidden partner-banner-horizontal scroll-element">
        <PartnerList/>    
      </div>
    </>
  );
}