'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-12 max-w-5xl mx-auto leading-tight">
        A Tour of Paradise with Golf by Paradise Golf Tours Ceylon (Pvt.) Ltd.
      </h2>
      
      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-black">
        {!isPlaying ? (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center z-10 transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Play className="w-10 h-10 text-[#2d523f] ml-1" />
            </div>
          </button>
        ) : null}
        
        <video
          className="w-full h-full object-cover"
          controls={isPlaying}
          playsInline
          poster="/placeholder.svg?height=720&width=1280"
        >
          <source src="/your-video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

