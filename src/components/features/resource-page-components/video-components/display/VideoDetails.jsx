/**
 * @file VideoDetails.jsx
 * @module UI/Resources/VideoDetails
 * @desc Renders full detailed view of a video for modal and standalone pages.
 *
 * @author Chance Nielson
 * @updated Sep 9, 2026
 */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import MediaFrame from "@/components/common/mediaFrame/MediaFrame";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import CardLanguageSelect from "@/components/layout/language/CardLanguageSelect";
import { getMessages } from "@/i18n/messages";
import LinkListSection from "@/components/features/resource-page-components/lesson-plan-components/display/LinkListSection";
import { extractYouTubeId } from "@/utils/videoResouceUtils";
import { useVideoResource } from "../VideoResourceContext";
import CopyResourceLink from "../../CopyResourceLink";

export default function VideoDetails({ video, prioritizeMedia = false, onTitleChange = null, isModal = false }) {
  const t = useTranslations("Pages.ResourcesPage");
  const detailsT = useTranslations("Details");
  const locale = useLocale();
  const { getPreferredThumbnailSrc } = useVideoResource();

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

  useEffect(() => {
    onTitleChange?.(selectedContent.title);
  }, [onTitleChange, selectedContent.title]);

  const thumbnailSrc = getPreferredThumbnailSrc(video);
  const rawVideoUrl = video?.media?.url || "";
  const videoId = extractYouTubeId(rawVideoUrl);
  const watchOnYoutubeLabel = detailsT("ViewOnYouTube");
  const youtubeHref = rawVideoUrl.startsWith("http")
    ? rawVideoUrl
    : (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "");

  const mediaFrame = (
  <MediaFrame
    type="video"
    videoSrc={videoId}
    primaryUrl={video.media?.primaryUrl}
    is360={video.media?.is360}
    subtitles={video.subtitles}
    imgSrc={thumbnailSrc}
    maxSize="max-w-full"
    preload={prioritizeMedia}
    captionLanguage={selectedLanguage === "fr" ? "fr-ca" : "en"}
  />
  );

  return (
    <div className={`mx-auto flex h-full w-full max-w-7xl flex-col justify-start ${isModal ? "min-h-[22rem] gap-2" : "gap-4"}`}>
      {isModal ? (
        // The container query lets the 16:9 video shrink to whatever height the modal leaves, so the modal doesn't need to scroll.
        <div className="min-h-0 w-full flex-1 [container-type:size]">
          <div
            className="mx-auto flex h-full items-center"
            style={{ width: "min(100cqw, calc(100cqh * 16 / 9))" }}
          >
            <div className="w-full shadow-sm">{mediaFrame}</div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl self-center shadow-sm">
          <div className="w-full">{mediaFrame}</div>
        </div>
      )}

      <div className="w-full max-w-6xl shrink-0 self-center border rounded-md bg-gray-50 relative overflow-hidden">
        <HexSeparator rows={40} hexClass="bg-secondary/15" />
        <div className={`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 ${isModal ? "gap-y-2 p-2 sm:p-3" : "gap-y-3 p-4"} md:grid-cols-[auto_minmax(0,1fr)_minmax(160px,220px)]`}>
          <FaRegPlayCircle className={`text-secondary ${isModal ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl"}`} aria-hidden="true" />
          <div className="min-w-0 space-y-2">
            <h2 className={`font-bold break-words ${isModal ? "text-lg sm:text-xl" : "text-2xl"}`}>{selectedContent.title}</h2>
            <p
              className={`text-gray-700 text-sm leading-relaxed whitespace-pre-line ${isModal ? "line-clamp-3" : ""}`}
              title={isModal ? selectedContent.description : undefined}
            >
              {selectedContent.description}
            </p>
          </div>
          <div className="col-span-2 flex flex-col items-end gap-2 md:col-span-1">
            <div className="flex w-40 max-w-full flex-col gap-2">
              {youtubeHref ? (
                <a
                  href={youtubeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-red-300 bg-red-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-red-700 shadow-[0_2px_10px_rgba(185,28,28,0.08)] transition-colors hover:bg-red-600 hover:text-white hover:cursor-pointer"
                >
                  {watchOnYoutubeLabel}
                </a>
              ) : null}
              <div className="flex w-full items-center gap-2">
                <CopyResourceLink
                  resourceType="video"
                  href={`/${selectedLanguage}/resources/video/?id=${encodeURIComponent(video.id)}`}
                />
                <CardLanguageSelect
                  availableLanguages={availableLanguages}
                  selectedLanguage={selectedLanguage}
                  onChange={setSelectedLanguage}
                  className="min-w-0 flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedContent.lessonPlans.length > 0 && (
        <div className={`rounded-md border border-black/10 bg-white shadow-sm ${isModal ? "w-full max-w-6xl shrink-0 self-center px-3 pb-2" : "p-4"}`}>
          <LinkListSection
            title={localizedLabels.lessonPlans}
            items={selectedContent.lessonPlans}
            icon={GoDotFill}
            maxVisibleItems={isModal ? 2 : selectedContent.lessonPlans.length}
          />
        </div>
      )}

    </div>
  );
}
