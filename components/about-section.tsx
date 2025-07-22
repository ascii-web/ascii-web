"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [lineProgress, setLineProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate the timeline line
          setTimeout(() => {
            setLineProgress(100)
          }, 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Mission & Vision */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-terminal-green">The Vision: Retro-Meets-AI</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                In the golden age of computing, ASCII art was born from necessity and creativity. Limited by technology,
                artists found beauty in constraints, crafting masterpieces from simple characters.
              </p>

              <p>
                Today, we celebrate that heritage by merging retro aesthetics with cutting-edge AI. Our mission is to
                democratize ASCII art creation, building a creative digital ecosystem where imagination meets code.
              </p>

              <p className="text-terminal-green font-semibold">
                {">"} Art meets code. Nostalgia meets innovation. Your creativity meets limitless possibility.
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Timeline */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="text-2xl font-bold mb-8 text-terminal-green">Innovation Timeline</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700">
                <div
                  className="w-full bg-terminal-green transition-all duration-2000 ease-out shadow-terminal-glow"
                  style={{ height: `${lineProgress}%` }}
                />
              </div>

              {/* Timeline Points */}
              <div className="space-y-12">
                {/* Point 1 - 1960s */}
                <div
                  className={`relative pl-16 transition-all duration-1000 delay-1000 ${
                    lineProgress > 20 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="absolute left-4 w-4 h-4 bg-terminal-green rounded-full border-4 border-black shadow-terminal-glow animate-pulse" />
                  <div className="bg-gray-900 border border-terminal-green/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-terminal-green mb-2">1960s: The Genesis of ASCII Art</h4>
                    <p className="text-gray-400 text-sm">
                      Born from the limitations of early computer terminals, ASCII art emerged as a creative expression
                      using only text characters.
                    </p>
                  </div>
                </div>

                {/* Point 2 - 2020s */}
                <div
                  className={`relative pl-16 transition-all duration-1000 delay-1500 ${
                    lineProgress > 80 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="absolute left-4 w-4 h-4 bg-magenta rounded-full border-4 border-black shadow-magenta-glow animate-pulse" />
                  <div className="bg-gray-900 border border-magenta/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-magenta mb-2">2020s: The Deep Learning Revolution</h4>
                    <p className="text-gray-400 text-sm">
                      AI transforms ASCII art creation, making complex visual translations accessible to everyone while
                      preserving the authentic retro aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
