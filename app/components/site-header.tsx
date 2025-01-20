"use client"

import { Mail, Menu, Phone } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { usePathname } from 'next/navigation'

import { Button } from "./ui/button";
import { VisuallyHidden } from "./visually-hidden"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from "./ui/sheet"
import Image from 'next/image'

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Golf Locations", href: "/locations" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 md:h-[138px]  w-full  bg-black/40 backdrop-blur-sm">
        <div className="container px-5 xl:px-auto mx-auto my-auto items-center h-[98px]">
          <div className="ml-auto flex items-center justify-end space-x-4 pt-3">
          <div className="hidden items-center font-medium space-x-4 md:flex">
            <Link href="tel:+94 773 938 932" className="flex items-center space-x-2 text-white">
            <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '> <Phone fill='#F8EBC6' className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" /></div> 
              <span>+94 773 938 932</span>
            </Link>
            <Link href="mailto:info@paradisegolftours.com" className="flex items-center space-x-2 text-white">
            <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '> <Mail className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" /></div> 
              <span>info@paradisegolftours.com</span>
            </Link>
          </div>
          <Link href="/packages" className="bg-customGreen hidden md:inline-block rounded-[12px] py-[6px] px-[24px] text-white hover:bg-[#2B5741]/90">Explore Tours</Link>
        </div>
      <div className="container mx-auto md:flex  items-center pt-5 justify-between">
        <div className="flex items-center justify-between">
       
        <Link href="/" className="mr-6 flex items-center ">
          <div className="md:h-[138px] md:w-auto w-12 h-12 rounded-lg md:-mt-[68px] bg-white overflow-hidden">
            <Image src="/logoB.jpeg" width={300} height={300} alt="Paradise Golf Tours Logo" className="object-cover h-full w-full" />
          </div>
         
        </Link>

        <Sheet  open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger  asChild>
            <Button variant="ghost" className="h-10 w-10 p-2 sm:hidden flex   justify-end">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full bg-black/40 backdrop-blur-sm">
            <SheetTitle>
              <VisuallyHidden className='text-white'>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <SheetDescription>
              <VisuallyHidden>Access site navigation links</VisuallyHidden>
            </SheetDescription>
            <div className="flex flex-col space-y-4 pt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=" text-[20px] font-semibold text-white transition-colors hover:text-white/80"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        </div>
        <nav className="hidden md:flex md:flex-1 justify-end items-end">
          <ul className="flex items-center space-x-6 lg:space-x-[80px]">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm lg:text-[20px] font-semibold text-white transition-colors hover:text-white/80 ${
                    pathname === item.href ? "border-b-2 border-white pb-2" : ""
                  }`}
                  
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      
      </div>
      </div>
    </header>
  )
}

