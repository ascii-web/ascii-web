"use client";

import { useState } from "react";
import { Copy, Download, Share2, ArrowRight } from "lucide-react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import Link from "next/link";

type ContentType =
  | "all"
  | "ascii-art"
  | "poetry"
  | "code-pattern"
  | "midi-visual"
  | "animated"
  | "code"
  | "generated-image"
  | "ascii-realistic"
  | "ascii-animated"
  | "ascii-graphic";

interface GalleryItem {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  author: string;
  likes: number;
  tags: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "ascii-art",
    title: "Cyberpunk Cat",
    author: "PixelMaster",
    likes: 342,
    content: `    /\\_/\\  
   ( o.o ) 
    > ^ <  
   /     \\ 
  (  ___  )
 /|       |\\
( |  ___  | )
 \\|_______|/`,
    tags: ["cat", "cyberpunk", "animal"],
  },
  {
    id: "2",
    type: "ascii-animated",
    title: "Matrix Rain",
    author: "CodeArtist",
    likes: 289,
    content: `░█▀▄░█▀█░▀█▀░█▀█░█▀▄░█▀█░█░█
░█▀▄░█▀█░░█░░█░█░█▀▄░█░█░█▄█
░▀░▀░▀░▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░▀`,
    tags: ["matrix", "animation", "cyberpunk"],
  },
  {
    id: "3",
    type: "ascii-realistic",
    title: "Mountain Scene",
    author: "NatureCoder",
    likes: 256,
    content: `    /\\
   /  \\
  /    \\
 /      \\
/        \\
▔▔▔▔▔▔▔▔▔▔`,
    tags: ["nature", "landscape", "minimal"],
  },
];

export function GalleryShowcaseSection() {
  const [activeType, setActiveType] = useState<ContentType>("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  return (
    <section className='py-20 bg-black'>
      <GlitchVariation variant='slice' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-6'>
              Community Gallery
            </h2>
            <p className='text-gray-400 text-lg'>
              Explore amazing ASCII artworks created by our community
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {galleryItems.map((item, index) => (
              <GlitchVariation
                key={item.id}
                variant={index % 2 === 0 ? "slice" : "digital"}
                delay={200 + index * 100}
              >
                <div className='bg-gray-900 rounded-lg border border-terminal-green/30 overflow-hidden group transform transition-all duration-300 hover:scale-[1.02]'>
                  <div className='p-4'>
                    <pre className='text-terminal-green text-sm mb-4 bg-black/50 p-3 rounded overflow-x-auto whitespace-pre'>
                      {item.content}
                    </pre>

                    <div className='space-y-2'>
                      <h3 className='text-xl font-bold text-terminal-green'>
                        {item.title}
                      </h3>
                      <p className='text-gray-400 text-sm'>by {item.author}</p>

                      <div className='flex flex-wrap gap-2 mt-2'>
                        {item.tags &&
                          item.tags.map((tag) => (
                            <span
                              key={tag}
                              className='text-xs bg-terminal-green/10 text-terminal-green px-2 py-1 rounded cursor-pointer hover:bg-terminal-green/20 transition-colors'
                              onClick={() =>
                                setActiveTags((prev) =>
                                  prev.includes(tag)
                                    ? prev.filter((t) => t !== tag)
                                    : [...prev, tag]
                                )
                              }
                            >
                              #{tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className='mt-4 pt-4 border-t border-terminal-green/10 flex justify-between items-center'>
                      <div className='flex items-center gap-4'>
                        <button className='text-terminal-green hover:text-terminal-green/80 transition-colors'>
                          <Copy className='w-4 h-4' />
                        </button>
                        <button className='text-terminal-green hover:text-terminal-green/80 transition-colors'>
                          <Download className='w-4 h-4' />
                        </button>
                        <button className='text-terminal-green hover:text-terminal-green/80 transition-colors'>
                          <Share2 className='w-4 h-4' />
                        </button>
                      </div>
                      <span className='text-terminal-green'>
                        ♥ {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </GlitchVariation>
            ))}
          </div>

          <GlitchVariation variant='matrix' delay={800}>
            <div className='text-center mt-12'>
              <Link href='/dashboard/gallery/'>
                <button className='px-8 py-3 bg-terminal-green text-black font-bold rounded hover:bg-terminal-green/90 transition-colors inline-flex items-center gap-2 group'>
                  Explore Full Gallery
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
            </div>
          </GlitchVariation>
        </div>
      </GlitchVariation>
    </section>
  );
}
