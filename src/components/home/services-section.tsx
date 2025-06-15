'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

interface ServiceButtonsProps {
  onClick?: (service: string) => void
  activeService?: string | null
  className?: string
}

const ServiceButtons: React.FC<ServiceButtonsProps> = ({
  onClick = service => console.log(`Selected: ${service}`),
  activeService = null,
  className = '',
}) => {
  const t = useTranslations('home.services.items')
  const viewAll = useTranslations('home.services')('viewAll')
  const [selected, setSelected] = useState<string | null>(activeService)

  // Get all services from translations
  const services = [
    t('1.title'),
    t('2.title'),
    t('3.title'),
    t('4.title'),
    t('5.title'),
    t('6.title'),
    viewAll,
  ]

  const handleClick = (service: string): void => {
    setSelected(service === selected ? null : service)
    onClick(service)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-start sm:justify-center md:justify-start ${className}`}
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {services.map(service => (
        <motion.div
          key={service}
          variants={buttonVariants}
          whileHover={{
            transition: { type: 'spring', stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={'default'}
            onClick={() => handleClick(service)}
            className={`text-[#252525] px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-16 2xl:py-6 w-fit font-bold rounded-[10px] cursor-pointer text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap`}
          >
            {service}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}

const ServicesSection: React.FC = () => {
  const t = useTranslations('home.services')

  const handleServiceClick = (service: string): void => {
    console.log(`Selected service: ${service}`)
    // Handle service selection
  }

  return (
    <section className='relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
      <div className='container mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-8.5'>
        {/* Services Section */}
        <motion.h2
          className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[50px] font-bold text-[#252525] text-center sm:text-center md:text-left leading-tight'
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          {t('title')}
        </motion.h2>

        <motion.p
          className='text-[#252525] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] leading-relaxed text-center sm:text-center md:text-left max-w-none sm:max-w-2xl md:max-w-4xl lg:max-w-full mx-auto md:mx-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: 'spring',
            stiffness: 80,
          }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ServiceButtons onClick={handleServiceClick} />
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
