'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function Footer() {
  const t = useTranslations('footer')

  const solutionLinks = [
    { label: t('insurancePensions'), href: '/insurance-pensions' },
    { label: t('familyOffice'), href: '/family-office' },
    { label: t('internationalSolutions'), href: '/international-solutions' },
  ]

  const companyLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('insights'), href: '/insights' },
    { label: t('contact'), href: '/contact-us' },
  ]

  const resourceLinks = [
    { label: t('art45'), href: '/art-45' },
    { label: t('downloads'), href: '/downloads' },
  ]

  return (
    <footer className='bg-[#252525] max-lg:px-4 text-white py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6'>
          {/* Logo and Description */}
          <div className='sm:col-span-2 lg:col-span-3'>
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
            <p className='text-white/80  mt-4 text-sm sm:text-base'>
              {t('description')}
            </p>
          </div>

          {/* Solutions */}
          <div className='lg:col-span-2'>
            <h4 className='text-lg font-semibold mb-4 text-white uppercase tracking-[2px]'>
              {t('solutions')}
            </h4>
            <ul className='space-y-2'>
              {solutionLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-white/80 hover:text-white transition-colors text-sm sm:text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className='lg:col-span-2'>
            <h4 className='text-lg font-semibold mb-4 text-white uppercase tracking-[2px]'>
              {t('quickLinks')}
            </h4>
            <ul className='space-y-2'>
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-white/80 hover:text-white transition-colors text-sm sm:text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Regulatory */}
          <div className='lg:col-span-2'>
            <h4 className='text-lg font-semibold mb-4 text-white uppercase tracking-[2px]'>
              {t('resources')}
            </h4>
            <ul className='space-y-2'>
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-white/80 hover:text-white transition-colors text-sm sm:text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className='lg:col-span-3'>
            <h4 className='text-lg font-semibold mb-4 text-white uppercase tracking-[2px]'>
              {t('getInTouch')}
            </h4>
            <div className='space-y-2'>
              <p className='text-white/80  text-sm sm:text-base'>
                <span className='text-white'>Email</span> : info@slmc.ch
              </p>
              <p className='text-white/80  text-sm sm:text-base'>
                <span className='text-white'>Phone</span> : +41 78 728 09 33
                (Switzerland)
              </p>
              <p className='text-white/80  text-sm sm:text-base'>
                <span className='text-white'>Phone</span> : +86 134 887 98 276
                (Beijing, China)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-white mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-white/80  text-sm sm:text-base'>
            {t('copyright', { year: new Date().getFullYear() })}
          </p>

          {/* LinkedIn Icon */}
          <div className='mt-4 md:mt-0'>
            <a
              href='https://www.linkedin.com/company/slmc-ch/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80  hover:text-white transition-colors'
            >
              <span className='sr-only'>LinkedIn</span>
              <svg
                fill='#ffffff'
                height='24px'
                width='24px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='-143 145 512 512'
                xmlSpace='preserve'
                stroke='#ffffff'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path d='M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z'></path>{' '}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
