/**
 * @file LessonPlanDetails.jsx
 * @module UI/Resources/LessonPlanDetails
 * @desc Renders full detailed view of a lesson plan (for modals or full page).
 * 
 *  * @updated July 21 2026 - added translations 

 */

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaClipboardList, FaDownload, FaEye, FaLink, FaRegClock } from "react-icons/fa";
import toast from "react-hot-toast";
import { SiGoogledocs } from "react-icons/si";
import TagList from "./TagList";
import LinkListSection from "./LinkListSection";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import CardLanguageSelect from "../../../../layout/language/CardLanguageSelect";
import { getMessages } from "@/i18n/messages";
import VideoWithinLessonPlan from "../../video-components/display/VideoWithinLessonPlan";

export default function LessonPlanDetails({ plan, onTitleChange = null }) {
  const t = useTranslations("Pages.ResourcesPage");
  const locale = useLocale();

  const availableLanguages = useMemo(
    () => (Array.isArray(plan?.availableLanguages)
      ? [...new Set(plan.availableLanguages.map((lang) => String(lang || "").trim().toLowerCase()).filter((lang) => ["en", "fr"].includes(lang)))]
      : ["en"]),
    [plan?.availableLanguages]
  );

  const localeFallback = availableLanguages.includes(locale) ? locale : availableLanguages[0] || "en";
  const [selectedLanguage, setSelectedLanguage] = useState(() => localeFallback);
  const lastLocaleRef = useRef(locale);
  const lastPlanIdRef = useRef(plan?.id);

  useEffect(() => {
    const localeChanged = lastLocaleRef.current !== locale;
    const planChanged = lastPlanIdRef.current !== plan?.id;

    if (!localeChanged && !planChanged) {
      return;
    }

    lastLocaleRef.current = locale;
    lastPlanIdRef.current = plan?.id;
    setSelectedLanguage(localeFallback);
  }, [locale, localeFallback, plan?.id]);

  useEffect(() => {
    if (!availableLanguages.includes(selectedLanguage)) {
      setSelectedLanguage(localeFallback);
    }
  }, [availableLanguages, localeFallback, selectedLanguage]);

  const resourceMessages = getMessages(selectedLanguage)?.Pages?.ResourcesPage ?? getMessages("en")?.Pages?.ResourcesPage ?? {};
  const englishResourceMessages = getMessages("en")?.Pages?.ResourcesPage ?? {};
  const localizedLabels = {
    grades: resourceMessages?.filters?.toggle || t("filters.toggle"),
    subjects: resourceMessages?.subjectsTitle || t("subjectsTitle"),
    tools: resourceMessages?.filters?.tool || t("filters.tool"),
    tags: resourceMessages?.tagsTitle || (selectedLanguage === "fr" ? "Mots-clés" : "Tags"),
    files: resourceMessages?.lessonFilesTitle || t("lessonFilesTitle"),
    relatedLinks: resourceMessages?.relatedLinksTitle || t("relatedLinksTitle"),
    learningOutcomes: selectedLanguage === "fr" ? "Résultats d’apprentissage" : t("learningOutcomes", "Learning Outcomes"),
    fileActions: resourceMessages?.lessonFileActions || englishResourceMessages?.lessonFileActions || {},
    fileGroups: resourceMessages?.lessonFileGroups || englishResourceMessages?.lessonFileGroups || {},
    singularFiles: resourceMessages?.lessonFileTitle || englishResourceMessages?.lessonFileTitle || "Lesson File",
  };

  const handlePdfDownload = async (event, pdfUrl, fileTitle) => {
    event.preventDefault();

    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`PDF request failed with status ${response.status}`);
      }

      const pdfBlob = await response.blob();
      const objectUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      const safeFileTitle = fileTitle
        .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
        .replace(/\s+/g, " ")
        .trim() || "lesson-plan";
      link.href = objectUrl;
      link.download = /\.pdf$/i.test(safeFileTitle) ? safeFileTitle : `${safeFileTitle}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    } catch (error) {
      console.error("PDF download failed:", error);
      toast.error(localizedLabels.fileActions.downloadFailed);
    }
  };

  const selectedContent = useMemo(() => {
    const language = ["en", "fr"].includes(selectedLanguage) ? selectedLanguage : "en";

    return {
      theme: plan?.themeByLanguage?.[language] || plan?.theme || "",
      title: plan?.titleByLanguage?.[language] || plan?.title || "",
      description: plan?.descriptionByLanguage?.[language] || plan?.description || "",
      approximateTime: plan?.approximateTimeByLanguage?.[language] || plan?.approximateTime || "",
      files: plan?.filesByLanguage?.[language] || plan?.files || [],
      relatedUrls: plan?.relatedUrlsByLanguage?.[language] || plan?.relatedUrls || [],
      grades: plan?.gradesByLanguage?.[language] || plan?.grades || [],
      subjects: plan?.subjectsByLanguage?.[language] || plan?.subjects || [],
      tools: plan?.toolsByLanguage?.[language] || plan?.tools || [],
      tags: plan?.tagsByLanguage?.[language] || plan?.tags || [],
      learningOutcomes: plan?.learningOutcomesByLanguage?.[language] || plan?.learningOutcomes || [],
    };
  }, [plan, selectedLanguage]);

  useEffect(() => {
    onTitleChange?.(selectedContent.title);
  }, [onTitleChange, selectedContent.title]);

  return (
    <div className="flex flex-col h-full justify-start gap-4  max-w-7xl mx-auto">
      <div className="shrink-0 border rounded-md  bg-gray-50 relative overflow-hidden">
        <HexSeparator rows={40} hexClass="bg-primary/15" />
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 p-4 md:grid-cols-[auto_minmax(0,1fr)_auto]">
          <FaClipboardList className="text-primary text-5xl sm:text-6xl" aria-hidden="true" />
          <div className="min-w-0 space-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <div className="text-xs font-semibold italic tracking-wide text-primary">"{selectedContent.theme}"</div>
              –
              {selectedContent.approximateTime?.trim() ? (
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <FaRegClock className="flex-shrink-0" aria-hidden="true" />
                  <span>{selectedContent.approximateTime}</span>
                </div>
              ) : null}
            </div>
            <h2 className="break-words text-2xl font-bold">{selectedContent.title}</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{selectedContent.description}</p>
          </div>
          <div className="col-span-2 flex flex-col items-end md:col-span-1 md:self-start">
            <div className="w-fit max-w-full">
              <CardLanguageSelect
                availableLanguages={availableLanguages}
                selectedLanguage={selectedLanguage}
                onChange={setSelectedLanguage}
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">

        {/* Files */}
        {selectedContent.files.length > 0 ? (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">
                {selectedContent.files.length === 1 ? localizedLabels.singularFiles : localizedLabels.files}
              </h3>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                {selectedContent.files.length}
              </span>
            </div>
            <ul className="divide-y-[0.5px] divide-gray-300">
              {selectedContent.files.map((file, index) => {
                const pdfUrl = file?.pdfUrl || "";
                const googleDocsUrl = file?.url || (file?.link !== pdfUrl ? file?.link : "");
                const fileTitle = file?.title || file?.label || file?.name || "Resource";
                const fileTypeLabel = localizedLabels.fileGroups?.[file?.fileType]?.singular || "";

                return (
                  <li
                    key={`${fileTitle}-${index}`}
                    className="flex flex-col gap-1.5 py-2"
                  >
                    <span className="min-w-0 break-words text-sm font-medium text-gray-800">{fileTitle}</span>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      {fileTypeLabel ? (
                        <span className="text-xs font-semibold italic tracking-wide text-primary">"{fileTypeLabel}"</span>
                      ) : <span aria-hidden="true" />}
                      <div className="flex flex-wrap items-center gap-2">
                      {pdfUrl ? (
                        <a
                          href={pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${localizedLabels.fileActions.viewPdf}: ${fileTitle}`}
                          title={localizedLabels.fileActions.viewPdf}
                          className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        >
                          <FaEye aria-hidden="true" />
                          <span>{localizedLabels.fileActions.viewPdf}</span>
                        </a>
                      ) : null}
                      {googleDocsUrl ? (
                        <a
                          href={googleDocsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${localizedLabels.fileActions.googleDocs}: ${fileTitle}`}
                          title={localizedLabels.fileActions.googleDocs}
                          className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        >
                          <SiGoogledocs aria-hidden="true" />
                          <span>{localizedLabels.fileActions.googleDocs}</span>
                        </a>
                      ) : null}
                      {pdfUrl ? (
                        <a
                          href={pdfUrl}
                          download
                          onClick={(event) => handlePdfDownload(event, pdfUrl, fileTitle)}
                          aria-label={`${localizedLabels.fileActions.downloadPdf}: ${fileTitle}`}
                          title={localizedLabels.fileActions.downloadPdf}
                          className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        >
                          <FaDownload aria-hidden="true" />
                          <span>{localizedLabels.fileActions.downloadPdf}</span>
                        </a>
                      ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        <div className="row-span-2">
          {/* Loop through plan.learningOutcomes */}
          <h3 className="text-lg font-bold mb-2">{localizedLabels.learningOutcomes}</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {selectedContent.learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="mb-1">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* External Links */}
        <LinkListSection
          title={localizedLabels.relatedLinks}
          items={selectedContent.relatedUrls}
          icon={FaLink}
          iconClassName="text-blue-700"
          maxVisibleItems={selectedContent.relatedUrls.length}
        />

      </div>

      {/* Tag Pills */}
      <div className="space-y-2 flex flex-col sm:grid  sm:grid-cols-3 gap-4 items-start">
        <TagList label={localizedLabels.grades} items={selectedContent.grades} pillClass="bg-gray-100 border border-gray-300 text-gray-700" />
        <TagList label={localizedLabels.subjects} items={selectedContent.subjects} pillClass="bg-blue-100 border border-blue-300 text-blue-700" />
        <TagList
          label={localizedLabels.tags}
          items={selectedContent.tags}
          pillClass="bg-yellow-100 border border-yellow-300 text-yellow-700"
          numberOVisiblefItems={5}
        />
        <div className="sm:col-span-3">
          <TagList label={localizedLabels.tools} items={selectedContent.tools} pillClass="bg-green-100 border border-green-300 text-green-700" />
        </div>
      </div>

      {/* Videos */}
      {plan.videos?.length > 0 && (
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {plan.videos.map((vid, idx) => (
              <li key={idx}>
                <VideoWithinLessonPlan id={vid} forceLanguage={selectedLanguage} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
