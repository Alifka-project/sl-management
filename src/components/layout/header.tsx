'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'
import LanguageSwitcher from './language-switcher'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('menu')

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('news'), href: '/news' },
    { name: t('contact'), href: '/contact' },
  ]

  return (
    <header className='bg-white py-4 px-6 border-b shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logo_with_text.svg'
              alt='S&L Management Logo'
              width={0}
              height={0}
              sizes='100vw'
              className='w-auto h-[62px]'
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-gray-700 hover:text-yellow-500 transition-colors ${
                pathname === item.href ? 'font-semibold text-yellow-500' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}

          <LanguageSwitcher />

          <Button className='bg-yellow-500 hover:bg-yellow-600 text-white ml-2'>
            {t('contactUs')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <LanguageSwitcher />
          <Button
            variant='ghost'
            className='ml-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            navItems={navItems}
            pathname={pathname}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
