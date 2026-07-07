/**
 * @file LinkListSection.jsx
 * @module UI/Resources/LinkListSection
 * @desc Reusable list section for files or links (PDFs, external URLs, etc.).
 *
 * @props {string} title - Section title (e.g. "Lesson Files", "Related Links")
 * @props {Array} items - List of objects with `{ title, link }`
 * @props {React.ElementType} icon - Icon component to display next to each link
 */

export default function LinkListSection({ title, items = [], iconClassName, icon: Icon }) {
  if (!items?.length) return null;

  const onLinkClick = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-2">
      <div className="font-semibold">{title}</div>
      <ul className="text-xs text-blue-700 mt-1 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>
            <button
              type="button"
              onClick={(e) => onLinkClick(e, item.link)}
              className="hover:underline flex gap-1 items-center text-left hover:cursor-pointer"
            >
              {Icon && <Icon className={`shrink-0 ${iconClassName}`} />} {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
