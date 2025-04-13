/**
 * @file TagList.jsx
 * @module UI/Resources/TagList
 * @desc Reusable tag list component for displaying labeled pills (e.g. grades, subjects, tools).
 *
 * @props {string} label - Section title (e.g. "Grades", "Subjects")
 * @props {Array<string>} items - List of string values to render as pill-style tags
 * @props {string} pillClass - Tailwind utility classes to customize pill styling
 *
 * @example
 * <TagList
 *   label="Grades"
 *   items={["Grade 5", "Grade 6"]}
 *   pillClass="bg-gray-100 border border-gray-300 text-gray-700"
 * />
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated Apr 13, 2025
 */
export default function TagList({ label, items = [], pillClass = "" }) {
  if (!items.length) return null;

  return (
    <div className="text-xs text-gray-500 flex flex-wrap gap-1 mt-1">
      <strong className="w-full text-gray-600">{label}:</strong>
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`px-2 py-0.5 rounded-full ${pillClass}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}