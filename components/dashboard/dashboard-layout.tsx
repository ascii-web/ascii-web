import type React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="flex h-screen overflow-hidden">{children}</div>
    </div>
  )
}
