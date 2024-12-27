// src/components/content/video-card.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Video } from '@/lib/data'

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/videos/${video.id}`}>
        <div className="relative aspect-video">
          <Image
            src={video.imageUrl}
            alt={video.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white bg-black/50 px-4 py-2 rounded-full">
              İzle
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {video.description}
          </p>
        </div>
      </Link>
    </div>
  )
}