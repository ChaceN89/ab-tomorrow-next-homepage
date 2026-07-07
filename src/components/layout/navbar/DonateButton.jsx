/**
 * @file DonateButton.jsx
 * @module DonateButton
 * @desc Reusable Donate button component with localized button text.
 *       Displays a styled button for donation with different styles based on footer prop.
 *       Tracks a custom event in Google Analytics when clicked.
 *
 * @features
 * - Styled Donate button for both NavBar and Footer usage.
 * - Uses localized button text from NavBar.links.
 * - Uses LinkItem component for external donation link.
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Jul 7, 2026 - set up translations
 *
 * @exampleUsage
 * <DonateButton />
 * <DonateButton footer />
 *
 * Google Analytics Event:
 * Category: 'Button'
 * Action: 'Click'
 * Label: 'DonateButtonNav' or 'DonateButtonFooter'
 * Value: 1
 */

"use client";

import { useTranslations } from "next-intl";

import LinkItem from "./LinkItem";
import { donateInfo } from "@/data/navData";

export default function DonateButton({ footer = false }) {
  const t = useTranslations("NavBar.links");

  return (
    <LinkItem
      href={donateInfo.href}
      className={
        `${footer ? "p-5 py-3.5" : "md:ml-nav p-3 py-1"} 
         rounded-lg bg-primary hover:bg-primary-alt text-white font-semibold 
         transition inline-flex items-center justify-center`
      }
    >
      {footer ? t("makeADonation") : t("donate")}
    </LinkItem>
  );
}