'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface MediaItem {
  id: number;
  src: string;
  alt: string;
  className: string;
  type?: 'image' | 'video';
  poster?: string;
}

export default function PhotoGallery({ photos }: { photos: MediaItem[] }) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl text-customGreen font-semibold text-center mb-12">
          Gallery
        </h2>
        
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((item) => (
              <div 
                key={item.id}
                className={`relative rounded-xl overflow-hidden ${item.className}`}
              >
                <div className="aspect-square w-full h-full relative">
                  {item.type === 'video' || item.src.endsWith('.mp4') ? (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        poster={item.poster}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
                        onClick={() => setActiveVideo(item.id)}
                      >
                        <Play className="text-white w-16 h-16" fill="white" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeVideo !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          {/* Prevent click propagation on the video to stop closing the modal */}
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-2 right-2 z-60 bg-white/30 hover:bg-white/50 rounded-full p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X className="text-white w-6 h-6" />
            </button>

            <video 
              controls 
              autoPlay 
              className="max-w-full max-h-full"
            >
              <source 
                src={photos.find(p => p.id === activeVideo)?.src} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}