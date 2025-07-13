import HeroSection from '@/components/home/hero-section'
import AboutSection from '@/components/home/about-section'
import WhyChooseSection from '@/components/home/why-choose-section'
import ServiceButtons from '../../components/home/services-section'
import {
  generatePageMetadataWithStructuredData,
  type Locale,
} from '../shared-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}
export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadataWithStructuredData(locale, 'home')
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceButtons />
      <WhyChooseSection />
    </>
  )
}
