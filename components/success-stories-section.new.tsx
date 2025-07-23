"use client";

import { useState } from "react";
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
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SuccessStory {
  name: string;
  profession: string;
  background: string;
  journey: string;
  achievements: string[];
  avatar: string;
  metrics: {
    label: string;
    value: string;
    icon: "trending-up" | "users" | "award";
  }[];
  quote: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    portfolio?: string;
  };
  tags: string[];
  artworks: string[];
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Alex Rivera",
    profession: "Independent Game Developer",
    background: "Started as a hobbyist pixel artist",
    journey:
      "Discovered ASCII art as a unique way to create retro-style games and built a passionate community around ASCII gaming",
    achievements: [
      "Created a viral ASCII roguelike game",
      "Built a community of 50K+ ASCII art enthusiasts",
      "Featured in indie game showcases",
    ],
    avatar: "/avatars/alex-rivera.jpg",
    metrics: [
      { label: "Community Members", value: "50K+", icon: "users" },
      { label: "Monthly Downloads", value: "25K", icon: "trending-up" },
      { label: "Art Pieces", value: "200+", icon: "award" },
    ],
    quote:
      "ASCII art gave me a unique voice in game development. It's not just about nostalgia; it's about creating experiences that stand out in today's oversaturated market.",
    socialLinks: {
      twitter: "https://twitter.com/alexrivera",
      github: "https://github.com/alexrivera",
      portfolio: "https://alexrivera.dev",
    },
    tags: ["Gaming", "Indie Dev", "Pixel Art"],
    artworks: [
      "/gallery/alex-1.png",
      "/gallery/alex-2.png",
      "/gallery/alex-3.png",
    ],
  },
  {
    name: "Mei Zhang",
    profession: "Digital Artist & Educator",
    background: "Traditional artist turned digital creator",
    journey:
      "Combines ASCII art with traditional Chinese calligraphy to create unique digital installations and teaches others to do the same",
    achievements: [
      "Created viral ASCII art tutorials",
      "Featured in digital art exhibitions",
      "Mentored 100+ aspiring artists",
    ],
    avatar: "/avatars/mei-zhang.jpg",
    metrics: [
      { label: "Students Taught", value: "100+", icon: "users" },
      { label: "Tutorial Views", value: "1M+", icon: "trending-up" },
      { label: "Exhibitions", value: "12", icon: "award" },
    ],
    quote:
      "ASCII art bridges the gap between traditional and digital art. It's a perfect medium for teaching fundamentals while embracing modern technology.",
    socialLinks: {
      twitter: "https://twitter.com/meizhang",
      portfolio: "https://meizhang.art",
    },
    tags: ["Digital Art", "Education", "Cultural Fusion"],
    artworks: [
      "/gallery/mei-1.png",
      "/gallery/mei-2.png",
      "/gallery/mei-3.png",
    ],
  },
  {
    name: "Jordan Taylor",
    profession: "Web Developer & Creative Coder",
    background: "Self-taught developer with a passion for creative coding",
    journey:
      "Uses ASCII art to create unique interactive web experiences and helps other developers add creative elements to their projects",
    achievements: [
      "Created popular ASCII art npm package",
      "Built award-winning portfolio sites",
      "Speaks at creative coding conferences",
    ],
    avatar: "/avatars/jordan-taylor.jpg",
    metrics: [
      { label: "Package Downloads", value: "500K", icon: "trending-up" },
      { label: "GitHub Stars", value: "2.5K", icon: "users" },
      { label: "Workshops Held", value: "24", icon: "award" },
    ],
    quote:
      "ASCII art isn't just about creating visuals; it's about making the web more engaging and personal. Every project becomes a unique expression.",
    socialLinks: {
      twitter: "https://twitter.com/jordantaylor",
      github: "https://github.com/jordantaylor",
      portfolio: "https://jordantaylor.dev",
    },
    tags: ["Web Dev", "Creative Coding", "Open Source"],
    artworks: [
      "/gallery/jordan-1.png",
      "/gallery/jordan-2.png",
      "/gallery/jordan-3.png",
    ],
  },
];

