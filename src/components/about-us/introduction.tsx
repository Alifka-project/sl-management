'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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

const AboutIntroduction: React.FC = () => {
  const t = useTranslations('aboutUs')

  return (
    <motion.div
      className='mb-16'
      initial='hidden'
      animate='visible'
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

      <motion.h2
        className='text-xl md:text-2xl font-semibold mb-6 text-gray-800'
        variants={fadeIn}
      >
        {t('subTitle')}
      </motion.h2>

      <motion.div
        className='relative h-80 md:h-96 mb-8 rounded-lg overflow-hidden'
        variants={fadeIn}
      >
        <Image
          src='/images/about-us-content.png'
          alt='SLMC Team Meeting'
          fill
          className='object-cover'
        />
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <motion.div variants={fadeIn}>
          <p className='text-gray-700 mb-4'>{t('description1')}</p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <p className='text-gray-700 mb-4'>{t('description2')}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutIntroduction
