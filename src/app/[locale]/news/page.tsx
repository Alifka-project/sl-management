// src/app/[locale]/family-service/page.tsx
import FamilyBusinessCard from '@/components/events/book-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Event | SLMC',
  description:
    'Premium tailored family services for ultra-high-net-worth individuals and families by S&L Management and Consulting GmbH.',
}

export default async function NewsEventPage() {
  return <FamilyBusinessCard />
}
