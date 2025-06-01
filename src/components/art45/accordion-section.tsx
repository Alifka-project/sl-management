'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/animations/fade-in'

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='border-t border-gray-200'>
      <button
        className='w-full flex items-center justify-between py-4 px-0 text-left focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-sm font-medium text-gray-900 uppercase'>
          {title}
        </span>
        <motion.span
          className='h-5 w-5 text-gray-500 flex items-center justify-center'
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Simple plus icon using CSS */}
          <svg
            viewBox='0 0 24 24'
            width='20'
            height='20'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
          >
            <line x1='12' y1='5' x2='12' y2='19'></line>
            <line x1='5' y1='12' x2='19' y2='12'></line>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden'
          >
            <div className='pb-4 text-sm text-gray-600'>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Art45Page() {
  const t = useTranslations('ART45VAG')

  return (
    <section
      className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'
      id='art-45'
    >
      <div className='container mx-auto px-4 py-12'>
        {/* Hero Section */}
        <FadeIn className='mb-4'>
          <div className='text-center mt-4'>
            <h1 className='text-4xl font-bold mt-4'>ART45 VAG</h1>
          </div>
        </FadeIn>

        {/* Accordion Items */}
        <div className='divide-y divide-gray-200 mb-16'>
          {Array.from({ length: 7 }).map((_, i) => (
            <AccordionItem
              key={i}
              title={t(`${i + 1}.title`)}
              defaultOpen={i === 0}
            >
              <p className='text-gray-600'>{t(`${i + 1}.description`)}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
