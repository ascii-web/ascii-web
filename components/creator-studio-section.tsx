"use client";

import { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function CreatorStudioSection() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAscii, setGeneratedAscii] = useState("");
  const [contentType, setContentType] = useState("text-to-ascii");
  const [asciiStyle, setAsciiStyle] = useState("classic");
  const [aspectRatio, setAspectRatio] = useState([16 / 9]);

  const fullAsciiArt = `                    /\\_/\\  
                   ( o.o ) 
                    > ^ <  
                   /     \\ 
                  (  ___  )
                 /|       |\\
                ( |  ___  | )
                 \\|_______|/
                    |   |
                   /     \\
                  /       \\
                 |  _   _  |
                 | |_| |_| |
                 |_________|
                    | | |
                   /  |  \\
                  |   |   |
                 /    |    \\
                |_____|_____|`;

  const initialPrompt =
    "a photorealistic portrait of a cat wearing retro sunglasses, cinematic lighting...";
  const promptRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 700); // Slower blink for effect

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= initialPrompt.length) {
        setCurrentPrompt(initialPrompt.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedAscii("");
    let charIndex = 0;
    const generationInterval = setInterval(() => {
      if (charIndex <= fullAsciiArt.length) {
        setGeneratedAscii(fullAsciiArt.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(generationInterval);
        setIsGenerating(false);
      }
    }, 10); // Faster generation speed

    return () => clearInterval(generationInterval);
  };

  const handleUploadClick = () => {
    alert("Simulating image upload...");
    // In a real app, this would open a file input dialog
  };

  return (
    <section className='py-20 px-4 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-terminal-green'>
          Simulate Your First Creation
        </h2>

        {/* Application Window Container */}
        <div className='bg-gray-900 border border-gray-700 rounded-lg overflow-hidden relative'>
          {/* Window Title Bar */}
          <div className='bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
            </div>
            <div className='text-gray-400 text-sm font-semibold'>
              ASCII Creator Studio
            </div>
            <div className='text-xs text-magenta bg-gray-700 px-2 py-1 rounded'>
              Mock Generator Preview
            </div>
          </div>

          {/* Two Column Layout */}
          <div className='grid lg:grid-cols-2 gap-0'>
            {/* Left Column - Input Panel */}
            <div className='p-6 border-r border-gray-700'>
              <h3 className='text-xl font-bold text-terminal-green mb-4 flex items-center gap-2'>
                <span className='text-gray-500'>//</span> INPUT_
              </h3>

              {/* Content Type Selector */}
              <div className='mb-6'>
                <Label
                  htmlFor='contentType'
                  className='text-gray-400 text-sm mb-2 block'
                >
                  Content Type
                </Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger
                    id='contentType'
                    className='w-full bg-gray-800 border-gray-600 text-terminal-green'
                  >
                    <SelectValue placeholder='Select content type' />
                  </SelectTrigger>
                  <SelectContent className='bg-gray-800 border-gray-600 text-terminal-green'>
                    <SelectItem value='text-to-ascii'>Text to ASCII</SelectItem>
                    <SelectItem value='image-to-ascii'>
                      Image to ASCII
                    </SelectItem>
                    <SelectItem value='image-generation'>
                      Image Generation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Prompt Box / Image Upload */}
              {contentType === "image-to-ascii" ||
              contentType === "image-generation" ? (
                <div
                  className='border-2 border-dashed border-magenta rounded-lg p-8 text-center hover:border-magenta/80 transition-colors cursor-pointer mb-6'
                  onClick={handleUploadClick}
                >
                  <Upload className='w-8 h-8 text-magenta mx-auto mb-3' />
                  <p className='text-gray-300 font-semibold'>Upload An Image</p>
                  <p className='text-gray-500 text-sm mt-1'>
                    PNG, JPG up to 10MB
                  </p>
                </div>
              ) : (
                <div className='bg-black border border-gray-600 rounded-lg overflow-hidden mb-6'>
                  {/* Code Editor Header */}
                  <div className='bg-gray-800 px-3 py-2 text-xs text-gray-400 border-b border-gray-600'>
                    prompt.txt
                  </div>

                  {/* Code Editor Content */}
                  <div className='relative'>
                    {/* Line Numbers */}
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-900 border-r border-gray-700 flex flex-col text-xs text-gray-500 pt-4'>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className='px-2 leading-6'>
                          {num}
                        </div>
                      ))}
                    </div>

                    {/* Text Area */}
                    <textarea
                      ref={promptRef}
                      className='w-full h-32 bg-transparent text-terminal-green pl-16 pr-4 py-4 resize-none outline-none font-mono text-sm leading-6'
                      placeholder='a photorealistic portrait of a cat wearing retro sunglasses, cinematic lighting...'
                      value={currentPrompt}
                      onChange={(e) => setCurrentPrompt(e.target.value)}
                    />

                    {/* Blinking Cursor */}
                    <div
                      className={`absolute top-4 right-4 w-2 h-6 bg-terminal-green transition-opacity duration-100 ${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* ASCII Style Selector (Conditional) */}
              {(contentType === "text-to-ascii" ||
                contentType === "image-to-ascii") && (
                <div className='mb-6'>
                  <Label
                    htmlFor='asciiStyle'
                    className='text-gray-400 text-sm mb-2 block'
                  >
                    ASCII Style
                  </Label>
                  <Select value={asciiStyle} onValueChange={setAsciiStyle}>
                    <SelectTrigger
                      id='asciiStyle'
                      className='w-full bg-gray-800 border-gray-600 text-terminal-green'
                    >
                      <SelectValue placeholder='Select ASCII style' />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-800 border-gray-600 text-terminal-green'>
                      <SelectItem value='classic'>Classic</SelectItem>
                      <SelectItem value='realistic'>Realistic</SelectItem>
                      <SelectItem value='animated'>Animated</SelectItem>
                      <SelectItem value='graphic'>Graphic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Aspect Ratio Slider (Conditional) */}
              {contentType === "image-generation" && (
                <div className='mb-6'>
                  <Label
                    htmlFor='aspectRatio'
                    className='text-gray-400 text-sm mb-2 block'
                  >
                    Aspect Ratio ({aspectRatio[0].toFixed(2)}:1)
                  </Label>
                  <Slider
                    id='aspectRatio'
                    min={0.5}
                    max={2.5}
                    step={0.1}
                    value={aspectRatio}
                    onValueChange={setAspectRatio}
                    className='[&>span:first-child]:bg-terminal-green [&>span:last-child]:bg-terminal-green'
                  />
                </div>
              )}
            </div>

            {/* Right Column - Output Panel */}
            <div className='p-6'>
              <h3 className='text-xl font-bold text-terminal-green mb-4 flex items-center gap-2'>
                <span className='text-gray-500'>//</span> OUTPUT_
              </h3>

              {/* Preview Area */}
              <div className='bg-black border border-gray-600 rounded-lg overflow-hidden'>
                {/* Terminal Header */}
                <div className='bg-gray-800 px-3 py-2 text-xs text-gray-400 border-b border-gray-600 flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-terminal-green animate-pulse'></div>
                  <span>
                    {isGenerating
                      ? "Generating..."
                      : contentType === "image-generation"
                      ? "image_output.png"
                      : "ascii_output.txt"}
                  </span>
                </div>

                {/* ASCII Art / Image Output */}
                <div className='relative p-4 min-h-[200px] flex items-center justify-center'>
                  {isGenerating ? (
                    <div className='text-terminal-green text-sm animate-pulse'>
                      Generating...
                    </div>
                  ) : contentType === "image-generation" ? (
                    <img
                      src='/placeholder.svg?height=200&width=300'
                      alt='Generated Image'
                      className='max-w-full max-h-[200px] object-contain'
                    />
                  ) : (
                    <pre
                      className={`text-terminal-green text-xs leading-tight overflow-x-auto transition-all duration-300 ${
                        isHovered ? "text-shadow-magenta animate-pulse" : ""
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {generatedAscii || "Your ASCII art will appear here."}
                    </pre>
                  )}
                </div>

                {/* Generation Status */}
                <div className='bg-gray-800 px-3 py-2 text-xs text-gray-400 border-t border-gray-600'>
                  {isGenerating ? (
                    <span className='text-yellow-500'>●</span> +
                    "Generating... Please wait."
                  ) : (
                    <>
                      <span className='text-terminal-green'>●</span> +
                      "Generated in 2.3s • " + (generatedAscii.length || 0) + "
                      characters • Ready to export"
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3 mt-4'>
                <Button
                  className='bg-terminal-green text-black hover:bg-terminal-green/90 flex-1'
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate New"}
                </Button>
                <Button
                  variant='outline'
                  className='border-magenta text-magenta hover:bg-magenta hover:text-black bg-transparent'
                  disabled={
                    isGenerating ||
                    (!generatedAscii && contentType !== "image-generation")
                  }
                >
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
