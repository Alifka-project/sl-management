import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Locale, locales } from '@/i18n/locales'

import { Metadata } from 'next'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Props['params']
}): Promise<Metadata> {
  try {
    // Type assertion to handle the locale parameter correctly
    const { locale } = await params
    return generateSiteMetadata({
      locale: locale as Locale,
      params: { locale },
    })
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return basic metadata as fallback
    return {
      title: 'S&L Management',
      description: 'Family Office Services',
    }
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params
  if (!locales.includes(locale as Locale)) {
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
