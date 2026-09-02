/**
 * @file ModalVideo.jsx
 * @module UI/Resources/VideoModal
 * @desc Fetches and displays a single video for use in modal views. 
 *       Attempts to source the video from context first, with API fallback.
 *
 * @features
 * - Retrieves video data from shared VideoResourceContext if available
 * - Falls back to API call if video is not found in context
 * - Displays loading and error states for better UX
 * - Renders `Video` component with minimal props (used in modal context)
 * 
 * @dependencies
 * - `Video` component (renders individual video UI)
 * - `VideoResourceContext` (provides shared video state)
 * 
 * @notes
 * - Must be rendered in a client component (due to hook usage and async fetch)
 * - Uses `NEXT_PUBLIC_SITE_URL` env variable to build fallback fetch URL
 * - Handles both client-preloaded and direct-access modal use cases
 * 
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated Apr 11, 2025
 */
import React, { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { useVideoResource } from '../VideoResourceContext';
import Video from './VideoCard';
import {
  formatCategoryLabel,
  getLocalizedValue,
  getSearchTerms,
} from '@/utils/resourceNormalizeUtils';

export default function ModalVideo({ id, preventExpand = true, forceLanguage = null }) {
  const locale = useLocale();
  const { videos } = useVideoResource();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to find video from context
    const localVideo = videos?.find((v) => String(v.id) === String(id));

    // check the context first for the video
    if (localVideo) {
      setVideo(localVideo);
      setLoading(false);
    } else {
      // Fallback: fetch from API
      const fetchVideo = async () => {
        try {

          // Temp Data Fetch until API is created and deployed
          const [videosRes, lessonPlansRes] = await Promise.all([
            fetch('/api-static-data/videos.json'),
            fetch('/api-static-data/lessonPlans.json'),
          ]);

          if (!videosRes.ok) throw new Error(`Error fetching videos: ${videosRes.statusText}`);
          if (!lessonPlansRes.ok) throw new Error(`Error fetching lesson plans: ${lessonPlansRes.statusText}`);

          const allVideos = await videosRes.json();
          const allLessonPlans = await lessonPlansRes.json();
          const lessonPlanMap = new Map((allLessonPlans || []).map((plan) => [plan.id, plan]));
          const matchedVideo = allVideos.find((v) => String(v.id) === String(id));

          if (!matchedVideo) throw new Error("Video not found");

          const availableLanguages = Array.isArray(matchedVideo.supportedLanguages)
            ? matchedVideo.supportedLanguages.map((lang) => String(lang).trim().toLowerCase()).filter((lang) => ['en', 'fr'].includes(lang))
            : [];

          const lessonPlans = (matchedVideo.lessonPlanIds || []).map((lessonPlanId) => {
            const plan = lessonPlanMap.get(lessonPlanId);
            const titleByLanguage = {
              en: getLocalizedValue(plan?.title, 'en') || 'Lesson Plan',
              fr: getLocalizedValue(plan?.title, 'fr') || 'Plan de lecon',
            };

            return {
              id: lessonPlanId,
              title: getLocalizedValue(plan?.title, locale) || (locale === 'fr' ? 'Plan de lecon' : 'Lesson Plan'),
              titleByLanguage,
              link: `/${locale}/resources/lesson-plans?lesson-plan=${lessonPlanId}`,
              linkByLanguage: {
                en: `/en/resources/lesson-plans?lesson-plan=${lessonPlanId}`,
                fr: `/fr/resources/lesson-plans?lesson-plan=${lessonPlanId}`,
              },
            };
          });

          setVideo({
            id: matchedVideo.id,
            category: formatCategoryLabel(matchedVideo.categoryId, locale),
            title: getLocalizedValue(matchedVideo.title, locale),
            titleByLanguage: {
              en: getLocalizedValue(matchedVideo.title, 'en'),
              fr: getLocalizedValue(matchedVideo.title, 'fr'),
            },
            description: getLocalizedValue(matchedVideo.description, locale),
            descriptionByLanguage: {
              en: getLocalizedValue(matchedVideo.description, 'en'),
              fr: getLocalizedValue(matchedVideo.description, 'fr'),
            },
            availableLanguages: availableLanguages.length ? availableLanguages : [locale],
            hashtags: getSearchTerms(matchedVideo.searchTerms, locale),
            media: {
              type: matchedVideo.media?.type || 'youtube',
              url: matchedVideo.media?.url || '',
              thumbnailUrl: matchedVideo.media?.thumbnailUrl || matchedVideo.media?.thumbUrl || '',
              is360: Boolean(matchedVideo.media?.is360),
            },
            lessonPlans,
            lessonPlansByLanguage: {
              en: lessonPlans.map((plan) => ({
                ...plan,
                title: plan.titleByLanguage.en || plan.title,
                link: plan.linkByLanguage.en,
              })),
              fr: lessonPlans.map((plan) => ({
                ...plan,
                title: plan.titleByLanguage.fr || plan.title,
                link: plan.linkByLanguage.fr,
              })),
            },
          });

        } catch (err) {

          console.error('Error fetching video:', err);
          setVideo(null);
        } finally {
          setLoading(false);
        }
      };

      fetchVideo();
    }
  }, [id, locale, videos]);

  if (loading) return <div className='p-10'>Loading video data...</div>;
  if (!video) return <div className='p-10'>Video with id:{id} not found.</div>;

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <Video video={video} noExpand={preventExpand} forceLanguage={forceLanguage} />
    </div>
  )

}
