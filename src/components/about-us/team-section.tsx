'use client'

import React from 'react'
import TeamMemberCard from './team-member-card'
import { useTranslations } from 'next-intl'
import FadeIn from '../animations/fade-in'

interface TeamMember {
  name: string
  description: string
  imageSrc: string
}

const TeamSection: React.FC = () => {
  const t = useTranslations('aboutUs.team')
  const teams = useTranslations('aboutUs.team.teams')

  // Team member data with translated content
  const teamMembers: TeamMember[] = [
    {
      name: 'Prof. Dr. Andreas Svoboda',
      description: teams('1.description'),
      imageSrc: '/images/andreas.png',
    },
    {
      name: 'Ms. Lingnan Ren',
      description: teams('2.description'),
      imageSrc: '/images/lingnan.png',
    },
  ]

  return (
    <section
      className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'
      id='about us'
    >
      <div className='container mx-auto w-full'>
        <FadeIn
          direction='right'
          delay={0.4}
          className='flex-1 flex flex-col h-full justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12.5 text-center lg:text-left xl:mb-12.5 lg:mb-12 md:mb-10 sm:mb-8 mb-6'
        >
          <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[50px] font-bold text-[#252525] text-center sm:text-center lg:text-left leading-tight'>
            {t('title')}
          </h2>
          <FadeIn direction='up' delay={0.6}>
            <p className='text-[#252525] text-base sm:text-lg md:text-2xl leading-relaxed transform transition-transform duration-200'>
              {t('description1')}
            </p>
          </FadeIn>
          <FadeIn direction='up' delay={0.8}>
            <p className='text-[#252525] text-base sm:text-lg md:text-2xl leading-relaxed transform transition-transform duration-200'>
              {t('description2')}
            </p>
          </FadeIn>
        </FadeIn>

        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12.5'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              description={member.description}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
