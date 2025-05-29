'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'

export default function HeroSection() {
  const t = useTranslations('home')

  return (
    <section
      className='relative px-4 sm:px-6 lg:px-8 bg-white py-8 sm:py-12 md:py-16 lg:py-20'
      id='hero'
    >
      <div className='container mx-auto flex flex-col items-center'>
        <FadeIn className='text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold leading-tight'>
            {t('hero.title')} {t('hero.and')} {t('hero.subtitle')}
          </h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-12.5 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed'>
            {t('hero.description')}
          </p>
        </FadeIn>
        <FadeIn className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-12.5'>
          <Button
            variant='default'
            className='text-[#252525] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 xl:px-16 xl:py-6 font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg'
          >
            {t('hero.viewMore')}
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
