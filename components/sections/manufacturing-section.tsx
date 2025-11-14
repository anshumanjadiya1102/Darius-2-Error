import { BeakerIcon, ChevronRight, Factory, Microscope, PackageCheck, TruckIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const manufacturingSteps = [
  {
    step: 'Step 1: Research & Formulation',
    description: 'Extensive research and precise formulation development',
    icon: Microscope,
  },
  {
    step: 'Step 2: Raw Material Selection',
    description: 'Careful selection and testing of high-quality ingredients',
    icon: BeakerIcon,
  },
  {
    step: 'Step 3: Production',
    description: 'State-of-the-art manufacturing with strict quality control',
    icon: Factory,
  },
  {
    step: 'Step 4: Quality Testing',
    description: 'Rigorous testing and quality assurance processes',
    icon: PackageCheck,
  },
  {
    step: 'Step 5: Distribution',
    description: 'Efficient distribution ensuring product integrity',
    icon: TruckIcon,
  },
]

export default function ManufacturingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {manufacturingSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <step.icon className="h-12 w-12 text-[#007BFF] mb-4" />
                    <h3 className="font-semibold mb-2">{step.step}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
              {index < manufacturingSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-6 w-6 text-[#007BFF]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}