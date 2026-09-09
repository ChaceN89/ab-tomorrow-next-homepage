/**
 * @file QuickLinks.jsx
 * @module UI/Footer/QuickLinks
 * @desc Displays categorized quick links in the footer, divided into scroll-based navigation links
 *       and router-based informational links.
 *
 * @features
 * - Scroll-to section links
 * - Informational router links
 * - Includes icons beside each link
 * - Uses localized text from next-intl
 *
 * @dependencies
 * - next-intl
 * - LinkItem.jsx
 * - navData.js
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Jul 7, 2026 - set up translations
 */

import { useTranslations } from "next-intl";

// data
import { scrollLinks, learnMoreDropDown } from "@/data/navData";

// components
import LinkItem from "../navbar/LinkItem";

export default function QuickLinks() {
  const footerT = useTranslations("Footer.quickLinks");
  const navLinksT = useTranslations("NavBar.links");
  const learnMoreT = useTranslations("NavBar.learnMore");

  return (
    <div>
      <h3 className="text-xl font-semibold">{footerT("title")}</h3>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Scroll-based links */}
        <ul className="space-y-2">
          {scrollLinks.map(({ labelKey, scrollTo, icon }, idx) => (
            <li key={idx}>
              <LinkItem
                scrollTo={scrollTo}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                {icon} {navLinksT(labelKey)}
              </LinkItem>
            </li>
          ))}
        </ul>

        {/* Router-based links */}
        <ul className="space-y-2">
          {learnMoreDropDown.list.map(({ labelKey, router, icon }, idx) => (
            <li key={idx}>
              <LinkItem
                router={router}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                {icon} {learnMoreT(labelKey)}
              </LinkItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}