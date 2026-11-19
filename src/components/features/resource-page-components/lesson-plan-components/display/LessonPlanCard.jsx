/**
 * @file LessonPlanCard.jsx
 * @module UI/Resources/LessonPlanCard
 * @desc Displays a full lesson plan card and makes the card clickable (except links).
 *
 * @props {object} plan - A lesson plan object.
 */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaClipboardList, FaRegClock, FaVideo } from "react-icons/fa";
import TagList from "./TagList";
import Tooltip from "@/components/common/Tooltip";
import Link from "next/link";
import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";
import { useLocale, useTranslations } from "next-intl";
import CardLanguageSwitch from "@/components/layout/language/CardLanguageSwitch";
import { getMessages } from "@/i18n/messages";

export default function LessonPlanCard({ plan }) {
  const t = useTranslations("Pages.ResourcesPage");
  const { trackEvent } = useGoogleAnalytics();
  const locale = useLocale();
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const initialLanguage = plan?.availableLanguages?.includes(locale)
    ? locale
    : plan?.availableLanguages?.[0] || "en";

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    setDescriptionExpanded(false);
  }, [selectedLanguage]);

  const selectedContent = useMemo(() => {
    const language = ["en", "fr"].includes(selectedLanguage) ? selectedLanguage : locale;

    return {
      title: plan?.titleByLanguage?.[language] || plan?.title || "",
      description: plan?.descriptionByLanguage?.[language] || plan?.description || "",
      approximateTime: plan?.approximateTimeByLanguage?.[language] || plan?.approximateTime || "",
      files: plan?.filesByLanguage?.[language] || plan?.files || [],
      relatedUrls: plan?.relatedUrlsByLanguage?.[language] || plan?.relatedUrls || [],
    };
  }, [locale, plan, selectedLanguage]);

  const resourceMessages = getMessages(selectedLanguage)?.Pages?.ResourcesPage ?? getMessages(locale)?.Pages?.ResourcesPage ?? {};
  const globalMessages = getMessages(selectedLanguage) ?? getMessages(locale) ?? {};
  const descriptionText = selectedContent?.description || "";
  const descriptionNeedsToggle = descriptionText.length > 180;
  const hasApproximateTime = Boolean(selectedContent.approximateTime && selectedContent.approximateTime.trim());
  const seeMoreLabel = resourceMessages?.seeMore || t("seeMore", "See More");
  const seeLessLabel = resourceMessages?.seeLess || (selectedLanguage === "fr" ? "Voir moins" : "See less");

  const availableLanguages = Array.isArray(plan?.availableLanguages) ? plan.availableLanguages : [locale];
  const localizedLessonPlanHref = `/${selectedLanguage}/resources/lesson-plans?lesson-plan=${plan.id}`;
  const openInNewPageHref = `/${selectedLanguage}/resources/lesson?id=${encodeURIComponent(String(plan?.id || ""))}`;
  const viewInNewPageLabel = globalMessages?.ViewItems?.ViewInNewPage || (selectedLanguage === "fr" ? "Voir dans une nouvelle page" : "View in New page");

  const cardGrades = plan?.gradesByLanguage?.[selectedLanguage] || plan?.grades || [];
  const cardSubjects = plan?.subjectsByLanguage?.[selectedLanguage] || plan?.subjects || [];
  const localizedLabels = {
    grades: resourceMessages?.filters?.toggle || t("filters.toggle"),
    subjects: resourceMessages?.subjectsTitle || t("subjectsTitle"),
    lessonFile: resourceMessages?.lessonFileTitle || t("lessonFileTitle"),
    lessonFiles: resourceMessages?.lessonFilesTitle || t("lessonFilesTitle"),
    videos: resourceMessages?.videos || t("videos"),
  };
  const lessonFilesCount = selectedContent.files?.length || 0;
  const lessonFilesLabel = lessonFilesCount === 1 ? localizedLabels.lessonFile : localizedLabels.lessonFiles;

  return (
    <Link
      href={localizedLessonPlanHref}
      scroll={false}
      className="block h-full"
    >
      <div
        onClick={() =>
          trackEvent("LessonPlanCard", "Click", `Opened: ${selectedContent.title} | id: ${plan.id}`, 1)
        }
        className="group flex flex-col h-full  justify-start gap-2 bg-gray-50 shadow-lg rounded-lg p-3 border border-black/0 hover:ring-2 hover:ring-secondary transition-all"
      >

        <div className="w-full">
          <Tooltip
            text={
              <>
                <div>{selectedContent.title}</div>
                {hasApproximateTime && (
                  <div className="mt-1 italic text-gray-200">{selectedContent.approximateTime}</div>
                )}
              </>
            }
            openDuration={500}
            className="block !max-w-80"
          >
            <div className="w-full border rounded-md bg-primary/35 relative overflow-hidden">
              <div className="p-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center text-primary transition-transform duration-300 group-hover:scale-130">
                  <FaClipboardList className="text-[2rem]" aria-hidden="true" />
                </div>
                <div className="min-w-0 min-h-[3rem] flex flex-1 items-center">
                  <h3 className="text-base font-semibold leading-snug line-clamp-2 break-words text-black">
                    {selectedContent.title}
                  </h3>
                </div>
              </div>
            </div>
          </Tooltip>
        </div>

        <div className="border-b pb-1">
          {hasApproximateTime ? (
            <div
              className="mb-1 flex min-w-0 items-center gap-1 whitespace-nowrap text-xs text-gray-500"
              title={selectedContent.approximateTime}
            >
              <FaRegClock className="shrink-0" aria-hidden="true" />
              <span className="truncate">{selectedContent.approximateTime}</span>
            </div>
          ) : null}
          <p
            className={`text-sm text-gray-700 transition-all duration-200 ${descriptionExpanded ? "max-h-none overflow-visible" : "max-h-10 overflow-hidden"}`}
          >
            {selectedContent.description}
          </p>

          {selectedContent.description && descriptionNeedsToggle && (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setDescriptionExpanded((current) => !current);
              }}
              className="mt-1 text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              {descriptionExpanded ? seeLessLabel : seeMoreLabel}
            </button>
          )}
        </div>

        <TagList label={localizedLabels.grades} items={cardGrades} pillClass="bg-gray-100 border border-gray-300 text-gray-700" />
        <TagList label={localizedLabels.subjects} items={cardSubjects} pillClass="bg-blue-100 border border-blue-300 text-blue-700" />

        {(lessonFilesCount > 0 || plan.videos?.length > 0) && (
          <div className="flex flex-wrap items-center justify-start gap-2 pt-1">
            {lessonFilesCount > 0 ? (
              <div className="flex shrink-0 items-center gap-1 rounded-lg border border-primary/30 bg-primary/35 px-2 py-1 text-sm font-semibold text-gray-900">
                <FaClipboardList className="text-primary" aria-hidden="true" />
                {lessonFilesCount} {lessonFilesLabel}
              </div>
            ) : null}

            {plan.videos && plan.videos.length > 0 ? (
              <div className="flex shrink-0 items-center gap-1 rounded-lg border border-black/10 bg-gray-300 px-2 py-1 text-sm font-semibold">
                <FaVideo aria-hidden="true" />
                {plan.videos.length} {localizedLabels.videos}
              </div>
            ) : null}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <CardLanguageSwitch
            availableLanguages={availableLanguages}
            selectedLanguage={selectedLanguage}
            onChange={setSelectedLanguage}
            label={t("filters.lessonPlanLanguage")}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              window.open(openInNewPageHref, "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary hover:text-white hover:cursor-pointer"
          >
            {viewInNewPageLabel}
          </button>
        </div>
      </div>
    </Link>
  );
}
