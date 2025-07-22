import { NavigationHeader } from "@/components/navigation-header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section.new";
import { FeaturesSection } from "@/components/features-section.new";
import { CreatorStudioSection } from "@/components/creator-studio-section.new";
import { AboutSection } from "@/components/about-section.new";
import { GalleryShowcaseSection } from "@/components/gallery-showcase-section.new";
import { DashboardPreviewSection } from "@/components/dashboard-preview-section.new";
import { TestimonialsSection } from "@/components/testimonials-section.new";
import { FAQSection } from "@/components/faq-section.new";
import { ContactSection } from "@/components/contact-section.new";
import { AIAssistantWidget } from "@/components/ai-assistant-widget";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <NavigationHeader />
      <section id='hero'>
        <HeroSection />
      </section>
      <section id='how-it-works'>
        <HowItWorksSection />
      </section>
      <section id='features'>
        <FeaturesSection />
      </section>
      <section id='creator-studio'>
        <CreatorStudioSection />
      </section>
      <section id='gallery'>
        <GalleryShowcaseSection />
      </section>
      <section id='dashboard-preview'>
        <DashboardPreviewSection />
      </section>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='testimonials'>
        <TestimonialsSection />
      </section>
      <section id='faq'>
        <FAQSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
      <AIAssistantWidget />
      <Footer />
    </main>
  );
}
