"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">Have a project in mind? Let's collaborate!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div
              className={`flex gap-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="p-3 bg-primary/20 rounded-lg h-fit hover:bg-primary/30 transition-colors duration-300">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <a
                  href="mailto:aniketraj915510@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  aniketraj915510@gmail.com
                </a>
              </div>
            </div>

            <div
              className={`flex gap-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <div className="p-3 bg-primary/20 rounded-lg h-fit hover:bg-primary/30 transition-colors duration-300">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">Bihar, India</p>
              </div>
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <h3 className="font-bold">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aniketraj2233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/20 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-110 hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/aniket-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/20 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/50"
                placeholder="Your name"
              />
            </div>

            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/50"
                placeholder="your@email.com"
              />
            </div>

            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none hover:border-primary/50"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-1000 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
