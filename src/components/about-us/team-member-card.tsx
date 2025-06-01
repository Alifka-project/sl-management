'use client'

import React from 'react'
import Image from 'next/image'
import FadeIn from '../animations/fade-in'

interface TeamMemberCardProps {
  name: string
  description: string
  imageSrc: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  description,
  imageSrc,
}) => {
  return (
    <FadeIn className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12.5 w-full items-center'>
      <FadeIn className='relative w-full lg:w-[486px] rounded-lg overflow-hidden lg:col-span-6 xl:col-span-5 2xl:col-span-4 transform transition-transform duration-300'>
        <Image
          src={imageSrc}
          alt={name}
          sizes='100vw'
          width={0}
          height={0}
          className='aspect-[486/528] w-full sm:w-80 md:w-96 lg:w-[486px] max-lg:mx-auto'
        />
      </FadeIn>
      <FadeIn className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:col-span-6 xl:col-span-7 2xl:col-span-8 text-justify'>
        <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[50px] font-bold text-[#252525] text-center sm:text-center lg:text-left leading-tight'>
          {name}
        </h2>
        <p className='text-[#252525] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed transform transition-transform duration-200 text-center sm:text-center lg:text-justify'>
          {description}
        </p>
      </FadeIn>
    </FadeIn>
  )
}

export default TeamMemberCard
