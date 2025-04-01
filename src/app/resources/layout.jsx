"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResourceLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/resources/lesson-plans", label: "Lesson Plans" },
    { href: "/resources/videos", label: "Videos" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-20">
      {/* Nav */}
      <nav className="flex gap-6 py-4 border-b border-gray-300 mb-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-medium transition hover:text-primary ${
              pathname === link.href ? "text-primary underline" : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
