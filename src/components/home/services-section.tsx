'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceButtonsProps {
  services?: string[]
  onClick?: (service: string) => void
  activeService?: string | null
  className?: string
}

const ServiceButtons: React.FC<ServiceButtonsProps> = ({
  services = [
    'Insurance',
    'Health Care Management',
    'Residency Planning',
    'Wealth Planning',
    'Bespoke Services',
    'Real Estate Services',
    'Legal & Tax Advice',
    'See More',
  ],
  onClick = service => console.log(`Selected: ${service}`),
  activeService = null,
  className = '',
}) => {
  const [selected, setSelected] = useState<string | null>(activeService)

  const handleClick = (service: string): void => {
    setSelected(service === selected ? null : service)
    onClick(service)
  }

  return (
    <div className={`flex flex-wrap gap-2 md:gap-3 justify-start ${className}`}>
      {services.map((service, index) => (
        <motion.button
          key={service}
          onClick={() => handleClick(service)}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
            bg-yellow-400 hover:bg-yellow-500 text-white shadow-sm hover:shadow
          `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {service}
        </motion.button>
      ))}
    </div>
  )
}

const ServicesSection: React.FC = () => {
  const handleServiceClick = (service: string): void => {
    console.log(`Selected service: ${service}`)
    // Handle service selection
  }
  return (
    <section className='max-w-7xl mx-auto px-4 md:px-6 py-8'>
      <div className='border-t border-black pt-12'>
        {/* Services Section */}
        <motion.h2
          className='text-4xl max-lg:text-2xl font-bold text-gray-800 mb-8 max-lg:mb-4 text-left sm:text-left'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Core Services
        </motion.h2>

        <motion.p
          className='text-gray-600 text-sm sm:text-base text-left sm:text-left mb-8 max-lg:mb-4 '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At SLMC, we understand that managing personal and financial matters
          requires a truly holistic approach. We provide a comprehensive suite
          of premium services—from insurance and healthcare management to
          residency planning and wealth planning—designed to offer you peace of
          mind at every stage. Our goal is to empower you with the insights
          needed to make confident, well-informed decisions, no matter how
          complex your situation.
        </motion.p>

        <ServiceButtons
          onClick={handleServiceClick}
          className='mb-6 max-lg:mb-8'
        />

        <Image
          src='/images/core-services.png'
          alt='Professional handshake'
          width={1200}
          height={500}
          className='w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg'
        />
      </div>
    </section>
  )
}

export default ServicesSection
