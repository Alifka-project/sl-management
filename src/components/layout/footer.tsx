'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <Image
              src='/images/logo.svg'
              alt='S&L Management Logo'
              width={120}
              height={40}
              className='mb-4 invert'
            />
            <p className='text-gray-400'>{t('description')}</p>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('services')}
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('insurance')}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('wealthPlanning')}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('residencyPlanning')}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('taxAdvice')}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('realEstate')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('quickLinks')}
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('familyServices')}
                </Link>
              </li>
              <li>
                <Link
                  href='/news'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('contact')}
            </h4>
            <address className='not-italic'>
              <p className='mb-2 text-gray-400'>Canton Schwyz, Switzerland</p>
              <p className='mb-2'>
                <a
                  href='tel:+41788133009'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  +41 78 813 30 09
                </a>
              </p>
              <p>
                <a
                  href='mailto:info@slmc.ch'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  info@slmc.ch
                </a>
              </p>
            </address>

            <div className='mt-6'>
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
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect width='4' height='12' x='2' y='9' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} S&L Management and Consulting LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
