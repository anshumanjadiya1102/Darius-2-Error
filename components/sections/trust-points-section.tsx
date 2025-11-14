import { BadgeCheck, Globe2, Handshake, Microscope, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const trustPoints = [
  {
    title: 'High-Quality Standards',
    description: 'GMP & FDA-approved manufacturing facilities ensuring top-quality medicines',
    icon: BadgeCheck,
  },
  {
    title: 'Advanced R&D',
    description: 'Cutting-edge pharmaceutical innovations through continuous research',
    icon: Microscope,
  },
  {
    title: 'Global Reach',
    description: 'Supplying medicines worldwide with established distribution networks',
    icon: Globe2,
  },
  {
    title: 'Strong Ethical Values',
    description: 'Unwavering commitment to transparency and integrity',
    icon: Handshake,
  },
  {
    title: 'Fast & Reliable Delivery',
    description: 'Ensuring timely supply of essential medicines globally',
    icon: Rocket,
  },
]

export default function TrustPointsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DARIUS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <Card key={point.title} className="border-t-4 border-[#007BFF]">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <point.icon className="h-8 w-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}