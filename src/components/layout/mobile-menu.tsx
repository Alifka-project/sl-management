'use client'

import { Link } from '@/i18n/routing' // Import the Link from your routing config
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

type MobileMenuProps = {
  navItems: Array<{ name: string; href: string }>
  pathname: string
  onClose: () => void
}

export default function MobileMenu({
  navItems,
  pathname,
  onClose,
}: MobileMenuProps) {
  const t = useTranslations('menu')
  const locale = useLocale()

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='md:hidden mt-4 py-4 px-4 space-y-4 bg-white border-t'
    >
      {navItems.map(item => {
        const isActive =
          pathname.endsWith(item.href) ||
          (item.href === '/' && pathname === `/${locale}`)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block py-2 text-gray-700 hover:text-yellow-500 transition-colors ${
              isActive ? 'font-semibold text-yellow-500' : ''
            }`}
          >
            {item.name}
          </Link>
        )
      })}

      <div className='pt-4 border-t'>
        <Button
          className='w-full bg-yellow-500 hover:bg-yellow-600 text-white'
          onClick={onClose}
        >
          {t('contactUs')}
        </Button>
      </div>
    </motion.div>
  )
}
