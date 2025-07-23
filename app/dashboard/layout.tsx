"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <div className='flex h-screen bg-black'>
        <DashboardSidebar />
        <main className='flex-1 w-full overflow-y-auto'>{children}</main>
      </div>
    </AuthGuard>
  );
}
