/**
 * @file page.jsx
 * @module app/partners
 * @desc Partners page for Alberta Tomorrow. Displays information about the project's partners.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import OurPartners from '@/components/features/our-partner-componets/OurPartners'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Our Partners"),
}

// Board of Directors Page Component
export default async function PartnersPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<OurPartners />)
}
