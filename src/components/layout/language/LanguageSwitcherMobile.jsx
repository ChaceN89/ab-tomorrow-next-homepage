"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { routing } from "@/i18n/routing";

export default function LanguageSwitcherMobile({ onLocaleSwitched }) {
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

    if (typeof onLocaleSwitched === "function") {
      onLocaleSwitched(nextLocale);
    }
  };

  return (
    <div
      className="inline-flex overflow-hidden rounded-full border border-white/40 bg-white/10"
      role="group"
      aria-label="Language switcher"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLocale(locale)}
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${isActive ? "bg-white text-primary" : "text-white hover:bg-white/20"}`}
            aria-pressed={isActive}
          >
            {String(locale).toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
