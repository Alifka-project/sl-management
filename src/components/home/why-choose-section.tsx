'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface WhyChooseCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className='border border-yellow-300 rounded-lg p-6 h-full'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      <div className='mb-4'>
        {/* Gray square background with rounded corners for icon */}
        <div className='bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center'>
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className='text-gray-700'
          />
        </div>
      </div>
      <h3 className='text-xl font-bold mb-2 text-left'>{title}</h3>
      <p className='text-gray-700 text-sm leading-relaxed text-left'>
        {description}
      </p>
    </motion.div>
  )
}

const WhyChooseSection: React.FC = () => {
  const t = useTranslations('home.whyChoose')
  const items = useTranslations('home.whyChoose.items')

  // Map the icons to use with the translated content
  const iconsMap = {
    '1': '/images/medal.svg', // Expert Team
    '2': '/images/friendship.svg', // Trusted Partnership
    '3': '/images/gift.svg', // Client-Centric Approach
  }

  // Convert the translated items into the format needed for WhyChooseCard
  const whyChooseItems = [
    {
      icon: iconsMap['1'],
      title: items('1.title'),
      description: items('1.description'),
    },
    {
      icon: iconsMap['2'],
      title: items('2.title'),
      description: items('2.description'),
    },
    {
      icon: iconsMap['3'],
      title: items('3.title'),
      description: items('3.description'),
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-4 py-8'>
      <div className='border-t border-black pt-12 mb-8'>
        <motion.h2
          className='text-4xl font-bold text-gray-800 text-center mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {whyChooseItems.map((item, index) => (
            <WhyChooseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
