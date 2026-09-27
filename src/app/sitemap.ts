export default function sitemap() {
  const websiteBaseUrl = 'https://www.slmc.ch'
  const i18nConfig = {
    locales: ['en', 'es', 'nl', 'de', 'zh', 'fr'],
    defaultLocale: 'en',
  }

  const pageConfig = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' }, // Home
    { path: 'insurance-pensions', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'family-office', priority: 0.9, changeFrequency: 'monthly' },
    {
      path: 'international-solutions',
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    { path: 'about', priority: 0.8, changeFrequency: 'yearly' },
    { path: 'insights', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'contact-us', priority: 0.7, changeFrequency: 'yearly' },
    { path: 'art-45', priority: 0.5, changeFrequency: 'yearly' },
    { path: 'downloads', priority: 0.5, changeFrequency: 'monthly' },
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
