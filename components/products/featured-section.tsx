"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from '@/components/ui/card'

// Featured products data
const featuredProducts = [
  {
    name: 'CardioGuard Plus',
    description: 'Advanced cardiovascular protection with proven efficacy',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'ImmunoBoost Pro',
    description: 'Comprehensive immune system support formula',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'VitaComplete',
    description: 'All-in-one daily vitamin and mineral supplement',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800&auto=format&fit=crop&q=60',
  },
]

// Featured products section component
export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Products</h2>
        
        {/* Carousel for featured products */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredProducts.map((product, index) => (
              <CarouselItem key={product.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}