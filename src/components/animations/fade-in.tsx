'use client'

import React from 'react'
import { motion } from 'framer-motion'

type SimpleAnimationProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  type?: 'fade' | 'slide' | 'scale' | 'bounce' | 'elastic'
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  stagger?: boolean
  hover?: boolean
}

export default function SimpleAnimation({
  children,
  delay = 0,
  className = '',
  type = 'slide',
  direction = 'up',
  once = false,
  stagger = false,
  hover = false,
}: SimpleAnimationProps) {
  
  // Animation variants
  const getVariants = () => {
    const distance = 50
    
    const base = {
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      slide: {
        hidden: { 
          opacity: 0,
          x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
          y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
        },
        visible: { opacity: 1, x: 0, y: 0 }
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      },
      bounce: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { type: "spring", damping: 10, stiffness: 400 }
        }
      },
      elastic: {
        hidden: { opacity: 0, scale: 0 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { type: "spring", damping: 8, stiffness: 200 }
        }
      }
    }
    
    return base[type]
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  }

  const hoverEffect = hover ? {
    whileHover: { 
      scale: 1.02, 
      transition: { duration: 0.2 } 
    }
  } : {}

  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        variants={containerVariants}
        className={className}
        {...hoverEffect}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={getVariants()}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={getVariants()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      {...hoverEffect}
    >
      {children}
    </motion.div>
  )
}
