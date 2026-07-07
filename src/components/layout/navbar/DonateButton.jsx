/**
 * @file DonateButton.jsx
 * @module DonateButton
 * @desc Reusable Donate button component with Google Analytics event tracking.
 *       Displays a styled button for donation with different styles based on footer prop.
 *       Tracks a custom event in Google Analytics when clicked.
 *
 * @features
 * - Styled Donate button for both NavBar and Footer usage.
 * - Tracks "Donate Button" click event in Google Analytics.
 * - Uses LinkItem component for external donation link.
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 31, 2025
 *
 * @exampleUsage
 * <DonateButton />
 * <DonateButton footer />
 *
 * Google Analytics Event:
 * Category: 'Button'
 * Action: 'Click'
 * Label: 'DonateButtonNav' or 'DonateButtonFooter'
 * Value: 1
 */

'use client'

import React from 'react'
import LinkItem from './LinkItem'
import { donateInfo } from '../../data/navData'

export default function DonateButton({ footer = false }) {

  return (
    <LinkItem
      href={donateInfo.href}
      className={
        `${footer ? "p-5 py-3.5" : "md:ml-nav p-3 py-1"} 
         rounded-lg bg-primary hover:bg-primary-alt text-white font-semibold 
         transition inline-flex items-center justify-center`
      }
    >
      {footer ? donateInfo.altTitle : donateInfo.title}
    </LinkItem>
  )
}
