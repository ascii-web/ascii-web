"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Sparkles,
  Zap,
  Save,
  Share2,
  Copy,
  RefreshCw,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "./page-header";

type ContentType =
  | "ascii-art"
  | "poem"
  | "code"
  | "midi"
  | "image-generation"
  | "image-to-ascii";
type AsciiStyle = "default" | "realistic" | "animated" | "graphic";

export function CreatorStudio() {
  const [prompt, setPrompt] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [contentType, setContentType] = useState<ContentType>("ascii-art");
  const [asciiStyle, setAsciiStyle] = useState<AsciiStyle>("default");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [settings, setSettings] = useState({
    highContrast: false,
    cinematicLighting: true,
    vintageTerminal: false,
    creativity: 0.7,
    complexity: 0.5,
    characterSet: "extended",
    imageAspectRatio: "16:9", // New setting for image generation
  });

  const [recentPrompts] = useState([
    "Cyberpunk cityscape with neon lights",
    "Majestic dragon breathing fire",
    "Vintage computer terminal",
    "Abstract geometric patterns",
    "A serene forest in ASCII art",
    "A futuristic robot portrait",
  ]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleQuickPrompt = (quickPrompt: string) => {
    setPrompt(quickPrompt);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const isImageInputRequired = contentType === "image-to-ascii";

  return (
    <div className='flex-1 bg-gray-900 p-4 md:p-6 overflow-y-auto'>
      <div className='max-w-7xl mx-auto space-y-6'>
        {/* Header */}
        <PageHeader />

        {/* Quick Actions Bar */}
        <div className='mb-4'>
          <div className='flex flex-col md:flex-row items-center justify-between bg-gray-800 border border-gray-600 rounded-lg p-4 gap-4 md:gap-0'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <Sparkles className='w-5 h-5 text-terminal-green' />
                <span className='text-white font-semibold'>Quick Actions</span>
              </div>
              <div className='flex gap-2'>
                <Button
                  size='sm'
                  variant='outline'
                  className='border-gray-600 text-gray-300 hover:border-terminal-green hover:text-terminal-green bg-transparent'
                >
                  <Save className='w-4 h-4 mr-2' />
                  Save Draft
                </Button>
                <Button
                  size='sm'
                  variant='outline'
                  className='border-gray-600 text-gray-300 hover:border-magenta hover:text-magenta bg-transparent'
                >
                  <Share2 className='w-4 h-4 mr-2' />
                  Share
                </Button>
              </div>
            </div>
            <div className='text-sm text-gray-400'>
              Last saved:{" "}
              <span className='text-terminal-green'>2 minutes ago</span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column: Prompts and Editor */}
          <div className='space-y-6 lg:col-span-2'>
            {/* Recent Prompts */}
            <div className='bg-gray-800 border border-gray-600 rounded-lg p-4'>
              <h3 className='text-sm font-semibold text-white mb-3 flex items-center gap-2'>
                <RefreshCw className='w-4 h-4 text-gray-400' />
                Recent Prompts
              </h3>
              <div className='flex flex-wrap gap-2'>
                {recentPrompts.map((recentPrompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(recentPrompt)}
                    className='px-3 py-1 bg-gray-700 hover:bg-terminal-green/20 hover:border-terminal-green border border-gray-600 rounded-full text-sm text-gray-300 hover:text-terminal-green transition-all duration-200 hover:scale-105'
                  >
                    {recentPrompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Prompt Input / Image Upload */}
            <div className='space-y-4'>
              <label className='block text-sm font-semibold text-terminal-green'>
                {isImageInputRequired ? "Upload Image" : "Project Description"}
              </label>
              <div className='bg-black border border-gray-600 rounded-lg overflow-hidden hover:border-terminal-green/50 transition-colors'>
                {/* Editor Header */}
                <div className='bg-gray-800 px-4 py-2 border-b border-gray-600 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-400'>
                      {isImageInputRequired
                        ? imageFile
                          ? imageFile.name
                          : "upload.jpg"
                        : "prompt.txt"}
                    </span>
                    {!isImageInputRequired && (
                      <div className='flex items-center gap-1 ml-4'>
                        <div className='w-2 h-2 rounded-full bg-terminal-green animate-pulse'></div>
                        <span className='text-xs text-terminal-green'>
                          Live Preview
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    {!isImageInputRequired && (
                      <button className='text-xs text-gray-400 hover:text-terminal-green transition-colors'>
                        <Copy className='w-3 h-3' />
                      </button>
                    )}
                    <div className='flex items-center gap-1'>
                      <div className='w-2 h-2 rounded-full bg-red-500'></div>
                      <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
                      <div className='w-2 h-2 rounded-full bg-terminal-green'></div>
                    </div>
                  </div>
                </div>

                {/* Editor Content */}
                <div className='relative'>
                  {isImageInputRequired ? (
                    <div className='flex items-center justify-center h-48'>
                      <label
                        htmlFor='image-upload'
                        className='cursor-pointer flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-terminal-green hover:bg-gray-900 transition-colors'
                      >
                        {imageFile ? (
                          <img
                            src={
                              URL.createObjectURL(imageFile) ||
                              "/placeholder.svg"
                            }
                            alt='Uploaded preview'
                            className='max-h-full max-w-full object-contain p-2'
                          />
                        ) : (
                          <>
                            <Upload className='w-8 h-8 mb-2' />
                            <span className='text-sm'>
                              Click to upload image
                            </span>
                            <span className='text-xs text-gray-500 mt-1'>
                              (JPG, PNG, GIF)
                            </span>
                          </>
                        )}
                        <input
                          id='image-upload'
                          type='file'
                          accept='image/*'
                          onChange={handleImageUpload}
                          className='hidden'
                        />
                      </label>
                    </div>
                  ) : (
                    <>
                      {/* Line Numbers */}
                      <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-950 border-r border-gray-700 flex flex-col text-xs text-gray-500 pt-4'>
                        {Array.from({ length: 8 }, (_, i) => (
                          <div key={i + 1} className='px-2 leading-6'>
                            {i + 1}
                          </div>
                        ))}
                      </div>

                      {/* Textarea */}
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe your vision... e.g., 'An expressive ASCII portrait of a futuristic cyborg, glitch effects, neon pink highlights'"
                        className='w-full h-48 bg-transparent text-terminal-green pl-16 pr-4 py-4 resize-none outline-none font-mono text-sm leading-6 placeholder-gray-500 transition-all duration-200 focus:shadow-terminal-glow'
                        style={{ minWidth: 0 }}
                      />

                      {/* Character count */}
                      <div className='absolute bottom-2 right-4 text-xs text-gray-500'>
                        {prompt.length}/500
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Config */}
          <div className='space-y-6 lg:col-span-1'>
            {/* AI Configuration Panel */}
            <div className='bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-6 hover:border-gray-500 transition-colors'>
              <h3 className='text-lg font-bold text-terminal-green flex items-center gap-2'>
                <Zap className='w-5 h-5' />
                AI Configuration
              </h3>
              {/* ...existing code for AI Configuration Panel... */}
              {/* Content Type Selector, ASCII Style Selector, Style Modifiers, Advanced Controls */}
              {/* ...copy unchanged code from previous AI Configuration Panel... */}
              {/* Content Type Selector */}
              <div className='space-y-3'>
                <label className='block text-sm font-semibold text-white'>
                  Select Content Type
                </label>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                  {/* ...existing code... */}
                  {[
                    { value: "ascii-art", label: "Text to ASCII", icon: "📝" },
                    {
                      value: "image-to-ascii",
                      label: "Image to ASCII",
                      icon: "🖼️",
                    },
                    {
                      value: "image-generation",
                      label: "Image Generation",
                      icon: "✨",
                    },
                    { value: "poem", label: "Generative Poem", icon: "📜" },
                    { value: "code", label: "Code Snippet", icon: "💻" },
                    { value: "midi", label: "Musical MIDI", icon: "🎵" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        setContentType(option.value as ContentType)
                      }
                      className={`p-4 rounded-lg border transition-all duration-200 text-sm font-semibold hover:scale-105 ${
                        contentType === option.value
                          ? "bg-terminal-green/20 border-terminal-green text-terminal-green shadow-terminal-glow"
                          : "bg-gray-700 border-gray-600 text-gray-300 hover:border-terminal-green/50 hover:bg-gray-600"
                      }`}
                    >
                      <div className='text-2xl mb-2'>{option.icon}</div>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ASCII Style Selector (Conditional) */}
              {(contentType === "ascii-art" ||
                contentType === "image-to-ascii") && (
                <div className='space-y-3'>
                  <label className='block text-sm font-semibold text-white'>
                    ASCII Style
                  </label>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {[
                      { value: "default", label: "Classic" },
                      { value: "realistic", label: "Realistic" },
                      { value: "animated", label: "Animated" },
                      { value: "graphic", label: "Graphic" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() =>
                          setAsciiStyle(option.value as AsciiStyle)
                        }
                        className={`p-3 rounded-lg border transition-all duration-200 text-sm font-semibold ${
                          asciiStyle === option.value
                            ? "bg-magenta/20 border-magenta text-magenta"
                            : "bg-gray-700 border-gray-600 text-gray-300 hover:border-magenta/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Style Modifiers */}
              <div className='space-y-3'>
                <label className='block text-sm font-semibold text-white'>
                  Style Modifiers
                </label>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {[
                    {
                      key: "highContrast",
                      label: "High-Contrast",
                      desc: "Sharp, bold contrasts",
                    },
                    {
                      key: "cinematicLighting",
                      label: "Cinematic Lighting",
                      desc: "Dramatic shadows",
                    },
                    {
                      key: "vintageTerminal",
                      label: "Vintage Terminal",
                      desc: "Retro computer feel",
                    },
                  ].map((modifier) => (
                    <div
                      key={modifier.key}
                      className='bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors'
                    >
                      <div className='flex flex-col items-left justify-between mb-2 h-full'>
                        <span className='text-sm font-semibold text-gray-300'>
                          {modifier.label}
                        </span>
                        <p className='text-xs text-gray-400'>{modifier.desc}</p>
                        <button
                          onClick={() =>
                            setSettings((prev) => ({
                              ...prev,
                              [modifier.key]:
                                !prev[modifier.key as keyof typeof prev],
                            }))
                          }
                          className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                            settings[modifier.key as keyof typeof settings]
                              ? "bg-terminal-green shadow-terminal-glow"
                              : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                              settings[modifier.key as keyof typeof settings]
                                ? "translate-x-7"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Controls */}
              <div className='space-y-3'>
                <button
                  onClick={() => setAdvancedOpen(!advancedOpen)}
                  className='flex items-center gap-2 text-sm font-semibold text-terminal-green hover:text-terminal-green/80 transition-colors'
                >
                  {advancedOpen ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                  Advanced Settings
                  <span className='text-xs bg-terminal-green/20 text-terminal-green px-2 py-1 rounded-full'>
                    Pro
                  </span>
                </button>

                {advancedOpen && (
                  <div className='space-y-4 pl-6 border-l-2 border-terminal-green/30 animate-in slide-in-from-top-2 duration-300'>
                    {/* Creativity Level */}
                    <div className='space-y-2'>
                      <div className='flex justify-between'>
                        <label className='text-sm text-gray-300'>
                          Creativity Level
                        </label>
                        <span className='text-sm text-terminal-green font-mono'>
                          {settings.creativity.toFixed(1)}
                        </span>
                      </div>
                      <input
                        type='range'
                        min='0.1'
                        max='1.0'
                        step='0.1'
                        value={settings.creativity}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            creativity: Number.parseFloat(e.target.value),
                          }))
                        }
                        className='w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider'
                      />
                      <div className='flex justify-between text-xs text-gray-500'>
                        <span>Conservative</span>
                        <span>Experimental</span>
                      </div>
                    </div>

                    {/* Output Complexity */}
                    <div className='space-y-2'>
                      <div className='flex justify-between'>
                        <label className='text-sm text-gray-300'>
                          Output Complexity
                        </label>
                        <span className='text-sm text-terminal-green font-mono'>
                          {settings.complexity.toFixed(1)}
                        </span>
                      </div>
                      <input
                        type='range'
                        min='0.1'
                        max='1.0'
                        step='0.1'
                        value={settings.complexity}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            complexity: Number.parseFloat(e.target.value),
                          }))
                        }
                        className='w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider'
                      />
                      <div className='flex justify-between text-xs text-gray-500'>
                        <span>Simple</span>
                        <span>Detailed</span>
                      </div>
                    </div>

                    {/* Character Set (Conditional) */}
                    {(contentType === "ascii-art" ||
                      contentType === "image-to-ascii") && (
                      <div className='space-y-2'>
                        <label className='text-sm text-gray-300'>
                          ASCII Character Set
                        </label>
                        <select
                          value={settings.characterSet}
                          onChange={(e) =>
                            setSettings((prev) => ({
                              ...prev,
                              characterSet: e.target.value,
                            }))
                          }
                          className='w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-terminal-green focus:outline-none transition-colors'
                        >
                          <option value='basic'>Basic (A-Z, 0-9)</option>
                          <option value='extended'>
                            Extended (includes symbols)
                          </option>
                          <option value='unicode'>
                            Unicode (full character set)
                          </option>
                        </select>
                      </div>
                    )}

                    {/* Image Aspect Ratio (Conditional) */}
                    {contentType === "image-generation" && (
                      <div className='space-y-2'>
                        <label className='text-sm text-gray-300'>
                          Image Aspect Ratio
                        </label>
                        <select
                          value={settings.imageAspectRatio}
                          onChange={(e) =>
                            setSettings((prev) => ({
                              ...prev,
                              imageAspectRatio: e.target.value,
                            }))
                          }
                          className='w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-terminal-green focus:outline-none transition-colors'
                        >
                          <option value='1:1'>Square (1:1)</option>
                          <option value='16:9'>Widescreen (16:9)</option>
                          <option value='9:16'>Portrait (9:16)</option>
                          <option value='4:3'>Classic (4:3)</option>
                        </select>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <div className='relative'>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || (!prompt.trim() && !imageFile)}
                className='w-full bg-magenta text-black hover:bg-magenta/90 py-6 text-lg font-bold transition-all duration-300 hover:shadow-magenta-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                size='lg'
              >
                {isGenerating ? (
                  <div className='flex items-center gap-3'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    <span>GENERATING... {Math.round(generationProgress)}%</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-2'>
                    <Sparkles className='w-5 h-5' />
                    GENERATE
                  </div>
                )}
              </Button>

              {/* Progress bar */}
              {isGenerating && (
                <div
                  className='absolute bottom-0 left-0 h-1 bg-terminal-green rounded-full transition-all duration-300 ease-out'
                  style={{ width: `${generationProgress}%` }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className='bg-gray-800 border border-gray-600 rounded-lg p-4 mt-6'>
          <h4 className='font-bold text-terminal-green mb-3 flex items-center gap-2'>
            <Sparkles className='w-4 h-4' />
            Pro Tips
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>
            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0' />
              <span>Be specific about style and mood for better results</span>
            </div>
            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 bg-magenta rounded-full mt-2 flex-shrink-0' />
              <span>
                Use descriptive adjectives like "ethereal", "gritty",
                "minimalist"
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0' />
              <span>
                Higher creativity settings produce more unique outputs
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0' />
              <span>Save your favorite settings as presets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
