"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Pill, 
  Bone, 
  Baby, 
  Atom, 
  Brain, 
  AlertTriangle, 
  Ambulance, 
  Droplet 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import ProductTable from '@/components/admin/product-table'
import ProductForm from '@/components/admin/product-form'

// Category data matching navbar structure
const categories = [
  { 
    name: 'Antibiotics',
    icon: Pill,
    productCount: 3,
    products: [
      { name: 'Cefdar 1gm', type: 'IV', lastUpdated: '2024-03-20' },
      { name: 'Cefdar-SB', type: 'IV', lastUpdated: '2024-02-15' },
      { name: 'Cefdar-T', type: 'IV', lastUpdated: '2024-01-10' }
    ]
  },
  { 
    name: 'Bone Health',
    icon: Bone,
    productCount: 2,
    products: [
      { name: 'Darical-Plus', type: 'Tablet', lastUpdated: '2024-03-15' },
      { name: 'Darical Strong', type: 'Softgel', lastUpdated: '2024-02-20' }
    ]
  },
  { 
    name: 'Pediatric Care',
    icon: Baby,
    productCount: 2,
    products: [
      { name: 'Cypodar', type: 'Syrup', lastUpdated: '2024-03-10' },
      { name: 'UP-Energy Junior', type: 'Tablet', lastUpdated: '2024-02-25' }
    ]
  },
  { 
    name: 'Gastrointestinal',
    icon: Atom,
    productCount: 2,
    products: [
      { name: 'Pantodar', type: 'Tablet', lastUpdated: '2024-03-05' },
      { name: 'Esowan', type: 'Capsule', lastUpdated: '2024-02-10' }
    ]
  },
  { 
    name: 'Neurohealth',
    icon: Brain,
    productCount: 2,
    products: [
      { name: 'Cobadar', type: 'Tablet', lastUpdated: '2024-03-01' },
      { name: 'Cobadar-OD', type: 'Capsule', lastUpdated: '2024-02-05' }
    ]
  },
  { 
    name: 'Pain Management',
    icon: AlertTriangle,
    productCount: 1,
    products: [
      { name: 'Darigesic-MR', type: 'Tablet', lastUpdated: '2024-01-20' }
    ]
  },
  { 
    name: 'Critical Care',
    icon: Ambulance,
    productCount: 2,
    products: [
      { name: 'Merotaz', type: 'Injection', lastUpdated: '2024-01-15' },
      { name: 'Daritaz-4.5', type: 'Injection', lastUpdated: '2024-01-10' }
    ]
  },
  { 
    name: 'Hematology',
    icon: Droplet,
    productCount: 1,
    products: [
      { name: 'Ferodar-XT', type: 'Tablet', lastUpdated: '2024-01-05' }
    ]
  }
]

// Admin Dashboard component
export default function AdminDashboard() {
  // State for selected category and form visibility
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  // Get selected category data
  const categoryData = categories.find(cat => cat.name === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-[28px] font-bold font-montserrat text-[#0D5EBA] mb-4">
        Manage Pharmaceutical Products
      </h1>

      {!selectedCategory ? (
        // Category selection view
        <>
          <p className="text-lg font-opensans mb-8">Select a Products category:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="cursor-pointer hover:border-[#0D5EBA] transition-colors"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <category.icon className="w-8 h-8 text-[#0D5EBA]" />
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-600">
                          {category.productCount} Products
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        // Product management view
        <div>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-6 text-[#0D5EBA] hover:underline"
          >
            ← Back to Categories
          </button>

          {showForm ? (
            <ProductForm 
              category={selectedCategory}
              onClose={() => setShowForm(false)}
            />
          ) : (
            <ProductTable 
              category={selectedCategory}
              products={categoryData?.products || []}
              onAddNew={() => setShowForm(true)}
            />
          )}
        </div>
      )}
    </div>
  )
}