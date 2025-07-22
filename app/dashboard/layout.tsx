"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { DashboardProvider } from "@/components/dashboard/dashboard-context";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <DashboardProvider>{children}</DashboardProvider>
    </AuthGuard>
  );
}
