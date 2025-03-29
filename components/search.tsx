'use client'

import { useState } from 'react'
import { Search as SearchIcon, ChevronDown } from 'lucide-react'
import localFont from 'next/font/local'
import Image from 'next/image'

const montserratAlt1 = localFont({
  src: '../public/fonts/MontserratAlt1-Regular.woff2',
  display: 'swap',
});

const searchCategories = [
  'Market Trends',
  'News',
  'Renewable Investments',
  'Subsidy Schemes',
  'Financials',
  'Policy Updates',
  'Market Analysis',
  'Biomass Pricing',
  'Carbon Credits'
]

export function Search() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState(searchCategories[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [results, setResults] = useState<{
    analysis: string;
    searchResults: Array<{
      name: string;
      url: string;
      snippet: string;
    }>;
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: `${selectedCategory}: ${query}` }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to perform search')
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching')
      console.error('Search error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative flex flex-col items-center w-full mb-16'>
      <form onSubmit={handleSubmit} className='flex items-center gap-2 w-full max-w-full mx-8 bg-white rounded-full px-6 py-6 shadow-sm border'>
        <div className="relative flex items-center gap-2">
          <Image 
            src="/recolored_keas_parrot.png"
            alt="KEAS Logo"
            width={360}
            height={360}
            className="object-contain"
          />
          <div className="w-px h-6 bg-gray-200 mx-4" />
        </div>
        
        <div className="flex-1 flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for insights and information..."
            className="w-full focus:outline-none text-lg placeholder:text-gray-400 min-w-0"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md border border-gray-200"
            >
              {selectedCategory}
              <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {searchCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsDropdownOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="text-[#4484d4] hover:text-[#2d5a9e] text-lg font-medium whitespace-nowrap flex-shrink-0"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-8 w-full max-w-4xl mx-auto bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {results && (
        <div className="mt-8 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-700">
                {results.analysis}
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-6">
            {results.searchResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4484d4] hover:text-[#2d5a9e] text-lg font-medium"
                >
                  {result.name}
                </a>
                <p className="mt-2 text-gray-600">{result.snippet}</p>
                <p className="mt-2 text-gray-400 text-sm truncate">{result.url}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
