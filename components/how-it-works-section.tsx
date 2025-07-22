"use client"

import { useEffect, useRef, useState } from "react"
import { Upload } from "lucide-react"

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-terminal-green">
          From Prompt to Masterpiece: Our Process
        </h2>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-terminal-green to-transparent transform -translate-y-1/2">
            <div
              className={`h-full bg-terminal-green transition-all duration-2000 ${isVisible ? "w-full" : "w-0"} animated-line`}
            />
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1: Input */}
            <div
              className={`relative bg-gray-900 border border-terminal-green/30 rounded-lg p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="absolute -top-3 left-6 bg-black px-3 py-1 border border-terminal-green/50 rounded text-terminal-green text-sm font-semibold">
                Terminal Window
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                </div>

                <h3 className="text-xl font-bold text-terminal-green mb-4">1. Your Concept</h3>

                <div className="bg-black p-4 rounded border border-gray-700 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="w-5 h-5 text-magenta" />
                    <span className="text-gray-300">Upload image or enter prompt</span>
                  </div>
                  <div className="text-terminal-green">
                    {"> "}
                    <span className="animate-pulse">█</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm">Provide a detailed text prompt or upload an image.</p>
              </div>
            </div>

            {/* Step 2: AI Core */}
            <div
              className={`relative bg-gray-900 border border-magenta/30 rounded-lg p-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="absolute -top-3 left-6 bg-black px-3 py-1 border border-magenta/50 rounded text-magenta text-sm font-semibold">
                AI Core
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-magenta"></div>
                </div>

                <h3 className="text-xl font-bold text-magenta mb-4">2. Deep Learning Engine</h3>

                <div className="bg-black p-4 rounded border border-gray-700 mb-4 relative overflow-hidden">
                  <NeuralNetwork isVisible={isVisible} />
                </div>

                <p className="text-gray-400 text-sm">
                  Our model, trained on curated ASCII subsets, analyzes your input for structure, tone, and detail.
                </p>
              </div>
            </div>

            {/* Step 3: Output */}
            <div
              className={`relative bg-gray-900 border border-terminal-green/30 rounded-lg p-6 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="absolute -top-3 left-6 bg-black px-3 py-1 border border-terminal-green/50 rounded text-terminal-green text-sm font-semibold">
                Output Terminal
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                </div>

                <h3 className="text-xl font-bold text-terminal-green mb-4">3. ASCII Generation</h3>

                <div className="bg-black p-4 rounded border border-gray-700 mb-4">
                  <pre className="text-terminal-green text-xs leading-tight">
                    {`    ╭─────────╮
    │  ◉   ◉  │
    │    ∩    │
    │  \\___/  │
    ╰─────────╯`}
                  </pre>
                </div>

                <p className="text-gray-400 text-sm">
                  Your unique, high-fidelity ASCII artwork is generated, ready to be shared or downloaded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NeuralNetwork({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative h-20 flex items-center justify-center">
      {/* Neural network visualization */}
      <div className="grid grid-cols-3 gap-8 items-center">
        {/* Input layer */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-terminal-green transition-all duration-1000 delay-${i * 200} ${
                isVisible ? "opacity-100 animate-pulse" : "opacity-30"
              }`}
            />
          ))}
        </div>

        {/* Hidden layer */}
        <div className="flex flex-col gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-magenta transition-all duration-1000 delay-${i * 150} ${
                isVisible ? "opacity-100 animate-pulse" : "opacity-30"
              }`}
            />
          ))}
        </div>

        {/* Output layer */}
        <div className="flex flex-col gap-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-terminal-green transition-all duration-1000 delay-${i * 300} ${
                isVisible ? "opacity-100 animate-pulse" : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {/* Lines from input to hidden */}
        {[1, 2, 3].map((input) =>
          [1, 2, 3, 4, 5].map((hidden) => (
            <line
              key={`${input}-${hidden}`}
              x1="25%"
              y1={`${20 + input * 20}%`}
              x2="50%"
              y2={`${10 + hidden * 16}%`}
              stroke="rgba(255, 0, 255, 0.3)"
              strokeWidth="1"
              className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
          )),
        )}

        {/* Lines from hidden to output */}
        {[1, 2, 3, 4, 5].map((hidden) =>
          [1, 2].map((output) => (
            <line
              key={`${hidden}-${output}`}
              x1="50%"
              y1={`${10 + hidden * 16}%`}
              x2="75%"
              y2={`${30 + output * 20}%`}
              stroke="rgba(0, 255, 0, 0.3)"
              strokeWidth="1"
              className={`transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
          )),
        )}
      </svg>
    </div>
  )
}
