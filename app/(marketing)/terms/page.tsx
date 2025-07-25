"use client";

import { GlitchVariation } from "@/components/ui/glitch-variations";

export default function TermsPage() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <div className='container mx-auto px-4 py-16 max-w-4xl'>
        <GlitchVariation variant='slice' delay={0}>
          <h1 className='text-4xl md:text-5xl font-bold text-terminal-green mb-8'>
            Terms of Service
          </h1>
        </GlitchVariation>

        <div className='space-y-8 text-gray-300 prose prose-invert max-w-none'>
          <div className='text-gray-400 mb-8 border border-terminal-green/20 p-4 rounded-md bg-black/50'>
            <p>
              This Terms of Service agreement is written in plain language to
              help you understand your rights and responsibilities when using
              ASCII Web.
            </p>
            <p className='mt-2'>Each section includes:</p>
            <ul className='list-disc pl-6 mt-2'>
              <li>A clear explanation in everyday language</li>
              <li>Technical details for developers and advanced users</li>
            </ul>
          </div>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={100}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                1. License & Usage Rights
              </h2>
            </GlitchVariation>

            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    You can use ASCII Web for personal projects without cost
                  </li>
                  <li>
                    Business or commercial use requires a premium subscription
                  </li>
                  <li>You can't redistribute our service to others</li>
                  <li>When sharing artwork, you must credit ASCII Web</li>
                </ul>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`LICENSE_TERMS = {
  "personal_use": true,
  "commercial_use": "with premium plan",
  "redistribution": false,
  "modification": "allowed with attribution",
  "api_access": "as per plan limits"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={200}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                2. Your Responsibilities
              </h2>
            </GlitchVariation>

            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  As a user of ASCII Web, you are responsible for:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Keeping your account secure (use strong passwords, don't
                    share access)
                  </li>
                  <li>Staying within your plan's usage limits</li>
                  <li>Creating appropriate content that doesn't harm others</li>
                  <li>Letting us know if you see any misuse of the service</li>
                  <li>Protecting any API keys or credentials we provide</li>
                </ul>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Technical Requirements:
                </p>
                <pre className='text-sm'>
                  {`USER_OBLIGATIONS = {
  "security": [
    "Enable 2FA when available",
    "Use strong passwords",
    "Keep API keys confidential"
  ],
  "usage": [
    "Respect rate limits",
    "Monitor API usage",
    "Follow fair use policy"
  ],
  "content": [
    "No illegal content",
    "No IP violations",
    "No automated abuse"
  ]
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={300}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                3. Service Rules & Restrictions
              </h2>
            </GlitchVariation>

            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <p className='mb-2'>
                  To protect all users and our service, you cannot:
                </p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Use our service to create harmful or offensive content
                  </li>
                  <li>Copy other people's work or violate copyrights</li>
                  <li>Try to break or hack our service</li>
                  <li>Use automated tools without our permission</li>
                  <li>Share your account with others</li>
                </ul>

                <p className='mt-4 text-yellow-300'>
                  ⚠️ Breaking these rules may result in:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-yellow-200/80'>
                  <li>Immediate account suspension</li>
                  <li>Permanent account termination</li>
                  <li>Loss of any unused credits or subscription time</li>
                </ul>
              </div>

              <div className='pl-4 border-l-2 border-terminal-green/20 mt-4'>
                <p className='text-sm text-gray-400 mb-2'>
                  Technical Restrictions:
                </p>
                <pre className='text-sm'>
                  {`SERVICE_RULES = {
  "prohibited_actions": [
    "Abuse our services",
    "Share harmful content",
    "Violate IP rights",
    "Reverse engineer code",
    "Automate without permission"
  ],
  "enforcement": {
    "monitoring": "Automated & manual",
    "warnings": "When applicable",
    "suspension": "For severe violations",
    "termination": "Last resort"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={400}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                4. Service Changes
              </h2>
            </GlitchVariation>
            <div className='space-y-2'>
              <p>We reserve the right to:</p>
              <div className='font-mono text-sm space-y-1'>
                <p>
                  <span className='text-terminal-green'>$</span>{" "}
                  update_features()
                </p>
                <p>
                  <span className='text-terminal-green'>$</span>{" "}
                  modify_pricing()
                </p>
                <p>
                  <span className='text-terminal-green'>$</span> adjust_limits()
                </p>
                <p>
                  <span className='text-terminal-green'>$</span>{" "}
                  terminate_service()
                </p>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={500}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                5. Liability & Warranties
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    We provide our service "as-is" without specific guarantees
                  </li>
                  <li>We recommend regularly backing up your data</li>
                  <li>
                    We're not responsible for any losses or damages from using
                    our service
                  </li>
                  <li>
                    Service availability may vary and maintenance periods are
                    necessary
                  </li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`DISCLAIMER = {
  "warranty": "SERVICE PROVIDED AS-IS",
  "availability": "NO GUARANTEE",
  "data_loss": "BACKUP RECOMMENDED",
  "damages": "LIMITED LIABILITY"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={600}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                Legal Contact
              </h2>
            </GlitchVariation>
            <div className='font-mono space-y-2'>
              <pre>Email: legal@ascii-web.com</pre>
              <pre>Support: help.ascii-web.com</pre>
              <pre>Version: 2.0.0</pre>
              <pre>Last Updated: {new Date().toLocaleDateString()}</pre>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={600}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                6. API Usage
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Different plans have different API usage limits</li>
                  <li>You need an API key for authentication</li>
                  <li>We monitor usage to ensure fair access for everyone</li>
                  <li>You cannot resell our API services to others</li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`API_TERMS = {
  "rate_limits": {
    "free_tier": "100 requests/hour",
    "pro_tier": "10000 requests/hour",
    "enterprise": "Custom limits"
  },
  "authentication": "Required API key",
  "usage_monitoring": true,
  "fair_use_policy": true,
  "resale_prohibited": true
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={600}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                7. Intellectual Property
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>We own the platform code and infrastructure</li>
                  <li>You own the content you create</li>
                  <li>
                    AI models are licensed from their respective providers
                  </li>
                  <li>
                    You need a license for commercial use of generated art
                  </li>
                  <li>
                    Attribution is required when sharing generated art publicly
                  </li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`IP_RIGHTS = {
  "platform_code": "© ASCII Web",
  "user_content": "Owned by creators",
  "ai_models": "Licensed from providers",
  "generated_art": {
    "personal_use": "Full rights",
    "commercial_use": "License required",
    "attribution": "Required for public use"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={700}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                8. Dispute Resolution
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    We prefer to resolve issues through direct communication
                  </li>
                  <li>Mediation is required before legal action</li>
                  <li>Disputes are handled in your local jurisdiction</li>
                  <li>Arbitration is binding if mediation fails</li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`DISPUTE_PROCESS = {
  "initial_step": "Direct communication",
  "mediation": {
    "required": true,
    "location": "Online",
    "timeframe": "30 days"
  },
  "arbitration": {
    "binding": true,
    "location": "User's jurisdiction",
    "rules": "ICC Arbitration Rules"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={800}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                9. Service Limitations
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>File uploads are limited to 50MB per file</li>
                  <li>Storage space varies by plan type</li>
                  <li>Number of concurrent processes depends on your plan</li>
                  <li>Enterprise plans can be customized to your needs</li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`SERVICE_LIMITS = {
  "file_size": "Max 50MB per upload",
  "storage": {
    "free": "1GB",
    "pro": "50GB",
    "enterprise": "Custom"
  },
  "concurrent_processes": {
    "free": 2,
    "pro": 10,
    "enterprise": "Unlimited"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <GlitchVariation variant='slice' delay={900}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                10. Account Termination
              </h2>
            </GlitchVariation>
            <div className='space-y-4'>
              <div className='text-gray-200'>
                <h3 className='text-lg font-semibold mb-2'>In Simple Terms:</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>You can cancel your account at any time</li>
                  <li>We keep your data for 30 days after cancellation</li>
                  <li>Annual plans get pro-rated refunds</li>
                  <li>We may terminate accounts that violate our terms</li>
                  <li>You can appeal service-initiated terminations</li>
                </ul>
              </div>
              <div className='pl-4 border-l-2 border-terminal-green/20'>
                <p className='text-sm text-gray-400 mb-2'>Technical Details:</p>
                <pre className='text-sm'>
                  {`TERMINATION_TERMS = {
  "user_initiated": {
    "notice_required": "None",
    "data_retention": "30 days",
    "refunds": "Pro-rated for annual plans"
  },
  "service_initiated": {
    "notice_required": "30 days",
    "exceptions": ["TOS violation", "illegal activity"],
    "appeal_process": "Available"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className='space-y-4 mt-12 pt-8 border-t border-terminal-green/20'>
            <GlitchVariation variant='slice' delay={1000}>
              <h2 className='text-2xl font-semibold text-terminal-green'>
                Legal Contact
              </h2>
            </GlitchVariation>
            <div className='font-mono space-y-2'>
              <pre>Support: help.ascii-web.com</pre>
              <pre>Version: 2.0.0</pre>
              <pre>Last Updated: {new Date().toLocaleDateString()}</pre>
              <pre>Effective Date: August 1, 2025</pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
