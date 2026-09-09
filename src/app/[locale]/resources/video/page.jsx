"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import ModalVideo from "@/components/features/resource-page-components/video-components/display/ModalVideo";

export default function SingleVideoPage() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("NavBar.resources");

  const videoId = searchParams.get("id");

  if (!videoId) {
    return (
      <section className="p-6 md:p-10">
        <div className="max-w-6xl mx-auto rounded-lg border border-black/10 bg-white p-6">
          <p className="text-gray-700">Missing video id.</p>
          <Link
            href={`/${locale}/resources/videos`}
            className="mt-3 inline-block text-blue-700 underline"
          >
            {t("videos")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 md:p-6">
      <ModalVideo id={videoId} showOpenInNewPage={false} prioritizeMedia />
    </section>
  );
}
