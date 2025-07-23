"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageCircle, Loader2 } from "lucide-react";
import { GlitchText, GlitchContainer } from "@/components/ui/glitch-effects";
import { useToast } from "@/hooks/use-toast";

// Get your access key from https://web3forms.com/
const FORM_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: FORM_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          className: "bg-terminal-green text-black",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description:
          "Please try again later or contact us through social media.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className='py-20 px-4 bg-black scan-lines'>
      <div className='max-w-4xl mx-auto'>
        {/* Contact Form */}
        <div className='text-center mb-16'>
          <GlitchContainer>
            <h2 className='text-3xl md:text-5xl font-bold mb-6'>
              <GlitchText
                text='Let’s ASCII Together'
                className='text-terminal-green'
              />
            </h2>
          </GlitchContainer>

          <GlitchContainer delay={200}>
            <p className='text-gray-300 text-lg mb-8'>
              Got an idea? Let’s bring it to life with code and creativity.
            </p>
          </GlitchContainer>

          <form onSubmit={handleSubmit} className='max-w-2xl mx-auto space-y-6'>
            <GlitchContainer delay={400}>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors'
                    required
                  />
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>
            </GlitchContainer>

            <GlitchContainer delay={600}>
              <div>
                <textarea
                  name='message'
                  placeholder='Tell us about your project...'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors resize-none'
                  required
                />
              </div>
            </GlitchContainer>

            <GlitchContainer delay={800}>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-magenta text-black hover:bg-magenta/90 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-magenta-glow disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </GlitchContainer>
          </form>
        </div>
      </div>
    </section>
  );
}
