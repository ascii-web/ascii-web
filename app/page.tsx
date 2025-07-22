import { NavigationHeader } from "@/components/navigation-header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FeaturesSection } from "@/components/features-section"; // New import
import { CreatorStudioSection } from "@/components/creator-studio-section";
import { AboutSection } from "@/components/about-section";
import { GalleryShowcaseSection } from "@/components/gallery-showcase-section";
import { DashboardPreviewSection } from "@/components/dashboard-preview-section";
import { TestimonialsSection } from "@/components/testimonials-section"; // New import
import { FAQSection } from "@/components/faq-section"; // New import
import { ContactSection } from "@/components/contact-section";
import { AIAssistantWidget } from "@/components/ai-assistant-widget";

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
        {" "}
        {/* New section */}
        <TestimonialsSection />
      </section>
      <section id='faq'>
        {" "}
        {/* New section */}
        <FAQSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
      <AIAssistantWidget />
    </main>
  );
}
