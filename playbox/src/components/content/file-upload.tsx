// src/components/content/file-upload.tsx
"use client"

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from '@/components/ui/toast'
import { Spinner } from '@/components/ui/spinner'

interface FileUploadProps {
  onUploadComplete: (url: string) => void
  maxSize?: number
  acceptedTypes?: string[]
}

export const FileUpload = ({ 
  onUploadComplete, 
  maxSize = 5 * 1024 * 1024,
  acceptedTypes = ['image/jpeg', 'image/png']
}: FileUploadProps) => {
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Upload failed')

      const { url } = await response.json()
      onUploadComplete(url)
      toast.success("Dosya yüklendi")
    } catch (error) {
      toast.error("Dosya yüklenirken bir hata oluştu")
    } finally {
      setUploading(false)
    }
  }, [onUploadComplete])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept: acceptedTypes.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
    multiple: false
  })

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
        transition-colors duration-200
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300'}
        ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <div className="flex items-center justify-center">
          <Spinner className="w-6 h-6 mr-2" />
          <p>Yükleniyor...</p>
        </div>
      ) : isDragActive ? (
        <p>Dosyayı buraya bırakın</p>
      ) : (
        <div>
          <p>Dosya yüklemek için tıklayın veya sürükleyin</p>
          <p className="text-sm text-gray-500 mt-1">
            {acceptedTypes.join(', ')} formatları desteklenir. Max: {maxSize / (1024 * 1024)}MB
          </p>
        </div>
      )}
    </div>
  )
}