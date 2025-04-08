/**
 * @file layout.jsx
 * @module Layout/Resources
 * @desc Layout wrapper for the Resources section. This layout is used to display
 *       the ResourcePage component and include nested pages such as Lesson Plans and Videos.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

import ResourcePage from "@/components/pages/resources/ResourcePage";

export default function ResourceLayout({ children }) {
  return (
    <div>
      <ResourcePage />
      <main className="min-h-[75vh]">{children}</main>
    </div>
  );
}
