"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GlitchText, GlitchContainer } from "@/components/ui/glitch-effects";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ASCII rain effect
    const chars = "01010101░▒▓█▄▀▐▌│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i];

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += fontSize * 0.5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* ASCII Rain Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto scan-lines'>
        <GlitchContainer>
          <GlitchText
            text='Transform Imagination Into ASCII & AI Masterpieces'
            className='block text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-terminal-green'
          />
        </GlitchContainer>

        <GlitchContainer delay={300}>
          <p className='text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto'>
            Generate stunning ASCII art from text or images, create captivating
            AI images, and craft generative poetry and code snippets.
          </p>
        </GlitchContainer>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <GlitchContainer delay={600}>
            <Button
              className='bg-terminal-green text-black hover:bg-terminal-green/90 hover:shadow-terminal-glow transition-all duration-300 px-8 py-3 text-lg font-semibold'
              size='lg'
              asChild
            >
              <a href='/dashboard/'>Try the Demo (Mockup)</a>
            </Button>
          </GlitchContainer>

          <Button
            variant='outline'
            className='border-magenta text-magenta hover:bg-magenta hover:text-black transition-all duration-300 px-8 py-3 text-lg font-semibold bg-transparent'
            size='lg'
            asChild
          >
            <a href='#gallery'>Explore the Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
