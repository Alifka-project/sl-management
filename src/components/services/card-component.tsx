'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FadeIn from '../animations/fade-in'
import { Link } from '@/i18n/routing'

// Define the structure of each service
interface Service {
  id: number
  sectionName: string
  title: string
  description: string
  items: string[]
}

// Service card component for each service
interface ServiceCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  sectionName: string
}

const ServiceCard = ({
  title,
  description,
  image,
  tags,
  sectionName,
}: ServiceCardProps) => {
  return (
    <FadeIn className='col-span-12 sm:col-span-6 lg:col-span-6'>
      <div
        className='bg-white h-full shadow-lg overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300'
        id={sectionName}
      >
        {/* Image Section */}
        <div className='relative w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-300'
            priority
          />
        </div>

        {/* Content Section */}
        <div className='p-4 sm:p-5 md:p-6'>
          {/* Title */}
          <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#252525] mb-3 sm:mb-4 line-clamp-2'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-[#252525] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3'>
            {description}
          </p>

          {/* Service Buttons/Tags */}
          {tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 sm:gap-2'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg bg-[#EABF49] text-[#252525] font-medium text-xs sm:text-sm cursor-pointer hover:bg-[#d4a942] transition-colors duration-200'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Family Services | SLMC',
  description: 'Premium Family Office Services tailored to your unique needs',
}

// Main component to display all family services
export default function FamilyServicesPage() {
  const t = useTranslations('familyService')
  const tt = useTranslations('menu')

  // Array of family services - in a real implementation, this would be transformed from translations
  const services: Service[] = [
    {
      id: 1,
      sectionName: 'insurance',
      title: t('1.title'),
      description: t('1.description'),
      items: Object.keys(t.raw('1.items') || {}).map(key =>
        t(`1.items.${key}`),
      ),
    },
    {
      id: 2,
      sectionName: 'relocation-service',
      title: t('2.title'),
      description: t('2.description'),
      items: Object.keys(t.raw('2.items') || {}).map(key =>
        t(`2.items.${key}`),
      ),
    },
    {
      id: 3,
      sectionName: 'wealth-planning',
      title: t('3.title'),
      description: t('3.description'),
      items: Object.keys(t.raw('3.items') || {}).map(key =>
        t(`3.items.${key}`),
      ),
    },
    {
      id: 4,
      sectionName: 'tax-planning',
      title: t('4.title'),
      description: t('4.description'),
      items: Object.keys(t.raw('4.items') || {}).map(key =>
        t(`4.items.${key}`),
      ),
    },
    {
      id: 5,
      sectionName: 'family-governance',
      title: t('5.title'),
      description: t('5.description'),
      items: Object.keys(t.raw('5.items') || {}).map(key =>
        t(`5.items.${key}`),
      ),
    },
    {
      id: 6,
      sectionName: 'real-estate',
      title: t('6.title'),
      description: t('6.description'),
      items: Object.keys(t.raw('6.items') || {}).map(key =>
        t(`6.items.${key}`),
      ),
    },
    {
      id: 7,
      sectionName: 'investment',
      title: t('7.title'),
      description: t('7.description'),
      items: Object.keys(t.raw('7.items') || {}).map(key =>
        t(`7.items.${key}`),
      ),
    },
  ]

  return (
    <section
      className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28'
      id='family-services'
    >
      <div className='container mx-auto'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 items-center'>
          <FadeIn className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:col-span-6 text-center lg:text-left order-2 lg:order-1'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-bold leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-normal xl:leading-normal 2xl:leading-tight break-words hyphens-auto'>
              {t('title')}
            </h1>
            <p className='text-[#252525] leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0'>
              {t('description')}
            </p>
            <FadeIn direction='up' delay={1.0}>
              <Link href='/contact-us' className='w-fit mx-auto lg:mx-0'>
                <Button
                  variant='default'
                  className='text-[#252525] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg hover:scale-105 transition-transform duration-200'
                >
                  {tt('contactUs')}
                </Button>
              </Link>
            </FadeIn>
          </FadeIn>

          <FadeIn className='lg:col-span-6 order-1 lg:order-2'>
            <div className='relative aspect-[4/3] sm:aspect-[3/2] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <Image
                src='/images/image-services.jpg'
                alt='SLMC Team Meeting'
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw'
                className='object-cover'
              />
            </div>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={`/images/content-${service.id}.png`}
              sectionName={service.sectionName}
              tags={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
