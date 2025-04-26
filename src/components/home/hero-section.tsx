'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'

export default function HeroSection() {
  const t = useTranslations('home')

  return (
    <section className='relative bg-white py-16 max-lg:py-8' id='home'>
      <div className='max-w-7xl mx-auto px-6'>
        <FadeIn className='text-center mb-8'>
          <h1 className='text-4xl max-lg:text-xl font-bold mb-4 max-lg:mb-2'>
            {t('hero.title')}
          </h1>
          <h1 className='text-4xl max-lg:text-xl font-bold mb-4 max-lg:mb-2'>
            {t('hero.and')}
          </h1>
          <h2 className='text-3xl max-lg:text-xl font-semibold mb-6'>
            {t('hero.subtitle')}
          </h2>
          <p className='text-lg max-lg:text-[16px] max-w-3xl mx-auto'>
            {t('hero.description')}
          </p>
        </FadeIn>

        <div className='relative'>
          <Button
            variant='default'
            className=' text-white px-8 py-6 max-sm:py-2 max-sm:px-4 max-sm:text-xs rounded-full absolute left-1/2 -translate-x-1/2 w-[20%] cursor-pointer top-0 max-lg:-top-3 max-md:-top-5 max-sm:-top-5'
          >
            {t('hero.viewMore')}
          </Button>
          <FadeIn delay={0.3} duration={0.8}>
            <Image
              src='/images/content_homepage.png'
              alt='About SLMC'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
