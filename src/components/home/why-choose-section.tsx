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
      className='bg-[#EABF49] rounded-lg px-4 py-8 sm:px-5 sm:py-9 md:px-6 md:py-10 lg:px-7 lg:py-11 xl:px-8 xl:py-12 h-full flex flex-col gap-3 sm:gap-4 md:gap-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      <Image
        src={icon}
        alt={title}
        width={60}
        height={20}
        className='text-[#252525] w-10 h-auto sm:w-12 md:w-14 lg:w-16 xl:w-[60px] transition-transform duration-300 hover:scale-110'
      />
      <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] font-bold leading-tight'>
        {title}
      </h3>
      <p className='text-[#252525] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] leading-relaxed'>
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
    '1': '/images/medal.png', // Expert Team
    '2': '/images/friendship.png', // Trusted Partnership
    '3': '/images/gift.png', // Client-Centric Approach
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
    <section className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
      <div className='container mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-8.5'>
        <motion.h2
          className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[50px] font-bold text-[#252525] text-center sm:text-center md:text-left leading-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
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
