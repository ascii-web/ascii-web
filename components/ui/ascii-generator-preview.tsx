"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AsciiGeneratorPreviewProps {
  className?: string;
}

const ASCII_PATTERNS = [
  `
   _____ _____ _____ _____ _____ 
  |  _  |   __|     |     |     |
  |     |__   |   --|  |  |  |  |
  |__|__|_____|_____|_____|_____|
  `,
  `
    /\\___/\\
   (  o o  )
   (  =^=  ) 
    (______)
  `,
  `
   _______________________
  |  _________________  |
  | |                 | |
  | |   ASCII Web     | |
  | |   Loading...    | |
  | |_________________| |
  |_____________________| 
  `,
  `
   ╔════════════════════╗
   ║     ASCII WEB      ║
   ║    ▒▒▒▒▒▒▒▒▒▒     ║
   ║    ▓▓▓▓▓▓▓▓▓▓     ║
   ║    █████████      ║
   ╚════════════════════╝
  `,
];

export function AsciiGeneratorPreview({
  className,
}: AsciiGeneratorPreviewProps) {
  const [currentPattern, setCurrentPattern] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    const pattern = ASCII_PATTERNS[currentPattern];

    if (isTyping) {
      const typeNextChar = () => {
        if (currentIndex < pattern.length) {
          setDisplayText((prev) => prev + pattern[currentIndex]);
          currentIndex++;
          timeout = setTimeout(typeNextChar, 50);
        } else {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentPattern((prev) => (prev + 1) % ASCII_PATTERNS.length);
          }, 2000);
        }
      };

      timeout = setTimeout(typeNextChar, 50);
    }

    return () => clearTimeout(timeout);
  }, [currentPattern, isTyping]);

  return (
    <div
      className={cn(
        "bg-black/90 text-terminal-green p-4 rounded-lg border border-terminal-green/30",
        "font-mono whitespace-pre overflow-hidden",
        className
      )}
    >
      <div className='min-h-[200px] flex items-center justify-center'>
        <pre className='text-center'>{displayText}</pre>
      </div>
    </div>
  );
}
