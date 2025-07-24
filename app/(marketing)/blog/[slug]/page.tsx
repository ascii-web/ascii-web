import { Metadata } from "next";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import {
  Clock,
  ArrowLeft,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Facebook as FacebookIcon,
  Calendar,
} from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ASCII Web Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div className='min-h-screen bg-black'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-3xl mx-auto'>
          {/* Back button */}
          <div className='mb-8'>
            <Button variant='ghost' asChild>
              <Link
                href='/blog'
                className='text-terminal-green hover:text-terminal-green/80'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className='mb-8'>
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
            <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'>
              {post.title}
            </h1>
            <div className='flex items-center gap-4 mb-6'>
              <div className='flex items-center gap-2'>
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className='w-12 h-12 rounded-full'
                />
                <div>
                  <p className='font-medium text-terminal-green'>
                    {post.author.name}
                  </p>
                  <p className='text-sm text-gray-400'>{post.author.role}</p>
                </div>
              </div>
              <div className='text-sm text-gray-400 flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                {post.readTime} • {post.date}
              </div>
            </div>
          </div>

          {/* ASCII Preview */}
          <div className='mb-8'>
            <pre className='font-mono text-terminal-green text-sm bg-gray-900 p-6 rounded-lg border border-terminal-green/30'>
              {post.asciiPreview}
            </pre>
          </div>

          {/* Content */}
          <div className='prose prose-invert prose-terminal max-w-none'>
            <p className='text-lg text-gray-300 mb-8'>
              {post.content.introduction}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className='mb-8'>
                <h2 className='text-2xl font-bold text-terminal-green mb-4'>
                  {section.title}
                </h2>
                <div className='text-gray-300 mb-4'>{section.content}</div>
                {section.codeExample && (
                  <pre className='font-mono text-sm bg-gray-900 p-4 rounded-lg border border-terminal-green/30 overflow-x-auto'>
                    <code>{section.codeExample}</code>
                  </pre>
                )}
              </div>
            ))}

            <div className='text-gray-300'>{post.content.conclusion}</div>
          </div>

          {/* Author Bio */}
          <div className='mt-12 p-6 bg-gray-900 rounded-lg border border-terminal-green/30'>
            <h3 className='text-lg font-bold text-terminal-green mb-2'>
              About the Author
            </h3>
            <p className='text-gray-300'>{post.author.bio}</p>
          </div>

          {/* Share Buttons */}
          <div className='mt-8 flex items-center gap-4'>
            <span className='text-gray-400'>Share this article:</span>
            <div className='flex gap-2'>
              <Button variant='outline' size='icon'>
                <TwitterIcon className='w-4 h-4 text-terminal-green' />
              </Button>
              <Button variant='outline' size='icon'>
                <LinkedinIcon className='w-4 h-4 text-terminal-green' />
              </Button>
              <Button variant='outline' size='icon'>
                <FacebookIcon className='w-4 h-4 text-terminal-green' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
