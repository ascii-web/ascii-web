"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "Ascii-Web transformed my old photos into stunning ASCII art. The 'Realistic' style is mind-blowing!",
      author: "Alex P.",
      role: "Digital Artist",
      delay: 0,
    },
    {
      quote:
        "The AI image generation is incredibly intuitive. I've created unique visuals for my projects in minutes.",
      author: "Jamie L.",
      role: "Content Creator",
      delay: 100,
    },
    {
      quote:
        "As a developer, the code snippet generation is a game-changer. It's like having a coding assistant!",
      author: "Sam R.",
      role: "Software Engineer",
      delay: 200,
    },
    {
      quote:
        "The 'Animated' ASCII option is pure genius. My social media posts have never been this engaging.",
      author: "Casey M.",
      role: "Social Media Manager",
      delay: 300,
    },
  ];

  return (
    <section ref={sectionRef} className='py-20 px-4 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-terminal-green'>
          What Our Users Are Saying
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-terminal-green/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-gray-300 text-base italic mb-4'>
                "{testimonial.quote}"
              </p>
              <p className='text-terminal-green font-semibold'>
                {testimonial.author}
              </p>
              <p className='text-gray-500 text-sm'>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
