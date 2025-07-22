"use client";

import { useEffect, useRef, useState } from "react";

interface GlitchProps {
  children: React.ReactNode;
  variant?: "slice" | "digital" | "wave" | "flicker" | "matrix";
  delay?: number;
  className?: string;
}

export function GlitchVariation({
  children,
  variant = "slice",
  delay = 0,
  className = "",
}: GlitchProps) {
  const [hasGlitched, setHasGlitched] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasGlitched) {
          setTimeout(() => {
            setHasGlitched(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasGlitched]);

  const getVariantClass = () => {
    switch (variant) {
      case "digital":
        return "digital-glitch-container";
      case "wave":
        return "wave-glitch-container";
      case "flicker":
        return "flicker-glitch-container";
      case "matrix":
        return "matrix-glitch-container";
      default:
        return "slice-glitch-container";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`glitch-variation ${getVariantClass()} ${
        hasGlitched ? "glitched" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
