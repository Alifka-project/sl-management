'use client'

import React from 'react'
import { motion } from 'framer-motion'

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  direction = 'up',
  distance = 20,
  once = true,
}: FadeInProps) {
  // Set initial animation values based on direction
  let initial: { opacity: number; x?: number; y?: number } = { opacity: 0 }

  if (direction === 'up') {
    initial = { ...initial, y: distance }
  } else if (direction === 'down') {
    initial = { ...initial, y: -distance }
  } else if (direction === 'left') {
    initial = { ...initial, x: distance }
  } else if (direction === 'right') {
    initial = { ...initial, x: -distance }
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
