"use client"

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const successStories = [
  {
    title: 'Improving Rural Healthcare Access',
    challenge: 'Limited access to quality medicines in rural areas',
    solution: 'Established local distribution networks and mobile medical units',
    impact: 'Reached over 1000 villages and provided essential medicines to 100,000+ patients',
  },
  {
    title: 'Innovation in Chronic Disease Management',
    challenge: 'High cost of chronic disease medications',
    solution: 'Developed cost-effective alternatives through R&D',
    impact: 'Reduced treatment costs by 40% while maintaining efficacy',
  },
  {
    title: 'Emergency Medicine Supply Chain',
    challenge: 'Delays in emergency medicine distribution',
    solution: 'Implemented AI-powered supply chain management',
    impact: 'Reduced delivery time by 60% in emergency situations',
  },
]

export default function SuccessStoriesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#007BFF]">Challenge:</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#007BFF]">Solution:</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#007BFF]">Impact:</h4>
                        <p className="text-gray-600">{story.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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