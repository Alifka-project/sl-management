'use client'

import { useTranslations } from 'next-intl'
import FadeIn from '@/components/animations/fade-in'

export default function AboutSection() {
  const t = useTranslations('home')

  return (
    <section>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col gap-10 max-lg:gap-5'>
          <FadeIn
            className='flex-row max-lg:flex-col flex gap-10 max-lg:gap-5'
            direction='left'
            delay={0.2}
          >
            <h2 className='text-4xl max-lg:text-2xl font-bold'>
              {t('about.title')}
            </h2>
            <p className='text-gray-700 flex-1'>{t('about.description1')}</p>
          </FadeIn>
          <FadeIn direction='left' delay={0.2}>
            <p className='text-gray-700 '>{t('about.description2')}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
