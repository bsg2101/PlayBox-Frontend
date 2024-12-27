// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Toast from '@/components/ui/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlayBox',
  description: 'Video sharing platform',
  // SEO optimizasyonu için ek metadata
  keywords: 'video sharing, content platform, playbox',
  authors: [{ name: 'PlayBox' }],
  openGraph: {
    title: 'PlayBox',
    description: 'Video sharing platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toast />
        </div>
      </body>
    </html>
  )
}