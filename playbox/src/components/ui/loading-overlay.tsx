// src/components/ui/loading-overlay.tsx
"use client"

import { Spinner } from './spinner'

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  className?: string
}

export function LoadingOverlay({ 
  isLoading, 
  children, 
  className = '' 
}: LoadingOverlayProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center backdrop-blur-sm">
          <Spinner size="lg" />
        </div>
      )}
    </div>
  )
}

// Kullanım örneği:
{/* 
  <LoadingOverlay isLoading={isLoading}>
    <div>İçerik buraya gelecek</div>
  </LoadingOverlay>
*/}