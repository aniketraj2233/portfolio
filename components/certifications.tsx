"use client"

import { useEffect, useState } from "react"

const certificationsData = [
  {
    id: 1,
    title: "Microsoft Azure AZ-900",
    issuer: "Microsoft",
    date: "2024",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2024",
    icon: "🐍",
  },
  {
    id: 3,
    title: "Power BI",
    issuer: "Microsoft Learn",
    date: "2024",
    icon: "📊",
  },
  {
    id: 4,
    title: "ML Beginner",
    issuer: "Kaggle",
    date: "2024",
    icon: "🤖",
  },
]

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className={`neon-border-hover bg-card rounded-lg p-6 text-center transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                {cert.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 transition-colors duration-300 hover:text-primary">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-xs text-primary font-semibold">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
