// src/app/[locale]/family-service/page.tsx
import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import FamilyServicesPage from '@/components/services/card-component'

interface PageProps {
  params: Promise<{ locale: string }>
}
export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'services')
}

export default async function FamilyServicePage() {
  return <FamilyServicesPage />
}
