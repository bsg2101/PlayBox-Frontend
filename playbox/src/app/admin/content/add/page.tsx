"use client"

import { useState } from 'react'

export default function AddContent() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [links, setLinks] = useState([
    { title: '', url: '' },
    { title: '', url: '' },
    { title: '', url: '' },
    { title: '', url: '' }
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be added here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Content</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-lg shadow">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Thumbnail Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
            accept="image/*"
            required
          />
        </div>

        {/* Links */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Links</label>
          {links.map((link, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Link Title"
                value={link.title}
                onChange={(e) => {
                  const newLinks = [...links]
                  newLinks[index].title = e.target.value
                  setLinks(newLinks)
                }}
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="url"
                placeholder="URL"
                value={link.url}
                onChange={(e) => {
                  const newLinks = [...links]
                  newLinks[index].url = e.target.value
                  setLinks(newLinks)
                }}
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Content
        </button>
      </form>
    </div>
  )
}