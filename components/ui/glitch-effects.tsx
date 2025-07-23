"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface GlitchContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function GlitchContainer({
  children,
  delay = 0,
  className = "",
}: GlitchContainerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`glitch-container ${className} ${
        inView ? "fade-in-glitch" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function GlitchText({
  text,
  className = "",
  delay = 0,
}: GlitchTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <span
      ref={ref}
      className={`glitch-text ${className} ${inView ? "fade-in-glitch" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
      data-text={text}
      // dangerouslySetInnerHTML={{ __html: text }}
    >
      {text}
    </span>
  );
}
