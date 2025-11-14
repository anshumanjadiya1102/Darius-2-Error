"use client"

import { motion } from 'framer-motion'
import { Shield, Lightbulb, Users, Recycle, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Core values data
const values = [
  {
    title: 'Quality',
    description: 'Maintaining the highest standards in all our products and processes',
    icon: Shield,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Innovation',
    description: 'Continuously evolving and improving our solutions',
    icon: Lightbulb,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Customer-Centricity',
    description: "Putting our customers' needs at the heart of everything we do",
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Sustainability',
    description: 'Committed to environmental and social responsibility',
    icon: Recycle,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Care',
    description: 'Demonstrating compassion in all our interactions',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
]

export default function CoreValues() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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