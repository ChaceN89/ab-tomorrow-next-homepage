"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FaCheck, FaRegClipboard } from "react-icons/fa";
import toast from "react-hot-toast";
import Tooltip from "@/components/common/Tooltip";

export default function CopyResourceLink({ href, resourceType }) {
  const t = useTranslations("Pages.ResourcesPage.shareLink");
  const [copiedHref, setCopiedHref] = useState(null);
  const copied = copiedHref === href;
  const label = copied ? t("copied") : t(resourceType === "video" ? "copyVideo" : "copyLessonPlan");

  useEffect(() => {
    if (!copiedHref) return;
    const timer = window.setTimeout(() => setCopiedHref(null), 2000);
    return () => window.clearTimeout(timer);
  }, [copiedHref]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(new URL(href, window.location.origin).href);
      setCopiedHref(href);
      toast.success(t("copied"));
    } catch (error) {
      console.error("Could not copy resource link:", error);
      toast.error(t("failed"));
    }
  };

  return (
    <Tooltip text={label} openDuration={300}>
      <button
        type="button"
        onClick={copyLink}
        aria-label={label}
        className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary-alt bg-primary-alt text-white shadow-sm transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {copied ? <FaCheck aria-hidden="true" /> : <FaRegClipboard aria-hidden="true" />}
        <span className="sr-only" role="status">{copied ? t("copied") : ""}</span>
      </button>
    </Tooltip>
  );
}
