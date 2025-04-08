"use client";
import { resourceLinks } from "@/data/resourceData/resourcePageData";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function ResourceNav() {
    const pathname = usePathname();
  
  return (
    <nav className="flex gap-6 border-b-2 border-secondary mb-6">
    {resourceLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`text-lg font-medium transition hover:text-primary p-2   ${
          pathname === link.href ? "text-primary underline" : "text-gray-700"
        }`}
      >
        {link.label}
      </Link>
    ))}
  </nav>
  )
}
