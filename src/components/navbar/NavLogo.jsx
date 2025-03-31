/**
 * @file NavLogo.jsx
 * @module NavLogo
 * @desc Displays the Alberta Tomorrow logo in the navigation bar.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 31, 2025
 */

'use client'

import Image from 'next/image'
import React from 'react'

export default function NavLogo() {
  return (
    <div className='flex justify-between items-center gap-2 hover:opacity-80 mr-nav pl-2 lg:pl-0'>
      <Image
        src="/site-logos/logo-sm.png"
        alt="Logo"
        width={32}
        height={32}
        className="w-6 h-6 lg:w-8 lg:h-8"
        priority
      />
      <div className="whitespace-nowrap text-white">Alberta Tomorrow</div>
    </div>
  )
}
