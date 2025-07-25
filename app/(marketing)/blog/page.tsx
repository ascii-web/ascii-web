"use client";

import { getAllBlogPosts, BLOG_CATEGORIES } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, ChevronRight, Calendar } from "lucide-react";
import { useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPosts = getAllBlogPosts();
  const posts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category.includes(selectedCategory));

  return (
    <div className='min-h-screen bg-black'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'>
                Blog
              </h1>
              <p className='text-gray-400 text-lg max-w-2xl'>
                Explore in-depth articles about ASCII art, creative coding,
                digital design, and more from our team of experts and community
                members.
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size='sm'
                onClick={() => setSelectedCategory("All")}
                className={
                  selectedCategory === "All"
                    ? "bg-terminal-green hover:bg-terminal-green/90"
                    : "text-terminal-green hover:text-terminal-green/90 border-terminal-green/30"
                }
              >
                All
              </Button>
              {BLOG_CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size='sm'
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-terminal-green hover:bg-terminal-green/90"
                      : "text-terminal-green hover:text-terminal-green/90 border-terminal-green/30"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className='block group'
              >
                <Card className='h-full bg-gray-900 border-terminal-green/30 group-hover:border-terminal-green/60 transition-all p-6'>
                  <div className='flex flex-col h-full'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-2'>
                        <div>
                          <p className='text-sm font-medium text-terminal-green'>
                            {post.author.name}
                          </p>
                          <p className='text-xs text-gray-400'>
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-400'>
                        <Calendar className='w-4 h-4' />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className='flex-1 space-y-4'>
                      <h2 className='text-xl font-bold text-terminal-green line-clamp-2'>
                        {post.title}
                      </h2>

                      <div className='flex flex-wrap gap-2'>
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

                      <p className='text-gray-400 line-clamp-2'>
                        {post.excerpt}
                      </p>
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        className='w-full object-cover rounded-lg transition-transform group-hover:scale-105 duration-300'
                      />
                      {/* <pre className='font-mono text-terminal-green text-sm bg-black/50 p-4 rounded-lg overflow-hidden max-h-24'>
                        {post.asciiPreview}
                      </pre> */}
                    </div>

                    <div className='flex items-center justify-between pt-4 mt-4 border-t border-terminal-green/20'>
                      <span className='flex items-center gap-1 text-sm text-gray-400'>
                        <Clock className='w-4 h-4' />
                        {post.readTime}
                      </span>
                      <span className='text-terminal-green flex items-center group-hover:gap-2 transition-all'>
                        Read more <ChevronRight className='w-4 h-4 ml-1' />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
