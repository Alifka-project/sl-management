import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './src/i18n/locales'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // The default locale to use when visiting a non-localized path
  defaultLocale,

  // Domains for specific locales (optional)
  // domains: [
  //   {
  //     domain: 'slmc.ch',
  //     defaultLocale: 'de'
  //   },
  //   {
  //     domain: 'slmc.com',
  //     defaultLocale: 'en'
  //   }
  // ],

  // Always show the locale in the URL
  localePrefix: 'always',
})

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)'],
}
