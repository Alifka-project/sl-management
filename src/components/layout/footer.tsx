/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useScrollToHash } from '@/lib/utils'

export default function Footer() {
  const t = useTranslations('footer')
  const { navigateToHash } = useScrollToHash()

  // Handle service section navigation with smooth scrolling
  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    hash: string,
  ) => {
    e.preventDefault()
    navigateToHash(path, hash)
  }

  return (
    <footer className='bg-[#252525] max-lg:px-4 text-white py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0'>
          {/* Logo and Description */}
          <div className='md:w-[20%] md:mx-4'>
            <div className='flex flex-col space-y-2'>
              {/* Fixed logo with responsive sizing and sharp rendering */}
              <div className='flex items-center space-x-2'>
                <Image
                  src='/images/logo_only.svg'
                  alt='S&L Management Logo'
                  width={45}
                  height={45}
                  className='w-8 h-8 sm:w-10 sm:h-10 md:w-[45px] md:h-[45px] object-contain'
                  style={{
                    imageRendering: 'crisp-edges',
                  }}
                  priority
                />
              </div>
              <div className='mt-2'>
                <Image
                  src='/images/logo_text.svg'
                  alt='S&L Management Logo Text'
                  width={200}
                  height={90}
                  className='w-40 h-auto sm:w-44 md:w-[200px] object-contain'
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                  priority
                />
              </div>
            </div>
            <p className='text-gray-400 mt-4 text-sm sm:text-base'>
              Guiding your path with tailored solutions and unwavering support, ensuring your peace of mind throughout your journey towards success.
            </p>
          </div>

          {/* Services */}
          <div className='md:w-[18%] md:mx-6'>
            <h4 className='text-lg font-semibold mb-4 text-white'>SERVICES</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/services#insurance'
                  onClick={e => handleServiceClick(e, '/services', 'insurance')}
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base'
                >
                  Insurance
                </a>
              </li>
              <li>
                <a
                  href='/services#relocation'
                  onClick={e => handleServiceClick(e, '/services', 'relocation')}
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base'
                >
                  Relocation Services
                </a>
              </li>
              <li>
                <a
                  href='/services#wealth-planning'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'wealth-planning')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base'
                >
                  Wealth Planning
                </a>
              </li>
              <li>
                <a
                  href='/services#tax-legal'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'tax-legal')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base'
                >
                  Tax & Legal Advice
                </a>
              </li>
              <li>
                <a
                  href='/services#real-estate'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'real-estate')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base'
                >
                  Real Estate Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='md:w-[20%] md:mx-6'>
            <h4 className='text-lg font-semibold mb-4 text-white'>QUICK LINKS</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Family Services
                </Link>
              </li>
              <li>
                <Link
                  href='/news'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className='md:w-[22%] md:mx-6'>
            <h4 className='text-lg font-semibold mb-4 text-white'>GET IN TOUCH</h4>
            <div className='space-y-2'>
              <p className='text-gray-400 text-sm sm:text-base'>
                <span className='text-white'>Email</span> : info@slmc.ch
              </p>
              <p className='text-gray-400 text-sm sm:text-base'>
                <span className='text-white'>Phone</span> : +41 78 813 30 93 (Switzerland)
              </p>
              <p className='text-gray-400 text-sm sm:text-base'>
                <span className='text-white'>Phone</span> : +86 134 887 98 276 (Beijing, China)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm sm:text-base'>
            © 2025 S&L Management and Consulting LLC. All rights reserved.
          </p>
          
          {/* LinkedIn Icon */}
          <div className='mt-4 md:mt-0'>
            <a
              href='https://linkedin.com/company/slmc'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <span className='sr-only'>LinkedIn</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-linkedin w-5 h-5 sm:w-6 sm:h-6'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect width='4' height='12' x='2' y='9' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
