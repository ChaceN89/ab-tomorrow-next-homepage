/**
 * @file page.jsx
 * @module app/videos
 * @desc Videos page for Alberta Tomorrow. Displays a list of videos related to the project.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */
import React from 'react'
import { getTranslations } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import VideoDisplay from '@/components/features/resource-page-components/components/video-components/VideoDisplay'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.ResourcesPage'
  });

  return {
    title: getPageTitle(t('videos'))
  };
}

// Board of Directors Page Component
export default function VideosPage() {
  return (<VideoDisplay />)
}
