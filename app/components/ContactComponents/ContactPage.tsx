import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Twitter, Music } from 'lucide-react'
import { Card, CardContent } from "../ui/card"

export default function ContactPage() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Music, href: "#", label: "TikTok" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@paradisegolftours.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+94 773 938 932",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Colombo/Sri Lanka",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392611564!2d79.8251!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1639998965435!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-[#2F5233] mb-4">Get in Touch</h1>
            <p className="text-lg text-[#D4AF37]">
              Contact us for scenic golf tour, luxury packages, and unforgettable golf vacation in Sri Lanka.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 rounded-full bg-[#2F5233] flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F5233]">{item.title}</h3>
                    <p className="text-[#D4AF37]">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2F5233] mb-4">Follow Us:</h2>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-[#2F5233] flex items-center justify-center hover:bg-[#1F3521] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

