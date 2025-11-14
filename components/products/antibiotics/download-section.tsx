"use client"

import { FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Download section data with actual file paths
const downloads = [
  {
    title: "Prescribing Information (PDF)",
    href: "/downloads/Darius Pharma.pdf", // Updated file path
    download: "DARIUS-Cefdar-Prescribing-Info.pdf" // Updated file name
  },
  {
    title: "Clinical Trial Data",
    href: "/downloads/Darius Pharma.pdf",
    download: "DARIUS-Cefdar-Clinical-Trials.pdf"
  },
  {
    title: "Administration Guidelines",
    href: "/downloads/Darius Pharma.pdf",
    download: "DARIUS-Cefdar-Administration.pdf"
  }
]

// Download Section component
export default function DownloadSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold font-montserrat mb-8">
          Download Resources
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {downloads.map((download) => (
            <Button
              key={download.title}
              variant="outline"
              className="border-[#0D5EBA] hover:bg-[#E3F2FD] transition-colors"
              asChild
            >
              <a 
                href={download.href}
                download={download.download}
                className="inline-flex items-center"
              >
                <FileDown className="mr-2 h-4 w-4" />
                {download.title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}