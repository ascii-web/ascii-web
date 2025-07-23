"use client";

import { useState } from "react";
import { ProjectsManager } from "@/components/dashboard/projects-manager";
import { ProjectDetailsPanel } from "@/components/dashboard/project-details-panel";

interface Project {
  id: string;
  name: string;
  type: "ASCII Art" | "Generative Poem" | "Code Snippet" | "Musical MIDI";
  content: string;
  tags: string[];
  createdAt: string;
  description: string;
  size: string;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='container mx-auto p-6'>
      <div className='flex gap-4'>
        <div className='flex-1'>
          <ProjectsManager onProjectSelect={setSelectedProject} />
        </div>
        {selectedProject && (
          <div className='w-1/3'>
            <ProjectDetailsPanel selectedProject={selectedProject} />
          </div>
        )}
      </div>
    </div>
  );
}
