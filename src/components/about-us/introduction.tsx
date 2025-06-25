'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FadeIn from '../animations/fade-in'
import { motion } from 'framer-motion'

const AboutIntroduction: React.FC = () => {
  const t = useTranslations('aboutUs')

  // Create an array of logos for seamless scrolling
  const logoCount = 20 // Increased for smoother transitions
  const logos = Array.from({ length: logoCount }).map((_, index) => (
    <div key={index} className='flex-shrink-0 flex items-center justify-center'>
      <Image
        src='/images/logo-slmc-white.svg'
        alt='slmc'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto object-contain'
      />
    </div>
  ))

  return (
    <>
      <section
        className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'
        id='about-us'
      >
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12.5 w-full items-center'>
          <FadeIn className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:col-span-7 text-justify order-2 lg:order-1'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold leading-tight text-center sm:text-center lg:text-left'>
              {t('title')}
            </h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] leading-relaxed text-center sm:text-center lg:text-justify'>
              {t('subTitle')}
            </p>
            <p className='text-[#252525] text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed transform transition-transform duration-200 text-center sm:text-center lg:text-justify'>
              {t('description1')}
            </p>
            <p className='text-[#252525] text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed transform transition-transform duration-200 text-center sm:text-center lg:text-justify'>
              {t('description2')}
            </p>
            <p className='text-[#252525] text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed transform transition-transform duration-200 text-center sm:text-center lg:text-justify'>
              {t('description3')}
            </p>
          </FadeIn>
          <FadeIn className='relative aspect-square w-full h-auto rounded-lg overflow-hidden lg:col-span-5 order-1 lg:order-2 transform transition-transform duration-300'>
            <Image
              src='/images/about-us-content.png'
              alt='SLMC Team Meeting'
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 42vw'
              className='object-cover'
            />
          </FadeIn>
        </div>
      </section>
      <div className='bg-[#EABF49] w-full h-[80px] col-span-12 order-3 relative overflow-hidden'>
        <div className='absolute inset-0 flex items-center'>
          <motion.div
            className='flex items-center gap-[25px] whitespace-nowrap'
            animate={{
              x: [0, -(((60 + 19) * logoCount) / 2)], // Move exactly half the width for seamless loop
            }}
            transition={{
              x: {
                duration: 15, // Slower for smoother movement
                repeat: Infinity,
                repeatType: 'loop',
              },
            }}
            style={{
              width: `${(60 + 19) * logoCount}px`, // Set explicit width
            }}
          >
            {/* Duplicate the logos for seamless infinite scroll */}
            {logos}
            {logos}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AboutIntroduction
