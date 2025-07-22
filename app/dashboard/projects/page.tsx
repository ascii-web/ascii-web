"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProjectsSidebar } from "@/components/dashboard/projects-sidebar"
import { ProjectsManager } from "@/components/dashboard/projects-manager"
import { ProjectDetailsPanel } from "@/components/dashboard/project-details-panel"

interface Project {
  id: string
  name: string
  type: "ASCII Art" | "Generative Poem" | "Code Snippet" | "Musical MIDI"
  content: string
  tags: string[]
  createdAt: string
  description: string
  size: string
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <DashboardLayout>
      <ProjectsSidebar />
      <ProjectsManager onProjectSelect={setSelectedProject} />
      <ProjectDetailsPanel selectedProject={selectedProject} />
    </DashboardLayout>
  )
}
