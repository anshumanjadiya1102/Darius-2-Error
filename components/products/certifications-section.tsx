"use client"

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

// Certifications section component
export default function Certifications() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">Our Certifications</h2>
        
        {/* Certifications content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex justify-center mb-8">
            <Award className="w-16 h-16 text-[#007BFF]" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">
            Committed to Quality Excellence
          </h3>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our facilities and processes are certified by leading international organizations,
            ensuring the highest standards of quality and safety in pharmaceutical manufacturing.
          </p>
          
          {/* Certification logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-[#007BFF] font-bold text-xl">ISO 9001</div>
            <div className="text-[#007BFF] font-bold text-xl">WHO-GMP</div>
            <div className="text-[#007BFF] font-bold text-xl">FDA Approved</div>
            <div className="text-[#007BFF] font-bold text-xl">EU-GMP</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}