'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

const locations = [
  {
    id: 1,
    image: '/golf1.jpeg',
    city: 'Colombo',
    name: 'Royal Colombo Golf Club',
    subtitle: 'Blend of heritage and modernity',
    description: 'The second-oldest Royal Golf Club outside the UK, this city-center haven combines rich history, vibrant nature, wildlife, and a unique course bisected by an active rail line.',
    urlLocation: '/locations/nuwaraeliya'
  },
  {
    id: 2,
    image: '/golf1.jpeg',
    city: 'Nuwara Eliya',
    name: 'Nuwara Eliya Golf Club',
    subtitle: 'A golfing paradise in the hills',
    description: 'Nestled in the heart of Sri Lanka`s tea country, this historic club offers a unique golfing experience with breathtaking views of the surrounding mountains and lush tea plantations.',
     urlLocation: '/locations/nuwaraeliya'
  },
  {
    id: 3,
    image: '/golf1.jpeg',
    city: 'Hambantota',
    name: 'Shangri-La Golf Resort',
    subtitle: 'Modern luxury meets natural beauty',
    description: 'This world-class golf resort on the southern coast of Sri Lanka offers a challenging course with stunning ocean views, surrounded by natural lakes and indigenous flora and fauna.',
    urlLocation: '/locations/nuwaraeliya'
  },
  {
    id: 4,
    image: '/golf1.jpeg',
    city: 'Hambantota',
    name: 'Shangri-La Golf Resort',
    subtitle: 'Modern luxury meets natural beauty',
    description: 'This world-class golf resort on the southern coast of Sri Lanka offers a challenging course with stunning ocean views, surrounded by natural lakes and indigenous flora and fauna.',
    urlLocation: '/locations/nuwaraeliya'
  }
]

export default function GolfLocations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      isMobile
        ? (prevIndex + 1) % locations.length
        : (prevIndex + 1) % (locations.length - 2)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      isMobile
        ? (prevIndex - 1 + locations.length) % locations.length
        : (prevIndex - 1 + locations.length - 2) % (locations.length - 2)
    )
  }

  const visibleLocations = isMobile
    ? [locations[currentIndex]]
    : [
        locations[currentIndex % locations.length],
        locations[(currentIndex + 1) % locations.length],
        locations[(currentIndex + 2) % locations.length],
      ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-customGreen text-4xl md:text-6xl font-semibold text-center mb-8 md:mb-16">
        Golf Locations
      </h1>

      <div className="relative">
        <div className="flex flex-nowrap overflow-hidden">
          {visibleLocations.map((location) => (
            <div 
              key={location.id}
              className="w-full md:w-1/3 flex-shrink-0 transition-all duration-300 ease-in-out px-2"
            >
              <div className="border border-customGold rounded-[18px] overflow-hidden h-full">
                <div className="relative md:h-[237px]">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h2 className="text-customGreen text-2xl font-semibold text-center mb-2">
                    {location.city}
                  </h2>
                  <h3 className="text-customGreen  text-xl font-medium text-center mb-2">
                    {location.name}
                  </h3>
                  <p className="text-customGold text-[16px] font-normal text-center mb-4">
                    {location.subtitle}
                  </p>
                  <p className="text-customGreen text-[16px] font-medium text-center mb-6">
                    {location.description}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => router.push(location.urlLocation)}
                      className="px-6 py-2 border-2 border-customGreen text-customGreen rounded-[12px] hover:bg-customLightGreen transition-colors"
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-customGreen text-white rounded-full hover:bg-customLightGreen hover:text-customGreen transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-customGreen text-white rounded-full hover:bg-customLightGreen hover:text-customGreen transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

