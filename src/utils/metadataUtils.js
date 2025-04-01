/**
 * @file metadataUtils.js
 * @module utils/metadataUtils
 * @desc Utility functions for handling dynamic page titles and metadata in Next.js.
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 *
 * @functions
 * - getPageTitle: Generates a full page title with optional "Dev |" prefix in development.
 */


/// Function to generate a full page title with optional "Dev |" prefix in development
export function getPageTitle(title) {
  const baseTitle = `${title} - Alberta Tomorrow`;
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? `Dev | ${baseTitle}`
    : baseTitle;
}
