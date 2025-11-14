"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// CTA section component
export default function ProductsCTA() {
  return (
    <section className="relative py-20 px-4">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&auto=format&fit=crop&q=80"
        alt="Laboratory Research"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#007BFF]/90" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to Explore Our Full Product Range?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Discover our complete catalog or get in touch with our team for personalized assistance
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-white hover:bg-white/90" asChild>
            <Link href="/products/catalog">View Full Catalog</Link>
          </Button>
          <Button size="lg" className="bg-white text-[#007BFF] hover:bg-white/90" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}