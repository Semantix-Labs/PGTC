"use client"

import { useState } from "react"
import { Facebook, Youtube, Instagram, Twitter, Send, Phone, Mail, MapPin } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="bg-customLightGreen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 text-[20px] md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full" />
              <span className="text-customGreen font-bold text-xl">LOGO</span>
            </div>
            <p className="text-[#393939] text-[20px]">
              Lorem ipsum dolor sit amet uion ullamco laboris nisi ut aliquip ex ea commodomy.
            </p>
            <div className="space-y-2">
              <h3 className="text-customGreen font-semibold">Subscribe Us</h3>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Send your Email"
                  className="flex-1 px-4 py-2 bg-white text-customGray placeholder-customGray rounded-l-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-customGreen text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* About PGTC Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">About PGTC</h3>
            <ul className="space-y-2 text-[#393939]">
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-customGreen transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Policy Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">Booking Policy</h3>
            <ul className="space-y-2 text-[#393939]">
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-customGreen transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">Contact Us</h3>
            <ul className="space-y-2 text-customGray">
              {[
                { icon: <Phone fill='#F8EBC6' className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "+94 556 7894" },
                { icon: <Mail  className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "Lorem ipsum@gmail.com" },
                { icon: <MapPin  className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "Lorem ipsum dolor" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '>{item.icon}</div>  
                  <span className="text-[#393939]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex space-x-2 pt-4">
              <SocialLink href="#" icon={<Facebook className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Youtube className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Instagram className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} />
              <SocialLink href="#" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              } />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-customGreen text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Copyrights PGTC .2024 All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-customGreen text-white hover:bg-opacity-90 shadow-xl transition-colors"
    >
      {icon}
    </Link>
  )
}

