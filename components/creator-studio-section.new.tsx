"use client";

import { useRef } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import {
  Terminal,
  Sparkles,
  ImageIcon,
  Code,
  Music,
  Settings,
  Palette,
  Zap,
  TextSelect,
  MonitorPlay,
  Sliders,
  Ratio,
} from "lucide-react";
import Link from "next/link";

export function CreatorStudioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='digital' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <GlitchVariation variant='slice' delay={100}>
              <div className='space-y-6'>
                <GlitchVariation variant='matrix' delay={200}>
                  <h2 className='text-4xl md:text-5xl font-bold text-terminal-green'>
                    Your Creative ASCII Studio
                  </h2>
                </GlitchVariation>
                <GlitchVariation variant='wave' delay={300}>
                  <p className='text-gray-400 text-lg'>
                    Transform your ideas into ASCII masterpieces with our
                    multi-format creative suite. Generate ASCII art, poems, code
                    patterns, and even MIDI visualizations.
                  </p>
                </GlitchVariation>
                <GlitchVariation variant='digital' delay={400}>
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <Sparkles className='w-5 h-5' />
                      <span>AI Generation</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <ImageIcon className='w-5 h-5' />
                      <span>Image to ASCII</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <TextSelect className='w-5 h-5' />
                      <span>ASCII Poetry</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <Code className='w-5 h-5' />
                      <span>Code Patterns</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <Music className='w-5 h-5' />
                      <span>MIDI Visual</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <MonitorPlay className='w-5 h-5' />
                      <span>Live Preview</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <Sliders className='w-5 h-5' />
                      <span>Fine-Tuning</span>
                    </div>
                    <div className='flex items-center gap-2 text-terminal-green'>
                      <Ratio className='w-5 h-5' />
                      <span>Aspect Control</span>
                    </div>
                  </div>
                </GlitchVariation>
                <GlitchVariation variant='slice' delay={500}>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Link href='/dashboard'>
                      <button className='px-8 py-3 bg-terminal-green text-black font-bold rounded hover:bg-terminal-green/90 transition-all hover:scale-105 relative overflow-hidden group'>
                        <span className='relative z-10'>Try Now</span>
                        <div className='absolute inset-0 bg-terminal-green/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></div>
                      </button>
                    </Link>
                  </div>
                </GlitchVariation>
              </div>
            </GlitchVariation>

            <GlitchVariation variant='matrix' delay={200}>
              <div className='relative'>
                <GlitchVariation variant='digital' delay={300}>
                  <div className='bg-gray-900 p-6 rounded-lg border border-terminal-green/30 transform transition-all hover:scale-[1.02] hover:border-terminal-green'>
                    <div className='flex items-center gap-2 mb-4'>
                      <div className='w-3 h-3 rounded-full bg-red-500'></div>
                      <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                      <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>
                    <div className='font-mono text-sm overflow-hidden'>
                      <div className='grid grid-cols-4 gap-4 mb-6'>
                        <div className='flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors'>
                          <Palette className='w-6 h-6' />
                          <span className='text-xs'>4 Styles</span>
                        </div>
                        <div className='flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors'>
                          <Settings className='w-6 h-6' />
                          <span className='text-xs'>Settings</span>
                        </div>
                        <div className='flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors'>
                          <Zap className='w-6 h-6' />
                          <span className='text-xs'>Real-time</span>
                        </div>
                        <div className='flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors'>
                          <Terminal className='w-6 h-6' />
                          <span className='text-xs'>Terminal</span>
                        </div>
                      </div>
                      <GlitchVariation variant='wave' delay={500}>
                        <pre className='text-terminal-green text-xs leading-relaxed'>
                          {`> Initializing Creative Suite...
> Loading AI Models...
> Available Tools:
  - AI Text-to-ASCII Generation
  - Smart Image-to-ASCII Conversion
  - ASCII Poetry Generator
  - Code Pattern Designer
  - MIDI Visualizer
> Style Options:
  - Default (Classic ASCII)
  - Realistic (Enhanced Detail)
  - Animated (Motion Effects)
  - Graphic (Modern Style)
> Controls Available:
  - Creativity Level: [▰▰▰▱▱]
  - Complexity: [▰▰▱▱▱]
  - Character Set: Extended
  - Aspect Ratio: Auto
> Settings Active:
  - High Contrast Mode
  - Live Preview
  - Auto-Scaling
> System Ready

    ╭────────────────────╮
    │ ⚡ ASCII STUDIO ⚡ │
    │  ▓▒░ CREATE ░▒▓   │
    ╰────────────────────╯`}
                        </pre>
                      </GlitchVariation>
                      <div className='mt-6 grid grid-cols-3 gap-2'>
                        <div className='text-terminal-green/50 text-xs text-center p-2 border border-terminal-green/20 rounded hover:bg-terminal-green/5 hover:text-terminal-green/70 transition-colors cursor-pointer'>
                          Default
                        </div>
                        <div className='text-terminal-green/50 text-xs text-center p-2 border border-terminal-green/20 rounded hover:bg-terminal-green/5 hover:text-terminal-green/70 transition-colors cursor-pointer'>
                          Realistic
                        </div>
                        <div className='text-terminal-green/50 text-xs text-center p-2 border border-terminal-green/20 rounded hover:bg-terminal-green/5 hover:text-terminal-green/70 transition-colors cursor-pointer'>
                          Animated
                        </div>
                      </div>
                    </div>
                  </div>
                </GlitchVariation>
              </div>
            </GlitchVariation>
          </div>
        </div>
      </GlitchVariation>
    </section>
  );
}
