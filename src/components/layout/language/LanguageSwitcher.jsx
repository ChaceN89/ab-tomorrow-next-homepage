"use client";

/**
 * @file LanguageSwitcher.jsx
 * @module LanguageSwitcher
 * @desc Dropdown component that lets users switch between supported localized routes.
 *
 * @author Chace Nielson
 * @created July 7, 2026
 * @updated July 7, 2026
 *
 * @dependencies
 * - next/navigation
 * - next-intl
 * - routing.js
 * - NavDropdown.jsx
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

import { localeLabels, routing } from "@/i18n/routing";
import NavDropdown from "../navbar/NavDropdown";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    const queryString = searchParams.toString();
    const nextUrl = queryString ? `${nextPath}?${queryString}` : nextPath;

    router.replace(nextUrl, { scroll: false });
  };

  const languageItems = routing.locales.map((locale) => ({
    label: localeLabels[locale] || locale.toUpperCase(),
    onClick: () => switchLocale(locale)
  }));

  return (
    <NavDropdown
      titleLabel={localeLabels[currentLocale] || currentLocale.toUpperCase()}
      items={languageItems}
      openToLeft
    />
  );
}