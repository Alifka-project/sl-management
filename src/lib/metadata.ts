// src/lib/metadata.ts
import { Locale, defaultLocale } from '@/i18n/locales'
import { Metadata } from 'next'

type MetadataParams = {
  locale: Locale
  params: Record<string, string>
}

// Define base metadata values for all pages
const baseMetadata: Metadata = {
  title: {
    template: '%s | S&L Management and Consulting',
    default: 'S&L Management and Consulting GmbH',
  },
  description:
    'Premium Family Office Services delivered through a holistic and tailored approach',
  applicationName: 'S&L Management',
  // Fix the referrer value to use one of the allowed values
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Family Office',
    'Wealth Management',
    'Asset Management',
    'Estate Planning',
    'Tax Advisory',
    'Switzerland',
    'UHNW',
    'High Net Worth',
    'Financial Planning',
  ],
  authors: [{ name: 'S&L Management and Consulting GmbH' }],
  creator: 'S&L Management and Consulting GmbH',
  publisher: 'S&L Management and Consulting GmbH',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  // Fix metadataBase to use URL directly rather than a string
  metadataBase: new URL('https://www.slmc.ch'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      de: '/de',
      zh: '/zh',
      es: '/es',
      nl: '/nl',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'S&L Management and Consulting GmbH',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'S&L Management and Consulting GmbH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S&L Management and Consulting GmbH',
    description:
      'Premium Family Office Services delivered through a holistic and tailored approach',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

// Translation mapping for titles and descriptions
const translatedMetadata: Record<
  Locale,
  {
    title: string
    description: string
  }
> = {
  en: {
    title: 'S&L Management and Consulting GmbH',
    description:
      'Premium Family Office Services delivered through a holistic and tailored approach',
  },
  de: {
    title: 'S&L Management und Consulting GmbH',
    description:
      'Premium Family Office Dienstleistungen durch einen ganzheitlichen und maßgeschneiderten Ansatz',
  },
  zh: {
    title: 'S&L管理与咨询有限公司',
    description: '通过全面且定制化的方法提供高端家族办公室服务',
  },
  es: {
    title: 'S&L Management y Consulting GmbH',
    description:
      'Servicios Premium de Family Office entregados a través de un enfoque holístico y personalizado',
  },
  nl: {
    title: 'S&L Management en Consulting GmbH',
    description:
      'Premium Family Office Diensten via een holistische en op maat gemaakte aanpak',
  },
}

// Generates metadata for a specific page and locale
export function generateMetadata({ locale }: MetadataParams): Metadata {
  const { title, description } =
    translatedMetadata[locale] || translatedMetadata[defaultLocale]

  return {
    ...baseMetadata,
    title: {
      template: '%s | S&L Management and Consulting',
      default: title,
    },
    description: description,
    openGraph: {
      ...baseMetadata.openGraph,
      title: title,
      description: description,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: title,
      description: description,
    },
    alternates: {
      ...baseMetadata.alternates,
      canonical: `/${locale}`,
    },
  }
}
