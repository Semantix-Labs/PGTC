'use client'

import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import Image from "next/image"
import { Circle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface InfoCardProps {
  title: string;
  description: string;
  activities: string[];
  isVisible?: boolean;
  imageLocation: string;
}

export default function InfoCard({ 
  title, 
  description, 
  activities, 
  isVisible = true,
  imageLocation 
}: InfoCardProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={imageLocation}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30">
                <CardHeader className="relative z-10">
                  <h2 className="text-center text-3xl font-bold text-white">{title}</h2>
                </CardHeader>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4 text-sm text-gray-600">
                {description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span className="text-xs text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Button variant="outline" size="sm">More Info</Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

