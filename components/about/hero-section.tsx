"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Hero section component for the About page
export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1920&auto=format&fit=crop&q=80"
        alt="DARIUS Limited Laboratory"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforming Healthcare Through Innovation and Excellence
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          A trusted name in pharmaceuticals, dedicated to improving lives since 2010
        </p>
      </motion.div>
    </section>
  )
}