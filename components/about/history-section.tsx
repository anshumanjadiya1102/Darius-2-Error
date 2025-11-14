"use client"

import { motion } from 'framer-motion'
import { Milestone, Building2, Award, Users, Globe2 } from 'lucide-react'

// Timeline data for company history
const timeline = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'DARIUS Limited was established with a vision to provide quality healthcare solutions.',
    icon: Building2,
  },
  {
    year: '2015',
    title: 'First Major Milestone',
    description: 'Received WHO-GMP certification and launched our first pharmaceutical product line.',
    icon: Award,
  },
  {
    year: '2018',
    title: 'Market Expansion',
    description: 'Expanded operations across India and started exports to neighboring countries.',
    icon: Globe2,
  },
  {
    year: '2020',
    title: 'R&D Excellence',
    description: 'Established state-of-the-art research facility and achieved FDA approval.',
    icon: Milestone,
  },
  {
    year: '2023',
    title: 'Community Impact',
    description: 'Reached milestone of serving over 1 million patients across the globe.',
    icon: Users,
  },
]

export default function CompanyHistory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200" />
          
          {/* Timeline items */}
          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } items-center`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-[#007BFF] font-bold text-xl">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}