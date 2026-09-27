'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import FadeIn from '../animations/fade-in'
import SolutionCard from './solution-card'

export interface SolutionEntry {
  /** Key of this entry inside the page's translation namespace */
  key: string
  /** Anchor id, used by the footer links to deep-link into a card */
  sectionName: string
  image: string
}

interface SolutionsPageProps {
  /** Translation namespace holding eyebrow, title, description and the entries */
  namespace: string
  /** Anchor id of the whole section */
  sectionId: string
  heroImage: string
  /** Aspect ratio and max width of the hero image frame */
  heroFrameClassName?: string
  entries: SolutionEntry[]
}

export default function SolutionsPage({
  namespace,
  sectionId,
  heroImage,
  heroFrameClassName = 'aspect-[4/3] sm:aspect-[3/2] w-full',
  entries,
}: SolutionsPageProps) {
  const t = useTranslations(namespace)
  const tMenu = useTranslations('menu')

  const tagsFor = (key: string): string[] => {
    const items = t.raw(`${key}.items`)

    if (!items || typeof items !== 'object') {
      return []
    }

    return Object.keys(items).map(itemKey => t(`${key}.items.${itemKey}`))
  }

  return (
    <section
      className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28'
      id={sectionId}
    >
      <div className='container mx-auto'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 items-center'>
          <FadeIn className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:col-span-7 text-center lg:text-left order-2 lg:order-1'>
            <span className='text-[#252525]/60 font-bold uppercase tracking-[3px] text-xs sm:text-sm'>
              {t('eyebrow')}
            </span>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-bold leading-tight break-words hyphens-auto'>
              {t('title')}
            </h1>
            <p className='text-[#252525] leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl max-w-2xl mx-auto lg:mx-0'>
              {t('description')}
            </p>
            <FadeIn direction='up' delay={1.0}>
              <Link href='/contact-us' className='w-fit mx-auto lg:mx-0'>
                <Button
                  variant='default'
                  className='text-[#252525] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg hover:scale-105 transition-transform duration-200'
                >
                  {tMenu('contactUs')}
                </Button>
              </Link>
            </FadeIn>
          </FadeIn>

          <FadeIn className='lg:col-span-5 order-1 lg:order-2'>
            <div
              className={`relative mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${heroFrameClassName}`}
            >
              <Image
                src={heroImage}
                alt={t('title')}
                fill
                sizes='(max-width: 1024px) 100vw, 42vw'
                className='object-cover object-center'
                priority
              />
            </div>
          </FadeIn>
        </div>

        {/* Solutions Grid */}
        <div className='grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
          {entries.map(entry => (
            <SolutionCard
              key={entry.key}
              title={t(`${entry.key}.title`)}
              description={t(`${entry.key}.description`)}
              image={entry.image}
              sectionName={entry.sectionName}
              tags={tagsFor(entry.key)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
