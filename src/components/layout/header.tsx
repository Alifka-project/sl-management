'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'
import LanguageSwitcher from './language-switcher'
import MobileMenu from './mobile-menu'
import { Link } from '@/i18n/routing' // Import the Link from your routing config

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('menu')
  const locale = useLocale()

  // Define navigation items
  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('news'), href: '/news' },
    { name: 'ART45 VAG', href: '/art-45' },
  ]

  return (
    <header className='bg-white py-4 max-lg:px-4 border-b shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center gap-3 relative'>
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
        <nav className='hidden lg:flex items-center space-x-6'>
          {navItems.map(item => {
            // Check if the current path matches this nav item's path
            const isActive =
              pathname.endsWith(item.href) ||
              (item.href === '/' && pathname === `/${locale}`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 font-bold hover:text-[#EABF49] transition-colors text-sm max-w-[130px] break-word ${
                  isActive ? 'font-semibold text-[#EABF49]' : ''
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          <LanguageSwitcher />

          <Link href='/contact-us'>
            <Button className='bg-[#EABF49] hover:bg-yellow-600 text-[#252525] rounded-full font-bold'>
              {t('contactUs')}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center'>
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
