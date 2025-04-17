// src/app/[locale]/family-service/page.tsx
import FamilyServicesPage from '@/components/services/card-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Family Services | SLMC',
  description:
    'Premium tailored family services for ultra-high-net-worth individuals and families by S&L Management and Consulting GmbH.',
}

export default async function FamilyServicePage() {
  return <FamilyServicesPage />
}
