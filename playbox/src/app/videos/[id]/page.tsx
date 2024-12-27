// src/app/videos/[id]/page.tsx
import { notFound } from 'next/navigation'
import { getAllVideos, getVideoById } from '@/lib/data'

// Static sayfaların oluşturulması için gerekli
export async function generateStaticParams() {
  const videos = getAllVideos()
  return videos.map((video) => ({
    id: video.id,
  }))
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = getVideoById(params.id)

  if (!video) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video relative mb-6">
          <video
            src={video.videoUrl}
            controls
            className="w-full h-full rounded-lg"
            poster={video.imageUrl}
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        <p className="text-gray-600 mb-8">{video.description}</p>

        {video.links.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Faydalı Linkler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {video.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <span>{link.title}</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}