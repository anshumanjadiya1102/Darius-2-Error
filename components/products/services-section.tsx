"use client"

import { motion } from 'framer-motion'
import { FlaskRound as Flask, FileSpreadsheet, Microscope, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Services data
const services = [
  {
    title: 'Custom Drug Formulation',
    description: 'Tailored pharmaceutical solutions to meet specific requirements',
    icon: Flask,
  },
  {
    title: 'Contract Manufacturing',
    description: 'High-quality manufacturing services for pharmaceutical companies',
    icon: FileSpreadsheet,
  },
  {
    title: 'R&D Collaboration',
    description: 'Partnership opportunities in pharmaceutical research',
    icon: Microscope,
  },
  {
    title: 'Healthcare Consulting',
    description: 'Expert guidance on pharmaceutical development and compliance',
    icon: Users,
  },
]

// Services overview section component
export default function ServicesOverview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        
        {/* Grid layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
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