/**
 * @file VideoDetails.jsx
 * @module UI/Resources/VideoDetails
 * @desc Renders full detailed view of a video for modal and standalone pages.
 *
 * @author Chance Nielson
 * @updated Sep 9, 2026
 */

"use client";

import React, { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import MediaFrame from "@/components/common/mediaFrame/MediaFrame";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import CardLanguageSelect from "@/components/layout/language/CardLanguageSelect";
import { getMessages } from "@/i18n/messages";
import LinkListSection from "@/components/features/resource-page-components/lesson-plan-components/display/LinkListSection";
import { extractYouTubeId } from "@/utils/videoResouceUtils";

export default function VideoDetails({ video }) {
  const t = useTranslations("Pages.ResourcesPage");
  const detailsT = useTranslations("Details");
  const locale = useLocale();

  const availableLanguages = useMemo(
    () => (Array.isArray(video?.availableLanguages) && video.availableLanguages.length
      ? [...new Set(video.availableLanguages.map((lang) => String(lang || "").trim().toLowerCase()).filter((lang) => ["en", "fr"].includes(lang)))]
      : ["en"]),
    [video?.availableLanguages]
  );

  const localeFallback = availableLanguages.includes(locale) ? locale : availableLanguages[0] || "en";
  const [selectedLanguage, setSelectedLanguage] = useState(() => localeFallback);

  const resourceMessages = getMessages(selectedLanguage)?.Pages?.ResourcesPage ?? getMessages("en")?.Pages?.ResourcesPage ?? {};
  const localizedLabels = {
    lessonPlans: resourceMessages?.lessonPlans || t("lessonPlans"),
  };

  const selectedContent = useMemo(() => {
    const language = ["en", "fr"].includes(selectedLanguage) ? selectedLanguage : "en";

    return {
      title: video?.titleByLanguage?.[language] || video?.title || "",
      description: video?.descriptionByLanguage?.[language] || video?.description || "",
      lessonPlans: (video?.lessonPlansByLanguage?.[language] || video?.lessonPlans || []).map((plan) => ({
        id: plan?.id,
        title: plan?.title || "",
        link: plan?.linkByLanguage?.[language] || plan?.link || "",
      })),
    };
  }, [selectedLanguage, video]);

  const thumbnailSrc = video?.media?.thumbnailUrl || video?.media?.thumbUrl || "";
  const rawVideoUrl = video?.media?.url || "";
  const videoId = extractYouTubeId(rawVideoUrl);
  const watchOnYoutubeLabel = detailsT("ViewOnYouTube");
  const youtubeHref = rawVideoUrl.startsWith("http")
    ? rawVideoUrl
    : (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "");

  return (
    <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-start gap-4 rounded-lg border border-black/10 bg-tertiary/20 p-2">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <CardLanguageSelect
          availableLanguages={availableLanguages}
          selectedLanguage={selectedLanguage}
          onChange={setSelectedLanguage}
          className="w-full max-w-[240px]"
        />
      </div>

      <div className="border rounded-md bg-gray-50 relative overflow-hidden">
        <HexSeparator rows={40} hexClass="bg-primary/15" />
        <div className="p-4 flex items-start gap-2">
          <FaRegPlayCircle className="text-secondary text-4xl flex-shrink-0" />
          <div className="space-y-2 min-w-0 flex-1">
            <h2 className="text-2xl font-bold break-words">{selectedContent.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selectedContent.description}</p>

            {youtubeHref ? (
              <div className="pt-1">
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
        </div>
      </div>

      <div className="w-full max-w-6xl self-center shadow-sm">
        <div className="w-full">
          <MediaFrame
            type="video"
            videoSrc={videoId}
            imgSrc={thumbnailSrc}
            maxSize="max-w-full"
            captionLanguage={selectedLanguage === "fr" ? "fr-ca" : "en"}
          />
        </div>
      </div>

      {selectedContent.lessonPlans.length > 0 && (
        <div className="rounded-md border border-black/10 bg-white p-4 shadow-sm">
          <LinkListSection
            title={localizedLabels.lessonPlans}
            items={selectedContent.lessonPlans}
            icon={GoDotFill}
            maxVisibleItems={selectedContent.lessonPlans.length}
          />
        </div>
      )}

    </div>
  );
}
