import React from 'react';
import { scrollLinks, learnMoreDropDown } from '@/data/navData';
import LinkItem from '@/components/navbar/LinkItem';

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Quick Links</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Scroll-based links */}
        <ul className="space-y-2">
          {scrollLinks.map(({ label, scrollTo, icon }, idx) => (
            <li key={idx}>
              <LinkItem
                scrollTo={scrollTo}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                {icon} {label}
              </LinkItem>
            </li>
          ))}
        </ul>

        {/* Router-based links (Learn More section) */}
        <ul className="space-y-2">
          {learnMoreDropDown.list.map(({ label, router, icon }, idx) => (
            <li key={idx}>
              <LinkItem
                router={router}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                {icon} {label}
              </LinkItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
