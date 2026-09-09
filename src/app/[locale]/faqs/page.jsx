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
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import FAQs from '@/components/features/FAQs'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.FAQs'
  });

  return {
    title: getPageTitle(t('title'))
  };
}

// Board of Directors Page Component
export default async function FaqsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<FAQs />)
}
