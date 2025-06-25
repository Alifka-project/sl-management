'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'
import LanguageSwitcher from './language-switcher'
import MobileMenu from './mobile-menu'
import { Link } from '@/i18n/routing'

export default function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const t = useTranslations('menu')

  // Enhanced scroll handler with additional effects
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      // Update scrolled state for styling changes
      setIsScrolled(currentScrollY > 20)

      // Show header when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide header when scrolling down (with larger threshold for mobile)
      else if (currentScrollY > lastScrollY && currentScrollY > (window.innerWidth < 768 ? 80 : 100)) {
        setIsVisible(false)
        setMobileMenuOpen(false) // Close mobile menu when hiding header
      }
      // Show header when scrolling up (with minimum scroll distance)
      else if (currentScrollY < lastScrollY - 5) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledControlHeader = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlHeader()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledControlHeader)

    return () => {
      window.removeEventListener('scroll', throttledControlHeader)
    }
  }, [lastScrollY])

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
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b shadow-lg py-1 max-lg:px-4' 
            : 'bg-white py-2 max-lg:px-4 border-b shadow-sm'
        }`}
      >
        
        {/* Clean diagonal implementation - Desktop only */}
        <div className='absolute inset-0 z-0'>
          {/* Desktop diagonal only */}
          <div 
            className={`absolute top-0 left-0 bg-[#2c2c2c] hidden lg:block transition-all duration-300 ${
              isScrolled ? 'opacity-90' : 'opacity-100'
            }`}
            style={{
              width: '30%',
              height: '120%',
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)'
            }}
          />
        </div>

        <div className='container mx-auto flex justify-between items-center gap-3 relative z-10'>
          {/* Desktop Layout */}
          <div className='hidden lg:flex lg:items-center lg:w-full'>
            {/* Logo positioned in the center of black diagonal area */}
            <div className='w-[30%] flex justify-center items-center'>
              <div className='transform -translate-x-23 translate-y-1.5'>
                <Link href='/' className='flex items-center'>
                  <Image
                    src='/images/logo_with_text.svg'
                    alt='S&L Management Logo'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className={`w-auto transition-all duration-300 ${
                      isScrolled ? 'h-[56px]' : 'h-[64px]'
                    }`}
                    priority
                  />
                </Link>
              </div>
            </div>
            
            {/* Navigation in the white area */}
            <div className='flex-1 flex justify-end'>
              <nav className='flex items-center space-x-4'>
                {navItems.map(item => {
                  const isActive = isActiveLink(item.href, pathname)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-bold hover:text-[#EABF49] transition-all duration-200 text-base max-2xl:max-w-[150px] text-center break-words ${
                        isActive ? 'text-[#EABF49] font-extrabold' : 'text-gray-700'
                      } ${
                        isScrolled ? 'hover:scale-105' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}

                <LanguageSwitcher />

                <Link href='/contact-us'>
                  <Button className={`bg-[#EABF49] cursor-pointer text-[#252525] rounded-full font-bold transition-all duration-200 ${
                    isScrolled ? 'hover:scale-105 shadow-md' : ''
                  }`}>
                    {t('contactUs')}
                  </Button>
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile Layout - Flexbox with centered logo */}
          <div className='flex lg:hidden items-center justify-between w-full px-8'>
            {/* Left side - Language switcher */}
            <div className='flex items-center w-[140px]'>
              <LanguageSwitcher />
            </div>
            
            {/* Centered Logo */}
            <div className='flex-1 flex justify-center'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/images/logo_with_text.svg'
                  alt='S&L Management Logo'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className={`w-auto transition-all duration-300 ${
                    isScrolled 
                      ? 'h-[70px] sm:h-[54px]' 
                      : 'h-[80px] sm:h-[62px]'
                  }`}
                  priority
                />
              </Link>
            </div>
            
            {/* Right side - Menu button only */}
            <div className='flex items-center w-[140px] justify-end'>
              <Button
                variant='outline'
                size='sm'
                className={`text-[#2c2c2c] bg-white border-[#2c2c2c] hover:bg-gray-50 transition-all duration-200 ${
                  isScrolled ? 'hover:scale-105 shadow-sm' : ''
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Fixed z-index */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="relative z-[60]">
              <MobileMenu
                navItems={navItems}
                pathname={pathname}
                onClose={() => setMobileMenuOpen(false)}
              />
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Dynamic Header Spacer - Adjusts based on scroll state */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'h-[78px] lg:h-[78px] sm:h-[76px]' 
          : 'h-[88px] lg:h-[88px] sm:h-[86px]'
      }`}></div>
    </>
  )
}
