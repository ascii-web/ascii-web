"use client";

import { useState } from "react";
import {
  Clock,
  Tag,
  ChevronRight,
  X,
  BookOpen,
  Share2,
  Bookmark,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string[];
  readTime: string;
  image: string;
  asciiPreview: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  previewContent?: string;
}

const CATEGORIES = [
  "All",
  "Design Trends",
  "Tutorials",
  "Case Studies",
  "Gaming",
  "AI & Tech",
  "Community",
] as const;

const FEATURED_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution of ASCII Art in Modern Web Design",
    excerpt:
      "Discover how ASCII art is making a comeback in contemporary web design and digital branding...",
    date: "2025-07-15",
    category: ["Design Trends", "Case Studies"],
    readTime: "5 min",
    image: "/placeholder.jpg",
    asciiPreview: `
    ╔═══════════╗
    ║  MODERN   ║
    ║   ASCII   ║
    ║    ART    ║
    ╚═══════════╝
    `,
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder-user.jpg",
      role: "Design Lead",
    },
    previewContent: `ASCII art is experiencing a renaissance in modern web design. This article explores how designers are incorporating this retro aesthetic into contemporary digital experiences.

Key Points:
• The role of nostalgia in digital design
• Modern tools for ASCII art creation
• Case studies of successful implementations
• Impact on user engagement`,
  },
  {
    id: "2",
    title: "Creating Responsive ASCII Art with AI",
    excerpt:
      "Learn how to use our AI tools to create stunning ASCII art that adapts to any screen size...",
    date: "2025-07-10",
    category: ["Tutorials"],
    readTime: "8 min",
    image: "/placeholder.jpg",
    asciiPreview: `
     _____
    |     |
    | AI  |
    |_____|
    `,
    author: {
      name: "Alex Kim",
      avatar: "/placeholder-user.jpg",
      role: "AI Engineer",
    },
    previewContent: `Step-by-step guide to generating responsive ASCII art using AI tools. Includes code samples, best practices, and tips for optimizing output for different devices.\n\nKey Points:\n• Responsive design principles\n• Using the ASCII Web AI generator\n• Exporting and embedding art in web projects`,
  },
  {
    id: "3",
    title: "ASCII Art in Game Development",
    excerpt:
      "Explore how indie game developers are using ASCII art to create unique gaming experiences...",
    date: "2025-07-05",
    category: ["Gaming"],
    readTime: "6 min",
    image: "/placeholder.jpg",
    asciiPreview: `
    ▄▄▄▄▄▄▄
    █ █ █ █
    █████████
    `,
    author: {
      name: "Jamie Lee",
      avatar: "/placeholder-user.jpg",
      role: "Game Developer",
    },
    previewContent: `Discover the creative process behind using ASCII art in indie game development.\n\nKey Points:\n• Why ASCII art appeals to gamers\n• Tools for creating ASCII sprites\n• Examples from successful indie games`,
  },
];

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();

  const filteredPosts = FEATURED_POSTS.filter(
    (post) =>
      selectedCategory === "All" || post.category.includes(selectedCategory)
  );

  const handleShare = (post: BlogPost) => {
    navigator.clipboard.writeText(window.location.origin + "/blog/" + post.id);
    toast({
      title: "Link copied!",
      description: `Share the article: ${post.title}`,
    });
  };

  const handleBookmark = (post: BlogPost) => {
    toast({ title: "Bookmarked!", description: `Saved: ${post.title}` });
  };

  return (
    <section className='py-20 bg-black relative'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-start mb-12'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'>
              Latest Updates
            </h2>
            <p className='text-gray-400 text-lg mb-8'>
              Stay informed about the latest in ASCII art and creative
              technology
            </p>

            {/* Categories */}
            <div className='flex flex-wrap gap-2'>
              {CATEGORIES.map((category) => (
                <Badge
                  key={category}
                  variant='outline'
                  className={cn(
                    "cursor-pointer transition-all hover:border-terminal-green",
                    selectedCategory === category
                      ? "bg-terminal-green/20 border-terminal-green text-terminal-green"
                      : "border-gray-700 text-gray-400"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <Button
            variant='ghost'
            className='hidden md:flex items-center gap-2 text-terminal-green hover:text-terminal-green/80 transition-colors'
            asChild
          >
            <a href='/blog'>
              View all posts
              <ChevronRight className='w-4 h-4' />
            </a>
          </Button>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map((post) => (
            <Dialog
              key={post.id}
              open={selectedPost?.id === post.id}
              onOpenChange={(open) => setSelectedPost(open ? post : null)}
            >
              <DialogTrigger>
                <div
                  tabIndex={0}
                  role='button'
                  className='bg-gray-900 rounded-lg overflow-hidden border border-terminal-green/30 hover:border-terminal-green/60 transition-all cursor-pointer group'
                  onClick={() => setSelectedPost(post)}
                >
                  {/* ASCII Preview with Animation */}
                  <div className='bg-black p-6 font-mono text-terminal-green text-sm relative overflow-hidden'>
                    <motion.pre
                      initial={{ scale: 0.95 }}
                      whileHover={{ scale: 1 }}
                      className='whitespace-pre-wrap transition-transform'
                    >
                      {post.asciiPreview}
                    </motion.pre>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>

                  <div className='p-6'>
                    {/* Meta Info */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-2'>
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className='w-8 h-8 rounded-full'
                        />
                        <div>
                          <p className='text-sm font-medium text-terminal-green'>
                            {post.author.name}
                          </p>
                          <p className='text-xs text-gray-400'>
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <span className='text-xs text-gray-400'>{post.date}</span>
                    </div>

                    {/* Categories */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {post.category.map((cat) => (
                        <Badge
                          key={cat}
                          variant='outline'
                          className='border-terminal-green/30 text-terminal-green/70'
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    {/* Content */}
                    <h3 className='text-xl font-bold text-terminal-green mb-2 group-hover:text-terminal-green/80 transition-colors'>
                      {post.title}
                    </h3>
                    <p className='text-gray-400 mb-4 line-clamp-2'>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className='flex items-center justify-between'>
                      <span className='flex items-center gap-1 text-sm text-gray-400'>
                        <Clock className='w-4 h-4' />
                        {post.readTime}
                      </span>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='text-terminal-green hover:text-terminal-green/80'
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPost(post);
                        }}
                      >
                        Read more <ChevronRight className='w-4 h-4 ml-1' />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className='max-w-2xl bg-black border-terminal-green/30'>
                <div className='flex justify-between items-center mb-4'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className='w-8 h-8 rounded-full'
                    />
                    <div>
                      <div className='font-bold text-terminal-green'>
                        {post.author.name}
                      </div>
                      <div className='text-xs text-gray-400'>
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setSelectedPost(null)}
                  >
                    <X className='w-5 h-5' />
                  </Button>
                </div>
                <h2 className='text-2xl font-bold text-terminal-green mb-2'>
                  {post.title}
                </h2>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {post.category.map((cat) => (
                    <Badge
                      key={cat}
                      variant='outline'
                      className='border-terminal-green/30 text-terminal-green/70'
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
                <div className='text-xs text-gray-400 mb-4 flex items-center gap-2'>
                  <Clock className='w-4 h-4' /> {post.date} • {post.readTime}
                </div>
                <div className='mb-4'>
                  <motion.pre className='font-mono text-terminal-green whitespace-pre-wrap text-center text-base p-4 bg-black/80 rounded'>
                    {post.asciiPreview}
                  </motion.pre>
                </div>
                <div className='mb-6 text-gray-300 whitespace-pre-line'>
                  {post.previewContent || post.excerpt}
                </div>
                <div className='flex gap-2'>
                  <Button variant='outline' onClick={() => handleShare(post)}>
                    <Share2 className='w-4 h-4 mr-1' /> Share
                  </Button>
                  <Button
                    variant='outline'
                    onClick={() => handleBookmark(post)}
                  >
                    <Bookmark className='w-4 h-4 mr-1' /> Bookmark
                  </Button>
                  <Button
                    asChild
                    className='bg-terminal-green text-black hover:bg-terminal-green/90'
                  >
                    <a
                      href={"/blog/" + post.id}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <BookOpen className='w-4 h-4 mr-1' /> Read on Blog
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className='mt-8 text-center md:hidden'>
          <Button
            variant='ghost'
            className='inline-flex items-center gap-2 text-terminal-green hover:text-terminal-green/80'
            asChild
          >
            <a href='/blog'>
              View all posts
              <ChevronRight className='w-4 h-4' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
