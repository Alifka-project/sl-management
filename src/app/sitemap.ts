export default function sitemap() {
  const websiteBaseUrl = 'https://www.slmc.ch'
  const i18nConfig = {
    locales: ['en', 'es', 'nl', 'de', 'zh', 'fr'],
    defaultLocale: 'en',
  }

  const pageConfig = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' }, // Home
    { path: 'about', priority: 0.8, changeFrequency: 'yearly' },
    { path: 'art-45', priority: 0.8, changeFrequency: 'yearly' },
    { path: 'contact-us', priority: 0.7, changeFrequency: 'yearly' },
    { path: 'news', priority: 0.9, changeFrequency: 'weekly' }, // News changes more frequently
    { path: 'services', priority: 0.8, changeFrequency: 'monthly' },
  ]

  const sitemap: {
    url: string
    lastModified: Date
    changeFrequency: string
    priority: number
  }[] = []

  i18nConfig.locales.forEach(locale => {
    pageConfig.forEach(({ path, priority, changeFrequency }) => {
      const url =
        path === ''
          ? `${websiteBaseUrl}/${locale}`
          : `${websiteBaseUrl}/${locale}/${path}`

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      })
    })
  })

  return sitemap
}
