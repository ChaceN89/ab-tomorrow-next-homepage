/**
 * @file LessonPlanCard.jsx
 * @module UI/Resources/LessonPlanCard
 * @desc Displays a full lesson plan card and makes the card clickable (except links).
 *
 * @props {object} plan - A lesson plan object.
 */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaFilePdf, FaLink, FaClipboardList, FaRegClock, FaVideo } from "react-icons/fa";
import TagList from "./TagList";
import Tooltip from "@/components/common/Tooltip";
import LinkListSection from "./LinkListSection";
import Link from "next/link";
import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";
import { useLocale, useTranslations } from "next-intl";
import CardLanguageSelect from "../../CardLanguageSelect";
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
  const descriptionText = selectedContent?.description || "";
  const descriptionNeedsToggle = descriptionText.length > 180;
  const hasApproximateTime = Boolean(selectedContent.approximateTime && selectedContent.approximateTime.trim());
  const seeMoreLabel = resourceMessages?.seeMore || t("seeMore", "See More");
  const seeLessLabel = resourceMessages?.seeLess || (selectedLanguage === "fr" ? "Voir moins" : "See less");

  const availableLanguages = Array.isArray(plan?.availableLanguages) ? plan.availableLanguages : [locale];
  const localizedLessonPlanHref = `/${selectedLanguage}/resources/lesson-plans?lesson-plan=${plan.id}`;

  const cardGrades = plan?.gradesByLanguage?.[selectedLanguage] || plan?.grades || [];
  const cardSubjects = plan?.subjectsByLanguage?.[selectedLanguage] || plan?.subjects || [];
  const localizedLabels = {
    grades: resourceMessages?.filters?.toggle || t("filters.toggle"),
    subjects: resourceMessages?.subjectsTitle || t("subjectsTitle"),
    lessonFiles: resourceMessages?.lessonFilesTitle || t("lessonFilesTitle"),
    relatedLinks: resourceMessages?.relatedLinksTitle || t("relatedLinksTitle"),
    videos: resourceMessages?.videos || t("videos"),
  };

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
        className="flex flex-col h-full  justify-start gap-2 bg-gray-50 shadow-lg rounded-lg p-3 border border-black/0 hover:ring-2 hover:ring-secondary transition-all"
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
            className="block "
          >
            <div className="w-full border rounded-md bg-primary/35 relative overflow-hidden">
              <div className="p-4 flex items-start gap-2">
                <FaClipboardList className="text-primary text-4xl flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="min-h-[2.75rem] text-base font-semibold leading-snug line-clamp-2 break-words">
                    {selectedContent.title}
                  </h3>

                </div>
                <div
                  className={`mt-1 flex items-center gap-1 text-xs text-gray-500 ${hasApproximateTime ? "max-w-[6.5rem]" : "w-0 max-w-0 overflow-hidden"}`}
                >
                  {hasApproximateTime ? (
                    <>
                      <FaRegClock className="text-gray-500 text-xs flex-shrink-0" />
                      <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 text-xs">
                        {selectedContent.approximateTime}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </Tooltip>
        </div>

        <CardLanguageSelect
          availableLanguages={availableLanguages}
          selectedLanguage={selectedLanguage}
          onChange={setSelectedLanguage}
        />

        <div className="border-b pb-1">
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

        <LinkListSection
          title={`${selectedContent.files?.length || 0} ${localizedLabels.lessonFiles}`}
          items={selectedContent.files}
          icon={FaFilePdf}
          iconClassName="text-red-600"
          maxVisibleItems={1}
          seeMoreText={seeMoreLabel}
          seeLessText={seeLessLabel}
        />

        <LinkListSection
          title={localizedLabels.relatedLinks}
          items={selectedContent.relatedUrls}
          icon={FaLink}
          iconClassName="text-blue-700"
          maxVisibleItems={1}
          seeMoreText={seeMoreLabel}
          seeLessText={seeLessLabel}
        />

        {plan.videos && plan.videos.length > 0 && (
          <div className="mt-2 w-fit text-sm p-2 text font-semibold flex items-center gap-1 border-black bg-gray-300 rounded-xl">
            <FaVideo />
            {plan.videos.length} {localizedLabels.videos}
          </div>
        )}
      </div>
    </Link>
  );
}
