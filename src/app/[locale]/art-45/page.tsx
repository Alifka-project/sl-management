// src/app/[locale]/family-service/page.tsx
import Art45Accordion from '@/components/art45/accordion-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ART45 VAG | SLMC',
  description:
    'Premium tailored family services for ultra-high-net-worth individuals and families by S&L Management and Consulting GmbH.',
}

export default async function ART45VAGPage() {
  return <Art45Accordion />
}
