'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

import { Locale, languageFlags, languageNames } from '@/i18n/locales'

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  // Handle language change
  const changeLanguage = (newLocale: Locale) => {
    // Replace the locale segment in the pathname
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center'>
          <span className='mr-2 font-bold'>{languageFlags[locale]}</span>
          <span className='mr-1 hidden sm:inline font-bold'>
            {languageNames[locale]}
          </span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code as Locale)}
            className={locale === code ? 'bg-yellow-50 font-bold' : ''}
          >
            <span className='mr-2'>{languageFlags[code as Locale]}</span>
            <span className={`${locale === code ? 'font-bold' : ''}`}>
              {name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
