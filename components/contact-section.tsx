"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-terminal-green">Ready to Create?</h2>
          <p className="text-gray-300 text-lg mb-8">Get in touch and let's build something amazing together.</p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-magenta text-black hover:bg-magenta/90 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-magenta-glow"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="text-gray-400 hover:text-terminal-green transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-terminal-green transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-terminal-green transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            {/* Logo and Copyright */}
            <div className="text-center">
              <div className="text-2xl font-bold text-terminal-green mb-2">Ascii-Web.com</div>
              <div className="text-gray-400 text-sm">© 2025 All rights reserved</div>
            </div>

            {/* Legal Links */}
            <div className="flex justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-terminal-green transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-terminal-green transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
