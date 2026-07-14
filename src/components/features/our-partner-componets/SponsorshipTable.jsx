/**
 * @file SponsorshipTable.jsx
 * @module components/SponsorshipTable
 * @desc Displays a localized sponsorship level benefits comparison table for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Jul 14, 2026 - added translations and rich text
 *
 * @dependencies
 * - next-intl
 * - partnerData
 */

"use client";

import { useTranslations } from "next-intl";

import { sponsorshipTableData } from "@/data/page-data/partnerData";

const richTextComponents = {
  Bold: (chunks) => (
    <span className="font-bold">
      {chunks}
    </span>
  )
};

export default function SponsorshipTable() {
  const t = useTranslations("Pages.Partners");

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm border border-gray-300">
        <thead>
          <tr className="bg-tertiary-alt text-gray-900">
            <th className="border px-4 py-2">
              {t(sponsorshipTableData.benefitColumnKey)}
            </th>

            {sponsorshipTableData.levels.map((level) => (
              <th
                key={level.id}
                className="border px-4 py-2 text-center font-semibold"
              >
                {t(level.labelKey)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sponsorshipTableData.benefits.map((benefit, rowIndex) => (
            <tr
              key={benefit.id}
              className={rowIndex % 2 === 0 ? "bg-green-50" : "bg-tertiary"}
            >
              <td className="border px-2 py-3">
                {t.rich(benefit.labelKey, richTextComponents)}
              </td>

              {benefit.levels.map((hasBenefit, levelIndex) => (
                <td
                  key={`${benefit.id}-${sponsorshipTableData.levels[levelIndex].id}`}
                  className="border px-4 py-2 text-center"
                >
                  {hasBenefit ? "✔️" : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}