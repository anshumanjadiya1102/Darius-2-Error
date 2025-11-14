"use client"

import { motion } from 'framer-motion'
import { Battery as Bacteria, Brain, Bone, Pill, Baby, Atom as Stomach } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Therapeutic areas data with exact specifications
const therapeuticAreas = [
  {
    title: 'Antibiotics',
    icon: Bacteria,
    products: ['Cefdar', 'Cefdar-T', 'Daritaz-4.5']
  },
  {
    title: 'Neurohealth',
    icon: Brain,
    products: ['Cobadar', 'Cobadar-OD']
  },
  {
    title: 'Bone Health',
    icon: Bone,
    products: ['Darical-Plus', 'Darical-Strong']
  },
  {
    title: 'Pain Management',
    icon: Pill,
    products: ['All Darigesic variants']
  },
  {
    title: 'Pediatrics',
    icon: Baby,
    products: ['Cypodar', 'UP-Energy Junior']
  },
  {
    title: 'GI Treatments',
    icon: Stomach,
    products: ['Esowan', 'Pantodar']
  }
]

// Therapeutic Areas Grid component
export default function TherapeuticAreasSection() {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-12">
          Therapeutic Areas
        </h2>
        
        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapeuticAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* 48x48 SVG Icon */}
                    <area.icon className="w-12 h-12 text-[#0D5EBA] mb-4" />
                    
                    {/* Area Title */}
                    <h3 className="text-xl font-semibold font-montserrat mb-4">
                      {area.title}
                    </h3>
                    
                    {/* Products List */}
                    <ul className="space-y-2">
                      {area.products.map((product, idx) => (
                        <li 
                          key={idx}
                          className="text-gray-600 font-opensans"
                        >
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}