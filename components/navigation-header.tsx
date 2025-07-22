"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/firebase-auth"
import { getStaticPath } from "@/lib/static-navigation"

export function NavigationHeader() {
  const { user } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-terminal-green font-bold text-xl">
            <a href="/" className="hover:text-terminal-green/80 transition-colors">
              <pre className="text-sm leading-tight">{`ASCII-WEB`}</pre>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("creator-studio")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-terminal-green transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {user ? (
              <Button
                className="bg-terminal-green text-black hover:bg-terminal-green/90 hover:shadow-terminal-glow transition-all duration-300"
                asChild
              >
                <a href={getStaticPath("/dashboard")}>Dashboard</a>
              </Button>
            ) : (
              <Button
                className="bg-terminal-green text-black hover:bg-terminal-green/90 hover:shadow-terminal-glow transition-all duration-300"
                asChild
              >
                <a href={getStaticPath("/auth")}>Get Started</a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-terminal-green">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("creator-studio")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                Studio
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-terminal-green hover:bg-gray-800 transition-colors"
              >
                Contact
              </button>
              <div className="px-4 py-2">
                {user ? (
                  <Button className="w-full bg-terminal-green text-black hover:bg-terminal-green/90" asChild>
                    <a href={getStaticPath("/dashboard")}>Dashboard</a>
                  </Button>
                ) : (
                  <Button className="w-full bg-terminal-green text-black hover:bg-terminal-green/90" asChild>
                    <a href={getStaticPath("/auth")}>Get Started</a>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
