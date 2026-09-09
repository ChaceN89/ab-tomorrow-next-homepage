"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import ModalLessonPlan from "@/components/features/resource-page-components/components/lesson-plan-components/display/ModalLessonPlan";

export default function SingleLessonPage() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("NavBar.resources");

  const lessonId = searchParams.get("id");

  if (!lessonId) {
    return (
      <section className="p-6 md:p-10">
        <div className="max-w-6xl mx-auto rounded-lg border border-black/10 bg-white p-6">
          <p className="text-gray-700">Missing lesson id.</p>
          <Link
            href={`/${locale}/resources/lesson-plans`}
            className="mt-3 inline-block text-blue-700 underline"
          >
            {t("lessonPlans")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 md:p-6">
      <ModalLessonPlan id={lessonId} showOpenInNewPage={false} />
    </section>
  );
}
