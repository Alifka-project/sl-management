/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const ContactUs = () => {
  const t = useTranslations('contactUs')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))

    try {
      // Send form data to your API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        handleServerResponse(true, t('successMessage'))
      } else {
        handleServerResponse(false, data.error || t('errorMessage'))
      }
    } catch (error) {
      handleServerResponse(false, t('errorMessage'))
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8 flex flex-col md:flex-row rounded-lg overflow-hidden'>
      {/* Left side - Google Maps */}
      <div className='w-full md:w-1/2 relative h-[500px] md:h-auto'>
        <div className='absolute inset-0 w-full h-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.272959879993!2d8.858031200000001!3d47.1916697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab7d2db599933%3A0x7607ff2911bc6a5b!2sFeldstrasse%2023%2C%208853%20Lachen%2C%20Switzerland!5e0!3m2!1sen!2sid!4v1745656283224!5m2!1sen!2sid'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            draggable={false}
          ></iframe>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className='w-full md:w-1/2 p-8 bg-white'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>{t('title')}</h2>

        <p className='mb-6 text-gray-600'>
          {t('subTitle')}
          <a
            href='mailto:info@slmc.ch'
            className='text-yellow-500 hover:underline'
          >
            info@slmc.ch
          </a>
          .
        </p>

        {status.submitted ? (
          <div className='bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6'>
            <p>{status.info.msg}</p>
            <button
              onClick={() =>
                setStatus({
                  submitted: false,
                  submitting: false,
                  info: { error: false, msg: null },
                })
              }
              className='mt-3 bg-green-100 text-green-800 px-3 py-1 rounded text-sm'
            >
              {t('sendAnother')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('form.1.title')}
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t('form.1.field')}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                required
                disabled={status.submitting}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('form.2.title')}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder={t('form.2.field')}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                required
                disabled={status.submitting}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('form.3.title')}
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('form.3.field')}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                required
                disabled={status.submitting}
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('form.4.title')}
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.4.field')}
                rows={6}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                required
                disabled={status.submitting}
              ></textarea>
            </div>

            {status.info.error && (
              <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6'>
                <p>{status.info.msg}</p>
              </div>
            )}

            <Button
              type='submit'
              disabled={status.submitting}
              className={`w-full font-bold py-3 px-4 rounded transition duration-300 cursor-pointer ${
                status.submitting && 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {t('button')}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactUs
