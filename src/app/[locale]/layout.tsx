import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales } from '@/i18n/locales'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { generatePageMetadata, type Locale } from '../shared-metadata'

export async function generateStaticParams() {
  return locales.map(locale => ({
    locale: locale,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const localeParams = params.locale as Locale

  if (!locales.includes(localeParams)) {
    return {}
  }

  return generatePageMetadata(
    localeParams as 'en' | 'es' | 'nl' | 'de' | 'zh',
    'home',
  )
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const locale = params.locale as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  // Load messages for the current locale
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} className='scroll-smooth'>
      <body className='min-h-screen flex flex-col'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
