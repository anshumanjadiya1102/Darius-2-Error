"use client"

import { motion } from 'framer-motion'
import { Award, Globe2, BadgeCheck, Rocket, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// USP data
const usps = [
  {
    title: 'High-Quality Standards',
    description: 'GMP & FDA-approved manufacturing facilities',
    icon: BadgeCheck,
  },
  {
    title: 'Global Reach',
    description: 'Products available in over 30 countries',
    icon: Globe2,
  },
  {
    title: 'Certified Excellence',
    description: 'Multiple international quality certifications',
    icon: Award,
  },
  {
    title: 'Fast Delivery',
    description: 'Efficient distribution network worldwide',
    icon: Rocket,
  },
  {
    title: 'Competitive Pricing',
    description: 'Quality medicines at affordable prices',
    icon: DollarSign,
  },
]

// Why Choose Us section component
export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose DARIUS?</h2>
        
        {/* Grid layout for USPs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <usp.icon className="w-8 h-8 text-[#007BFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                      <p className="text-gray-600">{usp.description}</p>
                    </div>
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