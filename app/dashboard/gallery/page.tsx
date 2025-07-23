"use client";

import { CommunityGallery } from "@/components/dashboard/community-gallery";
import { GalleryPanel } from "@/components/dashboard/gallery-panel";

export default function GalleryPage() {
  return (
    <div className=' w-full p-6'>
      <div className='flex gap-6 w-full justify-between'>
        <div className='flex-1'>
          <CommunityGallery />
        </div>
        <div>
          <GalleryPanel />
        </div>
      </div>
    </div>
  );
}
