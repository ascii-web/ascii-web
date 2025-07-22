import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { GallerySidebar } from "@/components/dashboard/gallery-sidebar"
import { CommunityGallery } from "@/components/dashboard/community-gallery"
import { GalleryPanel } from "@/components/dashboard/gallery-panel"

export default function GalleryPage() {
  return (
    <DashboardLayout>
      <GallerySidebar />
      <CommunityGallery />
      <GalleryPanel />
    </DashboardLayout>
  )
}
