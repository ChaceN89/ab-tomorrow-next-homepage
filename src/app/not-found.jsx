/**
 * @file not-found.jsx
 * @module app/not-found
 * @desc Custom 404 Page for Next.js App Router. This page is displayed when no route matches.
 * 
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 */

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
    </div>
  )
}
