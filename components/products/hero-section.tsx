"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Hero section component for the Products & Services page
export default function ProductsHero() {
  return (
    // Full-width banner section with background image
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with pharmaceutical theme */}
      <Image
        src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&auto=format&fit=crop&q=80"
        alt="Pharmaceutical Products"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main content with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovative Pharmaceutical Solutions for a Healthier World
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Discover our wide range of high-quality medicines and healthcare solutions
        </p>
      </motion.div>
    </section>
  )
}