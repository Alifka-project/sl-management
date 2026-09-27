import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Keep in sync with src/i18n/locales.ts — next.config.mjs cannot import it.
const localePattern = 'en|de|zh|es|nl'
const defaultLocale = 'en'

// Sections renamed during the navigation restructure.
const renamedSections = [
  { from: 'services', to: 'family-office' },
  { from: 'news', to: 'insights' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return renamedSections.flatMap(({ from, to }) => [
      {
        source: `/:locale(${localePattern})/${from}`,
        destination: `/:locale/${to}`,
        permanent: true,
      },
      // Locale-less links never reached the middleware, so send them to the
      // default locale rather than to another 404.
      {
        source: `/${from}`,
        destination: `/${defaultLocale}/${to}`,
        permanent: true,
      },
    ])
  },
}

export default withNextIntl(nextConfig)
