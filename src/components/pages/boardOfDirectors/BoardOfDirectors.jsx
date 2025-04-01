/**
 * @file BoardOfDirectors.jsx
 * @module BoardOfDirectors
 * @desc Displays the Board of Directors section with individual member cards.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from 'react'
import { boardOfDirectors } from '../../../data/boardOfDirectorsData'
import MemberCard from './MemberCard'
import PageHeader from '@/components/common/PageHeader'

export default function BoardOfDirectors() {

  return (
    <div className='page-width'>
      <div className='page'>
        <PageHeader title='Board of Directors' subtitle="Meet the individuals guiding Alberta Tomorrow’s mission for sustainable land-use planning." />
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center'>
          {boardOfDirectors.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
