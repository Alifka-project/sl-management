'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import FadeIn from '@/components/animations/fade-in'

export default function ServicesSection() {
  const t = useTranslations('home')

  const services = [
    { icon: 'insurance.svg', key: '1' },
    { icon: 'healthcare.svg', key: '2' },
    { icon: 'residency.svg', key: '3' },
    { icon: 'wealth.svg', key: '4' },
    { icon: 'bespoke.svg', key: '5' },
    { icon: 'legal.svg', key: '6' },
  ]

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <FadeIn className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>{t('services.title')}</h2>
          <p className='text-lg max-w-3xl mx-auto'>
            {t('services.description')}
          </p>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <FadeIn key={service.key} delay={index * 0.1} direction='up'>
              <Card className='h-full'>
                <CardContent className='p-6'>
                  <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4'>
                    <Image
                      src={`/images/service-icons/${service.icon}`}
                      alt={t(`services.items.${service.key}.title`)}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className='text-gray-600'>
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button
            variant='outline'
            className='border-yellow-500 text-yellow-500 hover:bg-yellow-50'
          >
            {t('services.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
