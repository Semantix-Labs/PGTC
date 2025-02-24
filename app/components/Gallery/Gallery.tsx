'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const openModal = (item: MediaItem) => {
    setSelectedImage(item)
    // Find the index of the selected item
    const index = mediaItems.findIndex(mediaItem => mediaItem.id === item.id)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent modal from closing
    const newIndex = (currentIndex + 1) % mediaItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(mediaItems[newIndex])
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent modal from closing
    const newIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(mediaItems[newIndex])
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goToNext(e as unknown as React.MouseEvent)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goToPrevious(e as unknown as React.MouseEvent)
    } else if (e.key === 'Escape') {
      closeModal()
    }
  }

  // Close modal when clicking outside the image and navigation controls
  const handleModalClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Prevent close when clicking on image
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent the click from propagating to the modal background
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
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={handleImageClick}
          >
            {selectedImage.type === 'video' ? (
              <video
                src={selectedImage.src}
                controls
                className="w-full h-full object-contain"
                autoPlay
                onClick={handleImageClick}
              />
            ) : (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                onClick={handleImageClick}
              />
            )}
          </div>
          
          {/* Image counter */}
          <div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on counter
          >
            {currentIndex + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </div>
  )
}