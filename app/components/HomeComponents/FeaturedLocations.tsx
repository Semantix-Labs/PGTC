'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface Location {
  id: number
  name: string
  image: string
}

const locations: Location[] = [
  {
    id: 1,
    name: "Colombo",
    image: "/man.png",
  },
  {
    id: 2,
    name: "Colombo",
    image: "/home.png",
  },
  {
    id: 3,
    name: "Colombo",
    image: "/home.png",
  },
  {
    id: 4,
    name: "Colombo",
    image: "/home.png",
  },
  {
    id: 5,
    name: "Colombo",
    image: "/home.png",
  },
]

export default function FeaturedLocations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    )
  }

  // Calculate visible cards based on current index
  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % locations.length
      cards.push(locations[index])
    }
    return cards
  }

  return (
    <div className="bg-[#f2f4ef] py-16 px-4">
      <div className="container mx-auto">
      <h2 
          className="text-4xl md:text-[72px] font-semibold text-center mb-16 md:mb-20"
          style={{ color: '#2E5339' }}
        >
          Featured Golf Locations
        </h2>
        
        <div className="relative">
          <div className="flex gap-8 justify-center">
            {getVisibleCards().map((location, index) => (
              <div
                key={`${location.id}-${index}`}
                className={`bg-white xl:w-[282px] lg:h-[240px] w-full xl:h-[400px] rounded-3xl border-[#C7A041] border-[2px] overflow-hidden  md:w-[calc(33.333%-1rem)] transition-all duration-500 ${
                  index === 1 ? 'block' : 'hidden md:block'
                }`}
              >
                 <div className="relative xl:w-[282px] h-[240px] w-full xl:h-[313px] aspect-[4/3]">
                  <Image
                    src={location.image}
                    alt={`Golf course in ${location.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-[#2d523f] text-xl font-semibold">
                    {location.name}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-[#2d523f]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="bg-[#2d523f] text-white rounded-full p-4 hover:bg-[#234232] transition-colors"
            aria-label="Previous location"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#2d523f] text-white rounded-full p-4 hover:bg-[#234232] transition-colors"
            aria-label="Next location"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

