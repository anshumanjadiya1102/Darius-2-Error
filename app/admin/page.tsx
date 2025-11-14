// Import necessary components and utilities
import AdminDashboard from '@/components/admin/dashboard'

// SEO Metadata
export const metadata = {
  title: 'Admin Dashboard | DARIUS Pharmaceuticals',
  description: 'Manage pharmaceutical products and content',
}

// Main Admin page component
export default function AdminPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <AdminDashboard />
    </main>
  )
}