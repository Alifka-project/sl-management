import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from './locales'
import { defineRouting } from 'next-intl/routing'

export const localePrefix = 'as-needed'

export const pathnames = {
  '/': '/',
}

export const { Link, redirect, usePathname, useRouter } = createNavigation(
  defineRouting({
    locales,
    localePrefix,
    pathnames,
    defaultLocale,
  }),
)
