/**
 * @file page.jsx
 * @module app/lesson-plans
 * @desc Lesson Plans page for Alberta Tomorrow. Displays a list of lesson plans and resources for educators.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getTranslations } from 'next-intl/server'
import { getPageTitle } from '@/utils/metadataUtils'
import LessonDisplay from '@/components/features/resource-page-components/components/lesson-plan-components/LessonDisplay'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.ResourcesPage'
  });

  return {
    title: getPageTitle(t('lessonPlans'))
  };
}

// Board of Directors Page Component
export default function LessonPlansPage() {
  return (<LessonDisplay />)
}
