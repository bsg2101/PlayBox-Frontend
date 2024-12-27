"use client"

import { useState } from 'react'

export default function AddVideoPage() {
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
    // Form submission logic
    console.log({ title, description, image, links })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Video</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Thumbnail Image
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Links
          </label>
          {links.map((link, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                placeholder="Link Title"
                value={link.title}
                onChange={(e) => {
                  const newLinks = [...links]
                  newLinks[index].title = e.target.value
                  setLinks(newLinks)
                }}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Video
        </button>
      </form>
    </div>
  )
}