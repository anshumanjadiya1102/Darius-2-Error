"use client"

import { motion } from 'framer-motion'
import { Award, CheckCircle, Shield } from 'lucide-react'

// Certification badges component
export default function CertificationsSection() {
  return (
    <section className="py-[60px] px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal flexbox with 30px spacing */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[30px]">
          {/* WHO-GMP Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Award className="w-16 h-16 text-[#0D5EBA]" />
            <p className="mt-2 font-semibold font-montserrat">WHO-GMP</p>
          </motion.div>

          {/* ISO 9001:2015 Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <CheckCircle className="w-16 h-16 text-[#0D5EBA]" />
            <p className="mt-2 font-semibold font-montserrat">ISO 9001:2015</p>
          </motion.div>

          {/* FDA Approved Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Shield className="w-16 h-16 text-[#0D5EBA]" />
            <p className="mt-2 font-semibold font-montserrat">FDA Approved</p>
          </motion.div>
        </div>

        {/* Text below badges */}
        <p className="text-center mt-8 text-[#0D5EBA] font-semibold font-montserrat">
          Committed to Global Quality Standards
        </p>
      </div>
    </section>
  )
}