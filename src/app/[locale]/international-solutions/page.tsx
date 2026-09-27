import { generatePageMetadata, type Locale } from '@/app/shared-metadata'
import SolutionsPage, {
  type SolutionEntry,
} from '@/components/solutions/solutions-page'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale as Locale
  return generatePageMetadata(locale, 'international-solutions')
}

const entries: SolutionEntry[] = [
  {
    key: 'crossBorder',
    sectionName: 'cross-border-planning',
    image: '/images/content-4.png',
  },
  {
    key: 'investmentProviders',
    sectionName: 'investment-providers',
    image: '/images/content-3.png',
  },
  {
    key: 'globalMobility',
    sectionName: 'global-mobility',
    image: '/images/content-2.png',
  },
  {
    key: 'asiaDesk',
    sectionName: 'asia-desk',
    image: '/images/core-services.png',
  },
]

export default function InternationalSolutionsPage() {
  return (
    <SolutionsPage
      namespace='internationalSolutions'
      sectionId='international-solutions'
      heroImage='/images/international-solutions-hero.jpg'
      heroFrameClassName='aspect-[4/5] w-full max-w-[420px] lg:max-w-none'
      heroPositionClassName='object-center'
      entries={entries}
    />
  )
}
