'use client'

import { useState, useRef, useEffect } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const currentItem = mediaItems[currentIndex]
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length)
  }

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200
      const currentScroll = thumbnailsRef.current.scrollLeft
      const newScrollPosition = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      thumbnailsRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newScrollPosition)
    }
  }

  const startAutoScroll = () => {
    stopAutoScroll() // Clear any existing interval
    autoScrollIntervalRef.current = setInterval(() => {
      // Scroll thumbnails automatically
      scrollThumbnails('right')
      
      // If scrolled to the end, reset to the start
      if (thumbnailsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = thumbnailsRef.current
        if (scrollLeft + clientWidth >= scrollWidth) {
          thumbnailsRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        }
      }
    }, 3000) // Scroll every 3 seconds
  }

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
      autoScrollIntervalRef.current = null
    }
  }

  useEffect(() => {
    // Ensure thumbnails scroll to keep current item in view
    if (thumbnailsRef.current) {
      const selectedThumbnail = thumbnailsRef.current.children[currentIndex] as HTMLElement
      if (selectedThumbnail) {
        const containerWidth = thumbnailsRef.current.offsetWidth
        const thumbnailWidth = selectedThumbnail.offsetWidth
        const thumbnailLeft = selectedThumbnail.offsetLeft

        let newScrollPosition = scrollPosition

        if (thumbnailLeft < scrollPosition) {
          newScrollPosition = thumbnailLeft
        } else if (thumbnailLeft + thumbnailWidth > scrollPosition + containerWidth) {
          newScrollPosition = thumbnailLeft + thumbnailWidth - containerWidth
        }

        if (newScrollPosition !== scrollPosition) {
          thumbnailsRef.current.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
          })
          setScrollPosition(newScrollPosition)
        }
      }
    }
  }, [currentIndex, scrollPosition])

  // Start auto-scroll when component mounts
  useEffect(() => {
    startAutoScroll()
    
    // Clean up interval on unmount
    return () => stopAutoScroll()
  }, [])

  return (
    <div 
      className="container mx-auto px-4 py-20"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
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

      {/* Thumbnails with Scroll Buttons */}
      <div 
        className="relative"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <button
          onClick={() => scrollThumbnails('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-customGreen hover:bg-white/20 rounded-full p-2 z-10"
          aria-label="Scroll thumbnails left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div
          ref={thumbnailsRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
        >
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(index)
                // Reset auto-scroll interval when manually selecting an image
                stopAutoScroll()
                startAutoScroll()
              }}
              className={`relative w-48 h-40 rounded-lg overflow-hidden flex-shrink-0 ${
                index === currentIndex ? 'border-2 border-customGreen' : ''
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
          onClick={() => scrollThumbnails('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-customGreen hover:bg-white/20 rounded-full p-2 z-10"
          aria-label="Scroll thumbnails right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

