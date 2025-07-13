import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import AboutIntroduction from '@/components/about-us/introduction'
import TeamSection from '@/components/about-us/team-section'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'about', {
    // Optional page-specific overrides
    keywords: ['custom', 'about', 'keywords', 'override'],
  })
}

export default async function AboutPage() {
  return (
    <>
      <AboutIntroduction />
      <TeamSection />
    </>
  )
}
