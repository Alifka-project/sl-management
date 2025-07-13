// src/app/[locale]/family-service/page.tsx
import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import Art45Accordion from '@/components/art45/accordion-section'

interface PageProps {
  params: Promise<{ locale: string }>
}
export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'art-45')
}

export default async function ART45VAGPage() {
  return <Art45Accordion />
}
