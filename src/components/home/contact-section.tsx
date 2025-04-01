'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'

export default function ContactSection() {
  const t = useTranslations('home')
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formState)
    // Reset form
    setFormState({ firstName: '', lastName: '', email: '', message: '' })
    // Show success message
    alert('Thank you for your message. We will contact you shortly.')
  }

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row gap-12'>
          <FadeIn className='md:w-1/2' direction='left'>
            <h2 className='text-3xl font-bold mb-6'>{t('contact.title')}</h2>
            <p className='text-gray-700 mb-8'>{t('contact.description')}</p>

            <div className='space-y-4'>
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold'>{t('contact.switzerland')}</h4>
                  <p className='text-gray-600'>Canton Schwyz, Switzerland</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold'>{t('contact.phone')}</h4>
                  <p className='text-gray-600'>+41 78 813 30 09</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2' />
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold'>{t('contact.email')}</h4>
                  <p className='text-gray-600'>info@slmc.ch</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className='md:w-1/2' direction='right' delay={0.2}>
            <div className='bg-gray-50 rounded-lg p-8'>
              <h3 className='text-2xl font-semibold mb-6'>
                {t('contact.getInTouch')}
              </h3>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      {t('contact.form.firstName')}
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      {t('contact.form.lastName')}
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name='message'
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  ></textarea>
                </div>
                <Button
                  type='submit'
                  className='w-full bg-yellow-500 hover:bg-yellow-600 text-white'
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
