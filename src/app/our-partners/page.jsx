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
import { getPageTitle } from '@/utils/metadataUtils'
import OurPartners from '@/components/pages/partners/OurPartners'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Our Partners"),
}

// Board of Directors Page Component
export default function PartnersPage() {
  return (<OurPartners/>)
}
