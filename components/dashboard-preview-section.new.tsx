"use client";

import { useRef } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import {
  Layout,
  Settings,
  Terminal,
  PenTool,
  BarChart,
  Folder,
  History,
  Share2,
  Save,
  Download,
  Grid,
  Sparkles,
  ImageIcon,
  Code,
  Music,
  TextSelect,
  MonitorPlay,
  Sliders,
  Ratio,
} from "lucide-react";

export function DashboardPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Layout,
      title: "Workspace Layout",
      description: "Customizable split-view with live preview",
    },
    {
      icon: Grid,
      title: "Project Gallery",
      description: "Organize and showcase your ASCII creations",
    },
    {
      icon: Terminal,
      title: "Command Center",
      description: "Terminal interface with shortcut commands",
    },
    {
      icon: History,
      title: "Version History",
      description: "Track changes and restore previous versions",
    },
    {
      icon: Share2,
      title: "Quick Share",
      description: "Share your work directly or via custom links",
    },
    {
      icon: Save,
      title: "Auto-Save",
      description: "Never lose your progress with auto-saving",
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Export as text, image, or animated GIF",
    },
    {
      icon: Folder,
      title: "Project Management",
      description: "Categorize works into collections and folders",
    },
  ];

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='flicker' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <GlitchVariation variant='flicker' delay={200}>
              <div className='space-y-6'>
                <h2 className='text-4xl md:text-5xl font-bold text-terminal-green'>
                  ASCII Control Hub
                </h2>
                <p className='text-gray-400 text-lg'>
                  Master your ASCII projects with precision; from concept to
                  completion, track, tweak, and triumph in one dynamic creative
                  space.
                </p>
                <div className='grid sm:grid-cols-2 gap-6'>
                  {features.map((feature, index) => (
                    <GlitchVariation
                      key={feature.title}
                      variant='flicker'
                      delay={400 + index * 100}
                    >
                      <div className='flex gap-4'>
                        <feature.icon className='w-6 h-6 text-terminal-green flex-shrink-0' />
                        <div>
                          <h3 className='font-bold text-terminal-green'>
                            {feature.title}
                          </h3>
                          <p className='text-sm text-gray-400'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </GlitchVariation>
                  ))}
                </div>
              </div>
            </GlitchVariation>

            <GlitchVariation variant='flicker' delay={300}>
              <div className='relative'>
                <div className='bg-gray-900 rounded-lg border border-terminal-green/30 overflow-hidden'>
                  <div className='flex items-center gap-2 bg-black/50 p-2'>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  </div>
                  <div className='p-4'>
                    <div className='grid grid-cols-3 gap-4'>
                      <div className='col-span-2 bg-black/30 p-4 rounded'>
                        <pre className='text-terminal-green text-xs'>
                          {`> Dashboard Overview
┌─────────────────────┐
│ Active Projects: 12 │
│ Saved Versions: 47  │
│ Templates: 15       │
│ Shared Works: 8     │
│ Storage: 85% free   │
└─────────────────────┘

> Recent Activity
- Created new ASCII art
- Updated profile theme
- Exported gallery
- Shared artwork`}
                        </pre>
                      </div>
                      <div className='bg-black/30 p-4 rounded'>
                        <div className='flex flex-col gap-2'>
                          <div className='w-full h-2 bg-terminal-green/30 rounded'></div>
                          <div className='w-3/4 h-2 bg-terminal-green/30 rounded'></div>
                          <div className='w-1/2 h-2 bg-terminal-green/30 rounded'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlitchVariation>
          </div>
        </div>
      </GlitchVariation>
    </section>
  );
}
