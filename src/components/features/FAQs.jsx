/**
 * @file FAQs.jsx
 * @module Pages/FAQs
 * @desc The Frequently Asked Questions page for Alberta Tomorrow.
 *       Displays a list of common questions and answers in expandable dropdowns.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Displays a page header with title and subtitle
 * - Maps through FAQ data and renders each question/answer in a dropdown
 * - Uses reusable PageHeader and QuestionDropdown components
 *
 */
// Data
import { faqData, faqTitleData } from '@/data/page-data/faqData';

// Components
import QuestionDropdown from '@/components/common/QuestionDropdown';
import PageHeader from '@/components/common/PageHeader';

export default function FAQs() {
  return (
    <div className="page-width">
      <div className="page">
        <PageHeader title={faqTitleData.title} subtitle={faqTitleData.subtitle} />
        {faqData.map((faq, index) => (
          <QuestionDropdown key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
