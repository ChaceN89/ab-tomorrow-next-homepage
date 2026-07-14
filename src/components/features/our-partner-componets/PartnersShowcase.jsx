/**
 * @file PartnersShowcase.jsx
 * @module components/PartnersShowcase
 * @desc Displays partner logos, links, and translated partner names and descriptions when translation keys exist.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Jul 14, 2026 - added partner name and description translations
 *
 * @dependencies
 * - next-intl
 * - next/image
 * - Tooltip
 */

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/Tooltip";

export default function PartnerShowcase({
  partners,
  title,
  showDescriptions = false,
  disableLink = false
}) {
  const t = useTranslations("Pages.Partners");

  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <section className="py-2">
      <h2 className="text-5xl font-semibold text-center pb-2 underline">
        {title}
      </h2>

      <div
        className={
          !showDescriptions
            ? "flex flex-wrap justify-center gap-x-16 gap-y-4"
            : undefined
        }
      >
        {partners.map((partner) => {
          const WrapperTag = disableLink ? "div" : "a";

          const partnerName = partner.titleKey
            ? t(partner.titleKey)
            : partner.name;

          const partnerDescription = partner.descriptionKey
            ? t(partner.descriptionKey)
            : partner.description;

          return (
            <WrapperTag
              key={partner.id}
              {...(!disableLink && {
                href: partner.link,
                target: "_blank",
                rel: "noopener noreferrer"
              })}
              className={`${showDescriptions
                  ? "flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto py-6 px-2 border border-transparent border-b-black/20 hover:border-black/20 rounded-4xl"
                  : "w-52 flex flex-col items-center transition"
                } ${disableLink
                  ? "cursor-default"
                  : "cursor-pointer hover:opacity-90"
                }`}
            >
              <div className="block w-48 h-48 flex-shrink-0 relative">
                {partner.logo ? (
                  <Tooltip text={partnerName} openDuration={500}>
                    <Image
                      unoptimized
                      src={`/partners/${partner.logo}`}
                      alt={partnerName}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-contain ${partner.partnerClass || ""} ${!disableLink ? "hover:opacity-55" : ""
                        }`}
                    />
                  </Tooltip>
                ) : (
                  <div className="w-full h-full flex items-center text-center justify-center text-gray-600 text-sm">
                    {partnerName || "No Logo"}
                  </div>
                )}
              </div>

              {showDescriptions && (
                <div className="text-center md:text-left space-y-2">
                  <p className="text-lg font-bold">
                    {partnerName}
                  </p>

                  {partnerDescription && (
                    <>
                      <p className="text-xs font-medium text-gray-700 max-w-xl">
                        {partnerDescription}
                      </p>

                      <div
                        className={`text-primary text-sm font-semibold ${!disableLink ? "hover:underline" : ""
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