"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Comparison data for both products
const comparisonData = [
  {
    feature: "Key Ingredient",
    daricalPlus: "Calcium Citrate",
    daricalStrong: "Calcitriol + Vitamin K2"
  },
  {
    feature: "Best For",
    daricalPlus: "General Bone Health",
    daricalStrong: "Severe Bone Loss"
  },
  {
    feature: "Dosage Form",
    daricalPlus: "Tablet",
    daricalStrong: "Softgel Capsule"
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
                <TableHead>Darical-Plus</TableHead>
                <TableHead>Darical Strong</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow 
                  key={row.feature}
                  className="hover:bg-[#F5F5F5] transition-colors"
                >
                  <TableCell className="font-semibold">{row.feature}</TableCell>
                  <TableCell>{row.daricalPlus}</TableCell>
                  <TableCell>{row.daricalStrong}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}