/**
 * @file page.jsx
 * @module app/terms-of-use
 * @desc Terms of Use page for Alberta Tomorrow. Displays the terms of use for the website.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import TermsOfUse from './TermsOfUse'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Terms of Use"),
}

// Board of Directors Page Component
export default function TermsOfUsePage() {
  return (<TermsOfUse/>)
}
