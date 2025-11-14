import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="relative py-20 px-4">
      <Image
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&auto=format&fit=crop&q=80"
        alt="Healthcare Professional"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#007BFF]/90" />
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Healthcare</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Partner with DARIUS Limited to make quality healthcare accessible to all
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-white hover:bg-white/90" asChild>
            <Link href="/products">Explore Our Products</Link>
          </Button>
          <Button size="lg" className="bg-white text-[#007BFF] hover:bg-white/90" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}