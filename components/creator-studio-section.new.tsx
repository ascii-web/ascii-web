"use client";

import { useRef } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import { Terminal } from "lucide-react";

export function CreatorStudioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='matrix' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <GlitchVariation variant='matrix' delay={200}>
              <div className='space-y-6'>
                <h2 className='text-4xl md:text-5xl font-bold text-terminal-green'>
                  Create ASCII Art Like Never Before
                </h2>
                <p className='text-gray-400 text-lg'>
                  Our advanced AI-powered studio gives you the tools to
                  transform your ideas into stunning ASCII masterpieces.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button className='px-8 py-3 bg-terminal-green text-black font-bold rounded hover:bg-terminal-green/90 transition-colors'>
                    Try Now
                  </button>
                  <button className='px-8 py-3 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-colors'>
                    Learn More
                  </button>
                </div>
              </div>
            </GlitchVariation>

            <GlitchVariation variant='matrix' delay={400}>
              <div className='relative'>
                <div className='bg-gray-900 p-6 rounded-lg border border-terminal-green/30'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  </div>
                  <div className='font-mono text-sm overflow-hidden'>
                    <Terminal className='w-12 h-12 text-terminal-green mb-4' />
                    <pre className='text-terminal-green'>
                      {`> Initializing ASCII Studio...
> Loading AI Models...
> Ready for creation!
                      
    ╭──────────╮
    │ ^    ^   │
    │   ▼     │
    │  ───    │
    ╰──────────╯`}
                    </pre>
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
