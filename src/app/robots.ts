// app/robots.ts
import { MetadataRoute } from 'next'

// Assuming you have a config file with your locales
const i18nConfig = {
  locales: ['en', 'es', 'nl', 'de', 'zh'],
  defaultLocale: 'en',
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.slmc.ch'

  const sitemaps = [
    `${baseUrl}/sitemap.xml`,
    ...i18nConfig.locales.map(locale => `${baseUrl}/${locale}/sitemap.xml`),
  ]

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: sitemaps,
  }
}
