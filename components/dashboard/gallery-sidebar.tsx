"use client"

import { Plus, FolderOpen, Brain, Users, Settings } from "lucide-react"

const navigationItems = [
  { icon: Plus, label: "Create New", active: false, href: "/dashboard" },
  { icon: FolderOpen, label: "My Projects", active: false, href: "/dashboard/projects" },
  { icon: Brain, label: "AI Model Trainer", active: false, href: "/dashboard/train" },
  { icon: Users, label: "Community Gallery", active: true, href: "/dashboard/gallery" },
  { icon: Settings, label: "Profile / Settings", active: false, href: "/dashboard/settings" },
]

export function GallerySidebar() {
  return (
    <div className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-800">
        <a href="/" className="text-terminal-green text-xl font-bold hover:text-terminal-green/80 transition-colors">
          <pre className="text-sm leading-tight">{`╔═══════════╗
║ ASCII-WEB ║
╚═══════════╝`}</pre>
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                item.active
                  ? "bg-terminal-green/20 text-terminal-green border-l-4 border-terminal-green shadow-terminal-glow"
                  : "text-gray-400 hover:text-terminal-green hover:bg-gray-900"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${item.active ? "text-terminal-green" : "group-hover:text-terminal-green"}`}
              />
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-terminal-green/20 rounded-full flex items-center justify-center">
            <span className="text-terminal-green text-sm font-bold">U</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">User</div>
            <div className="text-xs text-gray-400">Pro Plan</div>
          </div>
        </div>
      </div>
    </div>
  )
}
