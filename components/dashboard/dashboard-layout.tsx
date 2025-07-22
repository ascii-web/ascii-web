"use client";

import type React from "react";
import { DashboardProvider } from "./dashboard-context";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <div className='min-h-screen bg-black text-white font-mono'>
        <div className='flex h-screen overflow-hidden'>{children}</div>
      </div>
    </DashboardProvider>
  );
}
