"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Student Complaint Management System",
    description:
      "A comprehensive system for filing and tracking student complaints with admin dashboard, Azure Blob storage integration, and automated email alerts.",
    tech: ["Azure", "Flask", "SQL", "HTML/CSS/JS"],
    features: ["Complaint tracking", "Admin dashboard", "Email alerts", "Session authentication"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Emotion-Based Music Recommendation",
    description:
      "AI-powered system that detects facial emotions and recommends mood-based music with intelligent history tracking for personalized suggestions.",
    tech: ["Python", "TensorFlow", "OpenCV", "DevOps"],
    features: ["Facial emotion detection", "Music recommendation", "History tracking", "Smart suggestions"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Business Analyst AI Chatbot",
    description:
      "Interactive NLP-powered chatbot that provides business growth recommendations with both short-term and long-term strategic suggestions.",
    tech: ["Python", "NLP", "NLTK", "Flask"],
    features: ["Business insights", "Growth strategies", "Interactive UI", "Recommendation engine"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI, ML, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group neon-border-hover bg-card rounded-lg p-6 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all text-sm font-medium duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 rounded-lg transition-all text-sm font-medium duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
