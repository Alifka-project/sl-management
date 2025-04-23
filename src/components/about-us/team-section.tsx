'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TeamMemberCard from './team-member-card'
import { useTranslations } from 'next-intl'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

interface TeamMember {
  name: string
  title: string
  description: string
  imageSrc: string
  isReversed?: boolean
}

const TeamSection: React.FC = () => {
  const t = useTranslations('aboutUs.team')
  const teams = useTranslations('aboutUs.team.teams')

  // Team member data with translated content
  const teamMembers: TeamMember[] = [
    {
      name: 'Prof. Dr. Andreas Svoboda',
      title: 'Founder & CEO',
      description: teams('1.description'),
      imageSrc: '/images/andreas.png',
    },
    {
      name: 'Ms. Lingnan Ren',
      title: 'Head of Beijing Desk',
      description: teams('2.description'),
      imageSrc: '/images/lingnan.png',
      isReversed: true,
    },
  ]

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerChildren}
    >
      <motion.h2
        className='text-3xl font-bold mb-8 text-gray-800 relative border-b pb-4 flex items-center gap-3'
        variants={fadeIn}
      >
        <span className='text-yellow-500'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M25 0L29.4194 20.5806L50 25L29.4194 29.4194L25 50L20.5806 29.4194L0 25L20.5806 20.5806L25 0Z'
              fill='#EABF49'
            />
          </svg>
        </span>
        {t('title')}
      </motion.h2>

      <motion.p className='text-gray-700 mb-8' variants={fadeIn}>
        {t('description1')}
      </motion.p>

      <motion.p className='text-gray-700 mb-12' variants={fadeIn}>
        {t('description2')}
      </motion.p>

      <div className='space-y-8 flex flex-row gap-12 max-lg:flex-col max-lg:gap-0'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            imageSrc={member.imageSrc}
            isReversed={member.isReversed}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default TeamSection