export function SuccessStoriesSection() {
  const [openStory, setOpenStory] = useState<number | null>(null);

  return (
    <section className='py-20 bg-black text-white relative overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold text-terminal-green mb-6 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creator Stories
        </motion.h2>
        <motion.p
          className='text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet the creative individuals who are pushing the boundaries of
          digital art and making their mark in the world of ASCII creation
        </motion.p>

        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {SUCCESS_STORIES.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='bg-black border-terminal-green/30 overflow-hidden hover:border-terminal-green/60 transition-all duration-300'>
                <div className='relative h-48 overflow-hidden'>
                  <div className='absolute inset-0 grid grid-cols-3 gap-1'>
                    {creator.artworks.map((artwork, i) => (
                      <img
                        key={i}
                        src={artwork}
                        alt={`Artwork by ${creator.name}`}
                        className='object-cover w-full h-full filter hover:brightness-110 transition-all duration-300'
                      />
                    ))}
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className='w-16 h-16 rounded-full border-2 border-terminal-green/30'
                    />
                    <div>
                      <h3 className='text-xl font-bold text-terminal-green'>
                        {creator.name}
                      </h3>
                      <p className='text-gray-400'>{creator.profession}</p>
                    </div>
                  </div>
                  <p className='text-gray-400 mb-4 line-clamp-2'>
                    {creator.quote}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {creator.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-terminal-green/30 text-terminal-green/70'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className='grid grid-cols-3 gap-3 mb-4'>
                    {creator.metrics.map((metric, i) => (
                      <div key={i} className='text-center'>
                        {metric.icon === "trending-up" && (
                          <TrendingUp className='w-4 h-4 text-terminal-green mx-auto mb-1' />
                        )}
                        {metric.icon === "users" && (
                          <Users className='w-4 h-4 text-terminal-green mx-auto mb-1' />
                        )}
                        {metric.icon === "award" && (
                          <Award className='w-4 h-4 text-terminal-green mx-auto mb-1' />
                        )}
                        <div className='text-sm font-bold text-terminal-green'>
                          {metric.value}
                        </div>
                        <div className='text-xs text-gray-400'>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant='outline'
                    className='w-full border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10'
                    onClick={() => setOpenStory(index)}
                  >
                    View Full Story
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={openStory !== null}
          onOpenChange={(open) => setOpenStory(open ? openStory : null)}
        >
          {openStory !== null && (
            <DialogContent className='max-w-2xl bg-black border-terminal-green/30'>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <div className='flex items-center gap-4 mb-6'>
                    <img
                      src={SUCCESS_STORIES[openStory].avatar}
                      alt={SUCCESS_STORIES[openStory].name}
                      className='w-20 h-20 rounded-full border-2 border-terminal-green/30'
                    />
                    <div>
                      <h3 className='text-2xl font-bold text-terminal-green'>
                        {SUCCESS_STORIES[openStory].name}
                      </h3>
                      <p className='text-gray-400'>
                        {SUCCESS_STORIES[openStory].profession}
                      </p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                        Background
                      </h4>
                      <p className='text-gray-400'>
                        {SUCCESS_STORIES[openStory].background}
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                        Journey
                      </h4>
                      <p className='text-gray-400'>
                        {SUCCESS_STORIES[openStory].journey}
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-terminal-green mb-2'>
                        Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {SUCCESS_STORIES[openStory].achievements.map(
                          (achievement, i) => (
                            <li
                              key={i}
                              className='flex items-center gap-2 text-gray-400'
                            >
                              <Star className='w-4 h-4 text-terminal-green' />
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='grid grid-cols-2 gap-2 mb-6'>
                    {SUCCESS_STORIES[openStory].artworks.map((artwork, i) => (
                      <img
                        key={i}
                        src={artwork}
                        alt={`Artwork by ${SUCCESS_STORIES[openStory].name}`}
                        className='w-full h-40 object-cover rounded-lg border border-terminal-green/30'
                      />
                    ))}
                  </div>
                  <Card className='p-6 bg-black/50 border-terminal-green/30'>
                    <Quote className='w-8 h-8 text-terminal-green/50 mb-4' />
                    <p className='text-gray-400 italic mb-6'>
                      {SUCCESS_STORIES[openStory].quote}
                    </p>
                    <div className='flex gap-4'>
                      {SUCCESS_STORIES[openStory].socialLinks?.twitter && (
                        <a
                          href={SUCCESS_STORIES[openStory].socialLinks.twitter}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-terminal-green hover:text-terminal-green/80'
                        >
                          Twitter
                        </a>
                      )}
                      {SUCCESS_STORIES[openStory].socialLinks?.github && (
                        <a
                          href={SUCCESS_STORIES[openStory].socialLinks.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-terminal-green hover:text-terminal-green/80'
                        >
                          GitHub
                        </a>
                      )}
                      {SUCCESS_STORIES[openStory].socialLinks?.portfolio && (
                        <a
                          href={
                            SUCCESS_STORIES[openStory].socialLinks.portfolio
                          }
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-terminal-green hover:text-terminal-green/80'
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
