// src/components/family-service/FamilyServicesPage.tsx
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Service card component for each service
interface ServiceCardProps {
  number: string
  title: string
  description: string
  image: string
  tags: string[]
}

const ServiceCard = ({
  number,
  title,
  description,
  image,
  tags,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeIn}
      className='mb-16 max-lg:mb-24'
    >
      <div className='relative w-full h-64 max-lg:h-48 rounded-xl overflow-hidden mb-8'>
        <Image src={image} alt={title} fill className='object-cover' priority />
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='lg:w-1/4'>
          <h2 className='text-8xl max-lg:text-6xl font-bold text-gray-800 mb-4'>
            {number}
          </h2>
        </div>

        <div className='lg:w-3/4'>
          <h3 className='text-4xl max-lg:text-3xl font-bold text-gray-800 mb-4 max-lg:mb-3'>
            {title}
          </h3>
          <p className='text-lg max-lg:text-base text-gray-700 mb-6 max-lg:mb-4'>
            {description}
          </p>

          <div className='flex flex-wrap gap-3 mb-6 max-lg:mb-4'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='px-4 py-2 max-lg:px-3 max-lg:py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm max-lg:text-xs border border-yellow-300'
              >
                {tag}
              </span>
            ))}
          </div>

          <Button className='bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 max-lg:px-6 max-lg:py-4 rounded-full'>
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Main component to display all family services
const FamilyServicesPage = () => {
  const services = [
    {
      number: '01',
      title: 'Insurance',
      description:
        'Safeguard your assets and loved ones with our comprehensive insurance solutions. Our expert advisors conduct thorough reviews and offer personalized strategies to cover all aspects of your life.',
      image: '/images/content-1.png',
      tags: [
        'Comprehensive Insurance Review',
        'Tailored Insurance Solutions',
        'Risk Management',
        'Strategic Planning',
        'Claims Management',
        'Regular Reviews and Adjustments',
        'Compliance and Regulation',
      ],
    },
    {
      number: '02',
      title: 'Health Care Management',
      description:
        'Access premier healthcare services worldwide with our comprehensive health management solutions. Our team coordinates with leading medical professionals to ensure you receive the best care tailored to your specific needs.',
      image: '/images/content-2.png',
      tags: [
        'Global Medical Access',
        'Preventive Care Programs',
        'Medical Concierge Services',
        'Telehealth Solutions',
        'Emergency Medical Support',
        'Health Records Management',
        'Wellness Planning',
      ],
    },
    {
      number: '03',
      title: 'Residency Planning',
      description:
        'Navigate global mobility with confidence through our expert residency planning services. We provide tailored guidance on citizenship programs, tax implications, and seamless transitions for you and your family.',
      image: '/images/content-3.png',
      tags: [
        'Global Citizenship Programs',
        'Tax Residency Consultation',
        'Relocation Services',
        'Immigration Support',
        'Multi-Jurisdiction Planning',
        'Family Relocation',
        'Education Transitions',
      ],
    },
    {
      number: '04',
      title: 'Wealth Planning',
      description:
        'Preserve and grow your wealth with our strategic financial planning services. Our wealth management experts develop customized strategies to optimize your assets across generations while aligning with your long-term goals.',
      image: '/images/content-4.png',
      tags: [
        'Asset Allocation',
        'Estate Planning',
        'Investment Strategy',
        'Retirement Planning',
        'Tax Optimization',
        'Philanthropic Advisory',
        'Wealth Transfer',
      ],
    },
    {
      number: '05',
      title: 'Bespoke Services',
      description:
        'Experience truly personalized solutions tailored to your unique lifestyle requirements. Our bespoke services adapt to your evolving needs, providing exclusive support for even the most distinctive requests.',
      image: '/images/content-5.png',
      tags: [
        'Concierge Services',
        'Lifestyle Management',
        'Private Events',
        'Art Advisory',
        'Luxury Acquisitions',
        'Travel Planning',
        'Personal Security',
      ],
    },
    {
      number: '06',
      title: 'Real Estate Services',
      description:
        'Maximize your real estate investments with our comprehensive property management and advisory services. From acquisition to management, we handle all aspects of your global real estate portfolio.',
      image: '/images/content-6.png',
      tags: [
        'Property Acquisition',
        'Portfolio Management',
        'Market Analysis',
        'Development Consulting',
        'Property Maintenance',
        'Rental Optimization',
        'Global Real Estate Strategy',
      ],
    },
    {
      number: '07',
      title: 'Legal & Tax Advice',
      description:
        'Optimize your global position with specialized legal and tax consultation services. Our network of experts provides strategic guidance to navigate complex regulations while maximizing efficiency across jurisdictions.',
      image: '/images/content-7.png',
      tags: [
        'International Tax Planning',
        'Compliance Monitoring',
        'Cross-Border Legal Support',
        'Corporate Structuring',
        'Trust Formation',
        'Regulatory Advisory',
        'Tax Efficiency Strategy',
      ],
    },
  ]

  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8'>
      <motion.h1
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-5xl max-lg:text-4xl font-bold text-gray-800 mb-12 max-lg:mb-8 text-center'
      >
        Family Services
      </motion.h1>

      <motion.p
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-xl max-lg:text-lg text-gray-700 mb-16 max-lg:mb-12 text-center max-w-4xl mx-auto'
      >
        At SLMC, we offer a comprehensive suite of premium services tailored to
        the unique needs of ultra-high-net-worth families. Our holistic approach
        ensures every aspect of your lifestyle and wealth is expertly managed.
      </motion.p>

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          image={service.image}
          tags={service.tags}
        />
      ))}
    </div>
  )
}

export default FamilyServicesPage
