// Import necessary components for the Products & Services page
import ProductsHero from '@/components/products/hero-section'
import ProductCategories from '@/components/products/categories-section'
import FeaturedProducts from '@/components/products/featured-section'
import ServicesOverview from '@/components/products/services-section'
import WhyChooseUs from '@/components/products/why-choose-section'
import Certifications from '@/components/products/certifications-section'
import ProductsCTA from '@/components/products/cta-section'

// Main Products & Services page component
export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <FeaturedProducts />
      <ServicesOverview />
      <WhyChooseUs />
      <Certifications />
      <ProductsCTA />
    </>
  )
}