'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FadeIn from '@/components/animations/fade-in'

export default function AboutSection() {
  const t = useTranslations('home')

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row gap-12'>
          <FadeIn className='md:w-1/2' direction='left' delay={0.2}>
            <h2 className='text-3xl font-bold mb-6'>{t('about.title')}</h2>
            <p className='text-gray-700 mb-4'>{t('about.description1')}</p>
            <p className='text-gray-700 mb-4'>{t('about.description2')}</p>
          </FadeIn>

          <FadeIn className='md:w-1/2' direction='right' delay={0.4}>
            <Image
              src='/images/about-image.jpg'
              alt='About SLMC'
              width={600}
              height={400}
              className='rounded-lg shadow-md w-full h-auto'
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
