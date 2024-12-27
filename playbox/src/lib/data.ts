// src/lib/data.ts
export interface Video {
    id: string
    title: string
    description: string
    imageUrl: string
    videoUrl: string
    links: {
      title: string
      url: string
    }[]
  }
  
  export const videos: Video[] = [
    {
      id: '1',
      title: 'React Temel Eğitim',
      description: 'React ile temel web geliştirme eğitimi',
      imageUrl: '/images/video1.jpg',
      videoUrl: '/videos/react-basics.mp4',
      links: [
        { title: 'GitHub Repo', url: 'https://github.com/...' },
        { title: 'Demo Site', url: 'https://demo.com' },
      ]
    },
    // Diğer videolar...
  ]
  
  export function getAllVideos() {
    return videos
  }
  
  export function getVideoById(id: string) {
    return videos.find(video => video.id === id)
  }