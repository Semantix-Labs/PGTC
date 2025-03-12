"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent } from "../ui/dialog"
import type { TeamMember } from "../lib/data"

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!member) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white">
        <div className="relative">
          <Button variant="ghost" className="absolute right-2 top-2 h-8 w-8 p-0 rounded-full" onClick={onClose}>
            <X className="h-6 w-6 text-[#2d5d3d]" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          <div className="relative h-[300px] md:h-full">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
            <h2 className="text-4xl font-bold text-[#2d5d3d]">{member.name}</h2>
            <p className="text-2xl text-[#c99c33] mt-2 mb-6">{member.title}</p>

            <p className="text-gray-700 mb-6">{member.bio}</p>

            {member.achievements && member.achievements.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">Amateur Golfing Achievements</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}

            {member.career && (
              <>
                <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">Professional Golfing Career</h3>
                <p className="text-gray-700">{member.career}</p>
              </>
            )}

            {member.currentOccupation && (
              <>
                <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">
                  Golf Course Design and Current Occupation
                </h3>
                <p className="text-gray-700">{member.currentOccupation}</p>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

