'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'
import LanguageSwitcher from './language-switcher'
import MobileMenu from './mobile-menu'
import { Link } from '@/i18n/routing'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('menu')

  // Function to check if a nav item is active
  const isActiveLink = (href: string, currentPath: string) => {
    // Remove locale prefix from pathname if it exists
    const cleanPath = currentPath.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/'

    // For home page, check exact match
    if (href === '/') {
      return cleanPath === '/' || cleanPath === ''
    }

    // For other pages, check if the path starts with the href
    return cleanPath === href || cleanPath.startsWith(href + '/')
  }

  // Define navigation items
  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('news'), href: '/news' },
    { name: 'ART45 VAG', href: '/art-45' },
  ]

  return (
    <header className='bg-white py-4 max-lg:px-4 border-b shadow-sm sticky top-0 z-50 overflow-hidden before:bg-[#252525] before:absolute before:inset-0 before:-z-10 before:w-1/3 before:top-[-150%] before:h-[315px] before:rotate-10 max-xl:before:w-[30%] max-lg:before:hidden'>
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
        <nav className='hidden lg:flex items-center space-x-4'>
          {navItems.map(item => {
            const isActive = isActiveLink(item.href, pathname)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-bold hover:text-[#EABF49] transition-colors text-sm max-2xl:max-w-[130px] text-center break-words ${
                  isActive ? 'text-[#EABF49] font-extrabold' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          <LanguageSwitcher />

          <Link href='/contact-us'>
            <Button className='bg-[#EABF49] cursor-pointer text-[#252525] rounded-full font-bold'>
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
