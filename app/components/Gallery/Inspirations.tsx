'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'

interface MediaItem {
  id: number
  type: 'image' | 'video'
  src: string
  thumbnail: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/home/gallery3/1.png',
    thumbnail: '/home/gallery3/1.png',
    alt: 'Beach relaxation scene'
  },
  {
    id: 2,
    type: 'image',
    src: '/home/gallery3/7.png',
    thumbnail: '/home/gallery3/7.png',
    alt: 'Spa treatment'
  },
  {
    id: 3,
    type: 'image',
    src: '/home/gallery3/6.jpeg',
    thumbnail: '/home/gallery3/6.jpeg',
    alt: 'Cycling activity'
  },
  {
    id: 4,
    type: 'image',
    src: '/home/gallery3/3.jpeg',
    thumbnail:'/home/gallery3/3.jpeg',
    alt: 'Beach scene'
  },
  {
    id: 5,
    type: 'image',
    src:'/home/gallery3/5.png',
    thumbnail:'/home/gallery3/5.png',
    alt: 'Golf activity'
  },
  {
    id: 6,
    type: 'image',
    src: '/home/gallery/4.png',
    thumbnail: '/home/gallery3/4.png',
    alt: 'Pool activities'
  },
  {
    id: 7,
    type: 'image',
    src: '/home/gallery3/8.png',
    thumbnail: '/home/gallery3/8.png',
    alt: 'Pool activities'
  },
  {
    id: 8,
    type: 'image',
    src: '/home/gallery3/9.png',
    thumbnail: '/home/gallery3/9.png',
    alt: 'Pool activities'
  },
  {
    id: 9,
    type: 'image',
    src: '/home/gallery3/10.png',
    thumbnail: '/home/gallery3/10.png',
    alt: 'Pool activities'
  },
  {
    id: 10,
    type: 'image',
    src: '/home/gallery3/11.png',
    thumbnail: '/home/gallery3/11.png',
    alt: 'Pool activities'
  },
  {
    id: 11,
    type: 'image',
    src: '/home/gallery/12.png',
    thumbnail: '/home/gallery3/12.png',
    alt: 'Pool activities'
  },
  {
    id: 12,
    type: 'image',
    src: '/home/gallery3/13.png',
    thumbnail: '/home/gallery3/13.png',
    alt: 'Pool activities'
  },
 
 
]

export default function Inspirations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  const currentItem = mediaItems[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length)
  }

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const scrollLeft = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft -= 200
    }
  }

  const scrollRight = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft += 200
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-customGreen text-4xl md:text-6xl font-semibold text-center mb-12">
        Activity
      </h1>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            {currentItem.type === 'video' ? (
              <video
                src={currentItem.src}
                controls
                className="w-full h-full object-contain"
                autoPlay
              />
            ) : (
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                className="object-contain"
              />
            )}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Main Preview */}
      <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
        {currentItem.type === 'video' ? (
          <video
            src={currentItem.src}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          aria-label="Scroll thumbnails left"
        >
          <ChevronLeft className="w-6 h-6 text-white bg-customGreen " />
        </button>
        <div
          ref={thumbnailRef}
          className="flex overflow-x-scroll scroll-smooth gap-4 py-2 scrollbar-hide"
        >
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openModal(index)}
              className={`relative w-48 h-48 rounded-lg overflow-hidden flex-shrink-0 ${
                index === currentIndex ? ' border-2 border-customGreen' : ''
              }`}
            >
              <Image
                src={item.thumbnail}
                alt={item.alt}
                fill
                className="object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-8 h-8 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          aria-label="Scroll thumbnails right"
        >
          <ChevronRight className="w-6 h-6 text-white bg-customGreen" />
        </button>
      </div>
    </div>
  )
}