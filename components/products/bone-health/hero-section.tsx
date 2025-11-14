"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Hero section component for Darical Series page
export default function DaricalHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with blue gradient overlay */}
      <Image
        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&auto=format&fit=crop&q=80"
        alt="Darical Series Products"
        fill
        className="object-cover"
        priority
      />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(rgba(227, 242, 253, 0.9), rgba(227, 242, 253, 0.9))'
        }}
      />
      
      {/* Content with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-[48px] font-bold font-montserrat mb-4 text-[#0D5EBA]">
          DARICAL SERIES
        </h1>
        <p className="text-xl md:text-2xl font-semibold font-opensans text-[#333333] mb-4">
          Advanced Bone Health Solutions
        </p>
        <p className="text-lg md:text-xl text-[#4CAF50] font-opensans">
          Maximum Support for Fragile Bones
        </p>
      </motion.div>
    </section>
  )
}