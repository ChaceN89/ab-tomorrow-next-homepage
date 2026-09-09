/**
 * @file SupportUs.jsx
 * @module UI/SupportUs
 * @desc Compact support block encouraging donations with a partner logo.
 *       Typically used in footers or sidebars.
 *
 * @features
 * - Displays a call-to-action encouraging user donations.
 * - Includes a DonateButton component.
 * - Displays the Environmental Partner logo alongside the button.
 *
 * @dependencies
 * - DonateButton
 * - next/image
 * - next-intl
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Jul 7, 2026 - set up translations
 */

import Image from "next/image";
import { useTranslations } from "next-intl";

import DonateButton from "../navbar/DonateButton";

export default function SupportUs() {
  const t = useTranslations("Footer.support");

  return (
    <div>
      <h3 className="text-xl font-semibold">{t("title")}</h3>

      <p className="mt-2 text-sm">{t("description")}</p>

      <div className="mt-4 flex gap-2 justify-start items-center">
        <DonateButton footer />

        <div className="relative w-36 lg:w-40 h-20 shrink-0">
          <Image
            unoptimized
            src="/external-logos/1ftp-EnvironmentalPartner-horizontal-FullColor.png"
            alt="Environmental Partner Logo"
            fill
            sizes="160px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}