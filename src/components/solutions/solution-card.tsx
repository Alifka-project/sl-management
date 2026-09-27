'use client'

import React from 'react'
import Image from 'next/image'
import FadeIn from '../animations/fade-in'

interface SolutionCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  sectionName: string
}

export default function SolutionCard({
  title,
  description,
  image,
  tags,
  sectionName,
}: SolutionCardProps) {
  return (
    <FadeIn className='col-span-12 sm:col-span-6 lg:col-span-6'>
      <div
        className='bg-white h-full shadow-lg overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 scroll-mt-28'
        id={sectionName}
      >
        {/* Image Section */}
        <div className='relative w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64'>
          <Image
            src={image}
            alt={title}
            fill
            sizes='(max-width: 640px) 100vw, 50vw'
            className='object-cover transition-transform duration-300'
          />
        </div>

        {/* Content Section */}
        <div className='p-4 sm:p-5 md:p-6'>
          {/* Title */}
          <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#252525] mb-3 sm:mb-4'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-[#252525] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6'>
            {description}
          </p>

          {/* Service Buttons/Tags */}
          {tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 sm:gap-2'>
              {tags.map(tag => (
                <span
                  key={tag}
                  className='px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg bg-[#EABF49] text-[#252525] font-medium text-xs sm:text-sm'
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
