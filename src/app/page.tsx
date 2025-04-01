import { redirect } from 'next/navigation'
import { locales, defaultLocale } from '@/i18n/locales'
import { headers } from 'next/headers'

export default async function Home() {
  // Get the Accept-Language header
  const headersList = await headers()
  const acceptLanguage = (await headersList).get('accept-language') || ''

  // Parse the Accept-Language header to find the best match
  const userPreferredLocales = acceptLanguage
    .split(',')
    .map(item => item.split(';')[0].trim())

  // Find the first match from user's preferred locales that's in our supported locales
  const matchedLocale = userPreferredLocales.find(locale =>
    locales.includes(locale.split('-')[0]),
  )

  // Use the matched locale or fall back to default
  const redirectLocale = matchedLocale
    ? matchedLocale.split('-')[0]
    : defaultLocale

  // Redirect to the appropriate locale
  redirect(`/${redirectLocale}`)
}
