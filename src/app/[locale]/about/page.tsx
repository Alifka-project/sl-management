import AboutIntroduction from '@/components/about-us/Introduction'
import TeamSection from '@/components/about-us/TeamSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SLMC',
  description:
    'Learn about SLMC, your trusted partner for personalized wealth management and family office services.',
}

export default async function AboutPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <AboutIntroduction />
      <TeamSection />
    </div>
  )
}
