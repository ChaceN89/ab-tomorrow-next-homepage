/**
 * @file BoardOfDirectors.jsx
 * @module BoardOfDirectors
 * @desc Displays the Board of Directors section with individual member cards.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Jul 14, 2026 - added translations 
 */

import React from 'react'
import { useTranslations } from 'next-intl'
import { boardOfDirectors, boardOfDirectorsTitleData } from '@/data/page-data/boardOfDirectorsData'
import MemberCard from './MemberCard'
import PageHeader from '@/components/common/headers/PageHeader'

export default function BoardOfDirectors() {
  const t = useTranslations('Pages.BoardOfDirectors')

  const localizedMembers = boardOfDirectors.map((member) => ({
    ...member,
    name: t(`members.${member.memberKey}.name`),
    title: t(`members.${member.memberKey}.title`),
    bio: t(`members.${member.memberKey}.description`)
  }))

  return (
    <div className='page-width'>
      <div className='page'>
        <PageHeader title={t(boardOfDirectorsTitleData.titleKey)} subtitle={t(boardOfDirectorsTitleData.subtitleKey)} />
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center'>
          {localizedMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
