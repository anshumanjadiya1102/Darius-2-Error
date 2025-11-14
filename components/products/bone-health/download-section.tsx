"use client"

import { FileDown, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Download section data
const downloads = [
  {
    title: "Download Prescribing Info (PDF)",
    href: "/downloads/coder's cafe tshirt.pdf",
    download: "DARIUS-Darical-Prescribing-Info.pdf",
    icon: FileDown
  },
  {
    title: "View Clinical Studies",
    href: "/downloads/Darius Pharma.pdf",
    download: "DARIUS-Darical-Clinical-Studies.pdf",
    icon: FileText
  }
]

// Download Section component
export default function DownloadSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold font-montserrat mb-8">
          Resources
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {downloads.map((download) => (
            <Button
              key={download.title}
              variant="outline"
              className="border-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-colors"
              asChild
            >
              <a 
                href={download.href}
                download={download.download}
                className="inline-flex items-center"
              >
                <download.icon className="mr-2 h-4 w-4" />
                {download.title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}