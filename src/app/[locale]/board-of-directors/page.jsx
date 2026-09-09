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
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import BoardOfDirectors from '@/components/features/board-of-directors-components/BoardOfDirectors'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.BoardOfDirectors'
  });

  return {
    title: getPageTitle(t('title'))
  };
}

// Board of Directors Page Component
export default async function BoardPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (<BoardOfDirectors />)
}
