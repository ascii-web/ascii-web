"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  PenTool,
  Settings2,
  Save,
  Share2,
  Sparkles,
  ImageIcon,
  TextSelect,
  Code,
  Music,
} from "lucide-react";
import { GlitchText, GlitchContainer } from "@/components/ui/glitch-effects";

export function HowItWorksSection() {
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineProgress(100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='py-20 px-4 bg-black scan-lines'>
      <div className='max-w-6xl mx-auto'>
        <GlitchContainer>
          <h2 className='text-3xl md:text-5xl font-bold text-center mb-16'>
            <GlitchText
              text='From Prompt to Pixel: The Journey'
              className='text-terminal-green'
            />
          </h2>
        </GlitchContainer>

        <div className='relative'>
          {/* Connecting Lines */}
          <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-terminal-green to-transparent transform -translate-y-1/2'>
            <div
              className='h-full bg-terminal-green transition-all duration-2000'
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          {/* Process Steps */}
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
            {/* Step 1: Input */}
            <GlitchContainer delay={200}>
              <div className='relative bg-gray-900 border border-terminal-green/30 rounded-lg p-6 transform transition-transform hover:scale-[1.02]'>
                <div className='absolute -top-3 left-6 bg-black px-3 py-1 border border-terminal-green/50 rounded'>
                  <GlitchText
                    text='1. Your Concept'
                    className='text-terminal-green text-sm font-semibold'
                  />
                </div>

                <div className='mt-4'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
                  </div>

                  <div className='bg-black p-4 rounded border border-gray-700 mb-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Upload className='w-5 h-5 text-magenta' />
                      <span className='text-gray-300'>
                        Upload image or enter prompt
                      </span>
                    </div>
                    <div className='text-terminal-green'>
                      {"> "}
                      <span className='animate-pulse'>█</span>
                    </div>
                  </div>

                  <GlitchContainer delay={100}>
                    <p className='text-gray-400 text-sm'>
                      Type in a detailed prompt or upload your favorite image.
                    </p>
                  </GlitchContainer>
                </div>
              </div>
            </GlitchContainer>

            {/* Step 2: AI Core */}
            <GlitchContainer delay={400}>
              <div className='relative bg-gray-900 border border-magenta/30 rounded-lg p-6 transform transition-transform hover:scale-[1.02]'>
                <div className='absolute -top-3 left-6 bg-black px-3 py-1 border border-magenta/50 rounded'>
                  <GlitchText
                    text='2. Customize & Create'
                    className='text-magenta text-sm font-semibold'
                  />
                </div>
                <div className='flex items-center gap-2 my-4'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
                </div>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-black/50 p-3 rounded border border-magenta/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Settings2 className='w-5 h-5 text-magenta' />
                        <span className='text-gray-300'>Style Options</span>
                      </div>
                      <div className='text-xs text-gray-400'>
                        • Default • Realistic • Animated • Graphic
                      </div>
                    </div>
                    <div className='bg-black/50 p-3 rounded border border-magenta/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <PenTool className='w-5 h-5 text-magenta' />
                        <span className='text-gray-300'>Fine-Tuning</span>
                      </div>
                      <div className='text-xs text-gray-400'>
                        • Creativity Level •Detail Complexity • Character Set •
                        Aspect Ratio
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='bg-black p-4 rounded border border-gray-700 mb-4 relative overflow-hidden'>
                    <NeuralNetwork isVisible={lineProgress > 0} />
                  </div>

                  <GlitchContainer delay={100}>
                    <p className='text-gray-400 text-sm'>
                      Perfect your output with detailed adjustments and diverse
                      styling options.
                    </p>
                  </GlitchContainer>
                </div>
              </div>
            </GlitchContainer>

            {/* Step 3: Output */}
            <GlitchContainer delay={600}>
              <div className='relative bg-gray-900 border border-terminal-green/30 rounded-lg p-6 transform transition-transform hover:scale-[1.02]'>
                <div className='absolute -top-3 left-6 bg-black px-3 py-1 border border-terminal-green/50 rounded'>
                  <GlitchText
                    text='3. Save & Share'
                    className='text-terminal-green text-sm font-semibold'
                  />
                </div>

                <div className='mt-4'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
                  </div>

                  <h3 className='text-xl font-bold mb-4'>
                    <GlitchText
                      text='Craft Your Vision'
                      className='text-terminal-green'
                    />
                  </h3>

                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='bg-black/50 p-3 rounded border border-terminal-green/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Save className='w-5 h-5 text-terminal-green' />
                        <span className='text-gray-300'>Save Options</span>
                      </div>
                      <div className='text-xs text-gray-400'>
                        • Save to Gallery • Export as File • Create Template •
                        Version History
                      </div>
                    </div>
                    <div className='bg-black/50 p-3 rounded border border-terminal-green/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Share2 className='w-5 h-5 text-terminal-green' />
                        <span className='text-gray-300'>Share Options</span>
                      </div>
                      <div className='text-xs text-gray-400'>
                        • Public Gallery • Private Link • Download • Embed Code
                      </div>
                    </div>
                  </div>

                  <div className='bg-black p-4 rounded border border-gray-700 mb-4'>
                    <pre className='text-terminal-green text-xs leading-tight'>
                      {`> Preview of your creation:
    
┌────────────────────┐
│    ASCII STUDIO    │
├────────────────────┤
│  ▄▄▄   ▄▄▄   ▄▄▄   │
│  ███   ███   ███   │
│  ▀▀▀   ▀▀▀   ▀▀▀   │
└────────────────────┘

> Status: Ready to export
> Format: Animated ASCII
> Resolution: 32x16
> Style: Graphic`}
                    </pre>
                  </div>

                  <GlitchContainer delay={100}>
                    <p className='text-gray-400 text-sm'>
                      View your finished piece, save and showcase it across your
                      favorite platforms.
                    </p>
                  </GlitchContainer>
                </div>
              </div>
            </GlitchContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeuralNetwork({ isVisible }: { isVisible: boolean }) {
  return (
    <div className='relative h-20 flex items-center justify-center'>
      {/* Neural network visualization */}
      <div className='grid grid-cols-3 gap-8 items-center'>
        {/* Input layer */}
        <div className='flex flex-col gap-2'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-terminal-green transition-all duration-1000 delay-${
                i * 200
              } ${isVisible ? "opacity-100 animate-pulse" : "opacity-30"}`}
            />
          ))}
        </div>

        {/* Hidden layer */}
        <div className='flex flex-col gap-1'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-magenta transition-all duration-1000 delay-${
                i * 150
              } ${isVisible ? "opacity-100 animate-pulse" : "opacity-30"}`}
            />
          ))}
        </div>

        {/* Output layer */}
        <div className='flex flex-col gap-2'>
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-terminal-green transition-all duration-1000 delay-${
                i * 300
              } ${isVisible ? "opacity-100 animate-pulse" : "opacity-30"}`}
            />
          ))}
        </div>
      </div>

      {/* Connecting lines */}
      <svg className='absolute inset-0 w-full h-full' style={{ zIndex: -1 }}>
        {/* Lines from input to hidden */}
        {[1, 2, 3].map((input) =>
          [1, 2, 3, 4, 5].map((hidden) => (
            <line
              key={`${input}-${hidden}`}
              x1='25%'
              y1={`${20 + input * 20}%`}
              x2='50%'
              y2={`${10 + hidden * 16}%`}
              stroke='rgba(255, 0, 255, 0.3)'
              strokeWidth='1'
              className={`transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        )}

        {/* Lines from hidden to output */}
        {[1, 2, 3, 4, 5].map((hidden) =>
          [1, 2].map((output) => (
            <line
              key={`${hidden}-${output}`}
              x1='50%'
              y1={`${10 + hidden * 16}%`}
              x2='75%'
              y2={`${30 + output * 20}%`}
              stroke='rgba(0, 255, 0, 0.3)'
              strokeWidth='1'
              className={`transition-opacity duration-1000 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        )}
      </svg>
    </div>
  );
}
