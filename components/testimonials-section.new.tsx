"use client";

import { useRef } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import { Quote } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Mike Robinson",
      role: "Educator & Curriculum Designer",
      quote:
        "This platform has helped me turn complex concepts into visual ASCII teaching aids. It's not just art, it's a new way to teach visually and engagingly.",
      avatar: "/images/avatars/mike.png",
    },
    {
      name: "Jason Brooks",
      role: "Musician & Visual Performer",
      quote:
        "I integrate ASCII visuals into live sets and music videos. These pure creative tools add this nostalgic tech flair that resonates with my audience.",
      avatar: "/images/avatars/jason.png",
    },
    {
      name: "Chen Lee",
      role: "UI/UX Designer",
      quote:
        "ASCII visuals give my presentations and mood boards in a refreshingly retro style, simple, creative, customizable, and surprisingly effective.",
      avatar: "/images/avatars/chen.png",
    },
  ];

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='digital' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-6'>
              What Our Users Say
            </h2>
            <p className='text-gray-400 text-lg'>
              Join thousands of satisfied creators using our platform
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <GlitchVariation
                key={testimonial.name}
                variant='digital'
                delay={200 + index * 150}
              >
                <div className='bg-gray-900 p-6 rounded-lg border border-terminal-green/30 transform transition-transform hover:scale-[1.02]'>
                  <Quote className='w-10 h-10 text-terminal-green mb-4' />
                  <p className='text-gray-400 mb-6 italic'>
                    "{testimonial.quote}"
                  </p>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-terminal-green/20 overflow-hidden'>
                      <OptimizedImage
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        width={48}
                        height={48}
                        className='rounded-full'
                      />
                      <span className='text-terminal-green text-lg font-bold'>
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className='font-bold text-terminal-green'>
                        {testimonial.name}
                      </div>
                      <div className='text-gray-400 text-sm'>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </GlitchVariation>
            ))}
          </div>

          <GlitchVariation variant='digital' delay={700}>
            <div className='text-center mt-12'>
              <div className='inline-block bg-black border border-terminal-green/30 rounded-lg p-6'>
                <div className='text-2xl font-bold text-terminal-green mb-2'>
                  Ready to Join?
                </div>
                <p className='text-gray-400 mb-4'>
                  Start creating your own ASCII masterpieces today
                </p>
                <button className='px-8 py-3 bg-terminal-green text-black font-bold rounded hover:bg-terminal-green/90 transition-colors'>
                  Get Started Free
                </button>
              </div>
            </div>
          </GlitchVariation>
        </div>
      </GlitchVariation>
    </section>
  );
}
