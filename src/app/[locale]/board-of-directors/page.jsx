/**
 * @file page.jsx
 * @module app/board-of-directors
 * @desc Board of Directors page for Alberta Tomorrow. Displays information about the board members.
 *
 * @author Chace Nielson
 * @created mar 31st, 2025
 * @updated Jul 14, 2026 - added translations - added setRequestLocale
 */

import React from 'react'
import { setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import BoardOfDirectors from '@/components/features/board-of-directors-components/BoardOfDirectors'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Board of Directors"),
}

// Board of Directors Page Component
export default async function BoardPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<BoardOfDirectors />)
}
