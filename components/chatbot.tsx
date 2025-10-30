"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses: { [key: string]: string } = {
  hello: "Hi! I'm Aniket's AI assistant. How can I help you today?",
  hi: "Hello! Welcome to Aniket's portfolio. What would you like to know?",
  "who are you": "I'm an AI chatbot representing Aniket Raj, an AI & ML Engineer from Bihar, India.",
  "what can you do":
    "I can help you learn about Aniket's projects, skills, certifications, and how to get in touch. Feel free to ask!",
  projects:
    "Aniket has worked on Student Complaint Management System, Emotion-Based Music Recommendation, and Business Analyst AI Chatbot. Would you like to know more about any of these?",
  skills:
    "Aniket is skilled in Python, AI/ML frameworks like TensorFlow and PyTorch, Azure Cloud, Flask, FastAPI, and more!",
  contact:
    "You can reach Aniket at aniketraj915510@gmail.com or connect on LinkedIn and GitHub. Would you like to send a message?",
  help: "I can tell you about Aniket's projects, skills, certifications, or help you get in touch. What interests you?",
  default: "That's interesting! Feel free to ask me about Aniket's projects, skills, or how to contact him.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Aniket's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    return botResponses["default"]
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-110 active:scale-95 animate-float"
        style={{ animationDelay: "0s" }}
        title="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-2xl flex flex-col h-96 max-h-[calc(100vh-8rem)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Aniket's Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg transition-all duration-300 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none hover:shadow-lg hover:shadow-primary/20"
                      : "bg-muted text-foreground rounded-bl-none hover:shadow-lg hover:shadow-muted/20"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all hover:border-primary/50"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95"
              title="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
