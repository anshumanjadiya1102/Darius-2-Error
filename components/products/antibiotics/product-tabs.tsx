"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Product data for each tab
const products = {
  cefdar: {
    name: "Cefdar - Ceftriaxone 1gm (IV/IM) Injection",
    tagline: "Creates BACTERIA Free Zone",
    image: "https://plus.unsplash.com/premium_photo-1671098088734-8b8532731aef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "High susceptibility against gram-positive/negative pathogens",
      "Excellent results against Pseudomonas sp.",
      "Broader antibacterial coverage",
      "Easily tolerated with high safety profile"
    ],
    indications: [
      "Pneumonia",
      "Skin Infections",
      "Bronchitis",
      "Gonorrhoea",
      "Typhoid",
      "Urinary Tract Infections"
    ],
    dosage: "1gm via IV/IM injection"
  },
  cefdarSB: {
    name: "Cefdar-SB - Ceftriaxone 1000mg + Sulbactam 500mg",
    tagline: "BRUTAL ATTACK ON PATHOGENS",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop",
    features: [
      "Acts on beta-lactamase resistant strains",
      "Covers Pseudomonas spp."
    ],
    indications: [
      "Meningitis",
      "Septicemia",
      "Post-Surgical Infections"
    ]
  },
  cefdarT: {
    name: "Cefdar-T - Ceftriaxone 1000mg + Tazobactam 125mg",
    tagline: "Most Safe Option against Tough Pathogens",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=600&fit=crop",
    features: [
      "Effective against Ceftriaxone-resistant strains",
      "Covers beta-lactamase producers",
      "Active against Pseudomonas"
    ]
  }
}

// Product Tabs component
export default function ProductTabs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="cefdar" className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-[#F5F5F5]">
            <TabsTrigger 
              value="cefdar"
              className="data-[state=active]:bg-[#0D5EBA] data-[state=active]:text-white hover:bg-[#E3F2FD]"
            >
              Cefdar 1gm
            </TabsTrigger>
            <TabsTrigger 
              value="cefdarSB"
              className="data-[state=active]:bg-[#0D5EBA] data-[state=active]:text-white hover:bg-[#E3F2FD]"
            >
              Cefdar-SB
            </TabsTrigger>
            <TabsTrigger 
              value="cefdarT"
              className="data-[state=active]:bg-[#0D5EBA] data-[state=active]:text-white hover:bg-[#E3F2FD]"
            >
              Cefdar-T
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
                      <p className="text-[#E53935] italic mb-8">
                        {product.tagline}
                      </p>

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

                        {/* Right Column - Features & Indications */}
                        <div>
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {product.indications && (
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
                          )}

                          {product.dosage && (
                            <div className="mt-8">
                              <p className="font-bold">
                                {product.dosage}
                              </p>
                              <p className="italic text-gray-600">
                                Consult prescribing information for protocols
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