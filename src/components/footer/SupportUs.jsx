/**
 * @file SupportUs.jsx
 * @module SupportUs
 * @desc Support section with donation button and partner logo.
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 */

import React from 'react'
import Image from 'next/image'
import DonateButton from '../navbar/DonateButton'

export default function SupportUs() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Support Alberta Tomorrow</h3>
      <p className="mt-2 text-sm">Help keep Alberta Tomorrow FREE by making a donation!</p>
      <div className="mt-4 flex gap-2 justify-start items-center">
        <DonateButton footer />
        <Image
          src="/external-logos/1ftp-EnvironmentalPartner-horizontal-FullColor.png"
          alt="Environmental Partner Logo"
          width={160} // adjust to your preference
          height={40}
          className="w-36 lg:w-40 h-auto"
          priority={false} // optional
        />
      </div>
    </div>
  )
}
