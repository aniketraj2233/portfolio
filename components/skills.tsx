"use client"

import { useEffect, useState } from "react"
import { Code2, Cloud, Brain, Database } from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C", "Java", "JavaScript", "SQL"],
  },
  {
    category: "ML & AI",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure Cloud", "PowerBI", "Docker", "Git", "Linux"],
  },
  {
    category: "Frameworks & Tools",
    icon: Database,
    skills: ["Flask", "FastAPI", "SQL", "REST APIs", "Jupyter"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills across AI, ML, cloud, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <div
                key={skillGroup.category}
                className={`neon-border-hover bg-background rounded-lg p-6 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg">{skillGroup.category}</h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                      style={{
                        transitionDelay: isVisible ? `${index * 100 + skillIndex * 30}ms` : "0ms",
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
