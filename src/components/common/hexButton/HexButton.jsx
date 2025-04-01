/**
 * @file HexButton.jsx
 * @module UI/HexButton
 * @desc A reusable, customizable hexagonal button component with animated hover effects.
 *       Supports external links, internal links (Next.js routing), and scroll-to links.
 *       Text gracefully wraps on small screens while maintaining minimum width and hex shape.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Apr 2, 2025
 *
 * @features
 * - Hexagonal shape using CSS clip-path
 * - Dynamic background gradient and text color via CSS variables
 * - Smooth hover animation: button lifts and shadow grows/moves
 * - Supports external links, internal Next.js links, or scroll-to section links
 * - Responsive: multi-line text gracefully wraps and adjusts height
 *
 * @props {string} children - The button text
 * @props {string} link - External or internal link URL
 * @props {string} color - Base color theme (default: "primary")
 * @props {string} hoverColor - Hover color theme (default: "tertiary")
 * @props {string} textColor - Text color (default: "white")
 * @props {string} hoverTextColor - Hover text color (default: "black")
 * @props {boolean} asLink - If true, uses Next.js Link (internal routing)
 * @props {boolean|string} scrollTo - If truthy, uses react-scroll to navigate to section ID
 *
 * @dependencies
 * - Tailwind CSS
 * - Next.js Link
 * - react-scroll
 * - HexButton.styles.css (clip-path + shadow styling)
 *
 * @example
 * <HexButton link="https://example.com">External Link</HexButton>
 * <HexButton asLink link="/about">Internal Link</HexButton>
 * <HexButton scrollTo="section-id">Scroll Link</HexButton>
 */
"use client"; // This file is a client component

// links and styles
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import "./HexButton.styles.css";

export default function HexButton({
  children = "Launch Simulator",
  link,
  color = "primary",
  hoverColor = "tertiary",
  textColor = "white",
  hoverTextColor = "black",
  asLink = false,
  scrollTo = false,
}) {

  // Default values for the button based on the color prop
  const wrapperStyle = {
    "--bg-start": `var(--color-${color})`,
    "--bg-end": `var(--color-${color}-alt)`,
    "--hover-bg-start": `var(--color-${hoverColor})`,
    "--hover-bg-end": `var(--color-${hoverColor}-alt)`,
    "--text-color": `var(--color-${textColor})`,
    "--hover-text-color": `var(--color-${hoverTextColor})`,
  };

  // class info and style for the button
  const commonProps = {
    className: 'hex-button-wrapper font-semibold min-w-44',
    style: wrapperStyle,
  };

  return (
    <div className="hex-button-container group max-w-xs sm:max-w-sm">
      {scrollTo ? (
        <ScrollLink to={scrollTo} smooth duration={500} offset={-50} {...commonProps}>
          {children}
        </ScrollLink>
      ) : asLink ? (
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
