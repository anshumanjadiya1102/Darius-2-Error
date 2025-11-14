"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Settings } from 'lucide-react'

// Navigation menu items with their respective sub-items
const navigation = [
  { 
    name: 'Home', 
    href: '/' 
  },
  {
    name: 'Products',
    items: [
      { name: 'Antibiotics', description: 'Cefdar series', href: '/products/antibiotics' },
      { name: 'Neurohealth', description: 'Cobadar products', href: '/products/neurohealth' },
      { name: 'Bone Health', description: 'Darical products', href: '/products/bone-health' },
      { name: 'Pain Management', description: 'Darigesic series', href: '/products/pain-management' },
      { name: 'Pediatric Care', description: 'Cypodar, UP-Energy Junior', href: '/products/pediatric-care' },
      { name: 'Critical Care', description: 'Merotaz, Daritaz-4.5', href: '/products/critical-care' },
      { name: 'Gastrointestinal', description: 'Pantodar, Esowan', href: '/products/gastrointestinal' },
      { name: 'Hematology', description: 'Ferodar-XT', href: '/products/hematology' },
    ]
  },
  {
    name: 'About Us',
    items: [
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Quality Certifications', href: '/about/certifications' },
    ]
  },
  {
    name: 'Therapeutic Areas',
    items: [
      { name: 'Bacterial Infections', href: '/therapeutic/bacterial-infections' },
      { name: 'Neuropathic Conditions', href: '/therapeutic/neuropathic-conditions' },
      { name: 'Bone Disorders', href: '/therapeutic/bone-disorders' },
      { name: 'Pain & Inflammation', href: '/therapeutic/pain-inflammation' },
      { name: 'Pediatric Health', href: '/therapeutic/pediatric-health' },
      { name: 'GI Disorders', href: '/therapeutic/gi-disorders' },
    ]
  },
  { 
    name: 'Contact Us', 
    href: '/contact' 
  },
]

// Header component with responsive navigation
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img 
              src="/logos/darius-logo-post.png" 
              alt="Darius Logo" 
              className="h-12 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:max-w-none">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  {navigation.map((item) => (
                    <div key={item.name} className="py-6">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-base font-semibold"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <>
                          <div className="px-3 py-2 text-base font-semibold">{item.name}</div>
                          <div className="ml-4 space-y-2">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#0D5EBA]">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="bg-transparent border-none hover:bg-gray-100">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact button and Admin icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            asChild
            className="hover:bg-[#E3F2FD]"
          >
            <Link href="/admin">
              <Settings className="h-5 w-5 text-[#0D5EBA]" />
              <span className="sr-only">Admin Panel</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}