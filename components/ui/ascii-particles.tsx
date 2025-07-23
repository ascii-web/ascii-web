"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  char: string;
  dx: number;
  dy: number;
  opacity: number;
}

const ASCII_CHARS = "░▒▓█▄▀■@#$%&*+=-_/:;{}[]()¦";

export function AsciiParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Initialize particles
    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          char: ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)],
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };
    initParticles();

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          particle.x += particle.dx;
          particle.y += particle.dy;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

          // Draw particle
          ctx.font = "16px monospace";
          ctx.fillStyle =
            theme === "dark"
              ? `rgba(0, 255, 0, ${particle.opacity})`
              : `rgba(0, 100, 0, ${particle.opacity})`;
          ctx.fillText(particle.char, particle.x, particle.y);

          return particle;
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 pointer-events-none z-0 opacity-30'
    />
  );
}
