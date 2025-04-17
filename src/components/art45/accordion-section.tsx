'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

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

const Art45Accordion = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8'>
      {/* Hero Image */}
      <div className='relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden mb-4'>
        <Image
          src='/images/content-art-45.png'
          alt='content-art-45'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Title */}
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>ART45 VAG</h1>

      {/* Accordion Items */}
      <div className='divide-y divide-gray-200'>
        <AccordionItem
          title='INFORMATION ART. 45 VAG ON INSURANCE BROKERAGE SERVICES.'
          defaultOpen={false}
        >
          <p>
            Detailed information about Art. 45 VAG regulations on insurance
            brokerage services would be displayed here.
          </p>
        </AccordionItem>

        <AccordionItem title='INFORMATION ABOUT THE SERVICES'>
          <p>
            The customer commences in the sense of a business relationship based
            on mutual trust through a separate broker agreement with the ongoing
            support of its insurance companies. The name hereafter `&quot;`The
            Information listed forms an integral part of a broker agreement,
            which only may be concluded in writing, and which the customer
            concludes with SLMC. Through this, SLMC is commissioned to negotiate
            with insurers on behalf of the customer, obtain offers and, after
            approval by the customer, to place and manage the insurance
            policies. SLMC advises and assists the customer in all insurance
            matters that form part of the broker agreement; e. h. especially in
            risk and insurance analysis, when formulating a risk and insurance
            policy, in concepts for risk evaluation and assessment, in creating
            a risk cost calculation, in the collaboration with insurance
            companies and Support and assistance in the event of a claim with
            insurers. The information from Customer advisors and specialists
            from SLMC are based on many years of experience as an insurance
            broker. You have legal Tax advice from e.g. E.g. lawyers, banks, tax
            experts or any other Authorities cannot be replaced in specific
            individual cases.
          </p>
        </AccordionItem>

        <AccordionItem title='COMPENSATION INFORMATION'>
          <p>
            Details about compensation structures and payment information would
            be displayed here.
          </p>
        </AccordionItem>

        <AccordionItem title='INFORMATION ON COOPERATION WITH INSURERS'>
          <p>
            Information regarding how cooperation with insurance providers works
            would be displayed here.
          </p>
        </AccordionItem>

        <AccordionItem title='INFORMATION ON PRIVACY, DATA SECURITY AND CONFIDENTIALITY'>
          <p>
            Details about privacy policies, data security practices and
            confidentiality agreements would be displayed here.
          </p>
        </AccordionItem>

        <AccordionItem title='INFORMATION ON TRAINING AND FURTHER TRAINING OF EMPLOYEES'>
          <p>
            Information about employee training programs and continuing
            education would be displayed here.
          </p>
        </AccordionItem>

        <AccordionItem title='LIABILITY INFORMATION'>
          <p>
            Details about liability policies and related information would be
            displayed here.
          </p>
        </AccordionItem>
      </div>
    </div>
  )
}

export default Art45Accordion
