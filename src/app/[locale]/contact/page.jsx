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
import { setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import Contact from '@/components/features/contact-page-components/Contact'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Contact Us"),
}

// Board of Directors Page Component
export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<Contact />)
}
