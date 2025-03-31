import { extraPages, toolsDropDown } from '@/data/navData';
import SocialMediaIcons from './SocialMediaIcons';
import ContactInfo from '../common/ContactInfo';
import SupportUs from './SupportUs';
import QuickLinks from './QuickLinks';
import BreadCrumbLinks from './BreadCrumbLinks';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-alt text-white overflow-hidden">
      <div className="px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div>
            <ContactInfo />
            <div className='mt-4'/>
            <SocialMediaIcons />
          </div>

          <SupportUs />
          <QuickLinks />
          <BreadCrumbLinks title="Education Tools" list={toolsDropDown.list} />
          <BreadCrumbLinks title="Sign Up & Legal" list={extraPages} />
        </div>
      </div>

      <div className="bg-secondary py-4 text-center text-sm">
        <p>
          The Alberta Tomorrow Foundation is a 100% non-profit organization, a Registered Non-Profit Society in Alberta with Canada Revenue Agency Charitable Status, dedicated to promoting sustainable land-use planning in Alberta.
        </p>
      </div>
    </footer>
  );
}
