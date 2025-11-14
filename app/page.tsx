import HeroSection from '@/components/sections/hero-section'
import VisionMissionSection from '@/components/sections/vision-mission-section'
import FlagshipProductsSection from '@/components/sections/flagship-products-section'
import TherapeuticAreasSection from '@/components/sections/therapeutic-areas-section'
import CertificationsSection from '@/components/sections/certifications-section'

// Main homepage component with all sections in exact order
export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <FlagshipProductsSection />
      <TherapeuticAreasSection />
      <CertificationsSection />
    </>
  )
}