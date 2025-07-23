"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface SuccessStory {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  asciiArt: string;
  metrics: {
    label: string;
    value: string;
    icon: "trending-up" | "users" | "award";
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    company: "TechCorp",
    industry: "Software Development",
    challenge: "Needed unique branding for developer documentation",
    solution:
      "Implemented ASCII art headers and decorative elements across their documentation platform",
    results: [
      "40% increase in developer engagement",
      "Unique brand identity established",
      "Improved documentation readability",
    ],
    logo: "/placeholder-logo.svg",
    asciiArt: `
    ╔══════════════╗
    ║  TechCorp    ║
    ║  Solutions   ║
    ╚══════════════╝
    `,
    metrics: [
      { label: "Developer Engagement", value: "+40%", icon: "trending-up" },
      { label: "Documentation Views", value: "1.2M", icon: "users" },
      { label: "Industry Awards", value: "3", icon: "award" },
    ],
    testimonial: {
      quote:
        "The ASCII art integration transformed our documentation from plain text into an engaging developer experience that our users love.",
      author: "Sarah Chen",
      role: "Developer Relations Lead",
    },
    tags: ["Documentation", "Developer Tools", "Branding"],
  },
  {
    company: "GameVerse",
    industry: "Gaming",
    challenge: "Wanted retro-style game assets for indie titles",
    solution:
      "Created custom ASCII art generator for game sprites and animations",
    results: [
      "Released 3 successful retro-styled games",
      "2M+ downloads across platforms",
      "Featured in indie game festivals",
    ],
    logo: "/placeholder-logo.svg",
    asciiArt: `
     ╔═══╗ ╔═══╗
     ║GAM║ ║ERS║
     ╚═══╝ ╚═══╝
    `,
    metrics: [
      { label: "Game Downloads", value: "2M+", icon: "trending-up" },
      { label: "Active Players", value: "500K", icon: "users" },
      { label: "Festival Awards", value: "4", icon: "award" },
    ],
    testimonial: {
      quote:
        "The ASCII art generator allowed us to create unique game assets quickly while maintaining that authentic retro feel our players love.",
      author: "Mike Ross",
      role: "Game Director",
    },
    tags: ["Gaming", "Retro", "Indie Development"],
  },
  {
    company: "DesignHub",
    industry: "Creative Agency",
    challenge: "Required unique digital art style for client presentations",
    solution:
      "Integrated ASCII art into their design workflow and presentations",
    results: [
      "Won 5 design awards",
      "30% increase in client retention",
      "Unique market positioning",
    ],
    logo: "/placeholder-logo.svg",
    asciiArt: `
     ┌─────────┐
     │ DESIGN  │
     │   HUB   │
     └─────────┘
    `,
    metrics: [
      { label: "Client Retention", value: "+30%", icon: "trending-up" },
      { label: "Projects Completed", value: "150+", icon: "users" },
      { label: "Design Awards", value: "5", icon: "award" },
    ],
    testimonial: {
      quote:
        "Our presentations now stand out in a sea of digital designs. The ASCII art elements give us a unique edge that clients remember.",
      author: "Lisa Wong",
      role: "Creative Director",
    },
    tags: ["Design", "Creative Agency", "Presentations"],
  },
];

