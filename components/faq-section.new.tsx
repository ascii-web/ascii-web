"use client";

import { useRef, useState } from "react";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the AI-powered ASCII generation work?",
      answer:
        "Our platform uses advanced neural networks trained on vast ASCII art datasets to understand patterns and convert images or text prompts into ASCII art. The AI analyzes structure, shading, and detail to create accurate and artistic ASCII representations.",
    },
    {
      question: "Can I customize the character sets used in my ASCII art?",
      answer:
        "Yes! You can define custom character sets or choose from our pre-defined sets. This allows you to create unique styles and maintain consistency across your projects.",
    },
    {
      question: "What export formats are supported?",
      answer:
        "We support multiple export formats including TXT, SVG, PNG, and even animated GIF for ASCII animations. You can also export your art with various color schemes and backgrounds.",
    },
    {
      question: "Is there an API available for developers?",
      answer:
        "Yes, we offer a comprehensive REST API that allows you to integrate our ASCII generation capabilities into your own applications. Check our documentation for detailed information.",
    },
    {
      question: "How do you handle large-scale ASCII art projects?",
      answer:
        "Our platform is optimized for both small and large-scale projects. We offer batch processing capabilities and version control features to help manage complex ASCII art projects efficiently.",
    },
  ];

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <GlitchVariation variant='matrix' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-6'>
              Support & Solutions
            </h2>
            <p className='text-gray-400 text-lg'>
              Get the clarity you need from setup to sharing.
            </p>
          </div>

          <div className='max-w-3xl mx-auto space-y-4'>
            {faqs.map((faq, index) => (
              <GlitchVariation
                key={index}
                variant='matrix'
                delay={200 + index * 100}
              >
                <div className='bg-gray-900 border border-terminal-green/30 rounded-lg overflow-hidden'>
                  <button
                    className='w-full p-6 flex items-center justify-between text-left focus:outline-none'
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className='text-lg font-bold text-terminal-green'>
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className='w-5 h-5 text-terminal-green flex-shrink-0' />
                    ) : (
                      <Plus className='w-5 h-5 text-terminal-green flex-shrink-0' />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className='p-6 pt-0 text-gray-400 border-t border-terminal-green/30'>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </GlitchVariation>
            ))}
          </div>

          <GlitchVariation variant='matrix' delay={800}>
            <div className='text-center mt-12'>
              <p className='text-gray-400 mb-4'>
                Still have questions? We're here to help!
              </p>
              <Link href='mailto:support@ascii-web.com'>
                <button className='px-8 py-3 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-colors'>
                  Contact Support
                </button>
              </Link>
            </div>
          </GlitchVariation>
        </div>
      </GlitchVariation>
    </section>
  );
}
