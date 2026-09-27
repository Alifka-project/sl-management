import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import SolutionsPage, {
  type SolutionEntry,
} from '@/components/solutions/solutions-page'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'family-office')
}

const entries: SolutionEntry[] = [
  {
    key: 'relocation',
    sectionName: 'relocation',
    image: '/images/content-2.png',
  },
  {
    key: 'wealthPlanning',
    sectionName: 'wealth-planning',
    image: '/images/content-3.png',
  },
  { key: 'taxLegal', sectionName: 'tax-legal', image: '/images/content-4.png' },
  {
    key: 'healthcare',
    sectionName: 'healthcare',
    image: '/images/content-5.png',
  },
  {
    key: 'realEstate',
    sectionName: 'real-estate',
    image: '/images/content-6.png',
  },
  { key: 'bespoke', sectionName: 'bespoke', image: '/images/content-7.png' },
]

export default function FamilyOfficePage() {
  return (
    <SolutionsPage
      namespace='familyOffice'
      sectionId='family-office'
      heroImage='/images/image-services.jpg'
      entries={entries}
    />
  )
}
