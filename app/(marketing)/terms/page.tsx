"use client";

import { GlitchVariation } from "@/components/ui/glitch-variations";

export default function TermsPage() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <div className='container mx-auto px-4 py-16'>
        <GlitchVariation variant='slice' delay={0}>
          <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-8'>
            Terms of Service
          </h1>
        </GlitchVariation>

        <div className='space-y-8'>
          <GlitchVariation variant='digital' delay={100}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                1. Welcome to ASCII-Web
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none space-y-4'>
                <p className='text-gray-300'>
                  By accessing or using ASCII-Web (the "Platform"), you agree to
                  comply with and be bound by these Terms of Service. Our
                  platform transforms digital art through ASCII and AI
                  technology, providing a unique creative experience.
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                  <p className='text-terminal-green font-mono'>
                    {">"} Last Updated: July 22, 2025
                  </p>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='matrix' delay={200}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                2. Services & Features
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <ul className='list-none space-y-2'>
                  <li className='flex items-start gap-2'>
                    <span className='text-terminal-green mt-1'>▸</span>
                    <span>
                      ASCII Art Generation: Create unique ASCII art using our
                      AI-powered tools
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-terminal-green mt-1'>▸</span>
                    <span>
                      Community Gallery: Share and showcase your ASCII creations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-terminal-green mt-1'>▸</span>
                    <span>
                      AI Model Training: Train custom models for specialized
                      ASCII art generation
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-terminal-green mt-1'>▸</span>
                    <span>
                      Project Management: Organize and maintain your ASCII art
                      projects
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='slice' delay={300}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                3. User Rights & Responsibilities
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  As a user of ASCII-Web, you retain ownership of your original
                  creations while granting us a license to display and promote
                  your work within the platform.
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4 space-y-2'>
                  <h3 className='text-lg font-semibold text-terminal-green'>
                    Your Rights:
                  </h3>
                  <ul className='list-none space-y-2'>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>Full ownership of your created content</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>
                        Control over your content's visibility and sharing
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>
                        Access to platform features as per your subscription
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='digital' delay={400}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                4. Content Guidelines
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  We maintain a creative and respectful environment. Your
                  content must not:
                </p>
                <ul className='list-none space-y-2 ml-4'>
                  <li className='flex items-start gap-2'>
                    <span className='text-magenta mt-1'>⨯</span>
                    <span>Infringe on intellectual property rights</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-magenta mt-1'>⨯</span>
                    <span>Contain harmful or malicious code</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-magenta mt-1'>⨯</span>
                    <span>Include inappropriate or offensive material</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-magenta mt-1'>⨯</span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                </ul>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='matrix' delay={500}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                5. AI Model Usage
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  Our AI models are provided for creative purposes. You agree
                  to:
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4 space-y-2'>
                  <ul className='list-none space-y-2'>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>▸</span>
                      <span>Use AI models responsibly and ethically</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>▸</span>
                      <span>Not attempt to reverse engineer our AI models</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>▸</span>
                      <span>Respect usage limits and fair use policies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='slice' delay={600}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                6. Service Modifications
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  We reserve the right to modify or discontinue parts of our
                  service. Major changes will be communicated through:
                </p>
                <div className='grid md:grid-cols-2 gap-4 mt-4'>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h4 className='text-terminal-green font-semibold mb-2'>
                      Platform Notices
                    </h4>
                    <p className='text-sm text-gray-400'>
                      Dashboard notifications and announcements
                    </p>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h4 className='text-terminal-green font-semibold mb-2'>
                      Email Updates
                    </h4>
                    <p className='text-sm text-gray-400'>
                      Direct communication for significant changes
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='digital' delay={700}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                7. Contact & Support
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  For questions or concerns about these terms, contact us:
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                  <p className='font-mono text-terminal-green'>
                    support@ascii-web.com
                    <br />
                    https://ascii-web.com/#contact
                  </p>
                </div>
              </div>
            </section>
          </GlitchVariation>
        </div>
      </div>
    </main>
  );
}
