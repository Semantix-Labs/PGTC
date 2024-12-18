'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const places = [
  {
    id: 1,
    name: 'KANDY',
    mainImage:  '/TopPlace/kandy.png',
    subImages: [
      '/TopPlace/kandy.png',
      '/TopPlace/kandy.png',
      '/TopPlace/kandy.png',
      '/TopPlace/kandy.png',
    
    ],
    subNames: ['SRI DALADA MALIGAWA', 'PERADENIYA GARDEN', 'KANDY LAKE', 'KANDY MUSEUM'],
  },
  {
    id: 2,
    name: 'SIGIRIYA',
    mainImage: '/TopPlace/sigiriya.jpeg',
    subImages: [
      '/TopPlace/sigiriya.jpeg',
      '/TopPlace/sigiriya.jpeg',
      '/TopPlace/sigiriya.jpeg',
      '/TopPlace/sigiriya.jpeg',
    
    ],
    subNames: ['LION ROCK', 'PIDURANGALA', 'SIGIRIYA MUSEUM','SIGIRIYA GARDEN'],
  },
  {
    id: 3,
    name: 'DAMBULLA',
    mainImage: '/TopPlace/3.jpeg',
    subImages: [
      '/TopPlace/3.jpeg',
      '/TopPlace/3.jpeg',
      '/TopPlace/3.jpeg',
      '/TopPlace/3.jpeg',
    
    ],
    subNames: ['CAVE TEMPLE', 'GOLDEN BUDDHA', 'RANGIRI STADIUM', 'DAMBULLA MUSEUM'],
  },
  {
    id: 4,
    name: 'MATHALE',
    mainImage: '/TopPlace/4.jpeg',
    subImages: [
        '/TopPlace/4.jpeg',
        '/TopPlace/4.jpeg',
        '/TopPlace/4.jpeg',
        '/TopPlace/4.jpeg',
     
    ],
    subNames: ['ALUVIHARA TEMPLE', 'SPICE GARDEN', 'RIVERSTON', 'MATHALE MUSEUM'],
  },
]

export default function TopPlacesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + places.length) % places.length)
  }

  const currentPlace = places[currentIndex]



  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-customGreen text-4xl md:text-6xl font-semibold text-center mb-12">
        Top Places Near You
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative group col-span-1 row-span-1 md:col-span-1 md:row-span-1 h-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-customGreen h-full w-full flex flex-col items-center justify-center text-white">
            <MapPin className="w-16 h-16 mb-4" />
            <h2 className="text-3xl font-bold">{currentPlace.name}</h2>
          </div>
        </div>

        <div className="relative group col-span-1 row-span-1 md:col-span-2 md:row-span-1 h-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src={currentPlace.mainImage}
            alt={currentPlace.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center text-white text-2xl lg:text-[48px] w-full font-bold z-10">
            {currentPlace.subNames[0]}
          </h2>
        </div>

        {currentPlace.subImages.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative group col-span-1 row-span-1 h-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={image}
              alt={currentPlace.subNames[index + 1]}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <h2 className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 text-center text-white text-2xl font-bold z-10">
              {currentPlace.subNames[index + 1]}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center bg-customGreen text-white rounded-full hover:bg-customLightGreen hover:text-customGreen transition-colors"
          aria-label="View previous places"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center bg-customGreen text-white rounded-full hover:bg-customLightGreen hover:text-customGreen transition-colors"
          aria-label="View next places"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

