import AboutIntroduction from '@/components/about-us/introduction'
import TeamSection from '@/components/about-us/team-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SLMC',
  description:
    'Learn about SLMC, your trusted partner for personalized wealth management and family office services.',
}

export default async function AboutPage() {
  return (
    <>
      <AboutIntroduction />
      <TeamSection />
    </>
  )
}
