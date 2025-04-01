"use client";

import React from "react";
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
  const wrapperStyle = {
    "--bg-start": `var(--color-${color})`,
    "--bg-end": `var(--color-${color}-alt)`,
    "--hover-bg-start": `var(--color-${hoverColor})`,
    "--hover-bg-end": `var(--color-${hoverColor}-alt)`,
    "--text-color": `var(--color-${textColor})`,
    "--hover-text-color": `var(--color-${hoverTextColor})`,
  };

  const commonProps = {
    className: 'hex-button-wrapper font-semibold min-w-44',
    style: wrapperStyle,
  };

  return (
    <div className="hex-button-container group max-w-xs sm:max-w-sm">
      {scrollTo ? (
        <ScrollLink to={scrollTo} smooth duration={500} offset={-80} {...commonProps}>
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
