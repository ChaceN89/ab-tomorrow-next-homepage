"use client";
import { resourceLinks } from "@/data/resourceData/resourcePageData";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function ResourceNav() {
    const pathname = usePathname();
  
  return (
    <nav className="flex gap-6 mb-6 ">
    {resourceLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`text-xl  transition hover:text-primary py-2 font-semibold   ${
          pathname === link.href ? "text-primary underline" : "text-gray-700"
        }`}
      >
        {link.label}
      </Link>
    ))}
  </nav>
  )
}
