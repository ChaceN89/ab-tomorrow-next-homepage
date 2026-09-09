/**
 * @file VideoWithinLessonPlan.jsx
 * @module UI/Resources/VideoWithinLessonPlan
 * @desc Renders a compact video preview card inside lesson plan details.
 *
 * @author Chance Nielson
 * @updated Sep 9, 2026
 */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useVideoResource } from "../VideoResourceContext";
// import VideoCard from "./VideoCard";
import { getLocalizedValue } from "@/utils/resourceNormalizeUtils";
import { extractYouTubeId } from "@/utils/videoResouceUtils";
import Tooltip from "@/components/common/Tooltip";

export default function VideoWithinLessonPlan({ id, forceLanguage = null }) {
  const locale = useLocale();
  const viewItemsT = useTranslations("ViewItems");
  const detailsT = useTranslations("Details");
  const { videos } = useVideoResource();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localVideo = videos?.find((v) => String(v.id) === String(id));

    if (localVideo) {
      setVideo(localVideo);
      setLoading(false);
      return;
    }

    const fetchVideo = async () => {
      try {
        const [videosRes, lessonPlansRes] = await Promise.all([
          fetch("/api-static-data/videos.json"),
          fetch("/api-static-data/lessonPlans.json"),
        ]);

        if (!videosRes.ok) throw new Error(`Error fetching videos: ${videosRes.statusText}`);
        if (!lessonPlansRes.ok) throw new Error(`Error fetching lesson plans: ${lessonPlansRes.statusText}`);

        const allVideos = await videosRes.json();
        const allLessonPlans = await lessonPlansRes.json();
        const lessonPlanMap = new Map((allLessonPlans || []).map((plan) => [plan.id, plan]));
        const matchedVideo = allVideos.find((v) => String(v.id) === String(id));

        if (!matchedVideo) throw new Error("Video not found");

        const availableLanguages = Array.isArray(matchedVideo.supportedLanguages)
          ? matchedVideo.supportedLanguages
            .map((lang) => String(lang).trim().toLowerCase())
            .filter((lang) => ["en", "fr"].includes(lang))
          : [];

        const lessonPlans = (matchedVideo.lessonPlanIds || []).map((lessonPlanId) => {
          const plan = lessonPlanMap.get(lessonPlanId);
          const titleByLanguage = {
            en: getLocalizedValue(plan?.title, "en") || "Lesson Plan",
            fr: getLocalizedValue(plan?.title, "fr") || "Plan de lecon",
          };

          return {
            id: lessonPlanId,
            title: getLocalizedValue(plan?.title, locale) || (locale === "fr" ? "Plan de lecon" : "Lesson Plan"),
            titleByLanguage,
            link: `/${locale}/resources/lesson?id=${lessonPlanId}`,
            linkByLanguage: {
              en: `/en/resources/lesson?id=${lessonPlanId}`,
              fr: `/fr/resources/lesson?id=${lessonPlanId}`,
            },
          };
        });

        setVideo({
          id: matchedVideo.id,
          title: getLocalizedValue(matchedVideo.title, locale),
          titleByLanguage: {
            en: getLocalizedValue(matchedVideo.title, "en"),
            fr: getLocalizedValue(matchedVideo.title, "fr"),
          },
          description: getLocalizedValue(matchedVideo.description, locale),
          descriptionByLanguage: {
            en: getLocalizedValue(matchedVideo.description, "en"),
            fr: getLocalizedValue(matchedVideo.description, "fr"),
          },
          availableLanguages: availableLanguages.length ? availableLanguages : [locale],
          media: {
            type: matchedVideo.media?.type || "youtube",
            url: matchedVideo.media?.url || "",
            thumbnailUrl: matchedVideo.media?.thumbnailUrl || matchedVideo.media?.thumbUrl || "",
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
        console.error("Error fetching video:", err);
        setVideo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id, locale, videos]);

  const activeLanguage = forceLanguage && ["en", "fr"].includes(forceLanguage)
    ? forceLanguage
    : locale;

  const selectedTitle = useMemo(() => {
    if (!video) return "";
    return video?.titleByLanguage?.[activeLanguage] || video?.title || "";
  }, [activeLanguage, video]);

  const thumbnailSrc = video?.media?.thumbnailUrl || video?.media?.thumbUrl || "";
  const rawVideoUrl = video?.media?.url || "";
  const videoId = extractYouTubeId(rawVideoUrl);
  const youtubeHref = rawVideoUrl.startsWith("http")
    ? rawVideoUrl
    : (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "");
  const watchOnYoutubeLabel = detailsT("ViewOnYouTube");
  const openInNewPageHref = `/${activeLanguage}/resources/video?id=${encodeURIComponent(String(id || ""))}`;

  if (loading) return <div className="p-4 text-sm text-gray-600">Loading video...</div>;
  if (!video) return <div className="p-4 text-sm text-gray-600">Video not found.</div>;

  return (
    <div className="space-y-3">

      <div className="rounded-lg border border-black/10 bg-gray-50 p-2 shadow-sm">
        <h4 className="mb-2 text-base font-semibold leading-snug text-black">{selectedTitle}</h4>

        {thumbnailSrc ? (
          <Link href={openInNewPageHref} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md border border-black/10 bg-white">
            <Tooltip text={viewItemsT("ViewInNewPage")} openDuration={500}>
              <img
                src={thumbnailSrc}
                alt={selectedTitle}
                className="h-48 w-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </Tooltip>
          </Link>
        ) : null}

        {youtubeHref ? (
          <div className="mt-2 flex justify-end">
            <a
              href={youtubeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-red-300 bg-red-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-red-700 shadow-[0_2px_10px_rgba(185,28,28,0.08)] transition-colors hover:bg-red-600 hover:text-white"
            >
              {watchOnYoutubeLabel}
            </a>
          </div>
        ) : null}
      </div>
    </div >
  );
}
