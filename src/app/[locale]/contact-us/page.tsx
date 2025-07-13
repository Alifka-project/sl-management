// src/app/[locale]/family-service/page.tsx
import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import ContactUs from '@/components/contact-us/contact-us'

interface PageProps {
  params: Promise<{ locale: string }>
}
export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'contact-us', {
    // Override with specific contact info
    other: {
      'application/json+ld': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact SLMC',
        url: `https://www.slmc.ch/${locale}/contact-us`,
      }),
    },
  })
}

export default async function ContactUsPage() {
  return <ContactUs />
}
