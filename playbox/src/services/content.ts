// src/services/api/content.ts
import { Content } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const contentService = {
  async getAll(): Promise<Content[]> {
    const response = await fetch(`${API_URL}/content`)
    if (!response.ok) throw new Error('API error')
    return response.json()
  },

  async getById(id: string): Promise<Content> {
    const response = await fetch(`${API_URL}/content/${id}`)
    if (!response.ok) throw new Error('API error')
    return response.json()
  },

  async create(data: Omit<Content, 'id' | 'createdAt'>): Promise<Content> {
    const response = await fetch(`${API_URL}/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('API error')
    return response.json()
  }
}