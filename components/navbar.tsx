"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Download } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border neon-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <span className="text-white font-bold text-sm">AR</span>
            </div>
            <span className="font-bold text-lg gradient-text">Aniket Raj</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-primary transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm hover:text-primary transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-primary transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <a
              href="https://mystorage9155.blob.core.windows.net/mycontainer/Jake_s_Resume__Anonymous_%20(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-110 active:scale-95"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun size={20} className="transition-transform duration-500 rotate-0 hover:rotate-180" />
              ) : (
                <Moon size={20} className="transition-transform duration-500 rotate-0 hover:rotate-180" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-110 active:scale-95"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun size={20} className="transition-transform duration-500 rotate-0 hover:rotate-180" />
              ) : (
                <Moon size={20} className="transition-transform duration-500 rotate-0 hover:rotate-180" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-all duration-300 hover:translate-x-1"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-all duration-300 hover:translate-x-1"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </button>
            <a
              href="https://mystorage9155.blob.core.windows.net/mycontainer/Jake_s_Resume__Anonymous_%20(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
