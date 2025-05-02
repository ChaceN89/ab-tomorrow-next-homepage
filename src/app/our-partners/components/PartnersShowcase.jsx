"use client";

import React from "react";
import Image from "next/image";
import Tooltip from "@/components/media/Tooltip";

export default function PartnerShowcase({ partners, title, showDescriptions = false, disableLink = false }) {
  if (!partners || partners.length === 0) return null;

  return (
    <section className="py-2">
      <h2 className="text-5xl font-semibold text-center pb-2 underline">{title}</h2>

      <div className={!showDescriptions ? "flex flex-wrap justify-center gap-x-16 gap-y-4" : undefined}>
      {partners.map((partner, index) => {
  const WrapperTag = disableLink ? "div" : "a";

  return (
    <WrapperTag
      key={index}
      {...(!disableLink && {
        href: partner.link,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`${
        showDescriptions
          ? "flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto py-6 px-2 border border-transparent border-b-black/20 hover:border-black/20 rounded-4xl"
          : "w-52 flex flex-col items-center transition"
      } ${disableLink ? "cursor-default" : "cursor-pointer hover:opacity-90"}`}
    >
      {/* Logo */}
      <div className="block w-48 h-48 flex-shrink-0 relative">
        {partner.logo ? (
          <Tooltip text={partner.name} openDuration={500}>
            <Image
              unoptimized
              src={`/partners/${partner.logo}`}
              alt={partner.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-contain ${partner.partnerClass || ""}  ${!disableLink && "hover:opacity-55"} `}
            />
          </Tooltip>
        ) : (
          <div className="w-full h-full flex items-center text-center justify-center text-gray-600 text-sm">
            {partner.name || "No Logo"}
          </div>
        )}
      </div>

      {/* Name & Description */}
      {showDescriptions && (
        <div className="text-center md:text-left space-y-2">
          <p className="text-lg font-bold">{partner.name}</p>
          {partner.description && (
            <>
              <p className="text-xs font-medium text-gray-700 max-w-xl">
                {partner.description}
              </p>
              <div
                className={`text-primary text-sm font-semibold ${
                  !disableLink ? "hover:underline" : ""
                }`}
              >
                Learn More
              </div>
            </>
          )}
        </div>
      )}
    </WrapperTag>
  );
})}

      </div>
    </section>
  );
}
