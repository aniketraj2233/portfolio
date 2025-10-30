"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const fullText = "AI & ML Developer | Cloud + Python Enthusiast | Building Smart Systems"

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="gradient-text">Aniket Raj</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground h-12 flex items-center justify-center">
            <span className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </span>
          </p>
        </div>

        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          B.Tech AI & ML student from Bihar, India. Passionate about building intelligent systems using Python, cloud
          technologies, and machine learning. Let's turn ideas into smart products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => scrollToSection("projects")}
            className={`px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://mystorage9155.blob.core.windows.net/mycontainer/Jake_s_Resume__Anonymous_%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            Download Resume
          </a>
          <a
            href="mailto:aniketraj915510@gmail.com"
            className={`px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://github.com/aniketraj2233"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-muted hover:bg-primary/20 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 duration-1000 animate-float ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms", animationDelay: "0s" }}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/aniket-raj"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-muted hover:bg-primary/20 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 duration-1000 animate-float ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "700ms" : "0ms", animationDelay: "0.2s" }}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aniketraj915510@gmail.com"
            className={`p-3 bg-muted hover:bg-primary/20 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 duration-1000 animate-float ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms", animationDelay: "0.4s" }}
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
