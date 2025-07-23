"use client";

import { useState } from "react";
import {
  Plus,
  FolderOpen,
  Brain,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/firebase-auth";

const navigationItems = [
  {
    icon: Plus,
    label: "Create New",
    page: "create" as const,
    href: "/dashboard",
  },
  {
    icon: FolderOpen,
    label: "My Projects",
    page: "projects" as const,
    href: "/dashboard/projects",
  },
  {
    icon: Brain,
    label: "AI Model Trainer",
    page: "train" as const,
    href: "/dashboard/train",
  },
  {
    icon: Users,
    label: "Community Gallery",
    page: "gallery" as const,
    href: "/dashboard/gallery",
  },
  {
    icon: Settings,
    label: "Profile / Settings",
    page: "settings" as const,
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleLogout = async () => {
    await logout();
    window.location.href = "/auth";
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "pro":
        return "text-blue-400";
      case "enterprise":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  const getPlanLabel = (plan: string) => {
    switch (plan) {
      case "pro":
        return "Pro Plan";
      case "enterprise":
        return "Enterprise";
      default:
        return "Free Plan";
    }
  };

  const getBadgeColor = (badge: string | null) => {
    if (!badge) return "";
    if (badge === "new") return "bg-terminal-green text-black";
    if (Number.parseInt(badge) > 10) return "bg-magenta text-white";
    return "bg-blue-500 text-white";
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-950 border-r border-gray-800 flex flex-col transition-all duration-300 ease-in-out h-screen overflow-y-auto sticky top-0`}
    >
      {/* Logo/Header */}
      <div className='p-6 border-b border-gray-800'>
        <div className='flex items-center justify-between'>
          <a
            href='/'
            className={`text-terminal-green text-xl font-bold hover:text-terminal-green/80 transition-colors ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            <pre className='text-sm leading-tight'>{`╔═══════════╗
║ ASCII-WEB ║
╚═══════════╝`}</pre>
          </a>
          {isCollapsed && (
            <div className='text-terminal-green text-lg font-bold'>A</div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='p-1 rounded hover:bg-gray-800 transition-colors'
          >
            <ChevronDown
              className={`w-8 h-8 bg-gray-800 text-terminal-green transition-transform ${
                isCollapsed ? "-rotate-90" : "rotate-90"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Quick Search */}
      {!isCollapsed && (
        <div className='p-4 border-b border-gray-800'>
          <div
            className={`relative transition-all duration-200 ${
              isSearchFocused ? "scale-105" : "scale-100"
            }`}
          >
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input
              type='text'
              placeholder='Quick search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className='w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors'
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className='flex-1 p-4'>
        <div className='space-y-2'>
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                pathname === item.href
                  ? "bg-terminal-green/20 text-terminal-green border-l-4 border-terminal-green "
                  : "text-gray-400 hover:text-terminal-green hover:bg-gray-900"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  pathname === item.href
                    ? "text-terminal-green"
                    : "group-hover:text-terminal-green"
                }`}
              />
              {!isCollapsed && (
                <span className='font-semibold'>{item.label}</span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Notifications */}
      {!isCollapsed && (
        <div className='p-4 border-t border-gray-800'>
          <div className='bg-gray-900 rounded-lg p-3 border border-gray-700'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-semibold text-white'>
                Notifications
              </span>
              <div className='flex items-center gap-1'>
                <Bell className='w-4 h-4 text-terminal-green' />
                {notifications > 0 && (
                  <span className='bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse'>
                    {notifications}
                  </span>
                )}
              </div>
            </div>
            <div className='space-y-1 text-xs text-gray-400'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-terminal-green rounded-full animate-pulse' />
                <span>Model training completed</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-blue-400 rounded-full' />
                <span>New gallery likes received</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-magenta rounded-full' />
                <span>Storage limit warning</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Info */}
      <div className='p-4 border-t border-gray-800'>
        <div className='space-y-3'>
          {/* User Profile */}
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className='relative'>
              <div className='w-10 h-10 bg-terminal-green/20 rounded-full flex items-center justify-center border border-terminal-green/30 transition-all duration-200 hover:scale-110 hover:shadow-terminal-glow'>
                {user?.avatar ? (
                  <OptimizedImage
                    src={user.avatar || "/placeholder.svg"}
                    alt='Avatar'
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                ) : (
                  <span className='text-terminal-green text-sm font-bold'>
                    {user?.username?.charAt(0).toUpperCase() ||
                      user?.email?.charAt(0).toUpperCase() ||
                      "U"}
                  </span>
                )}
              </div>
              {/* Online status indicator */}
              <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-terminal-green rounded-full border-2 border-gray-950 animate-pulse' />
            </div>

            {!isCollapsed && (
              <div className='flex-1 min-w-0'>
                <div className='text-sm font-semibold text-white truncate'>
                  {user?.displayName ||
                    user?.username ||
                    user?.email?.split("@")[0] ||
                    "User"}
                </div>
                <div
                  className={`text-xs ${getPlanColor(
                    user?.plan || "free"
                  )} flex items-center gap-1`}
                >
                  {user?.plan !== "free" && (
                    <div className='w-2 h-2 bg-current rounded-full animate-pulse' />
                  )}
                  {getPlanLabel(user?.plan || "free")}
                </div>
              </div>
            )}
          </div>

          {/* Email Verification Status */}
          {!user?.emailVerified && !isCollapsed && (
            <div className='bg-yellow-900/50 border border-yellow-500 rounded p-2 animate-pulse'>
              <p className='text-yellow-400 text-xs'>⚠️ Email not verified</p>
            </div>
          )}

          {/* Stats */}
          {!isCollapsed && (
            <div className='grid grid-cols-2 gap-2 text-center'>
              <div className='bg-gray-900 rounded p-2 hover:bg-gray-800 transition-colors cursor-pointer'>
                <p className='text-lg font-bold text-terminal-green'>
                  {user?.stats?.projectsCreated || 0}
                </p>
                <p className='text-xs text-gray-400'>Projects</p>
              </div>
              <div className='bg-gray-900 rounded p-2 hover:bg-gray-800 transition-colors cursor-pointer'>
                <p className='text-lg font-bold text-magenta'>
                  {user?.stats?.modelsTrained || 0}
                </p>
                <p className='text-xs text-gray-400'>Models</p>
              </div>
            </div>
          )}

          {/* Storage */}
          {!isCollapsed && (
            <div className='space-y-2'>
              <div className='flex justify-between text-xs text-gray-400'>
                <span>Storage</span>
                <span>
                  {user?.stats?.storageUsed || 0}GB /{" "}
                  {user?.stats?.storageTotal || 5}GB
                </span>
              </div>
              <div className='w-full bg-gray-800 rounded-full h-2 overflow-hidden'>
                <div
                  className='bg-gradient-to-r from-terminal-green to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out relative'
                  style={{
                    width: `${Math.min(
                      ((user?.stats?.storageUsed || 0) /
                        (user?.stats?.storageTotal || 5)) *
                        100,
                      100
                    )}%`,
                  }}
                >
                  <div className='absolute inset-0 bg-white/20 animate-pulse' />
                </div>
              </div>
              <div className='text-xs text-gray-500'>
                {Math.round(
                  ((user?.stats?.storageTotal || 5) -
                    (user?.stats?.storageUsed || 0)) *
                    100
                ) / 100}
                GB remaining
              </div>
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-900 transition-all duration-200 hover:scale-105 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <LogOut className='w-4 h-4' />
            {!isCollapsed && <span className='text-sm'>Sign Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
