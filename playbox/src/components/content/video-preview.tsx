// src/components/content/video-preview.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'

interface VideoPreviewProps {
  imageUrl: string
  title: string
}

export default function VideoPreview({ imageUrl, title }: VideoPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer transform transition-transform hover:scale-105"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-4xl h-auto aspect-video">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}