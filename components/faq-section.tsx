"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of ASCII art can I generate?",
      answer:
        "You can generate classic ASCII art from text, or convert images into ASCII art using various styles like Realistic, Animated, and Graphic. Our AI adapts to your input to create unique outputs.",
    },
    {
      question: "Can I generate images with AI?",
      answer:
        "Yes, our platform includes a powerful AI image generation feature. Simply provide a text prompt, and our AI will create stunning visuals for you.",
    },
    {
      question: "Is there a cost to use Ascii-Web?",
      answer:
        "We offer a free tier with limited features for you to try out. For advanced features, higher usage limits, and premium support, please check our pricing plans (coming soon!).",
    },
    {
      question: "What kind of code snippets can the AI generate?",
      answer:
        "Our AI can generate code snippets in various programming languages based on your natural language descriptions. It's great for boilerplate code, small functions, or learning new syntax.",
    },
    {
      question: "How do I share my creations?",
      answer:
        "Once your ASCII art or AI image is generated, you'll find options to download, copy, and share directly to social media platforms from the preview panel.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-20 px-4 bg-gray-950'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-magenta'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-gray-900 border border-magenta/30 rounded-lg overflow-hidden transition-all duration-300'
            >
              <button
                className='flex justify-between items-center w-full p-6 text-left text-lg font-semibold text-terminal-green hover:bg-gray-800 transition-colors'
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className='overflow-hidden'>
                  <p className='p-6 pt-0 text-gray-400 leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
