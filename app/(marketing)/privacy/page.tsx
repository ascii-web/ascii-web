"use client";

import { GlitchVariation } from "@/components/ui/glitch-variations";

export default function PrivacyPage() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <div className='container mx-auto px-4 py-16 max-w-4xl'>
        <GlitchVariation variant='digital' delay={0}>
          <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-8'>
            Privacy Policy
          </h1>
        </GlitchVariation>

        <div className='space-y-8 text-gray-300 prose prose-invert max-w-none'>
          <div className='text-gray-400 mb-8 border border-terminal-green/20 p-4 rounded-md bg-black/50'>
            <p>
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use ASCII Web. We've written it in
              clear language to help you understand your privacy rights and
              choices.
            </p>
            <p className='mt-2'>Each section includes:</p>
            <ul className='list-disc pl-6 mt-2'>
              <li>A clear explanation of what we do with your data</li>
              <li>Technical details for transparency and compliance</li>
            </ul>
          </div>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={100}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                1. Information We Collect
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  We collect information that helps us provide and improve our
                  service to you:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Basic account details like your email and username to create
                    and secure your account
                  </li>
                  <li>
                    Profile information that you choose to share, such as a
                    display name or avatar
                  </li>
                  <li>
                    Payment information (processed securely through trusted
                    providers)
                  </li>
                  <li>
                    How you use our service, including the ASCII art you create
                    and save
                  </li>
                  <li>
                    Technical information that helps us improve the service and
                    prevent issues
                  </li>
                </ul>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm mt-2'>
                  {`COLLECTED_DATA = {
  "account": ["email", "username", "password"],
  "profile": ["display_name", "avatar", "preferences"],
  "payment": ["processed by secure providers"],
  "usage": ["activity logs", "art history"]
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={200}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                2. How We Use Your Data
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>We use your information to:</p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Personalize your ASCII art generation experience with AI
                    models
                  </li>
                  <li>
                    Keep your account secure and prevent unauthorized access
                  </li>
                  <li>Process your payments and manage your subscription</li>
                  <li>Send important updates about our service</li>
                  <li>Improve our features based on how people use them</li>
                  <li>
                    Enable community features like sharing and collaboration
                  </li>
                </ul>
                <p className='mt-4 text-sm text-gray-400'>
                  We will never sell your personal information to third parties
                  or use it for purposes other than what's described here.
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Technical Implementation:
                </p>
                <pre className='text-sm'>
                  {`DATA_USAGE = {
  "primary_purposes": {
    "ai_customization": ["model_training", "style_preferences"],
    "security": ["auth", "fraud_prevention", "access_control"],
    "service_delivery": ["processing", "storage", "backup"],
    "communication": ["updates", "support", "notifications"]
  },
  "secondary_purposes": {
    "analytics": ["performance", "usage_patterns", "optimization"],
    "community": ["sharing", "collaboration", "galleries"]
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={300}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                3. How We Protect Your Data
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  Your privacy and security are our top priorities. We use
                  industry-standard security measures to protect your data:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    All data is encrypted when sent between your device and our
                    servers
                  </li>
                  <li>
                    Your information is stored securely with strong encryption
                  </li>
                  <li>
                    We regularly update our security systems to protect against
                    threats
                  </li>
                  <li>
                    Only authorized personnel can access user data, and access
                    is logged
                  </li>
                  <li>
                    We regularly test our systems for security vulnerabilities
                  </li>
                </ul>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Security Implementation:
                </p>
                <pre className='text-sm'>
                  {`SECURITY_PROTOCOLS = {
  "encryption": "TLS 1.3 for data transfer",
  "storage": "AES-256 encryption at rest",
  "access": "Role-based authentication",
  "monitoring": "24/7 system monitoring",
  "auditing": "Full activity logging",
  "updates": "Automated security patches",
  "testing": "Regular penetration tests"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={400}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                4. Your Privacy Rights
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  You have complete control over your personal data. You can:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Download a copy of all your data at any time</li>
                  <li>Update or correct any information we have about you</li>
                  <li>Delete your account and all associated data</li>
                  <li>Choose what data you share and how we use it</li>
                  <li>Opt-out of non-essential data collection</li>
                </ul>
                <p className='mt-4 text-sm text-yellow-300'>
                  ⚠️ Note: Some basic data is required to provide our service
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Available Commands:
                </p>
                <pre className='text-sm'>
                  {`USER_RIGHTS = {
  "data_controls": {
    "export": "/data export --format=json",
    "update": "/data update --field=[field]",
    "delete": "/data delete --confirm",
    "preferences": "/preferences set --option=[option]"
  },
  "response_time": "Within 30 days",
  "verification": "Required for security",
  "restrictions": "None for personal data"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={500}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                5. How We Share Your Data
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  We only share your information with trusted partners who help
                  us provide our service:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Payment providers to process your subscriptions securely
                  </li>
                  <li>Cloud hosting services to store your data and art</li>
                  <li>AI providers to power our art generation features</li>
                  <li>Analytics services to improve our platform</li>
                </ul>
                <p className='mt-4 text-sm text-yellow-300'>
                  ⚠️ Important: We require all partners to protect your privacy
                  and only use your data for specified purposes
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Data Sharing Details:
                </p>
                <pre className='text-sm'>
                  {`SHARING_POLICY = {
  "third_parties": {
    "payment_processors": ["stripe", "paypal"],
    "analytics": ["google analytics", "amplitude"],
    "hosting": ["aws", "cloudflare"],
    "ai_providers": ["openai", "stability.ai"]
  },
  "purposes": [
    "payment processing",
    "service optimization",
    "fraud prevention",
    "legal compliance"
  ],
  "data_protection": {
    "contracts": "Data Processing Agreements",
    "standards": "GDPR, CCPA compliant",
    "auditing": "Regular compliance checks"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={600}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                6. Cookies & Tracking
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  We use cookies and similar technologies to improve your
                  experience:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Essential cookies that keep the site working properly</li>
                  <li>Preference cookies that remember your settings</li>
                  <li>Analytics cookies that help us improve our service</li>
                  <li>Feature cookies that enable advanced functionality</li>
                </ul>
                <p className='mt-4 text-sm text-gray-400'>
                  You can control non-essential cookies through your browser
                  settings or our cookie preferences center.
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Cookie Implementation:
                </p>
                <pre className='text-sm'>
                  {`COOKIE_TYPES = {
  "essential": {
    "purpose": "Basic site functionality",
    "duration": "session",
    "required": true,
    "examples": ["auth", "csrf", "load_balancing"]
  },
  "preferences": {
    "purpose": "Remember your settings",
    "duration": "1 year",
    "required": false,
    "examples": ["theme", "language", "art_preferences"]
  },
  "analytics": {
    "purpose": "Service improvement",
    "duration": "2 years",
    "required": false,
    "examples": ["page_views", "error_logs", "performance"]
  },
  "features": {
    "purpose": "Enhanced functionality",
    "duration": "90 days",
    "required": false,
    "examples": ["ai_settings", "gallery_views"]
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={700}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                7. International Data Transfers
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  We operate globally, which means your data may be processed in
                  different countries:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Our main servers are in the United States</li>
                  <li>We keep backups in the EU and Canada for reliability</li>
                  <li>We use global cloud services for faster performance</li>
                  <li>
                    We follow strict rules to protect data during transfers
                  </li>
                </ul>
                <p className='mt-4 text-sm text-yellow-300'>
                  ⚠️ We ensure all international transfers comply with data
                  protection laws
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Transfer Framework:
                </p>
                <pre className='text-sm'>
                  {`DATA_LOCATIONS = {
  "primary": "United States",
  "backups": ["EU", "Canada"],
  "processing": ["AWS Regions"],
  "safeguards": [
    "Standard Contractual Clauses",
    "Privacy Shield",
    "Data Processing Agreements"
  ],
  "compliance": {
    "gdpr": true,
    "ccpa": true,
    "pipeda": true
  },
  "monitoring": {
    "location_tracking": true,
    "access_logs": true,
    "audit_trail": true
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4 mt-12 pt-8 border-t border-terminal-green/20'>
            <GlitchVariation variant='digital' delay={800}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                Privacy Contact Information
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <p className='mb-2'>
                  If you have questions about your privacy or need to report an
                  issue:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Email our Privacy Team: privacy@ascii-web.com</li>
                  <li>Submit a request: help.ascii-web.com/privacy</li>
                  <li>Data Protection Officer: dpo@ascii-web.com</li>
                </ul>
              </div>

              <div className='font-mono text-sm space-y-2 mt-4'>
                <pre>Document Version: 2.0.0</pre>
                <pre>Last Updated: {new Date().toLocaleDateString()}</pre>
                <pre>Effective Date: August 1, 2025</pre>
                <pre>Review Frequency: Annual</pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='digital' delay={800}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                8. Data Retention
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  Here's how long we keep different types of data:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Account information: While your account is active, plus 30
                    days after deletion
                  </li>
                  <li>
                    Your artwork: Until you delete your account or the specific
                    pieces
                  </li>
                  <li>
                    Payment records: 7 years (we're legally required to keep
                    these)
                  </li>
                  <li>Usage logs: 12 months to help us improve our service</li>
                  <li>
                    Backups: 30 days to ensure we can recover from problems
                  </li>
                </ul>
                <p className='mt-4 text-sm text-yellow-300'>
                  ⚠️ You can request deletion of your data at any time, but some
                  information must be kept for legal reasons
                </p>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Retention Framework:
                </p>
                <pre className='text-sm'>
                  {`RETENTION_POLICY = {
  "account_data": {
    "active": "Until account deletion",
    "post_deletion": "30 days",
    "exceptions": "Legal requirements"
  },
  "user_content": {
    "artwork": "Until deletion",
    "settings": "Until account deletion",
    "backups": "30 days rolling"
  },
  "business_records": {
    "payment_data": "7 years (legal)",
    "contracts": "7 years",
    "disputes": "2 years post-resolution"
  },
  "operational_data": {
    "logs": "12 months rolling",
    "analytics": "24 months (anonymized)",
    "performance": "90 days"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4 mt-12 pt-8 border-t border-terminal-green/20'>
            <GlitchVariation variant='digital' delay={900}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                Privacy Contact Information
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <p className='mb-2'>
                  For any privacy-related questions or concerns:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Support: help.ascii-web.com</li>
                </ul>
                <p className='mt-4 text-sm text-terminal-green'>
                  We aim to respond to all privacy requests within 48 hours
                </p>
              </div>

              <div className='font-mono text-sm space-y-2 mt-4'>
                <pre>Document Version: 2.0.0</pre>
                <pre>Last Updated: {new Date().toLocaleDateString()}</pre>
                <pre>Effective Date: August 1, 2025</pre>
                <pre>Review Frequency: Annual</pre>
                <pre>Next Review: August 1, 2026</pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
