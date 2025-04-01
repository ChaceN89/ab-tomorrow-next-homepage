/**
 * @file ContactInfo.jsx
 * @module UI/ContactInfo
 * @desc Compact contact information block used in footers, sidebars, or other sections.
 *       Displays organization name, executive director, mailing address, and contact email.
 *
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Displays organization name and copyright
 * - Shows executive director information
 * - Optionally displays mailing address
 * - Always displays contact email with a clickable mailto link
 *
 * @props {boolean} [address=false] - If true, shows the organization's mailing address.
 *
 * @example
 * <ContactInfo /> // shows email only
 * <ContactInfo address /> // shows email and address
 */

export default function ContactInfo({ address = false }) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p className="mt-2">© Alberta Tomorrow - {new Date().getFullYear()} </p>
      <p>Alberta Tomorrow Executive Director: <b>Jennifer Janzen</b></p>

      {address && (
        <p>
          40 Riverview Circle<br />
          Cochrane, AB, Canada T4C 1K3
        </p>
      )}

      <p>
        Email:{' '}
        <a
          href="mailto:info@albertatomorrow.ca"
          className="text-blue-400 hover:underline"
        >
          info@albertatomorrow.ca
        </a>
      </p>
    </div>
  );
}
