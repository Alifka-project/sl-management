'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const NewsEvent = () => {
  const t = useTranslations('newsEvent')

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeIn}
      className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8 flex flex-col md:flex-row rounded-lg overflow-hidden bg-white'
    >
      {/* Left side with image */}
      <div className='w-full md:w-1/3 p-6'>
        <div className='flex flex-col items-center'>
          <Image
            src='/images/book-1.png'
            alt='Family Business Management book'
            width={0}
            height={0}
            sizes='100vw'
            className='mx-auto w-full h-auto object-contain'
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className='w-full md:w-2/3 p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{t('title')}</h1>
        <p className='text-sm text-gray-700 mb-4'>{t('subTitle')}</p>

        <p className='text-sm text-gray-700 mb-4'>{t('description1')}</p>

        <p className='text-sm text-gray-700 mb-6'>{t('description2')}</p>

        <div className='mt-4'>
          <a href='https://www.amazon.com/Family-Business-Management-Andreas-Svoboda/dp/B0CN5QJSDJ'>
            <button className='w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded transition duration-300'>
              {t('button')}
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsEvent
