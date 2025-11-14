"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'Are DARIUS medicines FDA-approved?',
    answer: 'Yes, all our medicines are manufactured in FDA-approved facilities following strict quality control measures and regulatory guidelines.',
  },
  {
    question: 'Where does DARIUS distribute its products?',
    answer: 'DARIUS has a widespread distribution network across India and exports to over 30 countries worldwide.',
  },
  {
    question: 'How does DARIUS ensure product safety?',
    answer: 'We maintain rigorous quality control processes, from raw material selection to final product testing, ensuring all medicines meet international safety standards.',
  },
  {
    question: 'Can I order medicines directly from the website?',
    answer: 'For bulk orders and business inquiries, please contact our sales team. Individual prescriptions should be filled through authorized pharmacies.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}