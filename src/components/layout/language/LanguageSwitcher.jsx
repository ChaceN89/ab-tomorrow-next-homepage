"use client";

/**
 * @file LanguageSwitcher.jsx
 * @module LanguageSwitcher
 * @desc Inline "EN / FR" toggle that lets users switch between the supported localized routes.
 *       The active language is bold; the inactive one is slightly smaller and transitions on switch.
 *
 * @author Chace Nielson
 * @created July 7, 2026
 * @updated July 14, 2026
 *
 * @dependencies
 * - next/navigation
 * - next-intl
 * - routing.js
 */

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { localeLabels, routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (nextLocale) => {
    if (nextLocale === currentLocale) {
      return;
    }

    const safePath = pathname || "/";
    const pathSegments = safePath.split("/").filter(Boolean);
    const hasLocaleSegment = routing.locales.includes(pathSegments[0]);

    if (hasLocaleSegment) {
      pathSegments[0] = nextLocale;
    } else {
      pathSegments.unshift(nextLocale);
    }

    const nextPath = `/${pathSegments.join("/")}`;
    const queryString =
      typeof window !== "undefined" ? window.location.search : "";
    const nextUrl = queryString ? `${nextPath}${queryString}` : nextPath;

    router.replace(nextUrl, { scroll: false });
  };

  const nextLocale = routing.locales.find((locale) => locale !== currentLocale) || currentLocale;

  return (
    <button
      type="button"
      onClick={() => switchLocale(nextLocale)}
      aria-label={nextLocale === "fr" ? "Passer au français" : "Switch to English"}
      className="group flex cursor-pointer items-center whitespace-nowrap px-nav py-1 text-white"
    >
      {routing.locales.map((locale, index) => {
        const isActive = locale === currentLocale;

        return (
          <React.Fragment key={locale}>
            {index > 0 && <span aria-hidden className="mx-0.5 text-sm text-white/50">/</span>}
            <span
              lang={locale}
              className={`transition-[font-size,font-weight,opacity,color] duration-300 ease-in-out ${isActive ? "text-base font-bold opacity-100" : "text-sm font-normal opacity-70 group-hover:text-accent group-hover:opacity-100"}`}
            >
              {localeLabels[locale] || locale.toUpperCase()}
            </span>
          </React.Fragment>
        );
      })}
    </button>
  );
}