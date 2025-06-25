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
        <p className='text-[#252525] text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl leading-relaxed transform transition-transform duration-200 text-center sm:text-center lg:text-justify'>
          {description}
        </p>
        
        {/* LinkedIn and YouTube Golden Buttons */}
        {name.includes('Andreas') && (
          <div className='flex flex-col sm:flex-row gap-3 justify-center sm:justify-center lg:justify-start mt-6'>
            <a href='https://www.linkedin.com/in/andreas-svoboda/' target='_blank' rel='noopener noreferrer'>
              <button className='w-full cursor-pointer text-white font-bold text-lg py-3 px-4 rounded-lg bg-[#EABF49] hover:bg-[#d4a73d] transition duration-300 shadow-lg flex items-center justify-center'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
                LinkedIn
              </button>
            </a>
            <a href='https://www.youtube.com/@SvobodaFinance' target='_blank' rel='noopener noreferrer'>
              <button className='w-full cursor-pointer text-white font-bold text-lg py-3 px-4 rounded-lg bg-[#EABF49] hover:bg-[#d4a73d] transition duration-300 shadow-lg flex items-center justify-center'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                </svg>
                YouTube
              </button>
            </a>
          </div>
        )}
      </FadeIn>
    </FadeIn>
  )
}

export default TeamMemberCard