export function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [openStory, setOpenStory] = useState<number | null>(null);
  const { toast } = useToast();

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const prevStory = () => {
    setActiveIndex(
      (prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length
    );
  };

  useEffect(() => {
    setProgress(((activeIndex + 1) / SUCCESS_STORIES.length) * 100);
  }, [activeIndex]);

  const story = SUCCESS_STORIES[activeIndex];

  const handleShare = (story: SuccessStory) => {
    navigator.clipboard.writeText(
      window.location.origin + "/success-story/" + story.company.toLowerCase()
    );
    toast({
      title: "Link copied!",
      description: `Share the story: ${story.company}`,
    });
  };

  const handleCopyAscii = (story: SuccessStory) => {
    navigator.clipboard.writeText(story.asciiArt.trim());
    toast({
      title: "ASCII Art copied!",
      description: `Copied art from: ${story.company}`,
    });
  };

  const handleKeyNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") prevStory();
    if (e.key === "ArrowRight") nextStory();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className='py-20 bg-black text-white relative overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold text-terminal-green mb-6 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className='text-gray-400 text-lg text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          See how companies are transforming their digital presence with ASCII
          art
        </motion.p>

        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* ASCII Art Preview & Modal Trigger */}
          <AnimatePresence>
            <Dialog
              open={openStory === activeIndex}
              onOpenChange={(open) => setOpenStory(open ? activeIndex : null)}
            >
              <DialogTrigger>
                <motion.div
                  key={activeIndex}
                  className='relative cursor-pointer'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  tabIndex={0}
                  aria-label={`Open details for ${story.company}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setOpenStory(activeIndex);
                  }}
                >
                  <Card className='bg-black border-terminal-green/30'>
                    <pre className='font-mono text-terminal-green whitespace-pre-wrap text-center text-lg p-8 transition-all duration-300 hover:scale-105 hover:text-terminal-green/80'>
                      {story.asciiArt}
                    </pre>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className='max-w-2xl bg-black border-terminal-green/30'>
                <div className='flex items-center gap-4 mb-6'>
                  <img
                    src={story.logo}
                    alt={`${story.company} logo`}
                    className='w-16 h-16 rounded-lg bg-terminal-green/10'
                  />
                  <div>
                    <h3 className='text-2xl font-bold text-terminal-green'>
                      {story.company}
                    </h3>
                    <p className='text-gray-400'>{story.industry}</p>
                  </div>
                </div>
                <div className='mb-4'>
                  <motion.pre className='font-mono text-terminal-green whitespace-pre-wrap text-center text-base p-4 bg-black/80 rounded'>
                    {story.asciiArt}
                  </motion.pre>
                </div>
                <div className='flex gap-2 mb-4'>
                  <Button
                    variant='outline'
                    onClick={() => handleCopyAscii(story)}
                  >
                    Copy ASCII Art
                  </Button>
                  <Button variant='outline' onClick={() => handleShare(story)}>
                    Share
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {story.tags.map((tag, i) => (
                    <TooltipProvider key={tag}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant='outline'
                            className='border-terminal-green/30 text-terminal-green/70 cursor-pointer'
                          >
                            {tag}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Tag: {tag}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <div className='grid grid-cols-3 gap-4 mb-6'>
                  {story.metrics.map((metric, i) => (
                    <TooltipProvider key={metric.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Card className='p-4 bg-black/50 border-terminal-green/30 cursor-pointer'>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className='text-center'
                            >
                              {metric.icon === "trending-up" && (
                                <TrendingUp className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                              )}
                              {metric.icon === "users" && (
                                <Users className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                              )}
                              {metric.icon === "award" && (
                                <Award className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                              )}
                              <div className='text-xl font-bold text-terminal-green'>
                                {metric.value}
                              </div>
                              <div className='text-sm text-gray-400'>
                                {metric.label}
                              </div>
                            </motion.div>
                          </Card>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>{metric.label}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                      Challenge
                    </h4>
                    <p className='text-gray-400'>{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                      Solution
                    </h4>
                    <p className='text-gray-400'>{story.solution}</p>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                      Results
                    </h4>
                    <ul className='space-y-2'>
                      {story.results.map((result, i) => (
                        <li
                          key={i}
                          className='flex items-center gap-2 text-gray-400'
                        >
                          <Star className='w-4 h-4 text-terminal-green' />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {story.testimonial && (
                    <Card className='p-6 bg-black/50 border-terminal-green/30 mt-6'>
                      <Quote className='w-8 h-8 text-terminal-green/50 mb-4' />
                      <p className='text-gray-400 italic mb-4'>
                        {story.testimonial.quote}
                      </p>
                      <div>
                        <div className='font-semibold text-terminal-green'>
                          {story.testimonial.author}
                        </div>
                        <div className='text-sm text-gray-400'>
                          {story.testimonial.role}
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </AnimatePresence>

          {/* Story Content */}
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              className='space-y-6'
              tabIndex={0}
              onKeyDown={handleKeyNav}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.5 }}
            >
              <div
                className='flex items-center gap-4 mb-6 cursor-pointer'
                onClick={() => setOpenStory(activeIndex)}
                tabIndex={0}
                aria-label={`Open details for ${story.company}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setOpenStory(activeIndex);
                }}
              >
                <motion.img
                  src={story.logo}
                  alt={`${story.company} logo`}
                  className='w-16 h-16 rounded-lg bg-terminal-green/10'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                  <h3 className='text-2xl font-bold text-terminal-green'>
                    {story.company}
                  </h3>
                  <p className='text-gray-400'>{story.industry}</p>
                </div>
              </div>

              <div className='flex gap-2 flex-wrap mb-4'>
                {story.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant='outline'
                    className='text-terminal-green border-terminal-green/30'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className='grid grid-cols-3 gap-4 mb-6'>
                {story.metrics.map((metric, index) => (
                  <Card
                    key={index}
                    className='p-4 bg-black/50 border-terminal-green/30'
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className='text-center'
                    >
                      {metric.icon === "trending-up" && (
                        <TrendingUp className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                      )}
                      {metric.icon === "users" && (
                        <Users className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                      )}
                      {metric.icon === "award" && (
                        <Award className='w-6 h-6 text-terminal-green mx-auto mb-2' />
                      )}
                      <div className='text-xl font-bold text-terminal-green'>
                        {metric.value}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {metric.label}
                      </div>
                    </motion.div>
                  </Card>
                ))}
              </div>

              <div className='space-y-4'>
                <div>
                  <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                    Challenge
                  </h4>
                  <p className='text-gray-400'>{story.challenge}</p>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                    Solution
                  </h4>
                  <p className='text-gray-400'>{story.solution}</p>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                    Results
                  </h4>
                  <ul className='space-y-2'>
                    {story.results.map((result, index) => (
                      <motion.li
                        key={index}
                        className='flex items-center gap-2 text-gray-400'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Star className='w-4 h-4 text-terminal-green' />
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {story.testimonial && (
                  <Card className='p-6 bg-black/50 border-terminal-green/30 mt-6'>
                    <Quote className='w-8 h-8 text-terminal-green/50 mb-4' />
                    <p className='text-gray-400 italic mb-4'>
                      {story.testimonial.quote}
                    </p>
                    <div>
                      <div className='font-semibold text-terminal-green'>
                        {story.testimonial.author}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {story.testimonial.role}
                      </div>
                    </div>
                  </Card>
                )}
                <Button
                  variant='outline'
                  className='mt-4'
                  onClick={() => setOpenStory(activeIndex)}
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className='col-span-2 mt-8'>
            <Progress value={progress} className='mb-4' />
            <div className='flex items-center justify-center gap-4'>
              <button
                onClick={prevStory}
                className='p-2 rounded-full hover:bg-terminal-green/10 text-terminal-green transition-colors'
                tabIndex={0}
                aria-label='Previous story'
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") prevStory();
                }}
              >
                <ChevronLeft className='w-6 h-6' />
              </button>
              <div className='flex gap-2'>
                {SUCCESS_STORIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex
                        ? "bg-terminal-green w-6"
                        : "bg-terminal-green/30 hover:bg-terminal-green/50"
                    )}
                    tabIndex={0}
                    aria-label={`Go to story ${index + 1}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveIndex(index);
                    }}
                  />
                ))}
              </div>
              <button
                onClick={nextStory}
                className='p-2 rounded-full hover:bg-terminal-green/10 text-terminal-green transition-colors'
                tabIndex={0}
                aria-label='Next story'
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") nextStory();
                }}
              >
                <ChevronRight className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
