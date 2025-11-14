"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Product data for each tab
const products = {
  daricalPlus: {
    name: "DARICAL-PLUS",
    subtitle: "Calcium Citrate 1000mg + Vitamin D3 200 IU + Magnesium + Zinc Tablet",
    tagline: "PLUS Power for Healthy Bones",
    image: "https://plus.unsplash.com/premium_photo-1690534068702-01ae6252016c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Helps in bone mineralization",
      "Ensures maximum calcium absorption",
      "Superior bioavailability & absorption"
    ],
    indications: [
      "Osteoporosis",
      "Hypocalcemia",
      "Arthritis",
      "Bone Fracture"
    ],
    dosage: "1 tablet daily, or as prescribed"
  },
  daricalStrong: {
    name: "DARICAL STRONG",
    subtitle: "Calcitriol 0.25mcg + Omega-3 + Methylcobalamin + Vitamin K2 Softgel Capsule",
    tagline: "Maximum Support for Fragile Bones",
    image: "https://images.unsplash.com/photo-1729708273935-9525a49ab12d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Reduces homocysteine levels → fewer fractures",
      "DHA & EPA aid bone formation",
      "Vitamin K2 prevents osteoporosis"
    ],
    indications: [
      "Osteoporosis",
      "Osteopenia",
      "Renal Osteodystrophy"
    ]
  }
}

// Product Tabs component
export default function ProductTabs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="daricalPlus" className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-[#F5F5F5]">
            <TabsTrigger 
              value="daricalPlus"
              className="data-[state=active]:bg-[#0D5EBA] data-[state=active]:text-white hover:bg-[#E3F2FD]"
            >
              Darical-Plus
            </TabsTrigger>
            <TabsTrigger 
              value="daricalStrong"
              className="data-[state=active]:bg-[#0D5EBA] data-[state=active]:text-white hover:bg-[#E3F2FD]"
            >
              Darical Strong
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(products).map(([key, product]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      {/* Product Header */}
                      <h2 className="text-2xl md:text-[28px] font-bold font-montserrat mb-2">
                        {product.name}
                      </h2>
                      <p className="text-base mb-2">{product.subtitle}</p>
                      <p className="text-[#4CAF50] italic mb-8">{product.tagline}</p>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Image */}
                        <div className="relative h-[300px] md:h-[600px]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                          />
                        </div>

                        {/* Right Column - Benefits & Indications */}
                        <div>
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                            <ul className="space-y-2">
                              {product.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="mr-2">✓</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold text-[#0D5EBA] underline mb-4">
                              Recommended For:
                            </h3>
                            <ul className="space-y-2">
                              {product.indications.map((indication, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="mr-2">•</span>
                                  {indication}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {product.dosage && (
                            <div className="mt-8">
                              <p className="font-bold">
                                Dosage: {product.dosage}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}