"use client"

import { motion } from 'framer-motion'
import { Globe, FlaskRound as Flask } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Vision and Mission section component
export default function VisionMissionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Globe className="w-12 h-12 text-[#0D5EBA] mb-4" />
                  <h2 className="text-[22px] font-bold font-montserrat mb-4">Our Vision</h2>
                  <p className="text-gray-600 font-opensans">
                    To become a global healthcare organization & recognition as domestic & international 
                    integrated healthcare & pharmaceutical company through Innovation, Quality & Competence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Flask className="w-12 h-12 text-[#4CAF50] mb-4" />
                  <h2 className="text-[22px] font-bold font-montserrat mb-4">Our Mission</h2>
                  <p className="text-gray-600 font-opensans">
                    Our mission is to discover, develop & successfully market pharmaceutical preparation 
                    to prevent diagnose, alleviate & cure disease
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}