"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/asciiweb",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@asciiweb",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/asciiweb",
    icon: Twitter,
    color: "hover:text-sky-400",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/asciiweb",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "F6S",
    href: "https://f6s.com/asciiweb",
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 800 800'
        className='w-6 h-6 fill-current'
      >
        <path d='M156.9 180.1h136.8v57.8h-79.1v124.9h45.8v57.8h-45.8v199.3h-57.8V180.1z' />
        <path d='M372.4 237.9v124.9h68.5c16.6 0 31.1 14.5 31.1 31v194.7c0 16.7-14.5 31.4-31.1 31.4h-95c-16.6 0-31.1-14.3-31.1-30.6V212.3c0-16.8 14.4-32.2 30.3-32.2h95.9c16.6 0 31.1 14.5 31.1 31v72.7h-57.8v-45.8zm0 182.7v141.5h41.9V420.6h-41.9z' />
        <path d='M647.1 283.7h-57.8v-45.8h-41.9v124.9l69.1 0.02c16.4 0 30.5 19.7 30.5 35.8v189.7c0 16.8-14.3 31.6-30.5 31.6h-92.9c-16.3 0-30.5-14.4-30.5-30.7v-106l54.3-0.1v79.1h41.9v-141.5l-65.7 0.02c-16.2 0-30.5-14.6-30.5-31.1V211.3c0-16.6 14.3-31.2 30.5-31.2h92.9c16.3 0 30.5 14.6 30.5 31.2v72.4z' />
      </svg>
    ),
    color: "hover:text-purple-500",
  },
  {
    name: "Crunchbase",
    href: "https://crunchbase.com/organization/asciiweb",
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 68 68'
        className='w-6 h-6'
      >
        <path
          className='fill-current'
          d='M13.94 33.658a2.962 2.962 0 110.034-2.44h2.296a5.167 5.167 0 100 2.44h-2.296zM23.51 27.257h-.379a5.098 5.098 0 00-2.526.89v-5.752h-2.095v14.794h2.107v-.54a5.167 5.167 0 102.893-9.392zm2.962 5.534v.092a2.94 2.94 0 01-.08.362 2.934 2.934 0 01-.144.373v.046a2.98 2.98 0 01-2.072 1.625l-.281.046h-.063a2.916 2.916 0 01-.322 0 2.962 2.962 0 01-.402-.029h-.057a2.934 2.934 0 01-.752-.23h-.057a2.974 2.974 0 01-.666-.447 2.991 2.991 0 01-.522-.626 2.962 2.962 0 01-.19-.367 2.945 2.945 0 01.035-2.44 2.968 2.968 0 012.377-1.682 2.934 2.934 0 01.304 0 2.968 2.968 0 012.928 2.882 2.957 2.957 0 010 .396z'
          transform='matrix(3 0 0 3 -17 -60)'
        />
      </svg>
    ),
    color: "hover:text-orange-500",
  },
];

export function Footer() {
  return (
    <footer className='relative border-t border-terminal-green/20 bg-black/90 backdrop-blur-sm'>
      <div className='glitch-container'>
        <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='space-y-8 md:w-1/2'>
            <div
              className='flex items-center space-x-4 fade-in-glitch'
              style={{ animationDelay: "0ms" }}
            >
              <OptimizedImage
                src='/placeholder-logo.svg'
                alt='ASCII Web'
                width={48}
                height={48}
                className='h-12 w-auto'
                priority={true}
              />
              <span
                className='glitch-text text-2xl font-bold text-terminal-green tracking-tight'
                data-text='ASCII Web'
              >
                ASCII Web
              </span>
            </div>

            <p
              className='text-gray-300 max-w-md leading-relaxed fade-in-glitch'
              style={{ animationDelay: "100ms" }}
            >
              Transform your digital art into stunning ASCII masterpieces. Our
              AI-powered platform brings retro aesthetics to modern creativity,
              enabling artists to create unique pixel-perfect experiences.
            </p>

            <div
              className='flex space-x-6 fade-in-glitch'
              style={{ animationDelay: "200ms" }}
            >
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-400 transition-colors duration-200",
                    item.color
                  )}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>

          <div
            className='mt-8 grid grid-cols-2 gap-8 md:mt-0 md:w-1/2 fade-in-glitch'
            style={{ animationDelay: "300ms" }}
          >
            <div>
              <h3 className='text-terminal-green font-semibold'>Platform</h3>
              <ul role='list' className='mt-4 space-y-2'>
                {[
                  { name: "Features", href: "/#features" },
                  { name: "Creator Studio", href: "/#creator-studio" },
                  { name: "Gallery", href: "/#gallery" },
                  { name: "Dashboard", href: "/dashboard" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-gray-400 hover:text-terminal-green transition-colors duration-200'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-terminal-green font-semibold'>Legal</h3>
              <ul role='list' className='mt-4 space-y-2'>
                {[
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                  { name: "Contact", href: "/#contact" },
                  { name: "About", href: "/#about" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-gray-400 hover:text-terminal-green transition-colors duration-200'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className='mt-8 border-t border-terminal-green/20 pt-8 fade-in-glitch'
          style={{ animationDelay: "400ms" }}
        >
          <p className='text-center text-xs text-gray-400'>
            &copy; {new Date().getFullYear()} ASCII Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
