// Import all required components for the About page
import AboutHero from '@/components/about/hero-section'
import CompanyHistory from '@/components/about/history-section'
import MissionVision from '@/components/about/mission-vision-section'
import CoreValues from '@/components/about/core-values-section'

// Main About page component
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <CoreValues />
    </>
  )
}