// src/components/ui/toast-service.tsx
"use client"

import { create } from 'zustand'

interface ToastStore {
  message: string | null
  type: 'success' | 'error' | null
  showToast: (message: string, type: 'success' | 'error') => void
  hideToast: () => void
}

export const useToast = create<ToastStore>((set) => ({
  message: null,
  type: null,
  showToast: (message, type) => set({ message, type }),
  hideToast: () => set({ message: null, type: null })
}))