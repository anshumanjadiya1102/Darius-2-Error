"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// Hero section component for the homepage
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* High-resolution background image of pharmaceutical lab */}
      <Image
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
        alt="DARIUS Pharmaceuticals Laboratory"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Main content with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        {/* Main heading using Montserrat font */}
        <h1 className="text-4xl md:text-[48px] font-bold mb-4 font-montserrat">
          DARIUS PHARMACEUTICALS
        </h1>
        
        {/* Subheading using Open Sans font */}
        <p className="text-xl md:text-[24px] mb-4 font-opensans">
          Upholding the Good in Health
        </p>
        
        {/* Tagline using Open Sans SemiBold */}
        <p className="text-lg md:text-[18px] mb-8 font-opensans font-semibold">
          Innovative Solutions for Bacterial Infections, Neuropathy & Bone Health
        </p>
        
        {/* Call-to-action buttons */}
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white"
            asChild
          >
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}