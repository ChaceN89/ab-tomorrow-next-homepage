import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { FaChalkboardTeacher, FaHandshake, FaFlask } from 'react-icons/fa';
import NumberedHexList from '../common/NumberedHexList';
import HexButton from '../common/HexButton';
import { Link } from 'react-router-dom';

export default function About() {

  const keyFeatures = [
    {
      icon: <FaFlask />,
      text: <p><span className='font-semibold'>Peer</span> reviewed by qualified scientists</p>
    },
    {
      icon: <FaHandshake />,
      text: <p><span className='font-semibold'>Endorsed</span> by environmentally focused non-profit organizations, industry and government</p>
    },
    {
      icon: <FaChalkboardTeacher />,
      text: "Teacher tested",
    },
  ];

  return (
    <section className="bg-accent">
      <div className="home-section home-y-padding space-y-10">

        <SectionHeader
          title="About Alberta Tomorrow"
          description="Alberta Tomorrow was originally created in 2005 by Matthew Carlson and Dr. Brad Stelfox of the ALCES group. Since then, Alberta Tomorrow has been used extensively by teachers and students throughout Alberta."
        />

        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Alberta Tomorrow is critically reviewed and bias-neutral. Continued development is overseen by a steering committee comprised of representatives from industry, non-profits, and government. The application is:
          </p>

          <div className="p-4 bg-accent-alt/40 rounded-xl">
            <NumberedHexList featuresList={keyFeatures} />
          </div>

          <p>
            The Alberta Tomorrow program is overseen by the Alberta Tomorrow Foundation, a registered charity in Canada. The Foundation's Board of Directors includes representatives from the education, non-profit, government, and industry sectors.
          </p>

          <div className="mt-4 flex justify-center">
            <HexButton asLink link="/board-of-directors">
              Meet the Board of Directors
            </HexButton>
          </div>
        </div>

        <div className="space-y-2 mt-2">
          <h3 className="text-2xl font-semibold text-secondary-alt">Mission:</h3>
          <p className="text-lg">
            To deliver a platform that empowers youth to design and sustain a future for our shared ecosystem.
          </p>

          <h3 className="text-2xl font-semibold text-secondary-alt mt-4">Vision:</h3>
          <p className="text-lg">
            An informed society actively fostering sustainable futures.
          </p>
        </div>
      </div>
    </section>
  );
}
