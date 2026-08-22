'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '../ui/button'
import LeadGateModal from '../downloads/lead-gate-modal'
import { DOWNLOAD_DOCUMENTS } from '@/lib/downloads'

// The factsheet lives in the shared downloads registry; this banner is just a
// homepage shortcut to it.
const FACTSHEET = DOWNLOAD_DOCUMENTS.find(doc => doc.id === 'sme-factsheet')

const FactsheetSection: React.FC = () => {
  const t = useTranslations('home.factsheet')
  const tDownloads = useTranslations('downloads')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24'
      id='factsheet'
    >
      <div className='container mx-auto'>
        <motion.div
          className='relative overflow-hidden rounded-2xl bg-[#252525] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            <div className='flex-1 flex flex-col gap-4 text-center lg:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                {t('title')}
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                {t('description')}
              </p>

              <div className='flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2'>
                <span className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white'>
                  <span className='font-semibold text-[#EABF49]'>EN</span>
                  {t('englishLabel')}
                </span>
                <span className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white'>
                  <span className='font-semibold text-[#EABF49]'>DE</span>
                  {t('germanLabel')}
                </span>
              </div>

              <div className='mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4'>
                <Button
                  onClick={() => setIsOpen(true)}
                  className='text-[#252525] px-8 py-5 md:px-10 md:py-6 w-fit font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg'
                >
                  {t('downloadButton')}
                </Button>

                <Link
                  href='/downloads'
                  className='text-sm sm:text-base font-semibold text-[#EABF49] underline-offset-4 transition-colors hover:text-white hover:underline'
                >
                  {t('viewAllDownloads')}
                </Link>
              </div>
            </div>

            <motion.div
              className='shrink-0'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              <div className='flex h-40 w-32 sm:h-48 sm:w-40 items-center justify-center rounded-lg bg-[#EABF49] shadow-xl'>
                <svg
                  className='h-16 w-16 sm:h-20 sm:w-20 text-[#252525]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <LeadGateModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        assets={FACTSHEET?.assets ?? []}
        documentLabel={tDownloads('documents.sme-factsheet.title')}
      />
    </section>
  )
}

export default FactsheetSection
