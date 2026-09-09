/**
 * @file ContactInfo.jsx
 * @module UI/FooterContact
 * @desc Compact contact block used in footers or sidebars.
 *
 * @props {boolean} [noTitle=false] - If true, hides the "Contact Us" title.
 * @props {boolean} [address=false] - If true, shows the physical mailing address.
 *
 * @example
 * <ContactInfo />
 * <ContactInfo noTitle />
 * <ContactInfo address />
 * 
 * @created Mar 27, 2025
 * @updated Jul 7, 2026 - set up translations
 */

import { useTranslations } from "next-intl";

export default function ContactInfo({ noTitle = false, address = false }) {
  const t = useTranslations("Footer.contact");

  return (
    <div className="space-y-1">
      {!noTitle && (
        <h3 className="text-xl font-semibold">{t("title")}</h3>
      )}

      <p className="mt-2">© Alberta Tomorrow - {new Date().getFullYear()}</p>

      <p>
        {t("executiveDirector")} <b>Jennifer Janzen</b>
      </p>

      {address && (
        <p>
          40 Riverview Circle<br />
          Cochrane, AB, Canada T4C 1K3
        </p>
      )}

      <p>
        {t("email")}{" "}
        <a
          href="mailto:info@albertatomorrow.ca"
          className="text-blue-400 hover:underline"
        >
          info@albertatomorrow.ca
        </a>
      </p>
    </div>
  );
}