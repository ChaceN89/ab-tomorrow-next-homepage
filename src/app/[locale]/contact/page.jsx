/**
 * @file page.jsx
 * @module app/contact
 * @desc Contact page for Alberta Tomorrow. Displays contact information and a form for inquiries.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import Contact from '@/components/features/contact-page-components/Contact'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.ContactPage'
  });

  return {
    title: getPageTitle(t('title'))
  };
}

// Board of Directors Page Component
export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<Contact />)
}
