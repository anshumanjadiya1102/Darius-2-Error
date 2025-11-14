import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    content: "DARIUS Limited's commitment to quality and innovation is remarkable. Their products have consistently shown excellent results.",
    author: "Dr. Rajesh Kumar",
    role: "Senior Physician, Bihar Medical College"
  },
  {
    content: "Working with DARIUS has been a pleasure. Their dedication to maintaining high standards sets them apart in the industry.",
    author: "Dr. Priya Singh",
    role: "Chief Medical Officer, City Hospital"
  },
  {
    content: "The quality and effectiveness of DARIUS products have made them our trusted choice for patient care.",
    author: "Dr. Amit Patel",
    role: "Director, Healthcare Solutions"
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}