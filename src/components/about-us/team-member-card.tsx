'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMemberCardProps {
  name: string
  title: string
  description: string
  imageSrc: string
  isReversed?: boolean
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  description,
  imageSrc,
  isReversed = false,
}) => {
  return (
    <motion.div
      className='rounded-lg overflow-hidden shadow-md bg-yellow-100 mb-8'
      variants={fadeIn}
    >
      <div
        className={`flex flex-col ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className='relative w-full lg:w-1/3 h-72 lg:h-auto'>
          <Image
            src={imageSrc}
            alt={name}
            fill
            className='object-cover max-lg:object-contain'
          />
        </div>
        <div className='p-6 lg:w-2/3'>
          <h3 className='text-xl font-bold mb-2'>{name}</h3>
          <p className='text-sm font-medium text-gray-700 mb-4'>{title}</p>
          <p className='text-gray-700 text-sm'>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMemberCard
