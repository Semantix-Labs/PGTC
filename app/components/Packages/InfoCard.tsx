'use client'

import { Card, CardContent,  CardHeader } from "../ui/card"
import Image from "next/image"
import { Circle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation';

interface InfoCardProps {
  title: string;
  description: string;
  activities: string[];
  isVisible?: boolean;
  imageLocation: string;
  locationUrl:string;
}

export default function InfoCard({ 
  title, 
  description, 
  activities, 
  isVisible = true,
  imageLocation,
  locationUrl
}: InfoCardProps) {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden rounded-lg pb-2 bg-white shadow-lg">
            <div className="relative  h-48 w-full">
              <Image
                src={imageLocation}
                alt={title}
                fill
                className="object-cover  "
                priority
              />
              <div className="absolute inset-0 bg-black/30">
                <CardHeader className="relative z-10">
                  <h2 className="text-center text-3xl font-bold text-white">{title}</h2>
                </CardHeader>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4 text-sm text-[#C7A041]">
                {description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Circle className="h-3 w-3 fill-current text-customGreen" />
                    <span className="text-[16px] text-[#393939]">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="flex justify-center">
                    <button
                      className="px-6 py-2 border-2 border-customGreen text-customGreen rounded-[12px] hover:bg-customLightGreen transition-colors"
                      onClick={() => router.push(locationUrl)}
                    >
                      More Info
                    </button>
                  </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

