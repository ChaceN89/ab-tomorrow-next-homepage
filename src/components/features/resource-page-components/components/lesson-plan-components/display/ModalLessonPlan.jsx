/**
 * @file ModalLessonPlan.jsx
 * @module UI/Resources/ModalLessonPlan
 * @desc Fetches and displays a single lesson plan for use in modal views.
 *
 * @features
 * - Tries to retrieve from context first
 * - Falls back to API request if not found
 * - Graceful loading and error handling
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 */

"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useLessonPlanResource } from "../LessonPlanResourceContext";
import LessonPlanDetails from "./LessonPlanDetails";
import {
  formatGradeLabel,
  formatSubjectLabel,
  formatThemeLabel,
  getLocalizedArray,
  getLocalizedLinks,
  getLocalizedValue,
  getSearchTerms,
} from "@/utils/resourceNormalizeUtils";

export default function ModalLessonPlan({ id }) {
  const locale = useLocale();
  const { lessonPlans } = useLessonPlanResource();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localPlan = lessonPlans?.find((lp) => String(lp.id) === String(id));

    if (localPlan) {
      setPlan(localPlan);
      setLoading(false);
    } else {
      const fetchPlan = async () => {
        try {
          const res = await fetch('/api-static-data/lessonPlans.json');
          // const res = await fetch(`/app/resources/lesson-plans/lesson-plans.json`);


          if (!res.ok) throw new Error(`Error fetching lesson plans: ${res.statusText}`);

          const allPlans = await res.json();
          const matchedPlan = allPlans.find((p) => String(p.id) === String(id));

          if (!matchedPlan) throw new Error("Lesson plan not found");

          const availableLanguages = ["en", "fr"].filter((lang) => {
            const fieldMap = {
              en: matchedPlan.title?.en || matchedPlan.description?.en || matchedPlan.approximateTime?.en || matchedPlan.files?.en || matchedPlan.relatedResources?.en,
              fr: matchedPlan.title?.fr || matchedPlan.description?.fr || matchedPlan.approximateTime?.fr || matchedPlan.files?.fr || matchedPlan.relatedResources?.fr,
            };

            return Boolean(fieldMap[lang]);
          });

          const gradesByLanguage = {
            en: (matchedPlan.gradeIds || []).map((gradeId) => formatGradeLabel(gradeId, "en")),
            fr: (matchedPlan.gradeIds || []).map((gradeId) => formatGradeLabel(gradeId, "fr")),
          };
          const subjectsByLanguage = {
            en: (matchedPlan.subjectIds || []).map((subjectId) => formatSubjectLabel(subjectId, "en")),
            fr: (matchedPlan.subjectIds || []).map((subjectId) => formatSubjectLabel(subjectId, "fr")),
          };

          setPlan({
            id: matchedPlan.id,
            theme: formatThemeLabel(matchedPlan.themeId, locale),
            themeByLanguage: {
              en: formatThemeLabel(matchedPlan.themeId, "en"),
              fr: formatThemeLabel(matchedPlan.themeId, "fr"),
            },
            title: getLocalizedValue(matchedPlan.title, locale),
            titleByLanguage: {
              en: getLocalizedValue(matchedPlan.title, "en"),
              fr: getLocalizedValue(matchedPlan.title, "fr"),
            },
            description: getLocalizedValue(matchedPlan.description, locale),
            descriptionByLanguage: {
              en: getLocalizedValue(matchedPlan.description, "en"),
              fr: getLocalizedValue(matchedPlan.description, "fr"),
            },
            approximateTime: getLocalizedValue(matchedPlan.approximateTime, locale),
            approximateTimeByLanguage: {
              en: getLocalizedValue(matchedPlan.approximateTime, "en"),
              fr: getLocalizedValue(matchedPlan.approximateTime, "fr"),
            },
            files: getLocalizedLinks(matchedPlan.files, locale),
            filesByLanguage: {
              en: getLocalizedLinks(matchedPlan.files, "en"),
              fr: getLocalizedLinks(matchedPlan.files, "fr"),
            },
            relatedUrls: getLocalizedLinks(matchedPlan.relatedResources, locale),
            relatedUrlsByLanguage: {
              en: getLocalizedLinks(matchedPlan.relatedResources, "en"),
              fr: getLocalizedLinks(matchedPlan.relatedResources, "fr"),
            },
            grades: gradesByLanguage[locale] || gradesByLanguage.en,
            gradesByLanguage,
            subjects: subjectsByLanguage[locale] || subjectsByLanguage.en,
            subjectsByLanguage,
            tools: getLocalizedArray(matchedPlan.tools, locale),
            toolsByLanguage: {
              en: getLocalizedArray(matchedPlan.tools, "en"),
              fr: getLocalizedArray(matchedPlan.tools, "fr"),
            },
            tags: getSearchTerms(matchedPlan.searchTerms, locale),
            tagsByLanguage: {
              en: getSearchTerms(matchedPlan.searchTerms, "en"),
              fr: getSearchTerms(matchedPlan.searchTerms, "fr"),
            },
            learningOutcomes: getLocalizedArray(matchedPlan.learningOutcomes, locale),
            learningOutcomesByLanguage: {
              en: getLocalizedArray(matchedPlan.learningOutcomes, "en"),
              fr: getLocalizedArray(matchedPlan.learningOutcomes, "fr"),
            },
            videos: Array.isArray(matchedPlan.videoIds) ? matchedPlan.videoIds : [],
            availableLanguages: availableLanguages.length ? availableLanguages : [locale],
          });

          // API version for when API is created and deployed

          // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/lesson-plans/${id}`);
          // if (!res.ok) throw new Error(`Error fetching lesson plan: ${res.statusText}`);
          // const data = await res.json();
          // setPlan(data);


        } catch (err) {
          console.error("❌ Failed to fetch lesson plan:", err);
          setPlan(null);
        } finally {
          setLoading(false);
        }
      };

      fetchPlan();
    }
  }, [id, lessonPlans, locale]);

  if (loading) return <div className="p-10">Loading lesson plan data...</div>;
  if (!plan) return <div className="p-10">Lesson plan not found.</div>;

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <LessonPlanDetails plan={plan} />
    </div>
  );
}
