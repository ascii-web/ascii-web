// import { NavigationHeader } from "@/components/navigation-header";
import { HeroSection } from "@/components/hero-section";
// import { AIAssistantWidget } from "@/components/ai-assistant-widget";
// import { Footer } from "@/components/footer";
import { AsciiParticles } from "@/components/ui/ascii-particles";
import { TerminalDemo } from "@/components/ui/terminal-demo";
import { AsciiGeneratorPreview } from "@/components/ui/ascii-generator-preview";
import { HowItWorksSection } from "@/components/how-it-works-section.new";
import { FeaturesSection } from "@/components/features-section.new";
import { CreatorStudioSection } from "@/components/creator-studio-section.new";
import { GalleryShowcaseSection } from "@/components/gallery-showcase-section.new";
import { DashboardPreviewSection } from "@/components/dashboard-preview-section.new";
import { AboutSection } from "@/components/about-section.new";
import { TestimonialsSection } from "@/components/testimonials-section.new";
import { FAQSection } from "@/components/faq-section.new";
import { ContactSection } from "@/components/contact-section.new";
import { SuccessStoriesSection } from "@/components/success-stories-section.new";
import { BlogSection } from "@/components/blog-section.new";
import { LatestProjectsSection } from "@/components/latest-projects-section.new";
import { PricingCalculator } from "@/components/pricing-calculator.new";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASCII Web - Transform Images into Beautiful ASCII Art",
  description:
    "Create stunning ASCII art with our AI-powered tools. Convert images to ASCII, customize your art, and share with the community. Free and easy to use!",
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ASCII Web",
    applicationCategory: "Art & Design",
    description: "AI-powered ASCII art generator and community platform",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Best viewed in modern browsers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "AI-powered image to ASCII conversion",
      "Community gallery",
      "Custom ASCII art creation",
      "Real-time preview",
      "Multiple export options",
    ],
  };
  return (
    <main className='min-h-screen bg-black text-white font-mono relative'>
      <JsonLd data={structuredData} />
      <AsciiParticles />

      <section id='hero' className='relative'>
        <div className='absolute inset-0 z-0 opacity-20'>
          <AsciiGeneratorPreview />
        </div>
        <div className='relative z-10'>
          <HeroSection />
        </div>
        <div className='absolute bottom-4 left-4 z-20 w-96 opacity-90 hidden lg:block'>
          <TerminalDemo />
        </div>
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
      <section id='dashboard-preview'>
        <DashboardPreviewSection />
      </section>
      <section id='success-stories'>
        <SuccessStoriesSection />
      </section>
      <section id='latest-projects'>
        <LatestProjectsSection />
      </section>
      <section id='blog'>
        <BlogSection />
      </section>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='testimonials'>
        <TestimonialsSection />
      </section>
      <section id='pricing'>
        <PricingCalculator />
      </section>
      <section id='faq'>
        <FAQSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>

      
    </main>
  );
}
