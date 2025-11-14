"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, Plus, Check, Image as ImageIcon, Link as LinkIcon, ExternalLink, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Common medical conditions for quick selection
const commonConditions = [
  'Pneumonia',
  'UTI',
  'Meningitis',
  'Septicemia',
  'Bronchitis',
  'Skin Infections',
  'Bone Fracture',
  'Osteoporosis',
]

// Props interface
interface ProductFormProps {
  category: string
  onClose: () => void
}

// Product Form component
export default function ProductForm({ category, onClose }: ProductFormProps) {
  // Form steps and state
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6
  const [showPreview, setShowPreview] = useState(false)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    category,
    dosage: {
      value: '',
      unit: 'mg',
      route: 'Oral'
    },
    image: {
      type: 'upload' as 'upload' | 'link',
      file: null as File | null,
      url: '',
      preview: ''
    },
    features: [''],
    indications: {
      common: [] as string[],
      custom: ['']
    },
    comparison: {
      enabled: false,
      data: [
        { feature: 'Efficacy', thisProduct: '', competitorA: '', competitorB: '' }
      ]
    },
    pdfs: {
      prescribing: null as File | null,
      clinical: null as File | null,
      administration: null as File | null
    }
  })

  // Character count validation
  const nameCharCount = formData.name.length
  const taglineCharCount = formData.tagline.length
  const isNameValid = nameCharCount > 0 && nameCharCount <= 60
  const isTaglineValid = taglineCharCount <= 100

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create preview URL
      const preview = URL.createObjectURL(file)
      setFormData({
        ...formData,
        image: {
          ...formData.image,
          type: 'upload',
          file,
          preview
        }
      })
    }
  }

  // Handle image URL input
  const handleImageUrl = (url: string) => {
    setFormData({
      ...formData,
      image: {
        ...formData.image,
        type: 'link',
        url,
        preview: url
      }
    })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission
    onClose()
  }

  // Render preview modal
  const renderPreview = () => {
    return (
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Product Preview</DialogTitle>
            <div className="flex gap-2 mt-4">
              <Button
                variant={previewMode === 'desktop' ? 'default' : 'outline'}
                onClick={() => setPreviewMode('desktop')}
              >
                Desktop
              </Button>
              <Button
                variant={previewMode === 'mobile' ? 'default' : 'outline'}
                onClick={() => setPreviewMode('mobile')}
              >
                Mobile
              </Button>
            </div>
          </DialogHeader>

          <div className={`mt-4 ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
            {/* Product Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product Image */}
              <div className="relative h-[300px] md:h-[600px]">
                {formData.image.preview && (
                  <Image
                    src={formData.image.preview}
                    alt={formData.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-2xl font-bold mb-2">{formData.name}</h2>
                <p className="text-[#E53935] italic mb-6">{formData.tagline}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Indications */}
                <div>
                  <h3 className="text-xl font-semibold text-[#0D5EBA] underline mb-4">
                    Recommended For:
                  </h3>
                  <ul className="space-y-2">
                    {[...formData.indications.common, ...formData.indications.custom].map((indication, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {indication}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                <div className="mt-8">
                  <p className="font-bold">
                    {formData.dosage.value} {formData.dosage.unit} via {formData.dosage.route}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table Section */}
            {formData.comparison.enabled && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold font-montserrat mb-8 text-center">
                  Product Comparison
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Feature</TableHead>
                      <TableHead>This Product</TableHead>
                      <TableHead>Competitor A</TableHead>
                      <TableHead>Competitor B</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {formData.comparison.data.map((row, index) => (
                      <TableRow 
                        key={index}
                        className="hover:bg-[#F5F5F5] transition-colors"
                      >
                        <TableCell className="font-semibold">{row.feature}</TableCell>
                        <TableCell>{row.thisProduct}</TableCell>
                        <TableCell>{row.competitorA}</TableCell>
                        <TableCell>{row.competitorB}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {/* Download Resources Section */}
            {(formData.pdfs.prescribing || formData.pdfs.clinical || formData.pdfs.administration) && (
              <div className="text-center">
                <h3 className="text-2xl font-bold font-montserrat mb-8">
                  Download Resources
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {formData.pdfs.prescribing && (
                    <Button
                      variant="outline"
                      className="border-[#0D5EBA] hover:bg-[#E3F2FD] transition-colors"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Prescribing Information (PDF)
                    </Button>
                  )}
                  {formData.pdfs.clinical && (
                    <Button
                      variant="outline"
                      className="border-[#0D5EBA] hover:bg-[#E3F2FD] transition-colors"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Clinical Trial Data
                    </Button>
                  )}
                  {formData.pdfs.administration && (
                    <Button
                      variant="outline"
                      className="border-[#0D5EBA] hover:bg-[#E3F2FD] transition-colors"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Administration Guidelines
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Render form step content
  const renderStepContent = () => {
    switch (currentStep) {
      // Step 1: Product Identity
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                placeholder="e.g., Cefdar-XP 2gm Injection"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={!isNameValid ? 'border-red-500' : ''}
              />
              <p className="text-sm text-gray-500 mt-1">
                {nameCharCount}/60 characters
              </p>
            </div>
            <div>
              <Label htmlFor="tagline">Product Tagline</Label>
              <Input
                id="tagline"
                placeholder="e.g., Next-Gen Antibiotic Defense"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className={!isTaglineValid ? 'border-red-500' : ''}
              />
              <p className="text-sm text-gray-500 mt-1">
                {taglineCharCount}/100 characters
              </p>
            </div>
            <div>
              <Label>Category</Label>
              <Input
                value={category}
                disabled
                className="bg-gray-50"
              />
            </div>
          </div>
        )

      // Step 2: Dosage Information
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Dosage Information</Label>
              <div className="flex gap-4">
                <Input
                  type="number"
                  placeholder="Value"
                  value={formData.dosage.value}
                  onChange={(e) => setFormData({
                    ...formData,
                    dosage: { ...formData.dosage, value: e.target.value }
                  })}
                  className="w-32"
                />
                <Select
                  value={formData.dosage.unit}
                  onValueChange={(value) => {
                    // Auto-convert units
                    let newValue = formData.dosage.value
                    if (formData.dosage.unit === 'g' && value === 'mg') {
                      newValue = String(Number(newValue) * 1000)
                    } else if (formData.dosage.unit === 'mg' && value === 'g') {
                      newValue = String(Number(newValue) / 1000)
                    }
                    setFormData({
                      ...formData,
                      dosage: { ...formData.dosage, value: newValue, unit: value }
                    })
                  }}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mg">mg</SelectItem>
                    <SelectItem value="mcg">mcg</SelectItem>
                    <SelectItem value="g">g</SelectItem>
                  </SelectContent>
                </Select>
                <span className="flex items-center">via</span>
                <Select
                  value={formData.dosage.route}
                  onValueChange={(value) => setFormData({
                    ...formData,
                    dosage: { ...formData.dosage, route: value }
                  })}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Oral">Oral</SelectItem>
                    <SelectItem value="IV">IV</SelectItem>
                    <SelectItem value="IM">IM</SelectItem>
                    <SelectItem value="Topical">Topical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      // Step 3: Key Features + Product Image
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Image Upload/URL */}
            <div className="space-y-4">
              <Label>Product Image</Label>
              <div className="flex gap-4 mb-4">
                <Button
                  variant={formData.image.type === 'upload' ? 'default' : 'outline'}
                  onClick={() => setFormData({
                    ...formData,
                    image: { ...formData.image, type: 'upload' }
                  })}
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <Button
                  variant={formData.image.type === 'link' ? 'default' : 'outline'}
                  onClick={() => setFormData({
                    ...formData,
                    image: { ...formData.image, type: 'link' }
                  })}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Image URL
                </Button>
              </div>

              {formData.image.type === 'upload' ? (
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum 800×800px, white background
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Input
                    placeholder="Enter image URL"
                    value={formData.image.url}
                    onChange={(e) => handleImageUrl(e.target.value)}
                  />
                  {formData.image.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(formData.image.url, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Check Image
                    </Button>
                  )}
                </div>
              )}

              {/* Image Preview */}
              {formData.image.preview && (
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={formData.image.preview}
                    alt="Product preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Column: Key Features */}
            <div>
              <Label>Key Features</Label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <Input
                    value={feature}
                    placeholder="e.g., 99% bacterial eradication rate"
                    onChange={(e) => {
                      const newFeatures = [...formData.features]
                      newFeatures[index] = e.target.value
                      setFormData({ ...formData, features: newFeatures })
                    }}
                  />
                  {index === formData.features.length - 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setFormData({
                        ...formData,
                        features: [...formData.features, '']
                      })}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const newFeatures = formData.features.filter((_, i) => i !== index)
                        setFormData({ ...formData, features: newFeatures })
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      // Step 4: Recommended For (Indications)
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>Common Conditions</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {commonConditions.map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox
                      id={condition}
                      checked={formData.indications.common.includes(condition)}
                      onCheckedChange={(checked) => {
                        const newCommon = checked
                          ? [...formData.indications.common, condition]
                          : formData.indications.common.filter(c => c !== condition)
                        setFormData({
                          ...formData,
                          indications: { ...formData.indications, common: newCommon }
                        })
                      }}
                    />
                    <label
                      htmlFor={condition}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Additional Indications</Label>
              <p className="text-sm text-gray-500 italic mb-2">This section is optional</p>
              {formData.indications.custom.map((indication, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <Input
                    value={indication}
                    placeholder="Enter custom indication"
                    onChange={(e) => {
                      const newCustom = [...formData.indications.custom]
                      newCustom[index] = e.target.value
                      setFormData({
                        ...formData,
                        indications: { ...formData.indications, custom: newCustom }
                      })
                    }}
                  />
                  {index === formData.indications.custom.length - 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setFormData({
                        ...formData,
                        indications: {
                          ...formData.indications,
                          custom: [...formData.indications.custom, '']
                        }
                      })}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const newCustom = formData.indications.custom.filter((_, i) => i !== index)
                        setFormData({
                          ...formData,
                          indications: { ...formData.indications, custom: newCustom }
                        })
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      // Step 5: Product Comparison
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="enableComparison"
                checked={formData.comparison.enabled}
                onCheckedChange={(checked) => setFormData({
                  ...formData,
                  comparison: { ...formData.comparison, enabled: !!checked }
                })}
              />
              <label
                htmlFor="enableComparison"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Add comparison data
              </label>
            </div>

            {formData.comparison.enabled && (
              <div className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>This Product</TableHead>
                      <TableHead>Competitor A</TableHead>
                      <TableHead>Competitor B</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {formData.comparison.data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Input
                            value={row.feature}
                            onChange={(e) => {
                              const newData = [...formData.comparison.data]
                              newData[index].feature = e.target.value
                              setFormData({
                                ...formData,
                                comparison: { ...formData.comparison, data: newData }
                              })
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={row.thisProduct}
                            onChange={(e) => {
                              const newData = [...formData.comparison.data]
                              newData[index].thisProduct = e.target.value
                              setFormData({
                                ...formData,
                                comparison: { ...formData.comparison, data: newData }
                              })
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={row.competitorA}
                            onChange={(e) => {
                              const newData = [...formData.comparison.data]
                              newData[index].competitorA = e.target.value
                              setFormData({
                                ...formData,
                                comparison: { ...formData.comparison, data: newData }
                              })
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={row.competitorB}
                            onChange={(e) => {
                              const newData = [...formData.comparison.data]
                              newData[index].competitorB = e.target.value
                              setFormData({
                                ...formData,
                                comparison: { ...formData.comparison, data: newData }
                              })
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    const newData = [...formData.comparison.data, {
                      feature: '',
                      thisProduct: '',
                      competitorA: '',
                      competitorB: ''
                    }]
                    setFormData({
                      ...formData,
                      comparison: { ...formData.comparison, data: newData }
                    })
                  }}
                >
                  Add Row
                </Button>
              </div>
            )}
          </div>
        )

      // Step 6: PDF Uploads + Final Review
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <Label>Prescribing Information (PDF)</Label>
              <Input
                type="file"
                accept=".pdf"
                required
                onChange={(e) => setFormData({
                  ...formData,
                  pdfs: { ...formData.pdfs, prescribing: e.target.files?.[0] || null }
                })}
              />
              <p className="text-sm text-red-500 mt-1">
                Required - Must contain dosage and contraindications
              </p>
            </div>

            <div>
              <Label>Clinical Trial Data (Optional)</Label>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) => setFormData({
                  ...formData,
                  pdfs: { ...formData.pdfs, clinical: e.target.files?.[0] || null }
                })}
              />
            </div>

            <div>
              <Label>Administration Guidelines (Optional)</Label>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) => setFormData({
                  ...formData,
                  pdfs: { ...formData.pdfs, administration: e.target.files?.[0] || null }
                })}
              />
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPreview(true)}
              >
                Preview
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Step completion status
  const getStepStatus = (step: number) => {
    switch (step) {
      case 1:
        return isNameValid && isTaglineValid
      case 2:
        return formData.dosage.value && formData.dosage.unit && formData.dosage.route
      case 3:
        return formData.image.preview && formData.features.some(f => f.trim())
      case 4:
        return formData.indications.common.length > 0 || formData.indications.custom.some(i => i.trim())
      case 5:
        return !formData.comparison.enabled || formData.comparison.data.some(d => d.feature.trim())
      case 6:
        return !!formData.pdfs.prescribing
      default:
        return false
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Add New {category} Product</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    index + 1 < currentStep
                      ? 'bg-green-500 text-white'
                      : index + 1 === currentStep
                      ? 'bg-[#0D5EBA] text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {index + 1 < currentStep ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`h-1 w-12 ${
                      index + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Form content */}
        {renderStepContent()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            type={currentStep === totalSteps ? 'submit' : 'button'}
            onClick={() => {
              if (currentStep < totalSteps && getStepStatus(currentStep)) {
                setCurrentStep(currentStep + 1)
              }
            }}
            disabled={currentStep < totalSteps && !getStepStatus(currentStep)}
          >
            {currentStep === totalSteps ? 'Submit' : 'Next'}
          </Button>
        </div>
      </form>

      {/* Preview Modal */}
      {renderPreview()}
    </motion.div>
  )
}