/**
 * @file SponsorshipTable.jsx
 * @module components/SponsorshipTable
 * @desc Displays a sponsorship level benefits comparison table for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Apr 8, 2025
 */

import React from 'react';

const sponsorshipLevels = ['Champion $100 000+', 'Ambassador $30 000+', 'Mentor $10 000+', 'Supporter $5000+', 'Associate <$1000'];

function BoldText({ children }) {
  return <span className="font-bold">{children}</span>;
}

const benefits = [
  {
    label: <>Logo on Alberta Tomorrow <BoldText>Sponsorship webpage</BoldText> with link</>,
    levels: [true, true, true, true, true],
  },
  {
    label: <>Logo on Alberta Tomorrow <BoldText>Sponsorship webpage</BoldText> with link</>,
    levels: [true, true, true, true, true],
  },
  {
    label: <>Logo on Alberta Tomorrow <BoldText>Marketing Material</BoldText>(postcards, bookmarks etc)</>,
    levels: [true, true, true, true, false],
  },
  {
    label: <>Logo on <BoldText>sponsorship slide</BoldText> in presentations</>,
    levels: [true, true, true, true, false],
  },
  {
    label: <>Receive Alberta Tomorrow <BoldText>promotional video</BoldText> for company distribution</>,
    levels: [true, true, true, false, false],
  },
  {
    label: <>One <BoldText>full slide advertisement</BoldText> in presentations</>,
    levels: [true, true, false, false, false],
  },
  {
    label: <>Sponsor pop-up with <BoldText>new user registration</BoldText> </>,
    levels: [true, false, false, false, false],
  },
  {
    label: <>Official <BoldText>title sponsor</BoldText> for module and simulator</>,
    levels: [true, false, false, false, false],
  },
  {
    label: <><BoldText>Large size</BoldText> summary on Alberta Tomorrow site with link to company website</>,
    levels: [true, false, false, false, false],
  },
  {
    label: <><BoldText>Medium size</BoldText> summary on Alberta Tomorrow site with link to company website</>,
    levels: [false, true, false, false, false],
  },
  {
    label: <><BoldText>Small size</BoldText> summary on Alberta Tomorrow site with link to company website</>,
    levels: [false, false, true, false, false],
  },
];

const SponsorshipTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm border border-gray-300">
        <thead>
          <tr className="bg-tertiary-alt text-gray-900">
            <th className="border px-4 py-2">Benefit</th>
            {sponsorshipLevels.map((level, idx) => (
              <th key={idx} className="border px-4 py-2 text-center font-semibold">
                {level}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-green-50' : 'bg-tertiary'}>
              <td className="border px-2 py-3">{benefit.label}</td>
              {benefit.levels.map((hasBenefit, j) => (
                <td key={j} className="border px-4 py-2 text-center">
                  {hasBenefit ? '✔️' : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponsorshipTable;
