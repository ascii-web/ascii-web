"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, Download, Search, TrendingUp } from "lucide-react"
import { PageHeader } from "./page-header"

interface GalleryItem {
  id: string
  title: string
  author: string
  type: "ASCII Art" | "Generative Poem" | "Code Snippet"
  content: string
  likes: number
  comments: number
  tags: string[]
  createdAt: string
  featured: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Neon Cityscape",
    author: "CyberArtist",
    type: "ASCII Art",
    content: `    ╔══════════════════╗
    ║ ████ ████ ████  ║
    ║ ████ ████ ████  ║
    ║ ▓▓▓▓ ▓▓▓▓ ▓▓▓▓  ║
    ║ ░░░░ ░░░░ ░░░░  ║
    ╚══════════════════╝
         ┌─┐ ┌─┐ ┌─┐
         └─┘ └─┘ └─┘`,
    likes: 247,
    comments: 18,
    tags: ["cyberpunk", "city", "neon"],
    createdAt: "2024-01-15",
    featured: true,
  },
  {
    id: "2",
    title: "Digital Haiku",
    author: "PoetryBot",
    type: "Generative Poem",
    content: `Pixels dance in light
Binary dreams take their flight
Code becomes pure art`,
    likes: 156,
    comments: 12,
    tags: ["haiku", "digital", "zen"],
    createdAt: "2024-01-14",
    featured: false,
  },
  {
    id: "3",
    title: "Recursive Tree",
    author: "CodeMaster",
    type: "Code Snippet",
    content: `def draw_tree(depth, angle=30):
    if depth == 0:
        return
    
    forward(depth * 10)
    left(angle)
    draw_tree(depth - 1, angle)
    right(2 * angle)
    draw_tree(depth - 1, angle)
    left(angle)
    backward(depth * 10)`,
    likes: 89,
    comments: 7,
    tags: ["python", "recursion", "art"],
    createdAt: "2024-01-13",
    featured: false,
  },
]

export function CommunityGallery() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("trending")

  const filteredItems = galleryItems.filter((item) => {
    const matchesFilter = filter === "all" || item.type === filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesFilter && matchesSearch
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ASCII Art":
        return "bg-terminal-green/20 text-terminal-green border-terminal-green/30"
      case "Generative Poem":
        return "bg-magenta/20 text-magenta border-magenta/30"
      case "Code Snippet":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="flex-1 bg-gray-900 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        <PageHeader />

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            {["all", "ASCII Art", "Generative Poem", "Code Snippet"].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-semibold ${
                  filter === filterOption
                    ? "bg-terminal-green text-black border-terminal-green"
                    : "bg-transparent text-gray-400 border-gray-600 hover:border-terminal-green hover:text-terminal-green"
                }`}
              >
                {filterOption === "all" ? "All" : filterOption}
              </button>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search gallery..."
                className="bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-terminal-green focus:outline-none"
            >
              <option value="trending">Trending</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Liked</option>
            </select>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span>Trending Now</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gray-800 border rounded-lg p-4 hover:border-magenta hover:shadow-magenta-glow transition-all duration-300 cursor-pointer group ${
                item.featured ? "border-terminal-green shadow-terminal-glow" : "border-gray-600"
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-terminal-green text-black text-xs px-2 py-1 rounded-full font-bold">
                  FEATURED
                </div>
              )}

              {/* Content Preview */}
              <div className="bg-black border border-gray-700 rounded p-3 mb-4 h-32 overflow-hidden relative">
                {item.type === "ASCII Art" && (
                  <pre className="text-terminal-green text-xs leading-tight">{item.content}</pre>
                )}
                {item.type === "Generative Poem" && (
                  <div className="text-gray-300 text-sm leading-relaxed font-serif">{item.content}</div>
                )}
                {item.type === "Code Snippet" && (
                  <pre className="text-terminal-green text-xs leading-tight overflow-hidden">{item.content}</pre>
                )}
              </div>

              {/* Item Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-terminal-green text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">by {item.author}</p>
                </div>

                <div className={`inline-block px-2 py-1 rounded text-xs border ${getTypeColor(item.type)}`}>
                  {item.type}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {item.comments}
                    </button>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:text-terminal-green transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-terminal-green transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <pre className="text-sm">{`╔═══════════════╗
║   NO RESULTS  ║
║     FOUND     ║
╚═══════════════╝`}</pre>
            </div>
            <p className="text-gray-500">No gallery items match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
