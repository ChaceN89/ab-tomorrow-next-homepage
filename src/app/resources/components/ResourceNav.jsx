"use client";
import { resourceLinks } from "@/data/resourceData/resourcePageData";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function ResourceNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5 mb-6 items-center">
      {resourceLinks.map((link, i) => (
        <div key={link.href} className="flex items-center gap-5">
          <Link
            href={link.href}
            className={`text-xl transition hover:text-primary py-2 font-semibold ${
              pathname === link.href ? "text-primary underline" : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
          {i < resourceLinks.length - 1 && (
            <div className="w-px h-5 bg-gray-700" />
          )}
        </div>
      ))}
    </nav>
  );
}

