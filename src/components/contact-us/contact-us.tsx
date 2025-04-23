'use client'

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    })
    alert('Message sent successfully!')
  }
  const t = useTranslations('contactUs')

  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8 flex flex-col md:flex-row rounded-lg overflow-hidden'>
      {/* Left side - Google Maps */}
      <div className='w-full md:w-1/2 relative h-[500px] md:h-auto'>
        {/* Google Maps iframe */}
        <div className='absolute inset-0 w-full h-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.2775067898386!2d8.8!3d47.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEyJzAwLjAiTiA4wrA0OCcwMC4wIkU!5e0!3m2!1sen!2sch!4v1651234567890!5m2!1sen!2sch'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            // Disable user interactions
            draggable={false}
          ></iframe>
        </div>

        {/* Map overlay with location details */}
        {/* <div className='absolute top-4 left-4 bg-white p-4 rounded-md shadow-md max-w-[240px]'>
          <div className='font-bold'>Feldstrasse</div>
          <div className='text-sm text-gray-600'>8853 Lachen, Schweiz</div>
          <div className='flex items-center mt-2'>
            <div className='flex text-yellow-400'>★★★★★</div>
            <span className='ml-2 text-sm text-gray-600'>4.1</span>
          </div>
          <div className='mt-2'>
            <a
              href='https://maps.google.com/?q=Feldstrasse,8853+Lachen,Schweiz'
              target='_blank'
              className='text-blue-500 hover:text-blue-700 text-sm flex items-center'
            >
              <span className='mr-1'>View larger map</span>
            </a>
          </div>
          <div className='mt-2'>
            <a
              href='https://maps.google.com/directions?q=Feldstrasse,8853+Lachen,Schweiz'
              target='_blank'
              className='text-cyan-500 hover:text-cyan-700 flex items-center text-sm font-medium'
            >
              <svg
                className='w-4 h-4 mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Directions
            </a>
          </div>
        </div> */}
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
              placeholder='Enter your fullname...'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
              required
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
              placeholder='Enter your email...'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
              required
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
              placeholder='Enter your subject...'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
              required
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
              placeholder='Enter your message...'
              rows={6}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded transition duration-300'
          >
            {t('button')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
