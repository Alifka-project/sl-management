'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Define the structure of each service
interface Service {
  id: number
  title: string
  description: string
  items: string[]
}

// Service card component for each service
interface ServiceCardProps {
  number: string
  title: string
  description: string
  image: string
  tags: string[]
  contactText: string
}

const ServiceCard = ({
  number,
  title,
  description,
  image,
  tags,
  contactText,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeIn}
      className='mb-16 max-lg:mb-24'
    >
      <div className='relative w-full h-64 max-lg:h-48 rounded-xl overflow-hidden mb-8'>
        <Image src={image} alt={title} fill className='object-cover' priority />
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='lg:w-1/4'>
          <h2 className='text-8xl max-lg:text-6xl font-bold text-gray-800 mb-4'>
            {number}
          </h2>
        </div>

        <div className='lg:w-3/4'>
          <h3 className='text-4xl max-lg:text-3xl font-bold text-gray-800 mb-4 max-lg:mb-3'>
            {title}
          </h3>
          <p className='text-lg max-lg:text-base text-gray-700 mb-6 max-lg:mb-4'>
            {description}
          </p>

          {tags.length > 0 && (
            <div className='flex flex-wrap gap-3 mb-6 max-lg:mb-4'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-4 py-2 max-lg:px-3 max-lg:py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm max-lg:text-xs border border-yellow-300'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Button className='bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 max-lg:px-6 max-lg:py-4 rounded-full'>
            {contactText}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export const metadata = {
  title: 'Family Services | SLMC',
  description: 'Premium Family Office Services tailored to your unique needs',
}

// Main component to display all family services
export default function FamilyServicesPage() {
  const t = useTranslations('familyService')

  // Array of family services - in a real implementation, this would be transformed from translations
  const services: Service[] = [
    {
      id: 1,
      title: t('1.title'),
      description: t('1.description'),
      items: Object.keys(t.raw('1.items') || {}).map(key =>
        t(`1.items.${key}`),
      ),
    },
    {
      id: 2,
      title: t('2.title'),
      description: t('2.description'),
      items: Object.keys(t.raw('2.items') || {}).map(key =>
        t(`2.items.${key}`),
      ),
    },
    {
      id: 3,
      title: t('3.title'),
      description: t('3.description'),
      items: Object.keys(t.raw('3.items') || {}).map(key =>
        t(`3.items.${key}`),
      ),
    },
    {
      id: 4,
      title: t('4.title'),
      description: t('4.description'),
      items: Object.keys(t.raw('4.items') || {}).map(key =>
        t(`4.items.${key}`),
      ),
    },
    {
      id: 5,
      title: t('5.title'),
      description: t('5.description'),
      items: Object.keys(t.raw('5.items') || {}).map(key =>
        t(`5.items.${key}`),
      ),
    },
    {
      id: 6,
      title: t('6.title'),
      description: t('6.description'),
      items: Object.keys(t.raw('6.items') || {}).map(key =>
        t(`6.items.${key}`),
      ),
    },
    {
      id: 7,
      title: t('7.title'),
      description: t('7.description'),
      items: Object.keys(t.raw('7.items') || {}).map(key =>
        t(`7.items.${key}`),
      ),
    },
  ]

  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8'>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          number={service.id.toString().padStart(2, '0')}
          title={service.title}
          description={service.description}
          image={`/images/content-${service.id}.png`}
          tags={service.items}
          contactText={t('contactUs')}
        />
      ))}
    </div>
  )
}
