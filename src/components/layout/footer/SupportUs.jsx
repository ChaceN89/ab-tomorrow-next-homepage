/**
 * @file SupportUs.jsx
 * @module UI/SupportUs
 * @desc Compact support block encouraging donations with a partner logo.
 *       Typically used in footers or sidebars.
 *
 * @features
 * - Displays a call-to-action encouraging user donations.
 * - Includes a DonateButton component.
 * - Displays the Environmental Partner logo alongside the button.
 *
 * @dependencies
 * - DonateButton (common button component)
 * - next/image (for optimized logo display)
 *
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Apr 1, 2025
 */
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
          unoptimized
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
