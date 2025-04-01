/**
 * @file PageHeader.jsx
 * @module UI/PageHeader
 * @desc Reusable header component for pages. Displays a responsive layout with a logo and left-aligned title + subtitle.
 *
 * @props {string} title - Main heading text.
 * @props {string} subtitle - Optional subtitle or description text.
 *
 * @example
 * <PageHeader title="Contact Us" subtitle="Reach out with questions, feedback, or suggestions." />
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Apr 1, 2025
 */

'use client'
import React from 'react';
import Image from 'next/image';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="py-10 text-left max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 white-shadow">
        <div className="hidden sm:block">
          <Image
            src={"/site-logos/logo-lg.png"}
            alt="Alberta Tomorrow Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-secondary-alt">
          {title}
        </h1>
      </div>

      {subtitle && (
        <p className="mt-14 md:mt-12 text-lg md:text-xl text-muted opacity-80">{subtitle}</p>
      )}
    </div>
  );
}
