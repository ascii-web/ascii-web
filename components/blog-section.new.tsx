"use client";

import { useState } from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getRecentBlogPosts, BLOG_CATEGORIES } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import { GlitchVariation } from "@/components/ui/glitch-variations";

const CATEGORIES = ["All", ...BLOG_CATEGORIES] as const;

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const posts = getRecentBlogPosts(3);
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category.includes(selectedCategory));

  return (
    <section className='py-20 bg-black relative'>
      <GlitchVariation variant='digital' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-start mb-12'>
            <div>
              <GlitchVariation variant='slice' delay={200}>
                <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'>
                  Latest Updates
                </h2>
              </GlitchVariation>

              <GlitchVariation variant='digital' delay={300}>
                <p className='text-gray-400 text-lg mb-8'>
                  Stay informed about the latest in ASCII art and creative
                  technology
                </p>
              </GlitchVariation>

              {/* Categories */}
              <GlitchVariation variant='wave' delay={400}>
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
              </GlitchVariation>
            </div>

            <GlitchVariation variant='matrix' delay={200}>
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
            </GlitchVariation>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post, index) => (
              <GlitchVariation
                key={post.id}
                variant='digital'
                delay={500 + index * 150}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className='bg-gray-900 rounded-lg overflow-hidden border border-terminal-green/30 hover:border-terminal-green/60 transition-all group h-full flex flex-col'>
                    <div className='bg-black p-6 font-mono text-terminal-green text-sm'>
                      <pre className='whitespace-pre-wrap transition-transform group-hover:scale-105 duration-300'>
                        {post.asciiPreview}
                      </pre>
                    </div>

                    <div className='p-6 flex-1 flex flex-col'>
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
                        <span className='text-xs text-gray-400'>
                          {post.date}
                        </span>
                      </div>

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

                      <h3 className='text-xl font-bold text-terminal-green mb-2 group-hover:text-terminal-green/80 transition-colors'>
                        {post.title}
                      </h3>
                      <p className='text-gray-400 mb-4 line-clamp-2 flex-1'>
                        {post.excerpt}
                      </p>

                      <div className='flex items-center justify-between mt-auto'>
                        <span className='flex items-center gap-1 text-sm text-gray-400'>
                          <Clock className='w-4 h-4' />
                          {post.readTime}
                        </span>
                        <span className='text-terminal-green flex items-center'>
                          Read more <ChevronRight className='w-4 h-4 ml-1' />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </GlitchVariation>
            ))}
          </div>

          <GlitchVariation variant='matrix' delay={800}>
            <div className='mt-8 text-center'>
              <Button
                variant='ghost'
                className='inline-flex items-center gap-2 text-terminal-green hover:text-terminal-green/80'
                asChild
              >
                <Link href='/blog'>
                  View all posts
                  <ChevronRight className='w-4 h-4' />
                </Link>
              </Button>
            </div>
          </GlitchVariation>
        </div>
      </GlitchVariation>
    </section>
  );
}
