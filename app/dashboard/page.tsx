"use client";

import { Suspense } from "react";
import { DashboardRouter } from "@/components/dashboard/dashboard-router";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function DashboardPage() {
  return (
    <DashboardRouter>
      <Suspense
        fallback={
          <div className='p-4 text-terminal-green'>Loading dashboard...</div>
        }
      >
        <DashboardSidebar />
      </Suspense>
    </DashboardRouter>
  );
}
