// lib/shared-metadata.ts
import { Metadata } from 'next'

const baseUrl = 'https://www.slmc.ch'

export type Locale = 'en' | 'es' | 'nl' | 'de' | 'zh'
export type PageType =
  | 'home'
  | 'about'
  | 'art-45'
  | 'contact-us'
  | 'news'
  | 'services'

interface PageMetadata {
  title: string
  description: string
  keywords: string[]
  image?: string
}

const pageData: Record<Locale, Record<PageType, PageMetadata>> = {
  en: {
    home: {
      title: 'SLMC - Professional Services & Solutions',
      description:
        'Leading provider of professional services and innovative solutions in Switzerland',
      keywords: [
        'slmc',
        'professional services',
        'solutions',
        'switzerland',
        'consulting',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'About SLMC - Our Story & Mission',
      description:
        "Learn about SLMC's history, mission, and commitment to excellence in professional services",
      keywords: ['about slmc', 'company history', 'mission', 'team', 'values'],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Services - SLMC',
      description:
        'Comprehensive Art 45 services and specialized solutions for your business needs',
      keywords: [
        'art 45',
        'specialized services',
        'business solutions',
        'professional consulting',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contact SLMC - Get in Touch',
      description:
        'Contact our professional team for inquiries, support, and consultation services',
      keywords: [
        'contact slmc',
        'get in touch',
        'support',
        'consultation',
        'inquiries',
      ],
      image: '/images/logo_only.svg',
    },
    news: {
      title: 'News & Updates - SLMC',
      description:
        'Stay updated with the latest news, announcements, and insights from SLMC',
      keywords: [
        'slmc news',
        'updates',
        'announcements',
        'insights',
        'company news',
      ],
      image: '/images/logo_only.svg',
    },
    services: {
      title: 'Professional Services - SLMC',
      description:
        'Discover our comprehensive range of professional services and business solutions',
      keywords: [
        'professional services',
        'business solutions',
        'consulting',
        'expertise',
        'slmc services',
      ],
      image: '/images/logo_only.svg',
    },
  },
  es: {
    home: {
      title: 'SLMC - Servicios Profesionales y Soluciones',
      description:
        'Proveedor líder de servicios profesionales y soluciones innovadoras en Suiza',
      keywords: [
        'slmc',
        'servicios profesionales',
        'soluciones',
        'suiza',
        'consultoría',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Acerca de SLMC - Nuestra Historia y Misión',
      description:
        'Conoce la historia, misión y compromiso de SLMC con la excelencia en servicios profesionales',
      keywords: [
        'acerca de slmc',
        'historia empresa',
        'misión',
        'equipo',
        'valores',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Servicios Art 45 - SLMC',
      description:
        'Servicios integrales Art 45 y soluciones especializadas para sus necesidades empresariales',
      keywords: [
        'art 45',
        'servicios especializados',
        'soluciones empresariales',
        'consultoría profesional',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contactar SLMC - Ponte en Contacto',
      description:
        'Contacta con nuestro equipo profesional para consultas, soporte y servicios de asesoramiento',
      keywords: [
        'contactar slmc',
        'ponerse en contacto',
        'soporte',
        'consultoría',
        'consultas',
      ],
      image: '/images/logo_only.svg',
    },
    news: {
      title: 'Noticias y Actualizaciones - SLMC',
      description:
        'Mantente actualizado con las últimas noticias, anuncios e información de SLMC',
      keywords: [
        'noticias slmc',
        'actualizaciones',
        'anuncios',
        'información',
        'noticias empresa',
      ],
      image: '/images/logo_only.svg',
    },
    services: {
      title: 'Servicios Profesionales - SLMC',
      description:
        'Descubre nuestra amplia gama de servicios profesionales y soluciones empresariales',
      keywords: [
        'servicios profesionales',
        'soluciones empresariales',
        'consultoría',
        'experiencia',
        'servicios slmc',
      ],
      image: '/images/logo_only.svg',
    },
  },
  nl: {
    home: {
      title: 'SLMC - Professionele Diensten & Oplossingen',
      description:
        'Toonaangevende aanbieder van professionele diensten en innovatieve oplossingen in Zwitserland',
      keywords: [
        'slmc',
        'professionele diensten',
        'oplossingen',
        'zwitserland',
        'consultancy',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Over SLMC - Ons Verhaal & Missie',
      description:
        "Leer over SLMC's geschiedenis, missie en toewijding aan excellentie in professionele diensten",
      keywords: [
        'over slmc',
        'bedrijfsgeschiedenis',
        'missie',
        'team',
        'waarden',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Diensten - SLMC',
      description:
        'Uitgebreide Art 45 diensten en gespecialiseerde oplossingen voor uw zakelijke behoeften',
      keywords: [
        'art 45',
        'gespecialiseerde diensten',
        'zakelijke oplossingen',
        'professionele consultancy',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contact SLMC - Neem Contact Op',
      description:
        'Neem contact op met ons professionele team voor vragen, ondersteuning en adviesservices',
      keywords: [
        'contact slmc',
        'contact opnemen',
        'ondersteuning',
        'consultatie',
        'vragen',
      ],
      image: '/images/logo_only.svg',
    },
    news: {
      title: 'Nieuws & Updates - SLMC',
      description:
        'Blijf op de hoogte van het laatste nieuws, aankondigingen en inzichten van SLMC',
      keywords: [
        'slmc nieuws',
        'updates',
        'aankondigingen',
        'inzichten',
        'bedrijfsnieuws',
      ],
      image: '/images/logo_only.svg',
    },
    services: {
      title: 'Professionele Diensten - SLMC',
      description:
        'Ontdek ons uitgebreide aanbod van professionele diensten en zakelijke oplossingen',
      keywords: [
        'professionele diensten',
        'zakelijke oplossingen',
        'consultancy',
        'expertise',
        'slmc diensten',
      ],
      image: '/images/logo_only.svg',
    },
  },
  de: {
    home: {
      title: 'SLMC - Professionelle Dienstleistungen & Lösungen',
      description:
        'Führender Anbieter von professionellen Dienstleistungen und innovativen Lösungen in der Schweiz',
      keywords: [
        'slmc',
        'professionelle dienstleistungen',
        'lösungen',
        'schweiz',
        'beratung',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Über SLMC - Unsere Geschichte & Mission',
      description:
        "Erfahren Sie mehr über SLMC's Geschichte, Mission und Engagement für Exzellenz in professionellen Dienstleistungen",
      keywords: [
        'über slmc',
        'unternehmensgeschichte',
        'mission',
        'team',
        'werte',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Dienstleistungen - SLMC',
      description:
        'Umfassende Art 45 Dienstleistungen und spezialisierte Lösungen für Ihre Geschäftsanforderungen',
      keywords: [
        'art 45',
        'spezialisierte dienstleistungen',
        'geschäftslösungen',
        'professionelle beratung',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Kontakt SLMC - Kontaktieren Sie uns',
      description:
        'Kontaktieren Sie unser professionelles Team für Anfragen, Support und Beratungsdienstleistungen',
      keywords: [
        'kontakt slmc',
        'kontaktieren',
        'support',
        'beratung',
        'anfragen',
      ],
      image: '/images/logo_only.svg',
    },
    news: {
      title: 'News & Updates - SLMC',
      description:
        'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Ankündigungen und Einblicken von SLMC',
      keywords: [
        'slmc news',
        'updates',
        'ankündigungen',
        'einblicke',
        'unternehmensnews',
      ],
      image: '/images/logo_only.svg',
    },
    services: {
      title: 'Professionelle Dienstleistungen - SLMC',
      description:
        'Entdecken Sie unser umfassendes Angebot an professionellen Dienstleistungen und Geschäftslösungen',
      keywords: [
        'professionelle dienstleistungen',
        'geschäftslösungen',
        'beratung',
        'expertise',
        'slmc dienstleistungen',
      ],
      image: '/images/logo_only.svg',
    },
  },
  zh: {
    home: {
      title: 'SLMC - 专业服务与解决方案',
      description: '瑞士领先的专业服务和创新解决方案提供商',
      keywords: ['slmc', '专业服务', '解决方案', '瑞士', '咨询'],
      image: '/images/logo_only.svg',
    },
    about: {
      title: '关于SLMC - 我们的故事与使命',
      description: '了解SLMC的历史、使命以及对专业服务卓越的承诺',
      keywords: ['关于slmc', '公司历史', '使命', '团队', '价值观'],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45服务 - SLMC',
      description: '全面的Art 45服务和专业化解决方案，满足您的业务需求',
      keywords: ['art 45', '专业化服务', '商业解决方案', '专业咨询'],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: '联系SLMC - 与我们取得联系',
      description: '联系我们的专业团队，获取咨询、支持和顾问服务',
      keywords: ['联系slmc', '取得联系', '支持', '咨询', '询问'],
      image: '/images/logo_only.svg',
    },
    news: {
      title: '新闻与更新 - SLMC',
      description: '及时了解SLMC的最新新闻、公告和见解',
      keywords: ['slmc新闻', '更新', '公告', '见解', '公司新闻'],
      image: '/images/logo_only.svg',
    },
    services: {
      title: '专业服务 - SLMC',
      description: '探索我们全面的专业服务和商业解决方案',
      keywords: ['专业服务', '商业解决方案', '咨询', '专业知识', 'slmc服务'],
      image: '/images/logo_only.svg',
    },
  },
}

export function generatePageMetadata(
  locale: Locale,
  page: PageType,
  overrides?: Partial<Metadata>,
): Metadata {
  const pageInfo = pageData[locale]?.[page]
  const path = page === 'home' ? '' : `/${page}`
  const url = `${baseUrl}/${locale}${path}`

  if (!pageInfo) {
    throw new Error(
      `Page metadata not found for locale: ${locale}, page: ${page}`,
    )
  }

  return {
    metadataBase: new URL(baseUrl),
    title: pageInfo.title,
    description: pageInfo.description,
    keywords: pageInfo.keywords,
    authors: [{ name: 'SLMC' }],
    creator: 'SLMC',
    publisher: 'SLMC',
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        nl: `${baseUrl}/nl${path}`,
        de: `${baseUrl}/de${path}`,
        zh: `${baseUrl}/zh${path}`,
      },
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
    openGraph: {
      type: 'website',
      siteName: 'SLMC',
      locale: locale,
      url: url,
      title: pageInfo.title,
      description: pageInfo.description,
      images: [
        {
          url: pageInfo.image || '/images/logo_only.svg',
          width: 1200,
          height: 630,
          alt: pageInfo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@slmc',
      title: pageInfo.title,
      description: pageInfo.description,
      images: [pageInfo.image || '/images/logo_only.svg'],
    },
    ...overrides,
  }
}

// Helper function for JSON-LD structured data
export function generateJsonLd(locale: Locale, page: PageType) {
  const pageInfo = pageData[locale]?.[page]
  const path = page === 'home' ? '' : `/${page}`
  const url = `${baseUrl}/${locale}${path}`

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SLMC',
    url: url,
    logo: `${baseUrl}/images/logo_only.svg`,
    description: pageInfo?.description || 'Professional services and solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
    },
    sameAs: ['https://www.linkedin.com/company/slmc-ch'],
  }

  return JSON.stringify(baseStructuredData)
}

// Enhanced metadata with structured data
export function generatePageMetadataWithStructuredData(
  locale: Locale,
  page: PageType,
  overrides?: Partial<Metadata>,
): Metadata {
  const metadata = generatePageMetadata(locale, page, overrides)

  return {
    ...metadata,
    other: {
      ...(typeof metadata.other === 'object' && metadata.other !== null
        ? Object.fromEntries(
            Object.entries(metadata.other).filter(
              ([, value]) =>
                value !== undefined &&
                (typeof value === 'string' ||
                  typeof value === 'number' ||
                  (Array.isArray(value) &&
                    value.every(
                      v => typeof v === 'string' || typeof v === 'number',
                    ))),
            ),
          )
        : {}),
      'application/json+ld': generateJsonLd(locale, page),
    },
  }
}
