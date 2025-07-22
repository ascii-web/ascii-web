"use client";

import { useRef } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import {
  Layout,
  Settings,
  Image,
  Terminal,
  PenTool,
  BarChart,
} from "lucide-react";

export function DashboardPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Layout,
      title: "Intuitive Interface",
      description: "Clean and efficient workspace for your creative process",
    },
    {
      icon: PenTool,
      title: "Advanced Tools",
      description: "Professional-grade tools for perfect ASCII art creation",
    },
    {
      icon: Terminal,
      title: "Command Center",
      description: "Power-user features with terminal-like controls",
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Track your progress and artwork performance",
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
                  Professional Dashboard
                </h2>
                <p className='text-gray-400 text-lg'>
                  Take control of your ASCII art creation with our powerful
                  dashboard. Track projects, manage versions, and analyze
                  performance all in one place.
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
                          {`> Project Statistics
┌──────────────┐
│ Projects: 12 │
│ Commits: 47  │
│ Stars: 238   │
└──────────────┘`}
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
