/**
 * @file page.jsx
 * @module app/[locale]/our-partners
 * @desc Localized Partners page for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Jul 14, 2026 - localized page metadata
 *
 * @dependencies
 * - next-intl
 * - metadataUtils
 * - OurPartners
 */

import {
  getTranslations,
  setRequestLocale
} from "next-intl/server";

import { getPageTitle } from "@/utils/metadataUtils";
import OurPartners from "@/components/features/our-partner-componets/OurPartners";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Pages.Partners"
  });

  return {
    title: getPageTitle(t("title"))
  };
}

export default async function PartnersPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <OurPartners />;
}