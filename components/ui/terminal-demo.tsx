"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { createAsciiAnimation } from "@/lib/ascii-utils";

interface Command {
  input: string;
  output: string;
}

interface TerminalDemoProps {
  className?: string;
  initialCommands?: Command[];
}

const DEMO_COMMANDS = {
  help: `Available commands:
  - help: Show this help message
  - clear: Clear the terminal
  - demo: Run an ASCII art demo
  - about: Learn about ASCII Web
  - generate: Generate sample ASCII art
  - tutorial: Start an interactive tutorial
  - examples: Show ASCII art examples
  - features: List platform features
  - theme [light/dark]: Change terminal theme
  - animate [text]: Create ASCII animation`,
  about: `ASCII Web - Your Creative ASCII Art Platform
  Transform your ideas into stunning ASCII masterpieces
  Use AI-powered tools to create unique digital art`,
  demo: `
   /\\_/\\  
  ( o.o ) 
   > ^ <
  
  Loading your creative journey...`,
  generate: `Generating ASCII art...
  ╔════════════════════╗
  ║    ASCII Web Art   ║
  ║    ▒▒▒▒▒▒▒▒▒▒     ║
  ║    ▓▓▓▓▓▓▓▓▓▓     ║
  ║    █████████      ║
  ╚════════════════════╝`,
};

export function TerminalDemo({
  className,
  initialCommands = [],
}: TerminalDemoProps) {
  const [commands, setCommands] = useState<Command[]>([
    { input: "help", output: DEMO_COMMANDS.help },
  ]);
  const [input, setInput] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Focus management - only when clicking on the terminal
  useEffect(() => {
    const focusInput = (e: MouseEvent) => {
      // Only focus if we're clicking inside the terminal
      if (terminalRef.current?.contains(e.target as Node)) {
        inputRef.current?.focus();
      }
    };

    terminalRef.current?.addEventListener("click", focusInput);

    return () => {
      terminalRef.current?.removeEventListener("click", focusInput);
    };
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    const args = normalizedCmd.split(" ");
    const command = args[0];

    let output = "";
    if (command === "clear") {
      setCommands([]);
      return;
    } else if (command === "theme") {
      const theme = args[1];
      if (theme === "light" || theme === "dark") {
        output = `Theme changed to ${theme}`;
      } else {
        output = "Usage: theme [light/dark]";
      }
    } else if (command === "animate") {
      const text = args.slice(1).join(" ");
      if (text) {
        output = createAsciiAnimation(text);
      } else {
        output = "Usage: animate [text]";
      }
    } else if (command === "tutorial") {
      output = `Welcome to the ASCII Web Tutorial!
Step 1: Basic ASCII Art
  ┌──────────────┐
  │ Hello World! │
  └──────────────┘

Type 'next' to continue...`;
    } else if (command === "examples") {
      output = `ASCII Art Examples:

1. Cat
  /\\___/\\
 (  o o  )
 (  =^=  )
  (______)

2. House
    /\\
   /  \\
  /____\\
  |    |
  |  ▢ |
  |____|\n
Type 'generate [number]' to try one!`;
    } else if (command === "features") {
      output = `ASCII Web Features:
✓ AI-Powered Art Generation
✓ Real-time Collaboration
✓ Custom Templates
✓ Export to Multiple Formats
✓ Cloud Storage
✓ API Access`;
    } else if (command in DEMO_COMMANDS) {
      output = DEMO_COMMANDS[command as keyof typeof DEMO_COMMANDS];
    } else if (command) {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setCommands((prev) => [...prev, { input: cmd, output }]);
    setInput("");
  };

  return (
    <div
      className={cn(
        "bg-black/90 text-terminal-green p-4 rounded-lg border border-terminal-green/30",
        "font-mono text-sm overflow-hidden",
        className
      )}
    >
      {/* Terminal Header */}
      <div className='flex items-center gap-2 mb-4 pb-2 border-b border-terminal-green/30'>
        <div className='w-3 h-3 rounded-full bg-red-500' />
        <div className='w-3 h-3 rounded-full bg-yellow-500' />
        <div className='w-3 h-3 rounded-full bg-green-500' />
        <span className='ml-2 text-terminal-green/70'>ascii-web-terminal</span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className='h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-green/20 scrollbar-track-black'
      >
        {commands.map((cmd, i) => (
          <div key={i} className='mb-2'>
            <div className='flex items-center gap-2'>
              <span className='text-terminal-green/70'>$</span>
              <span>{cmd.input}</span>
            </div>
            {cmd.output && (
              <pre className='mt-1 text-terminal-green/90 whitespace-pre-wrap'>
                {cmd.output}
              </pre>
            )}
          </div>
        ))}

        {/* Current Input Line */}
        <div className='flex items-center gap-2'>
          <span className='text-terminal-green/70'>$</span>
          <span>{input}</span>
          <span
            className={cn(
              "w-2 h-4 bg-terminal-green/70",
              cursorVisible ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type='text'
        className='absolute opacity-0 left-0 bottom-0 w-px h-px'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCommand(input);
          } else if (e.key === "ArrowUp") {
            // Navigate command history up
            const lastCommand = commands[commands.length - 1]?.input;
            if (lastCommand) setInput(lastCommand);
          }
        }}
      />
    </div>
  );
}
