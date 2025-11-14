import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

// Metadata for SEO
export const metadata: Metadata = {
  title: 'DARIUS Pharmaceuticals - Upholding the Good in Health | Best Pharma In Aurangabad Bihar',
  description: 'DARIUS Pharmaceuticals is a leading pharmaceutical company providing innovative solutions for bacterial infections, neuropathy & bone health.',
}

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/logos/Darius crop Logo.webp" type="image/webp" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}