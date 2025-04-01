/**
 * @file SocialMediaIcons.jsx
 * @module UI/SocialMediaIcons
 * @desc Displays a set of linked social media icons with dynamic hover color effects.
 *       Used in footer, sidebar, or contact sections to encourage social engagement.
 *
 * @features
 * - Supports Facebook, Twitter, YouTube, Instagram, and Pinterest links.
 * - Optional title prop to display a section heading.
 * - Clean hover animations with platform-specific colors.
 * 
 * @components
 * - SocialIcon: Internal reusable component to render each social link with hover effect.
 *
 * @props {string} [title] - Optional title displayed above the icons.
 * 
 * @example
 * <SocialMediaIcons title="Follow Us" />
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Apr 1, 2025
 */

// icons
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

// single icon component
function SocialIcon({ href, Icon, hoverColor }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={`w-8 h-8 transition-colors duration-200 ${hoverColor}`} />
    </a>
  );
}

// main component
export default function SocialMediaIcons({ title }) {
  return (
    <div className="space-y-2">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className="flex gap-4">
        <SocialIcon 
          href="https://www.facebook.com/AlbertaTomorrow/" 
          Icon={FaFacebook} 
          hoverColor="hover:text-blue-500" 
        />
        <SocialIcon 
          href="https://twitter.com/AlbertaTomorrow" 
          Icon={FaTwitter} 
          hoverColor="hover:text-blue-400" 
        />
        <SocialIcon 
          href="https://www.youtube.com/albertatomorrow" 
          Icon={FaYoutube} 
          hoverColor="hover:text-red-500" 
        />
        <SocialIcon 
          href="https://www.instagram.com/alberta_tomorrow/" 
          Icon={FaInstagram} 
          hoverColor="hover:text-orange-400" 
        />
        <SocialIcon 
          href="https://www.pinterest.ca/AlbertaTomorrow/" 
          Icon={FaPinterest} 
          hoverColor="hover:text-red-600" 
        />
      </div>
    </div>
  );
}
