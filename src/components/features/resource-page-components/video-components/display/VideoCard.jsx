"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// utils
import { extractYouTubeId } from "@/utils/videoResouceUtils";
import { FaExpandArrowsAlt } from "react-icons/fa";

// components
import MediaFrame from "@/components/common/mediaFrame/MediaFrame";
import Link from "next/link";
import useGoogleAnalytics from "@/components/analytics/useGoogleAnalytics";
import { useLocale, useTranslations } from "next-intl";
import CardLanguageSelect from "../../../../layout/language/CardLanguageSelect";
import { getMessages } from "@/i18n/messages";

export default function VideoCard({
  video,
  noExpand = false,
  forceLanguage = null,
  openInNewPageHref = null,
  openInNewPageLabel = "",
}) {
  const t = useTranslations("Pages.ResourcesPage");
  const { trackEvent } = useGoogleAnalytics();
  const locale = useLocale();

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

  const thumbnailSrc = video.media?.thumbnailUrl || video.media?.thumbUrl || "";

  const selectedContent = useMemo(() => {
    const language = ["en", "fr"].includes(activeLanguage) ? activeLanguage : locale;

    return {
      title: video?.titleByLanguage?.[language] || video?.title || "",
      description: video?.descriptionByLanguage?.[language] || video?.description || "",
      lessonPlans: video?.lessonPlansByLanguage?.[language] || video?.lessonPlans || [],
    };
  }, [activeLanguage, locale, video]);

  const resourceMessages = getMessages(activeLanguage)?.Pages?.ResourcesPage ?? {};
  const localizedLabels = {
    lessonPlans: resourceMessages?.lessonPlans || t("lessonPlans"),
  };

  const getLocalizedPlanHref = (href) => {
    if (!href || !href.startsWith("/resources")) return href;
    return `/${locale}${href}`;
  };

  const isMissingLinkValue = (value) => {
    if (value === null || value === undefined) return true;
    const normalized = String(value).trim().toLowerCase();
    return normalized === "" || normalized === "n/a" || normalized === "na" || normalized === "null" || normalized === "undefined";
  };

  return (
    <div
      onClick={() =>
        trackEvent("VideoCard", "Click", `Opened: ${selectedContent.title} | id: ${video.id}`, 1)
      }
      key={video.id}
      className="flex flex-col h-full justify-end gap-2"
    >
      <div className="flex items-start justify-between gap-2 px-1">
        <h3 className="text-lg font-semibold text-black">{selectedContent.title}</h3>
      </div>
      {!forceLanguage && (
        <div className="flex flex-wrap items-center justify-end gap-2 px-1">
          {openInNewPageHref ? (
            <Link
              href={openInNewPageHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-primary/30 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary hover:text-white"
            >
              {openInNewPageLabel}
            </Link>
          ) : null}

          <CardLanguageSelect
            availableLanguages={availableLanguages}
            selectedLanguage={selectedLanguage}
            onChange={setSelectedLanguage}
            className="w-full max-w-[240px]"
          />
        </div>
      )}

      <div className="z-10">
        <MediaFrame
          type="video"
          videoSrc={extractYouTubeId(video.media.url)}
          imgSrc={thumbnailSrc}
          maxSize="max-w-5xl"
          captionLanguage={activeLanguage === "fr" ? "fr-ca" : "en"}
        />
      </div>
      <div className="h-32 shadow-md rounded-b-lg bg-white/60 -mt-4 -mr-0.5 pt-4 overflow-hidden border-1 border-black/30 relative z-0 max-w-5xl self-center w-full">
        {!noExpand && (
          <Link
            scroll={false}
            href={`?video=${video.id}`}
            className="absolute bottom-1 right-2"
          >
            <FaExpandArrowsAlt className="text-secondary hover:scale-105 hover:text-accent" />
          </Link>
        )}

        <div className="h-full overflow-y-auto custom-scrollbar p-1.5">
          <div className="flex gap-2 pr-1.5">
            <div
              className={`text-sm text-gray-500 flex-1 p-0.5 flex flex-col ${selectedContent.lessonPlans.length > 0 && "border-r border-gray-300"}`}
            >
              {selectedContent.description}
            </div>

            {selectedContent.lessonPlans.length > 0 && (
              <div className="w-[35%] 2xl:w-[25%] flex-shrink-0 flex flex-col gap-1.5 text-start">
                <div className="text-sm font-semibold underline">{localizedLabels.lessonPlans}</div>
                {selectedContent.lessonPlans.map((plan, index) => {
                  const planHref = getLocalizedPlanHref(plan.linkByLanguage?.[activeLanguage] || plan.link);
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
                    <a
                      key={plan.id || index}
                      href={planHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline gap-1"
                    >
                      • {planLabel}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
