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
    title: "AI-Powered Generation",
    description:
      "Advanced neural networks transform your ideas into ASCII masterpieces",
  },
  {
    icon: ImageIcon,
    title: "Image to ASCII",
    description:
      "Convert any image into stunning ASCII art with intelligent mapping",
  },
  {
    icon: Palette,
    title: "Style Customization",
    description:
      "Fine-tune your ASCII art with custom character sets and styles",
  },
  {
    icon: Sparkles,
    title: "Real-time Preview",
    description: "See your ASCII art come to life as you make adjustments",
  },
  {
    icon: Code,
    title: "Export Options",
    description: "Save your work in multiple formats for various use cases",
  },
  {
    icon: Layers,
    title: "Version History",
    description:
      "Keep track of your creative process with detailed version control",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='wave' delay={0}>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 text-terminal-green'>
            Powerful Features
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <GlitchVariation
                key={feature.title}
                variant='wave'
                delay={200 + index * 100}
                className='h-full'
              >
                <div className='bg-gray-900 p-6 rounded-lg border border-terminal-green/30 h-full transform transition-transform hover:scale-[1.02]'>
                  <div className='flex items-center gap-4 mb-4'>
                    <feature.icon className='w-8 h-8 text-terminal-green' />
                    <h3 className='text-xl font-bold text-terminal-green'>
                      {feature.title}
                    </h3>
                  </div>
                  <p className='text-gray-400'>{feature.description}</p>
                </div>
              </GlitchVariation>
            ))}
          </div>
        </div>
      </GlitchVariation>
    </section>
  );
}
