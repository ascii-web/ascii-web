"use client";

import { ProjectsManager } from "@/components/dashboard/projects-manager";

export default function DashboardPage() {
  return (
    <div className=' w-full p-6'>
      <h1 className='text-3xl font-bold text-terminal-green mb-6'>
        Dashboard Overview
      </h1>
      <ProjectsManager />
    </div>
  );
}
