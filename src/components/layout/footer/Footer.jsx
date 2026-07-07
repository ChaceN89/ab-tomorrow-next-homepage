/**
 * @file Footer.jsx
 * @module UI/Footer
 * @desc The main footer component for the Alberta Tomorrow website. 
 *       Displays key contact information, quick links, legal links, 
 *       social media icons, and organizational description.
 *
 * @features
 * - Contact information and email
 * - Social media icons
 * - Support Us donation block
 * - Quick navigation links
 * - Breadcrumb-style legal and tool links
 * - Non-profit organization description
 *
 * @dependencies
 * - ContactInfo.jsx
 * - SocialMediaIcons.jsx
 * - SupportUs.jsx
 * - QuickLinks.jsx
 * - BreadCrumbLinks.jsx
 * - navData.js (for link data)
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated July 7, 2026 - set up translations 
 */
// Data
import { extraPages, educationTools } from '@/data/navData';

// translation system
import { useTranslations } from "next-intl";

// Components
import ContactInfo from '@/components/features/contact-page-components/ContactInfo';
import SocialMediaIcons from './SocialMediaIcons';
import SupportUs from './SupportUs';
import QuickLinks from './QuickLinks';
import BreadCrumbLinks from './BreadCrumbLinks';

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="site-footer" className=" z-[60] relative w-full bg-secondary-alt text-white overflow-hidden">
      <div className="px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div>
            <ContactInfo />
            <div className='mt-4'/>
            <SocialMediaIcons />
          </div>
          <SupportUs />
          <QuickLinks />
          <BreadCrumbLinks
            title={t("educationTools.title")}
            list={educationTools}
            translationNamespace="NavBar.resources"
          />

          <BreadCrumbLinks
            title={t("legal.title")}
            list={extraPages}
            translationNamespace="Footer.legal"
          />
        </div>
      </div>

      <div className="bg-secondary p-4 text-center text-sm">
        <p className="max-w-6xl mx-auto">{t("bottomDescription")}</p>
      </div>
    </footer>
  );
}
