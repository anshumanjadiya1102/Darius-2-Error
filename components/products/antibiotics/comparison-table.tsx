"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Comparison data for all products
const comparisonData = [
  {
    feature: "Composition",
    cefdar: "Ceftriaxone 1gm",
    cefdarSB: "+ Sulbactam 500mg",
    cefdarT: "+ Tazobactam 125mg"
  },
  {
    feature: "Resistance",
    cefdar: "Standard",
    cefdarSB: "Beta-lactamase",
    cefdarT: "Extended-spectrum"
  },
  {
    feature: "Best For",
    cefdar: "UTIs, Pneumonia",
    cefdarSB: "Meningitis",
    cefdarT: "Complicated UTIs"
  }
]

// Comparison Table component
export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold font-montserrat mb-8 text-center">
          Product Comparison
        </h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>Cefdar 1gm</TableHead>
                <TableHead>Cefdar-SB</TableHead>
                <TableHead>Cefdar-T</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow 
                  key={row.feature}
                  className="hover:bg-[#F5F5F5] transition-colors"
                >
                  <TableCell className="font-semibold">{row.feature}</TableCell>
                  <TableCell>{row.cefdar}</TableCell>
                  <TableCell>{row.cefdarSB}</TableCell>
                  <TableCell>{row.cefdarT}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}