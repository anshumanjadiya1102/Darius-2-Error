"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Product data with exact specifications
const flagshipProducts = [
  {
    name: 'Cefdar-SB Injection',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=800&fit=crop',
    tagline: 'BRUTAL ATTACK ON PATHOGENS',
    taglineColor: '#E53935',
    features: [
      'Covers Pseudomonas spp.',
      '90% cure rate',
      'For Meningitis/Septicemia'
    ]
  },
  {
    name: 'Cobadar-OD Capsules',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop',
    tagline: 'Once a Day for Healthy Neurons',
    taglineColor: '#0D5EBA',
    features: [
      'Manages Diabetic Neuropathy',
      'Reduces oxidative stress'
    ]
  },
  {
    name: 'Darical-Strong Softgel',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80',
    tagline: 'Maximum Bone Support',
    taglineColor: '#0D5EBA',
    features: [
      '40% elemental calcium',
      'With Vitamin K₂7'
    ]
  },
  {
    name: 'Darigesic-MR Tablets',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=800&fit=crop',
    tagline: 'Bring Back the Smile',
    taglineColor: '#0D5EBA',
    features: [
      'For Low Back Pain',
      'Muscle relaxant combo'
    ]
  },
  {
    name: 'Merotaz Injection',
    image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=800&h=800&fit=crop',
    tagline: 'Sure Shot Critical Care',
    taglineColor: '#0D5EBA',
    features: [
      '96% pathogen eradication'
    ]
  }
]

export default function FlagshipProductsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Flagship Products
        </h2>
        
        {/* Carousel with 5 visible cards */}
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {flagshipProducts.map((product, index) => (
              <CarouselItem 
                key={product.name} 
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-200">
                    {/* Product Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      {/* Product Name */}
                      <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2 min-h-[56px]">
                        {product.name}
                      </h3>
                      
                      {/* Tagline - single line with ellipsis if too long */}
                      <p 
                        className="text-sm mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ 
                          color: product.taglineColor || '#0D5EBA'
                        }}
                        title={product.tagline}
                      >
                        {product.tagline}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-2 mt-auto">
                        {product.features.map((feature, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <span className="mr-2 mt-1">•</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-4">
            <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative top-0 left-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}