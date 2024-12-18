'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Lorem ipsum",
    role: "Lorem ipsum",
    image: "/man.png"
  },
  {
    id: 2,
    name: "Lorem ipsum",
    role: "Lorem ipsum",
    image: "/man.png"
  },
  {
    id: 3,
    name: "Lorem ipsum",
    role: "Lorem ipsum",
    image: "/man.png"
  },
  {
    id: 4,
    name: "Lorem ipsum",
    role: "Lorem ipsum",
    image: "/home.png"
  },

  // Add more team members as needed
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleMembers, setVisibleMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    updateVisibleMembers()
  }, [currentIndex])

  const updateVisibleMembers = () => {
    const membersToShow = window.innerWidth < 768 ? 1 : 3; // Show 1 on mobile, 3 on md and larger
    const endIndex = (currentIndex + membersToShow) % teamMembers.length;
    if (endIndex > currentIndex) {
      setVisibleMembers(teamMembers.slice(currentIndex, endIndex));
    } else {
      setVisibleMembers([...teamMembers.slice(currentIndex), ...teamMembers.slice(0, endIndex)]);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <div className="bg-[#E6ECDE] py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-[#2d523f] text-5xl font-bold text-center mb-16">
          Meet the Team
        </h1>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 top-1/2 transform -translate-y-1/2 bg-[#2d523f] text-white rounded-full p-3 hover:bg-[#234232] transition-colors"
            aria-label="Previous slides"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-8">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-lg p-6 w-[300px] flex flex-col items-center"
              >
                <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#2d523f] text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-[#d4a853]">{member.role}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2d523f] text-white rounded-full p-3 hover:bg-[#234232] transition-colors"
            aria-label="Next slides"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
