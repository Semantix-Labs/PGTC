"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

interface TeamMemberCardProps {
  name: string
  title: string
  image: string
  onDetailsClick: () => void
}

export function TeamMemberCard({ name, title, image, onDetailsClick }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-80 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-[#c99c33] mt-1">{title}</p>
        <Button onClick={onDetailsClick} className="mt-4 bg-[#2d5d3d] hover:bg-[#234732] text-white">
          More Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

