import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D5EBA] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info with improved spacing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">DARIUS</h2>
            <p className="text-sm leading-relaxed">
              Upholding the Good in Health through innovative pharmaceutical solutions.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((SocialIcon, i) => (
                <Link
                  key={i}
                  href={SocialIcon.href}
                  className="text-white/80 transition hover:text-white hover:scale-110"
                  aria-label={`Follow us on ${SocialIcon.icon.displayName}`}
                >
                  <SocialIcon.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links with better hover effects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'About Us', href: '/about' },
                { name: 'Therapeutic Areas', href: '/therapeutic' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition hover:text-white hover:pl-1 hover:font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications with badges style */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Certifications</h3>
            <div className="mt-4 space-y-3">
              {['ISO 9001', 'WHO-GMP', 'FDA Approved'].map((cert) => (
                <div key={cert} className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-white/80"></span>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-xs italic text-white/70">
              <p>For Healthcare Professionals Only</p>
              <p>Prescription Products</p>
            </div>
          </div>

          {/* Legal and contact with improved structure */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Use', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/80 transition hover:text-white hover:pl-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <address className="mt-2 not-italic text-sm text-white/80">
                <p>123 Pharma Lane</p>
                <p>Aurangabad Bihar, PN 12345</p>
                <p className="mt-2">info@dariuspharma.com</p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright with developer credit */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} DARIUS Pharmaceuticals. All Rights Reserved.
            </p>
            <p className="mt-4 text-sm text-white/60 md:mt-0">
              Crafted with care by{' '}
              <Link 
                href="https://azfaralam.xyz" 
                target="_blank"
                rel="noopener"
                className="font-medium text-white/80 hover:text-white transition"
              >
                Azfar Alam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}