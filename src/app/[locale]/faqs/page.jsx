/**
 * @file page.jsx
 * @module app/faqs
 * @desc Frequently Asked Questions page for Alberta Tomorrow. Provides answers to common questions.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated July 14 2026 - added set request local
 */

import React from 'react'
import { setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import FAQs from '@/components/features/FAQs'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Frequently Asked Questions"),
}

// Board of Directors Page Component
export default async function FaqsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<FAQs />)
}
