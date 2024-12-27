"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            PlayBox
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/browse" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/categories" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link 
              href="/premium" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Premium
            </Link>
            <Link 
              href="/login" 
              className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-dark-200 rounded-lg p-4 space-y-4">
            <Link
              href="/browse"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/premium"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Premium
            </Link>
            <Link
              href="/login"
              className="block bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-colors text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}