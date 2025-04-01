/**
 * @file FooterContact.jsx
 * @module UI/FooterContact
 * @desc Compact contact block used in footers or sidebars.
 *
 * @props {boolean} [noTitle=false] - If true, hides the "Contact Us" title.
 * @props {boolean} [address=true] - If false, hides the physical mailing address.
 *
 * @example
 * <FooterContact />
 * <FooterContact noTitle />
 * <FooterContact address={false} />
 * 
 * @created Mar 27, 2025
 */

import React from 'react';

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
