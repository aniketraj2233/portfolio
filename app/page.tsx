"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Chatbot from "@/components/chatbot"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Chatbot />
      <footer className="relative z-10 border-t border-border bg-card/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Built with React, Next.js, and Tailwind CSS. Designed and developed by Aniket Raj.
          </p>
          <p className="text-muted-foreground text-xs mt-2">© 2025 Aniket Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
