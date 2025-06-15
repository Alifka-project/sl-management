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
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex flex-col space-y-2'>
              <Image
                src='/images/logo_only.svg'
                alt='S&L Management Logo'
                width={45}
                height={45}
              />
              <Image
                src='/images/logo_text.svg'
                alt='S&L Management Logo'
                width={200}
                height={90}
              />
            </div>
            <p className='text-gray-400 mt-4'>{t('description')}</p>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('services')}</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/services#insurance'
                  onClick={e => handleServiceClick(e, '/services', 'insurance')}
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {t('insurance')}
                </a>
              </li>
              <li>
                <a
                  href='/services#wealth-planning'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'wealth-planning')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {t('wealthPlanning')}
                </a>
              </li>
              <li>
                <a
                  href='/services#residency-planning'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'residency-planning')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {t('residencyPlanning')}
                </a>
              </li>
              <li>
                <a
                  href='/services#tax-planning'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'tax-planning')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {t('taxAdvice')}
                </a>
              </li>
              <li>
                <a
                  href='/services#real-estate'
                  onClick={e =>
                    handleServiceClick(e, '/services', 'real-estate')
                  }
                  className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {t('realEstate')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('quickLinks')}</h4>
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
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('contact')}</h4>
            <address className='not-italic'>
              {/* <p className='mb-2 text-gray-400'>{t('address')}</p> */}

              <p className='mb-2'>
                <a
                  href='mailto:info@slmc.ch'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Email: info@slmc.ch
                </a>
              </p>
              <p className='mb-2'>
                <button
                  type='button'
                  className='text-gray-400 hover:text-white transition-colors'
                  onClick={() => navigator.clipboard.writeText('+41788133009')}
                >
                  Phone: +41 78 728 09 33 (Switzerland)
                  <span className='sr-only'>Click to copy phone number</span>
                </button>
              </p>
              <p>
                <button
                  type='button'
                  className='text-gray-400 hover:text-white transition-colors'
                  onClick={() =>
                    navigator.clipboard.writeText('+8613488798276')
                  }
                >
                  Phone: +86 134 887 98 276 (Beijing, China)
                  <span className='sr-only'>Click to copy phone number</span>
                </button>
              </p>
            </address>

            <div className='mt-6'>
              <a
                href='https://linkedin.com/company/slmc'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>{t('socialLinkedIn')}</span>
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
