/**
 * @file Home.jsx
 * @module Pages/Home
 * @desc The main landing page layout for the Alberta Tomorrow website.
 *       Contains all major homepage sections, scroll anchor IDs, and
 *       section-level background theming and hex separators.
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 25, 2025
 *
 * @features
 * - Assembles and orders homepage sections such as Hero, Intro, Tools, Education, About, and Get Involved
 * - Provides unique `id`s for each `<section>` to enable smooth scroll navigation
 * - Controls section background colors via Tailwind utility classes
 * - Integrates `HexSeparator` components between sections for visual continuity
 *
 * @dependencies
 * - Hero.jsx
 * - Intro.jsx
 * - CallToAction.jsx
 * - InteractiveTools.jsx
 * - Education.jsx
 * - TeacherTools.jsx
 * - About.jsx
 * - GetInvolved.jsx
 * - HexSeparator.jsx
 *
 * @notes
 * - Tailwind's `overflow-x-hidden` is applied at the top level to prevent horizontal scroll from hex grid bleed.
 * - All unused sections are commented out for now, but should be included in the final build.
 */
import React from 'react'
import Hero from '@/components/home-page/Hero'
import Intro from '@/components/home-page/Intro'
import CallToAction from '@/components/home-page/CallToAction'
// import InteractiveTools from '@/components/home-page/InteractiveTools'
// import Education from '@/components/home-page/education/Education'
// import TeacherTools from '../home-page/teacherTools/TeacherTools'
// import About from '@/components/home-page/About'
// import GetInvolved from '@/components/home-page/GetInvolved'


import HexSeparator from '@/components/common/hexSparator/HexSeparator'

export default function Home() {
  return (
    <div className='overflow-hidden '>
      <section id='hero'>
        <Hero/>
      </section>
      <section id='intro' className='overflow-hidden' >
        <HexSeparator rows={13} hexClass="bg-secondary-alt opacity-40"/>
        <HexSeparator randomColors rows={13} hexClass='bg-primary-alt opacity-5 '/>

        <Intro/>
        <HexSeparator bottom rows={4} parentClass='h-8 bg-primary' hexClass="bg-secondary-alt opacity-40"/>
        <CallToAction/>
      </section>
      {/* <section id='tools' className='overflow-hidden'>
        <HexSeparator randomColors rows={100} hexClass='bg-accent-alt opacity-5'/>
        <InteractiveTools/>
      </section> */}
      {/* <section id='education'>
        <Education/>
        <HexSeparator bottom rows={2} hexClass='bg-primary-alt '/>
        <TeacherTools/>
        <HexSeparator bottom rows={2} hexClass='bg-accent-alt '/>
      </section> */}
      {/* <section id='about' className='overflow-hidden'>
        <About/>
        <div className='overflow-hidden'>
          <HexSeparator randomColors rows={100} hexClass='bg-primary-alt opacity-5 '/>
          <HexSeparator bottom rows={2} hexClass='bg-accent '/>
          <GetInvolved/>
        </div>
      </section> */}
    </div>
  )
}
