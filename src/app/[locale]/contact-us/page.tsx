// src/app/[locale]/family-service/page.tsx
import ContactUs from '@/components/contact-us/contact-us'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SLMC',
  description:
    'Premium tailored family services for ultra-high-net-worth individuals and families by S&L Management and Consulting GmbH.',
}

export default async function ContactUsPage() {
  return <ContactUs />
}
