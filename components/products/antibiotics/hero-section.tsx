"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Hero section component for Cefdar Series page
export default function CefdarHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with blue gradient overlay */}
      <Image
        src="https://images.unsplash.com/photo-1631447661435-b86ae5ecd564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cefdar Series Products"
        fill
        className="object-cover"
        priority
      />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(rgba(13, 94, 186, 0.1), rgba(13, 94, 186, 0.1))'
        }}
      />
      
      {/* Content with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-[52px] font-bold font-montserrat mb-4">
          CEFDAR SERIES
        </h1>
        <p className="text-xl md:text-2xl font-semibold font-opensans mb-4">
          Complete Antibiotic Solutions for Resistant Pathogens
        </p>
        <p 
          className="text-lg text-[#E53935] font-opensans font-bold"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          Make body Bacteria Free Zone
        </p>
      </motion.div>
    </section>
  )
}