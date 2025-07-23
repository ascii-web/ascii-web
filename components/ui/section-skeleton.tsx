"use client";

import { GlitchContainer } from "./glitch-effects";

export function SectionSkeleton() {
  return (
    <div className='w-full py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <GlitchContainer>
          <div className='space-y-8 animate-pulse'>
            <div className='h-8 bg-gray-800 rounded-lg w-1/3 mx-auto' />
            <div className='h-4 bg-gray-800 rounded w-2/3 mx-auto' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='space-y-4'>
                  <div className='h-48 bg-gray-800 rounded-lg' />
                  <div className='h-4 bg-gray-800 rounded w-3/4' />
                  <div className='h-4 bg-gray-800 rounded w-1/2' />
                </div>
              ))}
            </div>
          </div>
        </GlitchContainer>
      </div>
    </div>
  );
}
