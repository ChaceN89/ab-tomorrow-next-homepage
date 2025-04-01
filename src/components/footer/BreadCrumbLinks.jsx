/**
 * @file BreadCrumbLinks.jsx
 * @module UI/BreadCrumbLinks
 * @desc Reusable breadcrumb navigation component for secondary page navigation.
 *       Displays a list of links with optional icons and separator slashes.
 *
 * @props {string} title - Title displayed above the breadcrumb links.
 * @props {Array} list - Array of breadcrumb link items. Each item contains:
 *    {string} label - The text label for the link.
 *    {JSX.Element} [icon] - Optional icon displayed before the label.
 *    {string} [href] - External link URL.
 *    {string} [router] - Internal Next.js route path.
 *
 * @example
 * <BreadCrumbLinks 
 *    title="Resources"
 *    list={[
 *      { label: "Lesson Plans", icon: <FaBookOpen />, router: "/resources/lesson-plans" },
 *      { label: "Videos", icon: <FaVideo />, href: "https://example.com/videos" }
 *    ]}
 * />
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */
import LinkItem from '@/components/navbar/LinkItem';

export default function BreadCrumbLinks({ title, list }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="flex flex-wrap items-center gap-2 text-sm text-white">
        {list.map(({ label, icon, href, router }, idx) => (
          <li key={idx} className="flex items-center">
            <LinkItem
              href={href}
              router={router}
              className="flex items-center gap-1 hover:text-accent transition-colors duration-100"
            >
              {icon && <span className="text-base">{icon}</span>}
              {label}
            </LinkItem>
            {idx < list.length - 1 && <span className="px-1 pl-2.5 text-gray-300">/</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
