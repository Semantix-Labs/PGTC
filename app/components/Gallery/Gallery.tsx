'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

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
    src: '/home/gallery/1.png',
    thumbnail: '/home/gallery/1.png',
    alt: 'Beach relaxation scene'
  },
  {
    id: 2,
    type: 'image',
    src: '/home/gallery/2.png',
    thumbnail: '/home/gallery/2.png',
    alt: 'Spa treatment'
  },
  {
    id: 3,
    type: 'video',
    src: 'https://example.com/cycling-video.mp4',
    thumbnail: '/home/gallery/6.png',
    alt: 'Cycling activity'
  },
  {
    id: 4,
    type: 'image',
    src: '/home/gallery/3.png',
    thumbnail:'/home/gallery/3.png',
    alt: 'Beach scene'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://example.com/golf-video.mp4',
    thumbnail:'/home/gallery/7.png',
    alt: 'Golf activity'
  },
  {
    id: 6,
    type: 'image',
    src: '/home/gallery/4.jpeg',
    thumbnail: '/home/gallery/4.jpeg',
    alt: 'Pool activities'
  },
  {
    id: 7,
    type: 'image',
    src: '/home/gallery/5.png',
    thumbnail:  '/home/gallery/5.png',
    alt: 'Waterfall scene'
  }
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentItem = mediaItems[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-customGreen text-4xl md:text-6xl font-semibold text-center mb-12">
        Gallery
      </h1>

      {/* Main Preview */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        {currentItem.type === 'video' ? (
          <video
            src={currentItem.src}
            controls
            className="w-full h-full object-cover"
            aria-label={currentItem.alt}
          />
        ) : (
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            className="object-cover"
          />
        )}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {mediaItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-customGreen' : ''
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
    </div>
  )
}

