"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 mb-20"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To deliver high-quality, affordable medicines that improve global health through continuous innovation, 
              unwavering commitment to quality, and a deep understanding of patient needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80"
              alt="Laboratory Research"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-8"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become a global leader in innovative pharmaceutical solutions, recognized for our commitment 
              to excellence, sustainability, and improving the quality of life for people worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80"
              alt="Future of Healthcare"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}