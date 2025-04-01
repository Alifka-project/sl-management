import { Metadata } from 'next'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'

import HeroSection from '@/components/home/hero-section'
import AboutSection from '@/components/home/about-section'
import WhyChooseSection from '@/components/home/why-choose-section'
import ContactSection from '@/components/home/contact-section'
import { Locale } from '../../i18n/locales'
import ServicesSection from '../../components/home/services-section'

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  try {
    // Type assertion to handle the locale parameter correctly
    return generateSiteMetadata({
      locale: locale as Locale,
      params: { locale },
    })
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return basic metadata as fallback
    return {
      title: 'S&L Management',
      description: 'Family Office Services',
    }
  }
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </>
  )
}
