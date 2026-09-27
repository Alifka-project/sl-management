import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import SolutionsPage, {
  type SolutionEntry,
} from '@/components/solutions/solutions-page'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'insurance-pensions')
}

const entries: SolutionEntry[] = [
  {
    key: 'corporate',
    sectionName: 'corporate-insurance',
    image: '/images/content-4.png',
  },
  {
    key: 'private',
    sectionName: 'private-insurance',
    image: '/images/content-1.png',
  },
  { key: 'bvg', sectionName: 'bvg', image: '/images/content-3.png' },
  {
    key: 'employeeBenefits',
    sectionName: 'employee-benefits',
    image: '/images/content-5.png',
  },
  {
    key: 'riskManagement',
    sectionName: 'risk-management',
    image: '/images/content_homepage.png',
  },
  { key: 'claims', sectionName: 'claims', image: '/images/content-7.png' },
]

export default function InsurancePensionsPage() {
  return (
    <SolutionsPage
      namespace='insurancePensions'
      sectionId='insurance-pensions'
      heroImage='/images/insurance-pensions-advisory.jpg'
      entries={entries}
    />
  )
}
