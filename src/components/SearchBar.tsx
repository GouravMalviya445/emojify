"use client";

interface SearchBarProps{
  className?: string;
  searchQuery: string;
  placeholder?: string;   
  setSearchQuery: (value: string) => void
}

export function SearchBar({ className, searchQuery, setSearchQuery, placeholder}: SearchBarProps) { 

  return (
    <input
      className={`p-4 border rounded-lg ${className}`}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder={placeholder}
    />
  )
} 