'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'

export default function HeroSection() {
  const t = useTranslations('home')

  return (
    <section className='relative bg-white py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <FadeIn className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('hero.title')}
          </h1>
          <div className='w-24 h-1 bg-yellow-500 mx-auto my-4'></div>
          <h2 className='text-3xl font-semibold mb-6'>{t('hero.subtitle')}</h2>
          <p className='text-lg max-w-3xl mx-auto'>{t('hero.description')}</p>
          <Button className='mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 rounded-md'>
            {t('hero.viewMore')}
          </Button>
        </FadeIn>

        <div className='relative'>
          <FadeIn delay={0.3} duration={0.8}>
            <Image
              src='/images/hero-image.jpg'
              alt='Family office services'
              width={1200}
              height={500}
              className='rounded-lg shadow-lg w-full object-cover'
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
