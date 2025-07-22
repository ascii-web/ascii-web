"use client"

import { AuthGuard } from "@/components/auth/auth-guard"
import { DashboardRouter } from "@/components/dashboard/dashboard-router"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardRouter>
        <DashboardSidebar />
      </DashboardRouter>
    </AuthGuard>
  )
}
