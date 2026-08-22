// src/app/[locale]/downloads/page.tsx
import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import DownloadsLibrary from '@/components/downloads/downloads-library'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'downloads')
}

export default async function DownloadsPage() {
  return <DownloadsLibrary />
}
