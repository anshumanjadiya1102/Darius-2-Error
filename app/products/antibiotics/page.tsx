// Import necessary components and utilities
import CefdarHero from '@/components/products/antibiotics/hero-section'
import ProductTabs from '@/components/products/antibiotics/product-tabs'
import ComparisonTable from '@/components/products/antibiotics/comparison-table'
import DownloadSection from '@/components/products/antibiotics/download-section'

// SEO Metadata
export const metadata = {
  title: 'Cefdar Series | DARIUS Pharmaceuticals | Best Pharma In Aurangabad Bihar',
  description: 'Ceftriaxone-based antibiotics for resistant infections',
}

// Main Cefdar Series page component
export default function CefdarSeriesPage() {
  return (
    <main className="min-h-screen">
      <CefdarHero />
      <ProductTabs />
      <ComparisonTable />
      <DownloadSection />
    </main>
  )
}