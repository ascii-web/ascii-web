"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Share2,
  Copy,
  Heart,
  Eye,
  Maximize2,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type OutputContent = {
  type: "text" | "image";
  content: string;
  characters?: number;
};

export function PreviewPanel() {
  const [output, setOutput] = useState<OutputContent | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<"preview" | "code" | "split">(
    "preview"
  );
  const [likes, setLikes] = useState(42);
  const [views, setViews] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [theme, setTheme] = useState("terminal");

  // Sample ASCII art
  const sampleArt = `    ╭─────────────────╮
    │  ◉ CYBER-PUNK ◉  │
    │                 │
    │    ╔═══════╗    │
    │    ║ █▓▒░█ ║    │
    │    ║ ░▒▓█░ ║    │
    │    ╚═══════╝    │
    │                 │
    │  ▓▓▓▓▓▓▓▓▓▓▓▓▓  │
    ╰─────────────────╯
         │ │ │ │ │
      ╔══╧═╧═╧═╧═╧══╗
      ║ NEURAL-LINK  ║
      ╚══════════════╝`;

  // Sample image URL (placeholder)
  const sampleImageUrl = "/placeholder.svg?height=400&width=600";

  useEffect(() => {
    // Simulate typing effect for ASCII art
    const textOutput: OutputContent = {
      type: "text",
      content: sampleArt,
      characters: sampleArt.length,
    };
    let i = 0;
    const timer = setInterval(() => {
      if (i < textOutput.content.length) {
        setOutput({
          ...textOutput,
          content: textOutput.content.slice(0, i + 1),
        });
        i++;
      } else {
        clearInterval(timer);
        // After ASCII art, simulate image generation
        setTimeout(() => {
          setOutput({ type: "image", content: sampleImageUrl });
        }, 1000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleCopy = async () => {
    if (output?.type === "text") {
      await navigator.clipboard.writeText(output.content);
    } else if (output?.type === "image") {
      // For images, copying might involve more complex logic (e.g., copying to clipboard as image data)
      // For now, we'll just log it.
      console.log("Copying image:", output.content);
    }
    // Could add a toast notification here
  };

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case "terminal":
        return "text-terminal-green";
      case "cyberpunk":
        return "text-magenta";
      case "matrix":
        return "text-green-400";
      case "retro":
        return "text-amber-400";
      default:
        return "text-terminal-green";
    }
  };

  return (
    <div className='w-96 bg-gray-800 border-l border-gray-700 flex flex-col'>
      {/* Header */}
      <div className='p-4 border-b border-gray-700'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-lg font-bold text-terminal-green flex items-center gap-2'>
            <span className='text-gray-500'>//</span> LIVE_PREVIEW
          </h3>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className='p-1 text-gray-400 hover:text-terminal-green transition-colors'
            >
              <Maximize2 className='w-4 h-4' />
            </button>
            <div className='flex items-center gap-1'>
              <div className='w-2 h-2 rounded-full bg-red-500'></div>
              <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
              <div className='w-2 h-2 rounded-full bg-terminal-green animate-pulse'></div>
            </div>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className='flex bg-gray-900 rounded-lg p-1'>
          {[
            { mode: "preview", label: "Preview" },
            { mode: "code", label: "Code" },
            { mode: "split", label: "Split" },
          ].map((tab) => (
            <button
              key={tab.mode}
              onClick={() => setViewMode(tab.mode as any)}
              className={`flex-1 px-3 py-1 rounded text-sm font-semibold transition-all duration-200 ${
                viewMode === tab.mode
                  ? "bg-terminal-green text-black"
                  : "text-gray-400 hover:text-terminal-green"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Theme Selector */}
      <div className='p-4 border-b border-gray-700'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-sm font-semibold text-white flex items-center gap-2'>
            <Palette className='w-4 h-4' />
            Theme
          </span>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {[
            { name: "terminal", color: "bg-terminal-green" },
            { name: "cyberpunk", color: "bg-magenta" },
            { name: "matrix", color: "bg-green-400" },
            { name: "retro", color: "bg-amber-400" },
          ].map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className={`w-full h-8 rounded border-2 transition-all duration-200 ${
                theme === themeOption.name
                  ? "border-white scale-110"
                  : "border-gray-600 hover:border-gray-400"
              } ${themeOption.color}`}
            />
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className='flex-1 p-4 overflow-hidden'>
        <div className='bg-black border border-gray-600 rounded-lg h-full overflow-hidden'>
          {/* Terminal Header */}
          <div className='bg-gray-900 px-3 py-2 border-b border-gray-600 flex items-center justify-between'>
            <span className='text-xs text-gray-400'>output.txt</span>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1 text-xs text-gray-400'>
                <Eye className='w-3 h-3' />
                {views}
              </div>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 text-xs transition-colors ${
                  isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
                }`}
              >
                <Heart className={`w-3 h-3 ${isLiked ? "fill-current" : ""}`} />
                {likes}
              </button>
            </div>
          </div>

          {/* Output Display */}
          <div className='p-4 h-full overflow-auto flex items-center justify-center'>
            {output ? (
              output.type === "text" ? (
                <pre
                  className={`text-xs leading-tight font-mono ${getThemeColors(
                    theme
                  )} whitespace-pre-wrap`}
                >
                  {output.content}
                  <span className='animate-pulse'>█</span>
                </pre>
              ) : (
                <img
                  src={output.content || "/placeholder.svg"}
                  alt='Generated content'
                  className='max-w-full max-h-full object-contain'
                />
              )
            ) : (
              <div className='flex items-center justify-center h-full text-gray-500'>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🎨</div>
                  <p className='text-sm'>Your creation will appear here</p>
                  <p className='text-xs mt-2'>Start by entering a prompt</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='p-4 border-t border-gray-700 space-y-3'>
        <div className='grid grid-cols-2 gap-2'>
          <Button
            onClick={handleCopy}
            size='sm'
            variant='outline'
            className='border-gray-600 text-gray-300 hover:border-terminal-green hover:text-terminal-green bg-transparent'
          >
            <Copy className='w-4 h-4 mr-2' />
            Copy
          </Button>
          <Button
            size='sm'
            variant='outline'
            className='border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-transparent'
          >
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
        </div>

        <Button
          className='w-full bg-magenta text-black hover:bg-magenta/90 font-semibold'
          size='sm'
        >
          <Share2 className='w-4 h-4 mr-2' />
          Share to Gallery
        </Button>

        {/* Generation Stats */}
        <div className='bg-gray-900 rounded p-3 text-xs text-gray-400 space-y-1'>
          <div className='flex justify-between'>
            <span>Generation Time:</span>
            <span className='text-terminal-green'>2.3s</span>
          </div>
          <div className='flex justify-between'>
            <span>Characters:</span>
            <span className='text-terminal-green'>
              {output?.characters || 0}
            </span>
          </div>
          <div className='flex justify-between'>
            <span>Complexity:</span>
            <span className='text-yellow-400'>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
