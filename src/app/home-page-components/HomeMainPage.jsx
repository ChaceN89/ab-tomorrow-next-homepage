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
import Hero from './Hero'
import Intro from './Intro'
import CallToAction from './CallToAction'
import InteractiveTools from './InteractiveTools'
import Education from './education/Education'
import TeacherTools from './teacherTools/TeacherTools'
import About from './About'
import IndigenousVoices from './IndigenousVoices'
import GetInvolved from './GetInvolved'

import HexSeparator from '@/components/common/hexSparator/HexSeparator'

export default function HomeMainPage() {
  return (
    <div className='overflow-hidden'>
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
      <section id='tools' className='overflow-hidden'>
        <HexSeparator randomColors rows={100} hexClass='bg-accent-alt opacity-5'/>
        <InteractiveTools/>
      </section>
      <section id='education'>
        <Education/>
        <HexSeparator bottom rows={2} hexClass='bg-primary-alt' parentClass='bg-primary h-0.5'/>
        <TeacherTools/>
      </section>
      <section id='about' >
        <div className='overflow-hidden'>
          <HexSeparator randomColors rows={100} hexClass='bg-primary-alt opacity-3 '/>
          <HexSeparator bottom rows={2} hexClass='bg-primary '/>
          <About/>
        </div>
        <HexSeparator bottom rows={2} hexClass='bg-tertiary-alt '/>
        <div className='indigenous-voices'>
          <IndigenousVoices/>
        </div>
        <div className='overflow-hidden'>
          <HexSeparator randomColors rows={100} hexClass='bg-primary-alt opacity-3 '/>
          <HexSeparator bottom rows={2} hexClass='bg-tertiary '/>
          <GetInvolved/>
        </div>
        </section>
    </div>
  )
}
