'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TeamMemberCard from './TeamMemberCard'

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
  const teamMembers: TeamMember[] = [
    {
      name: 'Prof. Dr. Andreas Svoboda',
      title: 'Founder & CEO',
      description:
        'With over two decades in the global financial services industry, Prof. Dr. Svoboda is also a mentor, coach, and respected academic at Swiss universities. He leads our team in delivering comprehensive private and family lifestyle solutions tailored to your unique goals.',
      imageSrc: '/images/andreas.png',
    },
    {
      name: 'Ms. Lingnan Ren',
      title: 'Head of Beijing Desk',
      description:
        "Equipped with a strong academic background in Economics from Fudan University of Shanghai, Ms. Ren brings invaluable experience from Mingya Insurance and the media/publishing sectors. Fluent in English and Mandarin, she heads SLMC's Beijing Desk—offering personalized assistance and world-class service to a diverse clientele.",
      imageSrc: '/images/lingnan.png',
      isReversed: true,
    },
  ]

  return (
    <motion.div
      className='mb-16'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerChildren}
    >
      <motion.h2
        className='text-3xl font-bold mb-8 text-gray-800 relative border-b pb-4 flex items-center gap-3'
        variants={fadeIn}
      >
        <span className=' text-yellow-500'>
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
        Our Team
      </motion.h2>

      <motion.p className='text-gray-700 mb-8' variants={fadeIn}>
        SLMC is powered by a diverse team focused on excellence and personal
        attention. Led by Prof. Dr. Andreas Svoboda, we collaborate with
        top-tier partners in finance, banking, insurance, and family office
        services to offer bespoke solutions for UHNW clients at the highest
        standards.
      </motion.p>

      <motion.p className='text-gray-700 mb-12' variants={fadeIn}>
        To meet growing Asian demand, SLMC proudly introduces its Beijing Desk,
        headed by Ms. Lingnan Ren, providing specialized Mandarin support for a
        seamless global experience.
      </motion.p>

      <div className='space-y-8'>
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
