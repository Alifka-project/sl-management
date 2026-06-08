'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

interface FactsheetFile {
  key: 'en' | 'de'
  href: string
  fileName: string
}

const FACTSHEETS: FactsheetFile[] = [
  {
    key: 'en',
    href: '/SLMC_Factsheet_SME_Insurance_and_Pension_Review_EN.pdf',
    fileName: 'SLMC_Factsheet_SME_Insurance_and_Pension_Review_EN.pdf',
  },
  {
    key: 'de',
    href: '/SLMC_Factsheet_KMU_Versicherungs_und_Vorsorge_Review_DE.pdf',
    fileName: 'SLMC_Factsheet_KMU_Versicherungs_und_Vorsorge_Review_DE.pdf',
  },
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const FactsheetSection: React.FC = () => {
  const t = useTranslations('home.factsheet')

  const [isOpen, setIsOpen] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Reset back to the form state for the next visitor after the close animation.
    setTimeout(() => {
      setUnlocked(false)
      setFormData(initialForm)
      setError(null)
      setSubmitting(false)
    }, 250)
  }, [])

  // Lock body scroll and enable Escape-to-close while the modal is open.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeModal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError(t('invalidEmail'))
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/factsheet-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || t('errorMessage'))
      }

      setUnlocked(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorMessage'))
    } finally {
      setSubmitting(false)
    }
  }

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

              <div className='mt-4 flex justify-center lg:justify-start'>
                <Button
                  onClick={openModal}
                  className='text-[#252525] px-8 py-5 md:px-10 md:py-6 w-fit font-bold rounded-[10px] cursor-pointer text-sm sm:text-base md:text-lg'
                >
                  {t('downloadButton')}
                </Button>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className='absolute inset-0 bg-black/60 backdrop-blur-sm'
              onClick={closeModal}
              aria-hidden='true'
            />

            <motion.div
              className='relative z-10 my-auto max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-8'
              role='dialog'
              aria-modal='true'
              aria-labelledby='factsheet-modal-title'
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button
                type='button'
                onClick={closeModal}
                className='absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-700 cursor-pointer'
                aria-label={t('close')}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              {unlocked ? (
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col items-center gap-3 text-center'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-green-100'>
                      <svg
                        className='h-7 w-7 text-green-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>
                    </div>
                    <h3
                      id='factsheet-modal-title'
                      className='text-xl font-bold text-[#252525]'
                    >
                      {t('successTitle')}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {t('successMessage')}
                    </p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {FACTSHEETS.map(file => (
                      <a
                        key={file.key}
                        href={file.href}
                        download={file.fileName}
                        className='flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:border-[#EABF49] hover:bg-[#EABF49]/10'
                      >
                        <span className='flex items-center gap-3'>
                          <span className='flex h-9 w-9 items-center justify-center rounded-md bg-[#EABF49] text-xs font-bold text-[#252525] uppercase'>
                            {file.key}
                          </span>
                          <span className='text-sm font-medium text-[#252525]'>
                            {file.key === 'en'
                              ? t('downloadEn')
                              : t('downloadDe')}
                          </span>
                        </span>
                        <svg
                          className='h-5 w-5 text-[#252525]'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 pr-8'>
                    <h3
                      id='factsheet-modal-title'
                      className='text-xl font-bold text-[#252525]'
                    >
                      {t('modalTitle')}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {t('modalDescription')}
                    </p>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1'>
                      <label
                        htmlFor='firstName'
                        className='text-sm font-medium text-gray-700'
                      >
                        {t('firstName')}
                      </label>
                      <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t('firstNamePlaceholder')}
                        required
                        disabled={submitting}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EABF49]'
                      />
                    </div>

                    <div className='flex flex-col gap-1'>
                      <label
                        htmlFor='lastName'
                        className='text-sm font-medium text-gray-700'
                      >
                        {t('lastName')}
                      </label>
                      <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t('lastNamePlaceholder')}
                        required
                        disabled={submitting}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EABF49]'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium text-gray-700'
                    >
                      {t('email')}
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('emailPlaceholder')}
                      required
                      disabled={submitting}
                      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EABF49]'
                    />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label
                      htmlFor='phone'
                      className='text-sm font-medium text-gray-700'
                    >
                      {t('phone')}
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('phonePlaceholder')}
                      required
                      disabled={submitting}
                      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EABF49]'
                    />
                  </div>

                  {error && (
                    <div className='rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700'>
                      {error}
                    </div>
                  )}

                  <Button
                    type='submit'
                    disabled={submitting}
                    className={`w-full font-bold py-5 rounded-[10px] cursor-pointer text-[#252525] ${
                      submitting ? 'bg-gray-400 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting ? t('submitting') : t('submit')}
                  </Button>

                  <p className='text-center text-xs text-gray-400'>
                    {t('privacyNote')}
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FactsheetSection
