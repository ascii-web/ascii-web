"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Heart,
  Download,
  Share2,
  Clock,
  Flame,
  Sparkles,
  Filter,
  ArrowUpDown,
  Maximize2,
  BookmarkPlus,
  MessageSquare,
  Award,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { GlitchVariation } from "@/components/ui/glitch-variations";

interface Project {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  likes: number;
  views: number;
  downloads: number;
  comments: number;
  thumbnail: string;
  asciiPreview: string;
  tags: string[];
  createdAt: string;
  featured?: boolean;
  trending?: boolean;
  new?: boolean;
  description: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Cyberpunk City",
    author: "PixelMaster",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1240,
    views: 5600,
    downloads: 890,
    comments: 145,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌─────────────────────┐
    │     ▄▄▄▄▄▄▄▄▄      │
    │    █▀▀▀▀▀▀▀▀▀█     │
    │   ▐█  ▄▄  ▄▄ █▌    │
    │   ▐█▄▄██▄▄██▄█▌    │
    │    █  ▀▀  ▀▀  █    │
    │    █▄▄▄▄▄▄▄▄▄█    │
    └─────────────────────┘
    `,
    tags: ["cyberpunk", "city", "landscape"],
    createdAt: "2025-07-20",
    featured: true,
    trending: true,
    description:
      "A detailed ASCII representation of a futuristic cyberpunk cityscape with neon lights and towering skyscrapers.",
  },
  {
    id: "2",
    title: "Space Explorer",
    author: "ASCIIArtist",
    authorAvatar: "/placeholder-user.jpg",
    likes: 980,
    views: 4200,
    downloads: 650,
    comments: 89,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌─────────────────┐
    │    ★ . ° .·     │
    │   . ·  🛸  · °  │
    │  · ° ·  *  · ·  │
    │    ·  °  · ★    │
    └─────────────────┘
    `,
    tags: ["space", "scifi", "minimal"],
    createdAt: "2025-07-21",
    new: true,
    description:
      "A minimalist space scene featuring a UFO exploring the stars.",
  },
  {
    id: "3",
    title: "Retro Game Scene",
    author: "GameDev",
    authorAvatar: "/placeholder-user.jpg",
    likes: 750,
    views: 3100,
    downloads: 420,
    comments: 65,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ╔══════════════════╗
    ║  ▄▄▄  ┌─┐  ▄▄▄  ║
    ║  └┘└  │◄║  └┘└  ║
    ║  ╔═╗  └─┘  ╔═╗  ║
    ║  ╚═╝   ▲   ╚═╝  ║
    ╚══════════════════╝
    `,
    tags: ["gaming", "retro", "8bit"],
    createdAt: "2025-07-19",
    trending: true,
    description:
      "A nostalgic retro game scene inspired by classic 8-bit games.",
  },
  {
    id: "4",
    title: "Nature's Harmony",
    author: "EcoArtist",
    authorAvatar: "/placeholder-user.jpg",
    likes: 890,
    views: 3800,
    downloads: 520,
    comments: 92,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │   @@@@@@@@@    │
    │  @@@@|@@@@@@   │
    │  @@@|||@@@@@   │
    │   @@@||||@@    │
    │     |||│||     │
    └────────────────┘
    `,
    tags: ["nature", "trees", "minimal"],
    createdAt: "2025-07-18",
    description:
      "A peaceful forest scene showcasing the beauty of nature in ASCII.",
  },
  {
    id: "5",
    title: "Ocean Waves",
    author: "WaveRider",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1120,
    views: 4700,
    downloads: 680,
    comments: 134,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌──────────────────┐
    │   ~~~~~~~~       │
    │ ~~~~~~~~~    ~   │
    │   ~~~~~~~~  ~~~  │
    │ ~~~~~~~~~~~~~~~~ │
    │    ≈≈≈≈≈≈≈≈≈≈   │
    └──────────────────┘
    `,
    tags: ["ocean", "water", "minimal", "nature"],
    createdAt: "2025-07-22",
    new: true,
    description: "A serene ocean scene with rolling waves in ASCII art.",
  },
  {
    id: "6",
    title: "Robot Friend",
    author: "TechArtisan",
    authorAvatar: "/placeholder-user.jpg",
    likes: 950,
    views: 3900,
    downloads: 445,
    comments: 88,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │   ╔═══════╗    │
    │   ║ ◉   ◉ ║    │
    │   ║   ▼   ║    │
    │   ╚═══════╝    │
    │    [═══════]    │
    └────────────────┘
    `,
    tags: ["robot", "tech", "cute"],
    createdAt: "2025-07-21",
    trending: true,
    description: "An adorable robot character created with ASCII characters.",
  },
  {
    id: "7",
    title: "Fantasy Castle",
    author: "MedievalMaster",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1560,
    views: 6200,
    downloads: 920,
    comments: 167,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │    /\\  /\\     │
    │   /  \\/  \\    │
    │   |  ||  |     │
    │   |[]||[]|     │
    │   |__||__|     │
    └────────────────┘
    `,
    tags: ["fantasy", "castle", "medieval"],
    createdAt: "2025-07-19",
    featured: true,
    description: "A majestic medieval castle with intricate ASCII details.",
  },
  {
    id: "8",
    title: "Pixel Cat",
    author: "PetPixeler",
    authorAvatar: "/placeholder-user.jpg",
    likes: 2100,
    views: 7800,
    downloads: 1250,
    comments: 245,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │  /\\___/\\      │
    │ (  o o  )     │
    │ (  =^=  )     │
    │  (______)     │
    │               │
    └────────────────┘
    `,
    tags: ["cat", "cute", "animal", "pixel"],
    createdAt: "2025-07-23",
    new: true,
    trending: true,
    description:
      "An adorable pixel cat design that captures feline charm in ASCII.",
  },
  {
    id: "9",
    title: "Mountain Peak",
    author: "AlpineArtist",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1850,
    views: 6900,
    downloads: 980,
    comments: 178,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │      /\\       │
    │     /  \\      │
    │    /    \\     │
    │   /______\\    │
    │  /_/\\/\\/\\_\\   │
    └────────────────┘
    `,
    tags: ["nature", "mountain", "landscape"],
    createdAt: "2025-07-23",
    new: true,
    description: "A majestic mountain peak with detailed terrain in ASCII.",
  },
  {
    id: "10",
    title: "Rainy Night",
    author: "WeatherArt",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1340,
    views: 5200,
    downloads: 760,
    comments: 156,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │  │ │ │ │ │ │   │
    │ │ │ │ │ │ │    │
    │   ▄▄▄▄▄▄▄     │
    │  █████████    │
    │ ███████████   │
    └────────────────┘
    `,
    tags: ["weather", "night", "urban"],
    createdAt: "2025-07-22",
    featured: true,
    description: "A atmospheric rainy night scene in the city using ASCII.",
  },
  {
    id: "11",
    title: "Pixel Dragon",
    author: "DragonMaster",
    authorAvatar: "/placeholder-user.jpg",
    likes: 2400,
    views: 8900,
    downloads: 1450,
    comments: 289,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │    <>=======() │
    │     \\\\//\\     │
    │   {<||}>      │
    │    //\\\\//     │
    │   {<||||>}    │
    └────────────────┘
    `,
    tags: ["fantasy", "dragon", "mythical"],
    createdAt: "2025-07-23",
    trending: true,
    description: "A fearsome dragon created with intricate ASCII patterns.",
  },
  {
    id: "12",
    title: "Retro Computer",
    author: "TechnoVintage",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1780,
    views: 6700,
    downloads: 890,
    comments: 198,
    thumbnail: "/placeholder.jpg",
    asciiPreview: `
    ┌────────────────┐
    │  ┌──────────┐  │
    │  │ READY    │  │
    │  │ >_       │  │
    │  └──────────┘  │
    │  [=========]   │
    └────────────────┘
    `,
    tags: ["retro", "tech", "computer"],
    createdAt: "2025-07-22",
    new: true,
    description:
      "A nostalgic ASCII representation of a classic computer terminal.",
  },
];

type SortOption = "latest" | "popular" | "trending";
type FilterOption = "all" | "featured" | "new" | "trending";

export function LatestProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [likedProjects, setLikedProjects] = useState<{ [id: string]: boolean }>(
    {}
  );
  const [likeCounts, setLikeCounts] = useState<{ [id: string]: number }>(() => {
    const counts: { [id: string]: number } = {};
    FEATURED_PROJECTS.forEach((p) => (counts[p.id] = p.likes));
    return counts;
  });
  const { toast } = useToast();

  const allTags = Array.from(
    new Set(FEATURED_PROJECTS.flatMap((project) => project.tags))
  );

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (filterBy === "featured" && !project.featured) return false;
    if (filterBy === "new" && !project.new) return false;
    if (filterBy === "trending" && !project.trending) return false;
    if (
      selectedTags.length > 0 &&
      !selectedTags.some((tag) => project.tags.includes(tag))
    )
      return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes;
      case "trending":
        return b.views - a.views;
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  const handleShare = (project: Project) => {
    navigator.clipboard.writeText(
      window.location.origin + "/projects/" + project.id
    );
    toast({
      title: "Link copied!",
      description: `Share the project: ${project.title}`,
    });
  };

  const handleSave = (project: Project) => {
    toast({ title: "Saved!", description: `Project saved: ${project.title}` });
  };

  const handleLike = (project: Project) => {
    setLikedProjects((prev) => ({ ...prev, [project.id]: !prev[project.id] }));
    setLikeCounts((prev) => ({
      ...prev,
      [project.id]: prev[project.id] + (likedProjects[project.id] ? -1 : 1),
    }));
  };

  return (
    <section className='py-20 bg-black'>
      <GlitchVariation variant='matrix' delay={0}>
        <div className='container mx-auto px-4'>
          <GlitchVariation variant='slice' delay={200}>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'>
                Latest Projects
              </h2>
              <p className='text-gray-400 text-lg'>
                Explore amazing ASCII art created by our community
              </p>
            </div>
          </GlitchVariation>

          {/* Controls */}
          <GlitchVariation variant='wave' delay={400}>
            <div className='flex flex-wrap gap-4 mb-8 justify-between items-center'>
              <div className='flex gap-4'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='outline'
                      className='border-terminal-green/30'
                    >
                      <Filter className='w-4 h-4 mr-2' />
                      {filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='backdrop-blur-md border-terminal-green/30'>
                    <DropdownMenuItem onClick={() => setFilterBy("all")}>
                      All Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterBy("featured")}>
                      Featured
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterBy("new")}>
                      New
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterBy("trending")}>
                      Trending
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='outline'
                      className='border-terminal-green/30'
                    >
                      <ArrowUpDown className='w-4 h-4 mr-2' />
                      Sort by {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='backdrop-blur-md border-terminal-green/30'>
                    <DropdownMenuItem onClick={() => setSortBy("latest")}>
                      Latest
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("popular")}>
                      Most Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("trending")}>
                      Trending
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className='flex flex-wrap gap-2'>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='outline'
                    className={cn(
                      "cursor-pointer transition-all",
                      selectedTags.includes(tag)
                        ? "bg-terminal-green text-black"
                        : "hover:bg-terminal-green/20"
                    )}
                    onClick={() => {
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </GlitchVariation>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <AnimatePresence>
              {(showAllProjects
                ? filteredProjects
                : filteredProjects.slice(0, 3)
              ).map((project, index) => (
                <GlitchVariation
                  key={project.id}
                  variant='digital'
                  delay={600 + index * 150}
                >
                  <Dialog
                    open={previewProject?.id === project.id}
                    onOpenChange={(open) =>
                      setPreviewProject(open ? project : null)
                    }
                  >
                    <DialogTrigger asChild>
                      <div
                        tabIndex={0}
                        role='button'
                        className='group relative'
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <Card className='overflow-hidden border-terminal-green/30 transition-all duration-300 hover:border-terminal-green/60'>
                          {/* Status Badges */}
                          <div className='absolute top-4 left-4 flex gap-2 z-10'>
                            {project.featured && (
                              <Badge className='bg-terminal-green text-black'>
                                <Award className='w-3 h-3 mr-1' />
                                Featured
                              </Badge>
                            )}
                            {project.trending && (
                              <Badge className='bg-terminal-green/20 text-terminal-green'>
                                <Flame className='w-3 h-3 mr-1' />
                                Trending
                              </Badge>
                            )}
                            {project.new && (
                              <Badge className='bg-terminal-green/20 text-terminal-green'>
                                <Sparkles className='w-3 h-3 mr-1' />
                                New
                              </Badge>
                            )}
                          </div>

                          {/* ASCII Preview */}
                          <div className='bg-black p-6 relative overflow-hidden cursor-pointer group'>
                            <motion.pre
                              className='font-mono text-terminal-green whitespace-pre text-center transition-all duration-300 group-hover:scale-105'
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {project.asciiPreview}
                            </motion.pre>
                            {/* Hover Overlay */}
                            {hoveredId === project.id && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='absolute inset-0 bg-terminal-green/10 backdrop-blur-sm flex items-center justify-center gap-4'
                              >
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='rounded-full'
                                >
                                  <Maximize2 className='w-5 h-5' />
                                </Button>
                              </motion.div>
                            )}
                          </div>

                          <div className='p-6'>
                            {/* Project Info */}
                            <div className='flex items-center justify-between mb-4'>
                              <div className='flex items-center gap-3'>
                                <motion.img
                                  src={project.authorAvatar}
                                  alt={project.author}
                                  className='w-8 h-8 rounded-full'
                                  whileHover={{ scale: 1.1 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                />
                                <div>
                                  <h3 className='font-bold text-terminal-green group-hover:text-terminal-green/80 transition-colors'>
                                    {project.title}
                                  </h3>
                                  <div className='flex items-center gap-2 text-sm text-gray-400'>
                                    <span>{project.author}</span>
                                    <span>•</span>
                                    <span className='flex items-center gap-1'>
                                      <Clock className='w-3 h-3' />
                                      {new Date(
                                        project.createdAt
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                              {project.description}
                            </p>

                            {/* Stats */}
                            <div className='grid grid-cols-4 gap-2 mb-4'>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className={cn(
                                  "flex flex-col items-center p-2 rounded bg-terminal-green/5 hover:bg-terminal-green/10",
                                  likedProjects[project.id] &&
                                    "bg-terminal-green/20"
                                )}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLike(project);
                                }}
                              >
                                <Heart
                                  className={cn(
                                    "w-4 h-4",
                                    likedProjects[project.id]
                                      ? "text-red-500"
                                      : "text-terminal-green"
                                  )}
                                />
                                <span className='text-xs text-gray-400 mt-1'>
                                  {likeCounts[project.id]}
                                </span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className='flex flex-col items-center p-2 rounded bg-terminal-green/5 hover:bg-terminal-green/10'
                              >
                                <Eye className='w-4 h-4 text-terminal-green' />
                                <span className='text-xs text-gray-400 mt-1'>
                                  {project.views}
                                </span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className='flex flex-col items-center p-2 rounded bg-terminal-green/5 hover:bg-terminal-green/10'
                              >
                                <Download className='w-4 h-4 text-terminal-green' />
                                <span className='text-xs text-gray-400 mt-1'>
                                  {project.downloads}
                                </span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className='flex flex-col items-center p-2 rounded bg-terminal-green/5 hover:bg-terminal-green/10'
                              >
                                <MessageSquare className='w-4 h-4 text-terminal-green' />
                                <span className='text-xs text-gray-400 mt-1'>
                                  {project.comments}
                                </span>
                              </motion.button>
                            </div>

                            {/* Quick Actions */}
                            <div className='flex items-center justify-between'>
                              <div className='flex gap-2'>
                                <Button
                                  variant='outline'
                                  size='sm'
                                  className='text-xs'
                                  onClick={() => handleSave(project)}
                                >
                                  <BookmarkPlus className='w-3 h-3 mr-1' />
                                  Save
                                </Button>
                                <Button
                                  variant='outline'
                                  size='sm'
                                  className='text-xs'
                                  onClick={() => handleShare(project)}
                                >
                                  <Share2 className='w-3 h-3 mr-1' />
                                  Share
                                </Button>
                              </div>
                              <Button
                                variant='default'
                                size='sm'
                                className='text-xs bg-terminal-green hover:bg-terminal-green/90'
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPreviewProject(project);
                                }}
                              >
                                View Project
                              </Button>
                            </div>

                            {/* Tags */}
                            <div className='mt-4 flex flex-wrap gap-2'>
                              {project.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant='outline'
                                  className={cn(
                                    "transition-all hover:bg-terminal-green/20 cursor-pointer",
                                    selectedTags.includes(tag) &&
                                      "bg-terminal-green/20"
                                  )}
                                  onClick={() => {
                                    setSelectedTags((prev) =>
                                      prev.includes(tag)
                                        ? prev.filter((t) => t !== tag)
                                        : [...prev, tag]
                                    );
                                  }}
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </DialogTrigger>
                    <DialogContent className='max-w-2xl bg-black border-terminal-green/30'>
                      <div className='flex items-center gap-2 mb-4'>
                        <img
                          src={project.authorAvatar}
                          alt={project.author}
                          className='w-8 h-8 rounded-full'
                        />
                        <div>
                          <div className='font-bold text-terminal-green'>
                            {project.author}
                          </div>
                          <div className='text-xs text-gray-400'>
                            Project Author
                          </div>
                        </div>
                      </div>
                      <h2 className='text-2xl font-bold text-terminal-green mb-2'>
                        {project.title}
                      </h2>
                      <div className='flex flex-wrap gap-2 mb-2'>
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant='outline'
                            className='border-terminal-green/30 text-terminal-green/70'
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className='text-xs text-gray-400 mb-4 flex items-center gap-2'>
                        <Clock className='w-4 h-4' />{" "}
                        {new Date(project.createdAt).toLocaleDateString()}
                      </div>
                      <div className='mb-4'>
                        <motion.pre className='font-mono text-terminal-green whitespace-pre-wrap text-center text-base p-4 bg-black/80 rounded'>
                          {project.asciiPreview}
                        </motion.pre>
                      </div>
                      <div className='mb-6 text-gray-300'>
                        {project.description}
                      </div>
                      <div className='grid grid-cols-4 gap-2 mb-4'>
                        <Button
                          variant='ghost'
                          className={cn(
                            "flex flex-col items-center h-full p-2 rounded",
                            likedProjects[project.id] && "bg-terminal-green/20"
                          )}
                          onClick={() => handleLike(project)}
                        >
                          <Heart
                            className={cn(
                              "w-4 h-4",
                              likedProjects[project.id]
                                ? "text-red-500"
                                : "text-terminal-green"
                            )}
                          />
                          <span className='text-xs text-gray-400'>
                            {likeCounts[project.id]}
                          </span>
                        </Button>
                        <div className='flex flex-col items-center p-2 rounded bg-terminal-green/5'>
                          <Eye className='w-4 h-4 text-terminal-green' />
                          <span className='text-xs text-gray-400 mt-1'>
                            {project.views}
                          </span>
                        </div>
                        <div className='flex flex-col items-center p-2 rounded bg-terminal-green/5'>
                          <Download className='w-4 h-4 text-terminal-green' />
                          <span className='text-xs text-gray-400 mt-1'>
                            {project.downloads}
                          </span>
                        </div>
                        <div className='flex flex-col items-center p-2 rounded bg-terminal-green/5'>
                          <MessageSquare className='w-4 h-4 text-terminal-green' />
                          <span className='text-xs text-gray-400 mt-1'>
                            {project.comments}
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          onClick={() => handleSave(project)}
                        >
                          <BookmarkPlus className='w-4 h-4 mr-1' /> Save
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => handleShare(project)}
                        >
                          <Share2 className='w-4 h-4 mr-1' /> Share
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </GlitchVariation>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <GlitchVariation variant='digital' delay={400}>
              <div className='text-center py-12'>
                <p className='text-gray-400'>
                  No projects found matching your criteria
                </p>
              </div>
            </GlitchVariation>
          )}

          {/* View More Button */}
          <GlitchVariation variant='matrix' delay={800}>
            <div className='text-center mt-12'>
              <Button
                size='lg'
                className='bg-terminal-green hover:bg-terminal-green/90 text-black'
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects ? "Show Less" : "View More Projects"}
              </Button>
              <p className='text-gray-400 mt-4 text-sm'>
                {showAllProjects
                  ? filteredProjects.length
                  : Math.min(3, filteredProjects.length)}{" "}
                projects shown • Showing{" "}
                {filterBy === "all" ? "all projects" : filterBy + " projects"}
              </p>
            </div>
          </GlitchVariation>
        </div>
      </GlitchVariation>
    </section>
  );
}
