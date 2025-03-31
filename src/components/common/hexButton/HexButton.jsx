/**
 * @file HexButton.jsx
 * @module UI/HexButton
 * @desc A reusable, customizable hexagonal call-to-action button with animated hover effects.
 *       Supports dynamic background gradients and text color customization via CSS variables.
 *       Primarily used for external links like launching the simulator.
 * 
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 31, 2025
 *
 * @features
 * - Hexagonal shape using clip-path
 * - Hover effect with lift animation and dynamic color gradient
 * - Supports props for custom colors and hover states:
 *    - `color` and `hoverColor` (primary, secondary, accent, tertiary)
 *    - `textColor` and `hoverTextColor`
 * - Opens external links in a new tab or uses internal Next.js router navigation
 *
 * @dependencies
 * - Tailwind utility classes
 * - Global styles from `hex-button.css`
 * - Next.js `Link` component
 */

'use client'

import React from 'react';
import Link from 'next/link';
import './HexButton.styles.css';

export default function HexButton({ 
  children = "Launch Simulator", 
  link, 
  color = 'primary', 
  hoverColor = 'tertiary',
  textColor = 'white',
  hoverTextColor = 'black',
  asLink = false // when true, uses internal Next.js routing
}) {
  const wrapperStyle = {
    '--bg-start': `var(--color-${color})`,
    '--bg-end': `var(--color-${color}-alt)`,
    '--hover-bg-start': `var(--color-${hoverColor})`,
    '--hover-bg-end': `var(--color-${hoverColor}-alt)`,
    '--text-color': `var(--color-${textColor})`,
    '--hover-text-color': `var(--color-${hoverTextColor})`,
  };

  const commonProps = {
    className: 'hex-button-wrapper font-semibold min-w-44',
    style: wrapperStyle,
  };

  return (
    <div className="hex-button-container group max-w-2xl">
      {asLink ? (
        <Link href={link} {...commonProps}>
          {children}
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" {...commonProps}>
          {children}
        </a>
      )}
    </div>
  );
}
