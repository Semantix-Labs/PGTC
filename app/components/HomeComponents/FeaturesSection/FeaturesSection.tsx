import React from 'react'
import Image from 'next/image'

const features = [
  {
    icon: '/home/travel.png',
    title: "Personalized Tours",
    description: "We offers personalized tours, crafting unique travel experiences tailored to your interests and preferences."
  },
  {
    icon: '/home/2.png',
    title: "Expert Guides",
    description: "We offer expert guides ensuring personalized, insightful, and memorable travel experiences for every journey."
  },
  {
    icon: '/home/bag.png',
    title: "Scenic Locations",
    description: "PGTC offers breathtaking scenic locations, featuring lush greenery, serene landscapes, and tranquil natural beauty."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16  md:py-24">
      <div className="container mx-auto px-5 xl:px-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[72px] font-semibold text-center text-customGreen mb-16">
          Why Us?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5  text-center">
               <div className="w-[112px] h-[112px] flex my-auto rounded-full items-center md:items-start bg-customGreen relative min-w-[112px] ">
                <Image width={128} height={128} src={feature.icon} alt={feature.title} className="w-[66px] h-[66px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-customGold" />
              </div>
              <div>
              <h3 className="text-2xl font-bold text-start text-customGold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-customGreen text-[16px] text-start leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

