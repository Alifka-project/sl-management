'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FadeIn from '@/components/animations/fade-in'

export default function WhyChooseSection() {
  const t = useTranslations('home')

  const reasons = [
    { icon: 'expert.svg', key: '1' },
    { icon: 'trusted.svg', key: '2' },
    { icon: 'client.svg', key: '3' },
  ]

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <FadeIn className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>{t('whyChoose.title')}</h2>
          <p className='text-lg max-w-3xl mx-auto'>
            {t('whyChoose.description')}
          </p>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reasons.map((reason, index) => (
            <FadeIn key={reason.key} delay={index * 0.2} direction='up'>
              <div className='bg-white border border-yellow-100 rounded-lg p-6 h-full'>
                <div className='w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4 mx-auto'>
                  <Image
                    src={`/images/service-icons/${reason.icon}`}
                    alt={t(`whyChoose.items.${reason.key}.title`)}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className='text-xl font-semibold text-center mb-4'>
                  {t(`whyChoose.items.${reason.key}.title`)}
                </h3>
                <p className='text-gray-600 text-center'>
                  {t(`whyChoose.items.${reason.key}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
