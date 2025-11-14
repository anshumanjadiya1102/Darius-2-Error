import { Heart, Leaf, Recycle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const sustainabilityInitiatives = [
  {
    title: 'Green Manufacturing',
    description: 'Implementing sustainable production processes to minimize environmental impact',
    icon: Recycle,
  },
  {
    title: 'Community Healthcare',
    description: 'Regular free medical camps and healthcare support for local communities',
    icon: Heart,
  },
  {
    title: 'Eco-Friendly Packaging',
    description: 'Using recyclable materials and reducing packaging waste',
    icon: Leaf,
  },
]

export default function SustainabilitySection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Sustainability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityInitiatives.map((initiative) => (
            <Card key={initiative.title}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <initiative.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}