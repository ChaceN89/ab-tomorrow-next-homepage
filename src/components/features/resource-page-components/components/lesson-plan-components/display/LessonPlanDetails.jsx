/**
 * @file LessonPlanDetails.jsx
 * @module UI/Resources/LessonPlanDetails
 * @desc Renders full detailed view of a lesson plan (for modals or full page).
 * 
 *  * @updated July 21 2026 - added translations 

 */

"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { FaClipboardList, FaFilePdf, FaLink, FaRegClock } from "react-icons/fa";
import TagList from "./TagList";
import LinkListSection from "./LinkListSection";
import ModalVideo from "../../video-components/display/ModalVideo";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import CardLanguageSelect from "../../CardLanguageSelect";
import { getMessages } from "@/i18n/messages";

export default function LessonPlanDetails({ plan }) {
  const t = useTranslations("Pages.ResourcesPage");
  const initialLanguage = plan?.availableLanguages?.includes("en")
    ? "en"
    : plan?.availableLanguages?.includes("fr")
      ? "fr"
      : "en";

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const availableLanguages = Array.isArray(plan?.availableLanguages)
    ? [...new Set(plan.availableLanguages.map((lang) => String(lang || "").trim().toLowerCase()).filter((lang) => ["en", "fr"].includes(lang)))]
    : ["en"];
  const resourceMessages = getMessages(selectedLanguage)?.Pages?.ResourcesPage ?? getMessages("en")?.Pages?.ResourcesPage ?? {};
  const localizedLabels = {
    grades: resourceMessages?.filters?.toggle || t("filters.toggle"),
    subjects: resourceMessages?.subjectsTitle || t("subjectsTitle"),
    tools: resourceMessages?.filters?.tool || t("filters.tool"),
    tags: resourceMessages?.filters?.tags || t("filters.tags"),
    files: resourceMessages?.lessonFilesTitle || t("lessonFilesTitle"),
    relatedLinks: resourceMessages?.relatedLinksTitle || t("relatedLinksTitle"),
    learningOutcomes: selectedLanguage === "fr" ? "Résultats d’apprentissage" : t("learningOutcomes", "Learning Outcomes"),
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

  return (
    <div className="flex flex-col h-full justify-start gap-4 rounded-lg p-6 border border-black/10 max-w-7xl mx-auto bg-tertiary/20">
      <div className="flex justify-end">
        <CardLanguageSelect
          availableLanguages={availableLanguages}
          selectedLanguage={selectedLanguage}
          onChange={setSelectedLanguage}
          className="w-full max-w-[240px]"
        />
      </div>

      <div className=" border rounded-md  bg-gray-50 relative overflow-hidden">
        <HexSeparator rows={40} hexClass="bg-primary/15" />
        <div className="p-4 flex items-start gap-2">

          <FaClipboardList className="text-primary text-4xl flex-shrink-0" />
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-2xl font-bold ">{selectedContent.title}</h2>

              <div className="flex items-center justify-end gap-1 min-w-[7rem] ">
                <FaRegClock className="text-gray-700 text-lg flex-shrink-0" />
                <span className="text-gray-700">{selectedContent.approximateTime}</span>
              </div>
            </div>
            <div className="italic text-sm">"{selectedContent.theme}"</div>
            <p className="text text-gray-700">{selectedContent.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">

        {/* Files */}
        <LinkListSection
          title={localizedLabels.files}
          items={selectedContent.files}
          icon={FaFilePdf}
          iconClassName="text-red-600"
          maxVisibleItems={selectedContent.files.length}
        />
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
        <TagList label={localizedLabels.tools} items={selectedContent.tools} pillClass="bg-green-100 border border-green-300 text-green-700" />
        <div className="col-span-3">
          <TagList label={localizedLabels.tags} items={selectedContent.tags} pillClass="bg-yellow-100 border border-yellow-300 text-yellow-700" />
        </div>
      </div>

      {/* Videos */}
      {plan.videos?.length > 0 && (
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {plan.videos.map((vid, idx) => (
              <li key={idx}>
                <ModalVideo id={vid} preventExpand={false} forceLanguage={selectedLanguage} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
