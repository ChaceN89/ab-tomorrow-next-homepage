
/**
 * @file page.jsx
 * @module app/resources
 * @desc Landing page for the Educational Resources section. This is the root route under `/resources`,
 *       guiding users toward lesson plans and video tools.
 *
 * @features
 * - Static entry point for the Resources section
 * - Encourages users to explore educational content
 * - Supports modal-based navigation via parallel routing
 * 
 * @notes
 * - Uses `/resources/layout.jsx` for shared layout and modal slots
 * - Links to modal routes such as `/resources/video/[id]` will be handled in the layout's slot rendering
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 11, 2025
 */

export default function ResourcesLanding() {
  return (
    <div className="page-width">
      <div className="page text-center flex flex-col items-center gap-6 py-20">
        <h1 className="text-3xl font-bold text-primary">Explore Educational Resources</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Use the navigation above to browse videos or lesson plans related to Alberta’s ecosystems, wildlife, and climate.
        </p>
        <p className="text-md text-gray-500">
          Select a tool from the <span className="font-semibold text-secondary">resource menu</span> to get started.
        </p>
      </div>
    </div>
  );
}
