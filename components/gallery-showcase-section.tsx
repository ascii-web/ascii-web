"use client";

import { useState } from "react";
import { Copy, Download, Share2 } from "lucide-react";

type ContentType =
  | "all"
  | "ascii-art"
  | "poetry"
  | "code"
  | "generated-image"
  | "ascii-realistic"
  | "ascii-animated"
  | "ascii-graphic";

interface GalleryItem {
  id: string;
  type: ContentType;
  title: string;
  content: string; // For text-based content
  imageUrl?: string; // For image-based content
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "ascii-art",
    title: "Cyberpunk Cat",
    content: `    /\\_/\\  
   ( o.o ) 
    > ^ <  
   /     \\ 
  (  ___  )
 /|       |\\
( |  ___  | )
 \\|_______|/`,
  },
  {
    id: "2",
    type: "poetry",
    title: "Digital Dreams",
    content: `In circuits deep and data streams,
Where silicon thoughts collide,
Electric pulses weave our dreams
In binary's gentle tide.

The ghost within the machine
Whispers tales of code,
Of algorithms unseen
On memory's bright road.`,
  },
  {
    id: "3",
    type: "code",
    title: "Neural Network",
    content: `class NeuralNet:
    def __init__(self, layers):
        self.weights = []
        self.biases = []
        
    def forward(self, x):
        for w, b in zip(self.weights, self.biases):
            x = sigmoid(np.dot(x, w) + b)
        return x
        
    def train(self, data, epochs=1000):
        # Backpropagation magic happens here
        pass`,
  },
  {
    id: "4",
    type: "ascii-art",
    title: "Retro Computer",
    content: `┌─────────────────┐
│ ████████████████│
│ █▄▄▄▄▄▄▄▄▄▄▄▄▄█ │
│ █ HELLO WORLD █ │
│ █▀▀▀▀▀▀▀▀▀▀▀▀▀█ │
│ ████████████████│
└─────────────────┘
      │     │
   ┌──┴─────┴──┐
   │  ▓▓▓▓▓▓▓  │
   └───────────┘`,
  },
  {
    id: "5",
    type: "poetry",
    title: "Code Haiku",
    content: `Variables dance free
Through loops of endless logic
Beauty in syntax`,
  },
  {
    id: "6",
    type: "code",
    title: "ASCII Generator",
    content: `def text_to_ascii(text, font='standard'):
    """Convert text to ASCII art"""
    ascii_art = []
    
    for char in text:
        char_lines = get_char_pattern(char, font)
        ascii_art.append(char_lines)
    
    return combine_chars(ascii_art)

# Usage
result = text_to_ascii("HELLO")
print(result)`,
  },
  {
    id: "7",
    type: "generated-image",
    title: "Futuristic Cityscape",
    content: "",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "8",
    type: "ascii-realistic",
    title: "Realistic Portrait",
    content: "",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "9",
    type: "ascii-animated",
    title: "Animated Glitch",
    content: "",
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "10",
    type: "generated-image",
    title: "Abstract AI Art",
    content: "",
    imageUrl: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "11",
    type: "ascii-graphic",
    title: "Graphic Logo",
    content: "",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "12",
    type: "generated-image",
    title: "Sci-Fi Landscape",
    content: "",
    imageUrl: "/placeholder.svg?height=350&width=550",
  },
  {
    id: "13",
    type: "ascii-realistic",
    title: "Dog in ASCII",
    content: "",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "14",
    type: "ascii-animated",
    title: "Flowing Water ASCII",
    content: "",
    imageUrl: "/placeholder.svg?height=250&width=450",
  },
  {
    id: "15",
    type: "generated-image",
    title: "Fantasy Creature",
    content: "",
    imageUrl: "/placeholder.svg?height=450&width=350",
  },
];

export function GalleryShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState<ContentType>("all");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.type === activeFilter
  );

  const getFilterLabel = (filter: ContentType) => {
    switch (filter) {
      case "all":
        return "All";
      case "ascii-art":
        return "Text to ASCII";
      case "poetry":
        return "Generative Poetry";
      case "code":
        return "Code Snippets";
      case "generated-image":
        return "AI Images";
      case "ascii-realistic":
        return "Realistic ASCII";
      case "ascii-animated":
        return "Animated ASCII";
      case "ascii-graphic":
        return "Graphic ASCII";
    }
  };

  return (
    <section className='py-20 px-4 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-12 text-terminal-green'>
          A Showcase of Generated Content
        </h2>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {(
            [
              "all",
              "ascii-art",
              "generated-image",
              "ascii-realistic",
              "ascii-animated",
              "ascii-graphic",
              "poetry",
              "code",
            ] as ContentType[]
          ).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 font-semibold ${
                activeFilter === filter
                  ? "bg-terminal-green text-black border-terminal-green shadow-terminal-glow"
                  : "bg-transparent text-terminal-green border-terminal-green/50 hover:border-terminal-green hover:bg-terminal-green/10"
              }`}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid bg-gray-900/80 border-t-2 border-magenta rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                hoveredItem === item.id
                  ? "transform rotate-1 scale-105 shadow-2xl"
                  : ""
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h3 className='text-lg font-bold text-terminal-green mb-4'>
                {item.title}
              </h3>

              {(item.type === "ascii-art" ||
                item.type === "poetry" ||
                item.type === "code") && (
                <pre className='text-terminal-green text-sm leading-tight overflow-x-auto'>
                  {item.type === "code" ? (
                    <code className='text-terminal-green'>
                      {item.content.split("\n").map((line, i) => (
                        <div key={i}>
                          {line.includes("def ") || line.includes("class ") ? (
                            <span className='text-magenta'>{line}</span>
                          ) : line.includes("#") ? (
                            <span className='text-gray-500'>{line}</span>
                          ) : (
                            <span>{line}</span>
                          )}
                        </div>
                      ))}
                    </code>
                  ) : (
                    item.content
                  )}
                </pre>
              )}

              {(item.type === "generated-image" ||
                item.type === "ascii-realistic" ||
                item.type === "ascii-animated" ||
                item.type === "ascii-graphic") &&
                item.imageUrl && (
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    className='w-full h-auto rounded-md object-cover border border-gray-700'
                  />
                )}

              {/* Action Icons */}
              <div
                className={`flex gap-3 mt-4 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Copy className='w-5 h-5 text-terminal-green hover:text-terminal-green/80 cursor-pointer' />
                <Download className='w-5 h-5 text-terminal-green hover:text-terminal-green/80 cursor-pointer' />
                <Share2 className='w-5 h-5 text-terminal-green hover:text-terminal-green/80 cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
