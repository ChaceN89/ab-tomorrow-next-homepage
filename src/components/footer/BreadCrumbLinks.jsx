import React from 'react';
import LinkItem from '@/components/navbar/LinkItem';

export default function BreadCrumbLinks({ title, list }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="flex flex-wrap items-center gap-2 text-sm text-white">
        {list.map(({ label, icon, href, router }, idx) => (
          <li key={idx} className="flex items-center">
            <LinkItem
              href={href}
              router={router}
              className="flex items-center gap-1 hover:text-accent transition-colors duration-100"
            >
              {icon && <span className="text-base">{icon}</span>}
              {label}
            </LinkItem>
            {idx < list.length - 1 && <span className="px-1 pl-2.5 text-gray-300">/</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
