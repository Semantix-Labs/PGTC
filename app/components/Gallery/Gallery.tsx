'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

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
    src: '/home/gallery2/1.png',
    thumbnail: '/home/gallery2/1.png',
    alt: 'Beach relaxation scene'
  },
  {
    id: 2,
    type: 'image',
    src: '/home/gallery2/22.jpeg',
    thumbnail: '/home/gallery2/22.jpeg',
    alt: ''
  },
  {
    id: 3,
    type: 'image',
    src:'/home/gallery2/6.png',
    thumbnail: '/home/gallery2/6.png',
    alt: 'Cycling activity'
  },
  {
    id: 4,
    type: 'image',
    src: '/home/gallery2/3.png',
    thumbnail:'/home/gallery2/3.png',
    alt: 'Beach scene'
  },
  {
    id: 5,
    type: 'image',
    src: '/home/gallery2/5.png',
    thumbnail:'/home/gallery2/5.png',
    alt: 'Golf activity'
  },
  {
    id: 6,
    type: 'image',
    src: '/home/gallery2/4.png',
    thumbnail: '/home/gallery2/4.png',
    alt: 'Pool activities'
  },
  {
    id: 7,
    type: 'image',
    src: '/home/gallery2/7.png',
    thumbnail: '/home/gallery2/7.png',
    alt: 'Pool activities'
  },
  {
    id: 8,
    type: 'image',
    src: '/home/gallery2/8.png',
    thumbnail: '/home/gallery2/8.png',
    alt: 'Pool activities'
  },
  {
    id: 9,
    type: 'image',
    src: '/home/gallery2/9.png',
    thumbnail: '/home/gallery2/9.png',
    alt: 'Pool activities'
  },
  {
    id: 10,
    type: 'image',
    src: '/home/gallery2/10.png',
    thumbnail: '/home/gallery2/10.png',
    alt: 'Pool activities'
  },
  {
    id: 11,
    type: 'image',
    src: '/home/gallery2/11.png',
    thumbnail: '/home/gallery2/11.png',
    alt: 'Pool activities'
  },
  {
    id: 12,
    type: 'image',
    src: '/home/gallery2/12.png',
    thumbnail: '/home/gallery2/12.png',
    alt: 'Pool activities'
  },
 
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null)

  const openModal = (item: MediaItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="container mx-auto px-4 p-4">
      <h1 className="text-customGreen text-4xl md:text-6xl font-semibold text-center mb-12">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden cursor-pointer aspect-square"
            onClick={() => openModal(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            {selectedImage.type === 'video' ? (
              <video
                src={selectedImage.src}
                controls
                className="w-full h-full object-contain"
                autoPlay
              />
            ) : (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

