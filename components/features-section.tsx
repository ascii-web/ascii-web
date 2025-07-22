"use client";

import { useEffect, useRef, useState } from "react";
import {
  Brain,
  ImageIcon,
  Code,
  Palette,
  Sparkles,
  Layers,
} from "lucide-react";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description:
        "Leverage advanced deep learning models to transform your ideas into stunning ASCII art, images, and text.",
      delay: 0,
    },
    {
      icon: ImageIcon,
      title: "Image to ASCII Conversion",
      description:
        "Upload any image and watch our AI convert it into intricate, high-fidelity ASCII masterpieces.",
      delay: 100,
    },
    {
      icon: Palette,
      title: "Multi-Category ASCII Styles",
      description:
        "Choose from Classic, Realistic, Animated, or Graphic ASCII styles to match your artistic vision.",
      delay: 200,
    },
    {
      icon: Sparkles,
      title: "Generative AI Images",
      description:
        "Create unique, AI-generated images from text prompts, exploring endless visual possibilities.",
      delay: 300,
    },
    {
      icon: Code,
      title: "Code Snippet Generation",
      description:
        "Generate functional code snippets in various languages, perfect for developers and learners.",
      delay: 400,
    },
    {
      icon: Layers,
      title: "Intuitive Creator Studio",
      description:
        "A user-friendly interface designed for seamless creation, editing, and management of your projects.",
      delay: 500,
    },
  ];

  return (
    <section ref={sectionRef} className='py-20 px-4 bg-gray-950'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-magenta'>
          Unleash Your Creativity with Cutting-Edge Features
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-magenta/30 rounded-lg p-6 text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className='flex justify-center mb-4'>
                <feature.icon className='w-12 h-12 text-terminal-green animate-pulse-slow' />
              </div>
              <h3 className='text-xl font-bold text-terminal-green mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
