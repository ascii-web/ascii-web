"use client";

import { GlitchVariation } from "@/components/ui/glitch-variations";

export default function PrivacyPage() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <div className='container mx-auto px-4 py-16'>
        <GlitchVariation variant='digital' delay={0}>
          <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-8'>
            Privacy Policy
          </h1>
        </GlitchVariation>

        <div className='space-y-8'>
          <GlitchVariation variant='matrix' delay={100}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                1. Introduction
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  At ASCII-Web, we take your privacy seriously. This policy
                  outlines how we collect, use, and protect your data while
                  using our AI-powered ASCII art platform.
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                  <p className='text-terminal-green font-mono'>
                    {">"} Last Updated: July 22, 2025
                  </p>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='slice' delay={200}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                2. Data We Collect
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h3 className='text-lg font-semibold text-terminal-green mb-2'>
                      Account Data
                    </h3>
                    <ul className='list-none space-y-2'>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>Email address</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>Username</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>Profile information</span>
                      </li>
                    </ul>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h3 className='text-lg font-semibold text-terminal-green mb-2'>
                      Usage Data
                    </h3>
                    <ul className='list-none space-y-2'>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>Generated ASCII art</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>AI model interactions</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-terminal-green mt-1'>▸</span>
                        <span>Platform activity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='digital' delay={300}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                3. How We Use Your Data
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <div className='space-y-4'>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h3 className='text-lg font-semibold text-terminal-green mb-2'>
                      Service Improvement
                    </h3>
                    <p className='text-gray-300'>
                      We analyze usage patterns to enhance our AI models and
                      user experience.
                    </p>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h3 className='text-lg font-semibold text-terminal-green mb-2'>
                      Personalization
                    </h3>
                    <p className='text-gray-300'>
                      Your data helps us customize your ASCII art generation
                      experience.
                    </p>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h3 className='text-lg font-semibold text-terminal-green mb-2'>
                      Communication
                    </h3>
                    <p className='text-gray-300'>
                      We send important updates and notifications about your
                      account and our service.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='matrix' delay={400}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                4. Data Protection
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  We implement industry-standard security measures:
                </p>
                <div className='grid md:grid-cols-3 gap-4 mt-4'>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h4 className='text-terminal-green font-semibold mb-2'>
                      Encryption
                    </h4>
                    <p className='text-sm text-gray-400'>
                      End-to-end data encryption in transit and at rest
                    </p>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h4 className='text-terminal-green font-semibold mb-2'>
                      Access Control
                    </h4>
                    <p className='text-sm text-gray-400'>
                      Strict authentication and authorization protocols
                    </p>
                  </div>
                  <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                    <h4 className='text-terminal-green font-semibold mb-2'>
                      Regular Audits
                    </h4>
                    <p className='text-sm text-gray-400'>
                      Continuous security monitoring and updates
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='slice' delay={500}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                5. Your Rights
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  You have the following rights regarding your data:
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4 space-y-2'>
                  <ul className='list-none space-y-2'>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>Access your personal data</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>Request data correction or deletion</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>Object to data processing</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-terminal-green mt-1'>✓</span>
                      <span>Download your data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='digital' delay={600}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                6. AI Data Processing
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>
                  Our AI models process your data to generate ASCII art:
                </p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4 space-y-4'>
                  <div>
                    <h4 className='text-terminal-green font-semibold'>
                      Training Data
                    </h4>
                    <p className='text-sm text-gray-400'>
                      Your uploaded images may be used to improve our AI models,
                      with your consent
                    </p>
                  </div>
                  <div>
                    <h4 className='text-terminal-green font-semibold'>
                      Model Privacy
                    </h4>
                    <p className='text-sm text-gray-400'>
                      AI processing is performed securely, and your original
                      images are not shared
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </GlitchVariation>

          <GlitchVariation variant='matrix' delay={700}>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                7. Contact Information
              </h2>
              <div className='prose prose-invert prose-terminal max-w-none'>
                <p className='text-gray-300'>For privacy-related inquiries:</p>
                <div className='bg-gray-900/50 border border-terminal-green/20 rounded-lg p-4'>
                  <p className='font-mono text-terminal-green'>
                    support@ascii-web.com
                    <br />
                    Data Protection Officer
                    <br />
                    ASCII-Web Art Platform
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
