// Import necessary components and utilities
import DaricalHero from '@/components/products/bone-health/hero-section'
import ProductTabs from '@/components/products/bone-health/product-tabs'
import ComparisonTable from '@/components/products/bone-health/comparison-table'
import DownloadSection from '@/components/products/bone-health/download-section'

// SEO Metadata
export const metadata = {
  title: 'Darical Bone Health | DARIUS Pharmaceuticals',
  description: 'Advanced calcium & vitamin formulations for osteoporosis',
}

// Main Bone Health page component
export default function BoneHealthPage() {
  return (
    <main className="min-h-screen">
      <DaricalHero />
      <ProductTabs />
      <ComparisonTable />
      <DownloadSection />
    </main>
  )
}