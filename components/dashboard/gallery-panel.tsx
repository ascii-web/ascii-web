"use client"

import { Heart, MessageCircle, Share2, Star, Trophy } from "lucide-react"

export function GalleryPanel() {
  const topCreators = [
    { name: "CyberArtist", works: 23, likes: 1247, avatar: "CA" },
    { name: "PoetryBot", works: 18, likes: 892, avatar: "PB" },
    { name: "CodeMaster", works: 15, likes: 743, avatar: "CM" },
    { name: "PixelWizard", works: 12, likes: 634, avatar: "PW" },
  ]

  const trendingTags = [
    { tag: "cyberpunk", count: 45 },
    { tag: "poetry", count: 32 },
    { tag: "retro", count: 28 },
    { tag: "ai-generated", count: 24 },
    { tag: "minimalist", count: 19 },
  ]

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Gallery Stats */}
        <div>
          <h3 className="text-lg font-bold text-terminal-green mb-4 flex items-center gap-2">
            <span className="text-gray-500">//</span> GALLERY_STATS
          </h3>
        </div>

        <div className="space-y-4">
          {/* Total Creations */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm">Total Creations</span>
              <span className="text-terminal-green font-bold text-xl">1,247</span>
            </div>
            <div className="text-xs text-gray-500">Community contributions</div>
          </div>

          {/* Active Creators */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm">Active Creators</span>
              <span className="text-magenta font-bold text-xl">89</span>
            </div>
            <div className="text-xs text-gray-500">This month</div>
          </div>

          {/* Total Likes */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm">Total Likes</span>
              <span className="text-red-400 font-bold text-xl">15.2K</span>
            </div>
            <div className="text-xs text-gray-500">Community appreciation</div>
          </div>
        </div>

        {/* Top Creators */}
        <div>
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Top Creators
          </h4>
          <div className="space-y-3">
            {topCreators.map((creator, index) => (
              <div key={creator.name} className="flex items-center gap-3 bg-gray-900 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">#{index + 1}</span>
                  <div className="w-8 h-8 bg-terminal-green/20 rounded-full flex items-center justify-center">
                    <span className="text-terminal-green text-xs font-bold">{creator.avatar}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">{creator.name}</div>
                  <div className="text-gray-400 text-xs">
                    {creator.works} works • {creator.likes} likes
                  </div>
                </div>
                {index === 0 && <Star className="w-4 h-4 text-yellow-500" />}
              </div>
            ))}
          </div>
        </div>

        {/* Trending Tags */}
        <div>
          <h4 className="font-semibold text-white mb-3">Trending Tags</h4>
          <div className="space-y-2">
            {trendingTags.map((item, index) => (
              <div key={item.tag} className="flex items-center justify-between">
                <span className="text-terminal-green text-sm">#{item.tag}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-700 rounded-full h-1">
                    <div
                      className="bg-terminal-green h-1 rounded-full"
                      style={{ width: `${(item.count / 45) * 100}%` }}
                    />
                  </div>
                  <span className="text-gray-400 text-xs">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2 pt-4 border-t border-gray-700">
          <button className="w-full bg-terminal-green text-black py-2 rounded-lg font-semibold hover:bg-terminal-green/90 transition-colors">
            Upload to Gallery
          </button>
          <button className="w-full border border-magenta text-magenta py-2 rounded-lg font-semibold hover:bg-magenta hover:text-black transition-colors bg-transparent">
            Create Collection
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <h4 className="text-terminal-green font-semibold mb-3">Recent Activity</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-3 h-3 text-red-400" />
              <span className="text-gray-300">CyberArtist liked your work</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3 h-3 text-blue-400" />
              <span className="text-gray-300">New comment on "Neon City"</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-3 h-3 text-terminal-green" />
              <span className="text-gray-300">PoetryBot shared your poem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
