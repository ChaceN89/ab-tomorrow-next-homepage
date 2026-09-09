"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// components
import Link from "next/link";
import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";
import { useLocale, useTranslations } from "next-intl";
import CardLanguageSelect from "../../../../layout/language/CardLanguageSelect";
import { getMessages } from "@/i18n/messages";
import { extractYouTubeId } from "@/utils/videoResouceUtils";

import { FaRegPlayCircle } from "react-icons/fa";



export default function VideoCard({
  video,
  noExpand = false,
  forceLanguage = null,
  openInNewPageHref = null,
  openInNewPageLabel = "",
}) {
  const t = useTranslations("Pages.ResourcesPage");
  const detailsT = useTranslations("Details");
  const { trackEvent } = useGoogleAnalytics();
  const locale = useLocale();
  const router = useRouter();
  const cardOpenInNewPageHref = openInNewPageHref || `/${locale}/resources/video?id=${encodeURIComponent(String(video?.id || ""))}`;

  const availableLanguages = useMemo(
    () => (Array.isArray(video?.availableLanguages) && video.availableLanguages.length
      ? video.availableLanguages
      : ["en"]),
    [video?.availableLanguages]
  );

  const initialLanguage = availableLanguages.includes(locale)
    ? locale
    : availableLanguages[0] || "en";

  const [selectedLanguage, setSelectedLanguage] = useState(() => initialLanguage);
  const [expandedLessonPlans, setExpandedLessonPlans] = useState(false);
  const lastLocaleRef = useRef(locale);
  const lastVideoIdRef = useRef(video?.id);

  useEffect(() => {
    if (forceLanguage && ["en", "fr"].includes(forceLanguage)) {
      setSelectedLanguage(forceLanguage);
    }
  }, [forceLanguage]);

  useEffect(() => {
    if (forceLanguage) {
      return;
    }

    const localeChanged = lastLocaleRef.current !== locale;
    const videoChanged = lastVideoIdRef.current !== video?.id;

    if (!localeChanged && !videoChanged) {
      return;
    }

    lastLocaleRef.current = locale;
    lastVideoIdRef.current = video?.id;

    setSelectedLanguage(initialLanguage);
  }, [forceLanguage, initialLanguage, locale, video?.id]);

  useEffect(() => {
    if (forceLanguage) {
      return;
    }

    if (!availableLanguages.includes(selectedLanguage)) {
      setSelectedLanguage(initialLanguage);
    }
  }, [availableLanguages, forceLanguage, initialLanguage, selectedLanguage]);

  const activeLanguage = forceLanguage && ["en", "fr"].includes(forceLanguage)
    ? forceLanguage
    : selectedLanguage;

  const rawVideoUrl = video?.media?.url || "";
  const thumbnailSrc = video.media?.thumbnailUrl || video.media?.thumbUrl || "";
  const videoId = extractYouTubeId(rawVideoUrl);

  const selectedContent = useMemo(() => {
    const language = ["en", "fr"].includes(activeLanguage) ? activeLanguage : locale;

    return {
      title: video?.titleByLanguage?.[language] || video?.title || "",
      description: video?.descriptionByLanguage?.[language] || video?.description || "",
      lessonPlans: video?.lessonPlansByLanguage?.[language] || video?.lessonPlans || [],
    };
  }, [activeLanguage, locale, video]);

  const resourceMessages = getMessages(activeLanguage)?.Pages?.ResourcesPage ?? {};
  const seeMoreLabel = resourceMessages?.seeMore || t("seeMore", "See More");
  const seeLessLabel = resourceMessages?.seeLess || (activeLanguage === "fr" ? "Voir moins" : "See less");
  const visibleLessonPlans = expandedLessonPlans ? selectedContent.lessonPlans : selectedContent.lessonPlans.slice(0, 1);
  const localizedLabels = {
    lessonPlans: resourceMessages?.lessonPlans || t("lessonPlans"),
  };
  const watchOnYoutubeLabel = detailsT("ViewOnYouTube");
  const youtubeHref = rawVideoUrl.startsWith("http")
    ? rawVideoUrl
    : (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "");

  const getLocalizedPlanHref = (plan) => {
    if (!plan) return null;

    const directHref = plan.linkByLanguage?.[activeLanguage] || plan.link;
    if (plan.id) {
      return `/${activeLanguage}/resources/lesson?id=${encodeURIComponent(String(plan.id))}`;
    }

    if (!directHref || !directHref.startsWith("/resources")) return directHref;
    return `/${locale}${directHref}`;
  };

  const isMissingLinkValue = (value) => {
    if (value === null || value === undefined) return true;
    const normalized = String(value).trim().toLowerCase();
    return normalized === "" || normalized === "n/a" || normalized === "na" || normalized === "null" || normalized === "undefined";
  };

  return (
    <div
      key={video.id}
      className="group flex h-full cursor-pointer flex-col justify-start gap-3 rounded-lg border border-black/10 bg-gray-50 p-3 shadow-lg transition-all hover:ring-2 hover:ring-secondary"
      onClick={() => {
        trackEvent("VideoCard", "Click", `Opened: ${selectedContent.title} | id: ${video.id}`, 1);
        router.push(`?video=${video.id}`, { scroll: false });
      }}
    >
      <div className="w-full">
        <div className="w-full border rounded-md bg-secondary/30 relative overflow-hidden">
          <div className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center text-secondary transition-transform duration-300 group-hover:scale-110">
              <FaRegPlayCircle className="text-[2rem]" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1 min-h-[3rem] flex items-center">
              <h3 className="text-base font-semibold leading-snug line-clamp-2 break-words text-black">
                {selectedContent.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {!forceLanguage && (
        <CardLanguageSelect
          availableLanguages={availableLanguages}
          selectedLanguage={selectedLanguage}
          onChange={(nextLanguage) => {
            setSelectedLanguage(nextLanguage);
          }}
          className="w-full"
        />
      )}

      <div className="overflow-hidden rounded-md border border-black/10 bg-white shadow-sm">
        <img
          src={thumbnailSrc}
          alt={selectedContent.title}
          className="h-52 w-full object-cover"
          loading="lazy"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            router.push(`?video=${video.id}`, { scroll: false });
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="text-sm text-gray-700">{selectedContent.description}</div>

        {selectedContent.lessonPlans.length > 0 && (
          <div className="flex flex-col gap-1.5 text-start">
            <div className="text-sm font-semibold underline">{localizedLabels.lessonPlans}</div>
            {visibleLessonPlans.map((plan, index) => {
              const planHref = getLocalizedPlanHref(plan);
              const hasUsableLink = !isMissingLinkValue(planHref);
              const planLabel = plan.title || `${localizedLabels.lessonPlans} ${index + 1}`;

              if (!hasUsableLink) {
                return (
                  <div key={plan.id || index} className="text-xs text-gray-500">
                    Missing
                  </div>
                );
              }

              return (
                <Link
                  key={plan.id || index}
                  href={planHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  • {planLabel}
                </Link>
              );
            })}

            {selectedContent.lessonPlans.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setExpandedLessonPlans((current) => !current);
                }}
                className="mt-1 self-start text-xs font-semibold text-blue-700 underline hover:text-blue-900"
              >
                {expandedLessonPlans ? seeLessLabel : seeMoreLabel}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-end gap-2 pt-1">
        {youtubeHref ? (
          <a
            href={youtubeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-red-300 bg-red-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-red-700 shadow-[0_2px_10px_rgba(185,28,28,0.08)] transition-colors hover:bg-red-600 hover:text-white"
            onClick={(event) => event.stopPropagation()}
          >
            {watchOnYoutubeLabel}
          </a>
        ) : null}
        <Link
          href={cardOpenInNewPageHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-primary/30 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary hover:text-white"
          onClick={(event) => event.stopPropagation()}
        >
          {openInNewPageLabel || "View in new page"}
        </Link>
      </div>
    </div>
  );
}
