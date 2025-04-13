'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface WhyChooseCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className='border border-yellow-300 rounded-lg p-6 h-full'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      <div className='mb-4'>
        {/* Gray square background with rounded corners for icon */}
        <div className='bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center'>
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className='text-gray-700'
          />
        </div>
      </div>
      <h3 className='text-xl font-bold mb-2 text-left'>{title}</h3>
      <p className='text-gray-700 text-sm leading-relaxed text-left'>
        {description}
      </p>
    </motion.div>
  )
}

interface WhyChooseItem {
  icon: string
  title: string
  description: string
}

const WhyChooseSection: React.FC = () => {
  const whyChooseItems: WhyChooseItem[] = [
    {
      icon: '/images/medal.svg',
      title: 'Expertise',
      description:
        'Our team of professionals brings unparalleled expertise in their respective fields, ensuring you receive the highest quality service.',
    },
    {
      icon: '/images/friendship.svg',
      title: 'Trusted Partnerships',
      description:
        'We collaborate with trusted partners to deliver specialized services, ensuring compliance and reliability in every aspect of your experience.',
    },
    {
      icon: '/images/gift.svg',
      title: 'Client-Centric Approach',
      description:
        'Your unique needs and aspirations are at the forefront of our service delivery. We are committed to building long-term relationships based on trust and understanding.',
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-4 py-8'>
      <div className='border-t border-black pt-12 mb-8'>
        <motion.h2
          className='text-4xl font-bold text-gray-800 text-center mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why You Should Choose SLMC
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {whyChooseItems.map((item, index) => (
            <WhyChooseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
