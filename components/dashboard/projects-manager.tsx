"use client";

import { useState, useEffect } from "react";
import { Search, Grid3X3, List, Eye, Edit, Share2, Trash2 } from "lucide-react";
import { PageHeader } from "./page-header";

interface Project {
  id: string;
  name: string;
  type: "ASCII Art" | "Generative Poem" | "Code Snippet" | "Musical MIDI";
  content: string;
  tags: string[];
  createdAt: string;
  thumbnail: string;
  description: string;
  size: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    name: "Cyberpunk Portrait",
    type: "ASCII Art",
    content: `    ╭─────────╮
    │ ◉ █ ◉ █ │
    │    ∩    │
    │  \\___/  │
    ╰─────────╯
        │ │ │
     ╔══╧═╧═╧══╗
     ║ CIRCUITS ║
     ╚═════════╝`,
    tags: ["portrait", "cyberpunk", "futuristic"],
    createdAt: "2024-01-15",
    thumbnail: "cyberpunk-preview",
    description:
      "A futuristic cyborg portrait with glitch effects and neon highlights",
    size: "1.2 KB",
  },
  {
    id: "2",
    name: "Digital Dreams",
    type: "Generative Poem",
    content: `In circuits deep and data streams,
Where silicon thoughts collide,
Electric pulses weave our dreams
In binary's gentle tide.

The ghost within the machine
Whispers tales of code,
Of algorithms unseen
On memory's bright road.

Through fiber optic veins,
Our digital hearts beat,
In this realm where logic reigns,
And human souls meet.`,
    tags: ["poetry", "digital", "dreams"],
    createdAt: "2024-01-14",
    thumbnail: "poem-preview",
    description:
      "An AI-generated poem exploring the intersection of technology and consciousness",
    size: "0.8 KB",
  },
  {
    id: "3",
    name: "Neural Network",
    type: "Code Snippet",
    content: `class NeuralNet:
    def __init__(self, layers):
        self.weights = []
        self.biases = []
        self.layers = layers
        
    def forward(self, x):
        for w, b in zip(self.weights, self.biases):
            x = sigmoid(np.dot(x, w) + b)
        return x
        
    def train(self, data, epochs=1000):
        # Backpropagation magic happens here
        for epoch in range(epochs):
            self.backward_pass(data)
            
    def backward_pass(self, data):
        # Gradient descent implementation
        pass`,
    tags: ["python", "ai", "neural-network"],
    createdAt: "2024-01-13",
    thumbnail: "code-preview",
    description:
      "A basic neural network implementation in Python with training capabilities",
    size: "2.1 KB",
  },
  {
    id: "4",
    name: "Retro Computer",
    type: "ASCII Art",
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
   └───────────┘
       │   │
    ┌──┴───┴──┐
    │ RETRO-PC │
    └─────────┘`,
    tags: ["retro", "computer", "vintage"],
    createdAt: "2024-01-12",
    thumbnail: "retro-preview",
    description:
      "A nostalgic representation of classic computing with vintage terminal aesthetics",
    size: "0.9 KB",
  },
  {
    id: "5",
    name: "Code Haiku",
    type: "Generative Poem",
    content: `Variables dance free
Through loops of endless logic
Beauty in syntax

Functions call their names
Recursion dreams of itself
Stack overflow waits

Semicolons rest
At the end of each statement
Punctuation peace`,
    tags: ["haiku", "code", "zen"],
    createdAt: "2024-01-11",
    thumbnail: "haiku-preview",
    description:
      "Zen-inspired haiku poems about programming and code structure",
    size: "0.3 KB",
  },
  {
    id: "6",
    name: "ASCII Generator",
    type: "Code Snippet",
    content: `def text_to_ascii(text, font='standard'):
    """Convert text to ASCII art"""
    ascii_art = []
    char_map = load_font(font)
    
    for char in text.upper():
        if char in char_map:
            ascii_art.append(char_map[char])
        else:
            ascii_art.append(char_map[' '])
    
    return combine_chars(ascii_art)

def load_font(font_name):
    """Load ASCII font character mappings"""
    fonts = {
        'standard': STANDARD_FONT,
        'block': BLOCK_FONT,
        'shadow': SHADOW_FONT
    }
    return fonts.get(font_name, STANDARD_FONT)

# Usage example
result = text_to_ascii("HELLO", font='block')
print(result)`,
    tags: ["python", "ascii", "generator"],
    createdAt: "2024-01-10",
    thumbnail: "generator-preview",
    description:
      "A comprehensive ASCII art generator with multiple font support",
    size: "1.7 KB",
  },
];

type ViewMode = "grid" | "list";

interface ProjectsManagerProps {
  onProjectSelect?: (project: Project) => void;
}

export function ProjectsManager({ onProjectSelect }: ProjectsManagerProps) {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProjectId(project.id);
    onProjectSelect?.(project);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ASCII Art":
        return "bg-terminal-green/20 text-terminal-green border-terminal-green/30";
      case "Generative Poem":
        return "bg-magenta/20 text-magenta border-magenta/30";
      case "Code Snippet":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Musical MIDI":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className='flex-1 bg-gray-900 p-6 overflow-y-auto'>
      <div className='max-w-6xl mx-auto space-y-6'>
        <PageHeader />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            {/* Search Bar */}
            <div className='relative'>
              <div className='bg-black border border-gray-600 rounded-lg px-4 py-2 flex items-center gap-2 min-w-80'>
                <Search className='w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search projects by name or tag...'
                  className='bg-transparent text-terminal-green outline-none flex-1 placeholder-gray-500'
                />
                <span
                  className={`text-terminal-green transition-opacity ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  █
                </span>
              </div>
            </div>

            {/* View Toggles */}
            <div className='flex bg-gray-800 rounded-lg p-1'>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-terminal-green text-black"
                    : "text-gray-400 hover:text-terminal-green"
                }`}
              >
                <Grid3X3 className='w-4 h-4' />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-terminal-green text-black"
                    : "text-gray-400 hover:text-terminal-green"
                }`}
              >
                <List className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`bg-gray-800 border rounded-lg p-4 hover:border-magenta hover:shadow-magenta-glow hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${
                  selectedProjectId === project.id
                    ? "border-terminal-green shadow-terminal-glow"
                    : "border-gray-600"
                }`}
              >
                {/* Thumbnail Preview */}
                <div className='bg-black border border-gray-700 rounded p-3 mb-4 h-32 overflow-hidden'>
                  <pre className='text-terminal-green text-xs leading-tight'>
                    {project.content}
                  </pre>
                </div>

                {/* Project Info */}
                <div className='space-y-2'>
                  <h3 className='font-bold text-terminal-green text-lg'>
                    {project.name}
                  </h3>
                  <div
                    className={`inline-block px-2 py-1 rounded text-xs border ${getTypeColor(
                      project.type
                    )}`}
                  >
                    {project.type}
                  </div>
                  <p className='text-gray-400 text-sm line-clamp-2'>
                    {project.description}
                  </p>
                </div>

                {/* Action Icons */}
                <div className='flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <button className='p-2 bg-gray-700 rounded hover:bg-terminal-green hover:text-black transition-colors'>
                    <Eye className='w-4 h-4' />
                  </button>
                  <button className='p-2 bg-gray-700 rounded hover:bg-terminal-green hover:text-black transition-colors'>
                    <Edit className='w-4 h-4' />
                  </button>
                  <button className='p-2 bg-gray-700 rounded hover:bg-terminal-green hover:text-black transition-colors'>
                    <Share2 className='w-4 h-4' />
                  </button>
                  <button className='p-2 bg-gray-700 rounded hover:bg-red-500 hover:text-white transition-colors'>
                    <Trash2 className='w-4 h-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className='bg-gray-800 border border-gray-600 rounded-lg overflow-hidden'>
            {/* Table Header */}
            <div className='bg-gray-700 px-6 py-3 border-b border-gray-600'>
              <div className='grid grid-cols-12 gap-4 text-sm font-semibold text-gray-300'>
                <div className='col-span-4'>Project Name</div>
                <div className='col-span-2'>Content Type</div>
                <div className='col-span-2'>Date Created</div>
                <div className='col-span-2'>Tags</div>
                <div className='col-span-2'>Actions</div>
              </div>
            </div>

            {/* Table Rows */}
            <div className='divide-y divide-gray-600'>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className={`px-6 py-4 hover:bg-gray-700/50 transition-colors cursor-pointer ${
                    selectedProjectId === project.id
                      ? "bg-terminal-green/10 border-l-4 border-terminal-green"
                      : ""
                  }`}
                >
                  <div className='grid grid-cols-12 gap-4 items-center'>
                    <div className='col-span-4'>
                      <div className='font-semibold text-terminal-green'>
                        {project.name}
                      </div>
                      <div className='text-xs text-gray-400 mt-1'>
                        {project.description}
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div
                        className={`inline-block px-2 py-1 rounded text-xs border ${getTypeColor(
                          project.type
                        )}`}
                      >
                        {project.type}
                      </div>
                    </div>
                    <div className='col-span-2 text-gray-400 text-sm'>
                      {project.createdAt}
                    </div>
                    <div className='col-span-2'>
                      <div className='flex flex-wrap gap-1'>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className='text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded'
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className='text-xs text-gray-500'>
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='flex gap-2'>
                        <button className='p-1 text-gray-400 hover:text-terminal-green transition-colors'>
                          <Eye className='w-4 h-4' />
                        </button>
                        <button className='p-1 text-gray-400 hover:text-terminal-green transition-colors'>
                          <Edit className='w-4 h-4' />
                        </button>
                        <button className='p-1 text-gray-400 hover:text-terminal-green transition-colors'>
                          <Share2 className='w-4 h-4' />
                        </button>
                        <button className='p-1 text-gray-400 hover:text-red-500 transition-colors'>
                          <Trash2 className='w-4 h-4' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <pre className='text-sm'>{`╔═══════════════╗
║   NO RESULTS  ║
║     FOUND     ║
╚═══════════════╝`}</pre>
            </div>
            <p className='text-gray-500'>
              No projects match your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
