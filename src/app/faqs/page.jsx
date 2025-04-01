/**
 * @file page.jsx
 * @module app/faqs
 * @desc Frequently Asked Questions page for Alberta Tomorrow. Provides answers to common questions.

 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import FAQs from '@/components/pages/faqs/FAQs'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Frequently Asked Questions"),
}

// Board of Directors Page Component
export default function FaqsPage() {
  return (<FAQs/>)
}
