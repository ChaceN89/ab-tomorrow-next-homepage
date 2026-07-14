/**
 * @file FAQs.jsx
 * @module Pages/FAQs
 * @description Displays localized frequently asked questions with translated
 * rich text, links, emphasis, code, and list content.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Jul 14, 2026
 *
 * @dependencies
 * - next-intl
 * - faqData
 * - QuestionDropdown
 * - PageHeader
 */

import { useLocale, useTranslations } from "next-intl";

import { faqData, faqTitleData } from "@/data/page-data/faqData";
import QuestionDropdown from "@/components/common/QuestionDropdown";
import PageHeader from "@/components/common/headers/PageHeader";

const externalLinkClass = "text-blue-600 underline hover:text-blue-800";
const internalLinkClass = "text-blue-600 underline hover:text-blue-800";

export default function FAQs() {
  const locale = useLocale();
  const t = useTranslations("Pages.FAQs");

  const richTextComponents = {
    Bold: (chunks) => (
      <strong className="font-semibold">
        {chunks}
      </strong>
    ),
    SimulatorResources: (chunks) => (
      <a
        href="https://simulator.albertatomorrow.ca/#/dashboard/resources"
        className={externalLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </a>
    ),
    RegisterLink: (chunks) => (
      <a
        href="https://www.simulator.albertatomorrow.ca/#/registerwizard"
        className={externalLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </a>
    ),
    YouTubeLink: (chunks) => (
      <a
        href="https://www.youtube.com/watch?v=kJ6Pu5uByQM"
        className={externalLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </a>
    ),
    PdfLink: (chunks) => (
      <a
        href="/pdfs/registration_instructions.pdf"
        className={externalLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </a>
    ),
    WebGLLink: (chunks) => (
      <a
        href="https://get.webgl.org/"
        className={externalLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </a>
    ),
    TermsLink: (chunks) => (
      <a
        href={`/${locale}/terms-of-use`}
        className={internalLinkClass}
      >
        {chunks}
      </a>
    ),
    PrivacyLink: (chunks) => (
      <a
        href={`/${locale}/privacy-policy`}
        className={internalLinkClass}
      >
        {chunks}
      </a>
    ),
    Code: (chunks) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">
        {chunks}
      </code>
    )
  };

  const renderAnswer = (faq) => {
    if (faq.answerType === "list") {
      return (
        <ul className="list-disc list-inside pl-4 text-gray-700">
          {faq.answerKeys.map((answerKey) => (
            <li key={answerKey}>
              {t(answerKey)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p>
        {t.rich(faq.answerKey, richTextComponents)}
      </p>
    );
  };

  return (
    <div className="page-width">
      <div className="page">
        <PageHeader
          title={t(faqTitleData.titleKey)}
          subtitle={t(faqTitleData.subtitleKey)}
        />

        {faqData.map((faq) => (
          <QuestionDropdown
            key={faq.id}
            question={t(faq.questionKey)}
            answer={renderAnswer(faq)}
          />
        ))}
      </div>
    </div>
  );
}