// src/components/admin/search-filter.tsx
"use client"

import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface SearchFilterProps {
  onSearch: (value: string) => void
  onFilter: (value: string) => void
}

export default function SearchFilter({ onSearch, onFilter }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    onSearch(debouncedSearch)
  }, [debouncedSearch, onSearch])

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      />
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">All</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  )
}