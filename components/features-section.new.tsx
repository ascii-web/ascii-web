"use client";

import { useRef } from "react";
import {
  Brain,
  ImageIcon,
  Code,
  Palette,
  Sparkles,
  Layers,
} from "lucide-react";
import { GlitchVariation } from "@/components/ui/glitch-variations";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Creation",
    description:
      "Create ASCII art, poems, code art, and MIDI visualizations with advanced AI",
  },
  {
    icon: ImageIcon,
    title: "Image Tools",
    description:
      "Generate custom images or convert existing ones into ASCII with intelligent mapping",
  },
  {
    icon: Palette,
    title: "Style Control",
    description:
      "Choose from realistic, animated, or graphic styles with cinematic lighting effects",
  },
  {
    icon: Sparkles,
    title: "Advanced Settings",
    description:
      "Fine-tune creativity, complexity, contrast, and character sets for perfect results",
  },
  {
    icon: Code,
    title: "Multiple Formats",
    description:
      "Create in various formats: ASCII art, poems, code patterns, and MIDI visualizations",
  },
  {
    icon: Layers,
    title: "Visual Controls",
    description:
      "Adjust aspect ratios, apply vintage effects, and preview in real-time",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='slice' delay={0}>
        <div className='container mx-auto px-4'>
          <GlitchVariation variant='digital' delay={100}>
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 text-terminal-green'>
              The Creative Powerhouse
            </h2>
          </GlitchVariation>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <GlitchVariation
                key={feature.title}
                variant={index % 2 === 0 ? "matrix" : "digital"}
                delay={200 + index * 150}
                className='h-full'
              >
                <div className='relative overflow-hidden'>
                  <GlitchVariation
                    variant={index % 2 === 0 ? "slice" : "wave"}
                    delay={300 + index * 150}
                  >
                    <div className='bg-gray-900 p-6 rounded-lg border border-terminal-green/30 h-full transform transition-all hover:scale-[1.02] hover:border-terminal-green'>
                      <div className='flex items-center gap-4 mb-4'>
                        <feature.icon className='w-8 h-8 text-terminal-green' />
                        <h3 className='text-xl font-bold text-terminal-green'>
                          {feature.title}
                        </h3>
                      </div>
                      <p className='text-gray-400'>{feature.description}</p>
                    </div>
                  </GlitchVariation>
                </div>
              </GlitchVariation>
            ))}
          </div>
        </div>
      </GlitchVariation>
    </section>
  );
}
