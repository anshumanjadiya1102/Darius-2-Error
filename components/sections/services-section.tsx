import { BeakerIcon, FlaskConical, Microscope } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Quality Medicines',
    description: 'Our pharmaceutical products meet the highest quality standards and regulatory requirements.',
    icon: BeakerIcon,
  },
  {
    title: 'Advanced Research',
    description: 'Continuous innovation through state-of-the-art research and development facilities.',
    icon: Microscope,
  },
  {
    title: 'Global Standards',
    description: 'Following international manufacturing practices and quality control protocols.',
    icon: FlaskConical,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}