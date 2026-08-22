'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { isValidEmail } from '@/lib/validation'
import type { DownloadAsset } from '@/lib/downloads'
import AssetLinkList from './asset-link-list'

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

interface FieldProps {
  name: keyof FormData
  type: string
  label: string
  placeholder: string
  value: string
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Field: React.FC<FieldProps> = ({
  name,
  type,
  label,
  placeholder,
  value,
  disabled,
  onChange,
}) => (
  <div className='flex flex-col gap-1'>
    <label htmlFor={name} className='text-sm font-medium text-gray-700'>
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      disabled={disabled}
      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EABF49]'
    />
  </div>
)

interface LeadGateModalProps {
  isOpen: boolean
  onClose: () => void
  /** Files revealed once the visitor has left their details. */
  assets: DownloadAsset[]
  /** Document name included in the notification email, so it is clear what was requested. */
  documentLabel: string
}

/**
 * Contact form that unlocks one or more downloads. Used by the homepage
 * factsheet banner and by every gated document on the downloads page.
 */
const LeadGateModal: React.FC<LeadGateModalProps> = ({
  isOpen,
  onClose,
  assets,
  documentLabel,
}) => {
  const t = useTranslations('downloads.leadForm')

  const [unlocked, setUnlocked] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const closeModal = useCallback(() => {
    onClose()
    // Reset back to the form state for the next visitor after the close animation.
    setTimeout(() => {
      setUnlocked(false)
      setFormData(initialForm)
      setError(null)
      setSubmitting(false)
    }, 250)
  }, [onClose])

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

    if (!isValidEmail(formData.email)) {
      setError(t('invalidEmail'))
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/factsheet-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, document: documentLabel }),
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
            aria-labelledby='lead-gate-modal-title'
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
                    id='lead-gate-modal-title'
                    className='text-xl font-bold text-[#252525]'
                  >
                    {t('successTitle')}
                  </h3>
                  <p className='text-sm text-gray-600'>{t('successMessage')}</p>
                </div>

                <AssetLinkList assets={assets} />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1 pr-8'>
                  <h3
                    id='lead-gate-modal-title'
                    className='text-xl font-bold text-[#252525]'
                  >
                    {t('modalTitle')}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {t('modalDescription', { document: documentLabel })}
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <Field
                    name='firstName'
                    type='text'
                    label={t('firstName')}
                    placeholder={t('firstNamePlaceholder')}
                    value={formData.firstName}
                    disabled={submitting}
                    onChange={handleChange}
                  />
                  <Field
                    name='lastName'
                    type='text'
                    label={t('lastName')}
                    placeholder={t('lastNamePlaceholder')}
                    value={formData.lastName}
                    disabled={submitting}
                    onChange={handleChange}
                  />
                </div>

                <Field
                  name='email'
                  type='email'
                  label={t('email')}
                  placeholder={t('emailPlaceholder')}
                  value={formData.email}
                  disabled={submitting}
                  onChange={handleChange}
                />

                <Field
                  name='phone'
                  type='tel'
                  label={t('phone')}
                  placeholder={t('phonePlaceholder')}
                  value={formData.phone}
                  disabled={submitting}
                  onChange={handleChange}
                />

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
  )
}

export default LeadGateModal
