// src/app/[locale]/family-service/page.tsx
import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import FamilyBusinessCard from '@/components/events/book-component'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'news', {
    // News pages might want different robot settings
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
  })
}

export default async function NewsEventPage() {
  return <FamilyBusinessCard />
}
