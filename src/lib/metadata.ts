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
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  // Enhanced Open Graph with multiple image sizes and better metadata
  openGraph: {
    type: 'website',
    siteName: 'S&L Management and Consulting GmbH',
    images: [
      {
        url: '/images/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'S&L Management and Consulting GmbH - Premium Family Office Services',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'S&L Management and Consulting GmbH - Wealth Management',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 400,
        height: 400,
        alt: 'S&L Management and Consulting GmbH Logo',
        type: 'image/jpeg',
      },
    ],
  },
  // Enhanced Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@slmanagement', // Add your Twitter handle
    creator: '@slmanagement',
    title: 'S&L Management and Consulting GmbH',
    description:
      'Premium Family Office Services delivered through a holistic and tailored approach',
    images: [
      {
        url: '/images/twitter-image-1200x675.jpg',
        alt: 'S&L Management and Consulting GmbH - Premium Family Office Services',
      },
    ],
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
  // Add other meta tags for additional SEO benefit
  other: {
    'og:image:secure_url': 'https://www.slmc.ch/images/og-image-1200x630.jpg',
    'og:image:type': 'image/jpeg',
    'og:image:width': '1200',
    'og:image:height': '630',
    // Add thumbnail specifically for search engines
    'thumbnail': '/images/thumbnail-300x200.jpg',
    // Add image for schema.org
    'image': '/images/og-image-1200x630.jpg',
  },
}

// Locale-specific image configurations
const localeImages: Record<Locale, {
  ogImage: string
  twitterImage: string
  thumbnail: string
}> = {
  en: {
    ogImage: '/images/og-image-en-1200x630.jpg',
    twitterImage: '/images/twitter-image-en-1200x675.jpg',
    thumbnail: '/images/thumbnail-en-300x200.jpg',
  },
  de: {
    ogImage: '/images/og-image-de-1200x630.jpg',
    twitterImage: '/images/twitter-image-de-1200x675.jpg',
    thumbnail: '/images/thumbnail-de-300x200.jpg',
  },
  zh: {
    ogImage: '/images/og-image-zh-1200x630.jpg',
    twitterImage: '/images/twitter-image-zh-1200x675.jpg',
    thumbnail: '/images/thumbnail-zh-300x200.jpg',
  },
  es: {
    ogImage: '/images/og-image-es-1200x630.jpg',
    twitterImage: '/images/twitter-image-es-1200x675.jpg',
    thumbnail: '/images/thumbnail-es-300x200.jpg',
  },
  nl: {
    ogImage: '/images/og-image-nl-1200x630.jpg',
    twitterImage: '/images/twitter-image-nl-1200x675.jpg',
    thumbnail: '/images/thumbnail-nl-300x200.jpg',
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
  
  const images = localeImages[locale] || localeImages[defaultLocale]

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
      images: [
        {
          url: images.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Premium Family Office Services`,
          type: 'image/jpeg',
        },
        ...(baseMetadata.openGraph?.images || []).slice(1), // Keep additional base images
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: title,
      description: description,
      images: [
        {
          url: images.twitterImage,
          alt: `${title} - Premium Family Office Services`,
        },
      ],
    },
    alternates: {
      ...baseMetadata.alternates,
      canonical: `/${locale}`,
    },
    other: {
      ...baseMetadata.other,
      'thumbnail': images.thumbnail,
      'og:image:secure_url': `https://www.slmc.ch${images.ogImage}`,
    },
  }
}

// Helper function for page-specific metadata with custom images
export function generatePageMetadata({
  locale,
  params,
  pageTitle,
  pageDescription,
  pageImage,
  pageThumbnail,
}: MetadataParams & {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
  pageThumbnail?: string
}): Metadata {
  const basePageMetadata = generateMetadata({ locale, params })
  
  if (!pageTitle && !pageDescription && !pageImage) {
    return basePageMetadata
  }

  return {
    ...basePageMetadata,
    title: pageTitle || basePageMetadata.title,
    description: pageDescription || basePageMetadata.description,
    openGraph: {
      ...basePageMetadata.openGraph,
      title: pageTitle || basePageMetadata.openGraph?.title,
      description: pageDescription || basePageMetadata.openGraph?.description,
      images: pageImage ? [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle || 'S&L Management and Consulting',
          type: 'image/jpeg',
        },
      ] : basePageMetadata.openGraph?.images,
    },
    twitter: {
      ...basePageMetadata.twitter,
      title: pageTitle || basePageMetadata.twitter?.title,
      description: pageDescription || basePageMetadata.twitter?.description,
      images: pageImage ? [pageImage] : basePageMetadata.twitter?.images,
    },
    other: {
      ...basePageMetadata.other,
      'thumbnail': pageThumbnail || basePageMetadata.other?.thumbnail,
      'og:image:secure_url': pageImage ? `https://www.slmc.ch${pageImage}` : basePageMetadata.other?.['og:image:secure_url'],
    },
  }
}
