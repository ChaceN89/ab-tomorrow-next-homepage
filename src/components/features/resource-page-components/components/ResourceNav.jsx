/**
 * @file ResourceNav.jsx
 * @module UI/Resources/ResourceNav
 * @desc Renders the resource navigation bar used throughout the Resources section. 
 *       Displays a list of internal links (Videos, Lesson Plans, etc.) with a visual 
 *       separator between each item.
 *
 * @features
 * - Highlights the active page based on current pathname
 * - Dynamically generates nav links from `resourceLinks` array
 * - Adds vertical line separators between items, excluding the last one
 * - Fully client-side component using App Router navigation hooks
 *
 * @dependencies
 * - `resourceLinks` (defined in resourcePageData.js)
 * - `next/link` and `usePathname` from Next.js App Router
 *
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated July 21 2026 - added translations 
 */
"use client";
import { resourceLinks } from "@/data/resourceData/resourcePageData";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function ResourceNav() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Pages.ResourcesPage");

  return (
    <nav className="flex gap-5 mb-6 items-center">
      {resourceLinks.map((link, i) => {
        const localizedHref = `/${locale}${link.href}`;
        const isActive = pathname === localizedHref;

        return (
          <div key={link.href} className="flex items-center gap-5">
            <Link
              href={localizedHref}
              className={`text-xl transition hover:text-primary py-2 font-semibold ${isActive ? "text-primary underline" : "text-gray-700"
                }`}
            >
              {t(link.labelKey)}
            </Link>
            {i < resourceLinks.length - 1 && (
              <div className="w-px h-5 bg-gray-700" />
            )}
          </div>
        )
      })}
    </nav>
  );
}

