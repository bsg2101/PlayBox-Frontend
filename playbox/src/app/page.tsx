// src/app/page.tsx
import { getAllVideos } from '@/lib/data'
import { VideoCard } from '@/components/content/video-card'

export default function HomePage() {
  const videos = getAllVideos()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tüm Videolar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}