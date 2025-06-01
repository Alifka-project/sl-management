'use client'

import { useTranslations } from 'next-intl'
import FadeIn from '@/components/animations/fade-in'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function AboutSection() {
  const t = useTranslations('home')
  const tt = useTranslations('menu')

  return (
    <section
      className='relative px-4 sm:px-6 lg:px-8 bg-white py-8 sm:py-12 md:py-16 lg:py-20'
      id='about'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14.5 items-center justify-between'>
          <FadeIn
            className='w-full sm:w-80 md:w-96 lg:w-[400px] xl:w-[500px] aspect-square rounded-[10px] flex-1 transform transition-transform duration-300 hover:scale-105'
            direction='left'
            delay={0.2}
          >
            <Image
              src='/images/lake-zurich.jpg'
              alt='lake-zurich'
              width={0}
              height={0}
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 400px, 500px'
              className='w-full h-full rounded-[10px] object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl'
            />
          </FadeIn>
          <FadeIn
            direction='right'
            delay={0.4}
            className='flex-1 flex flex-col h-full justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-2 text-center lg:text-left'
          >
            <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[50px] font-bold text-[#252525] text-center sm:text-center lg:text-left leading-tight'>
              {t('about.title')}
            </h2>
            <FadeIn direction='up' delay={0.6}>
              <p className='text-[#252525] text-base sm:text-lg md:text-2xl leading-relaxed transform transition-transform duration-200'>
                {t('about.description1')}
              </p>
            </FadeIn>
            <FadeIn direction='up' delay={0.8}>
              <p className='text-[#252525] text-base sm:text-lg md:text-2xl leading-relaxed transform transition-transform duration-200'>
                {t('about.description2')}
              </p>
            </FadeIn>
            <FadeIn direction='up' delay={1.0}>
              <Button
                variant='default'
                className='text-[#252525] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 w-fit lg:px-12 lg:py-5 xl:px-16 xl:py-6 font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-100 active:scale-95 mx-auto lg:mx-0'
              >
                {tt('contactUs')}
              </Button>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
