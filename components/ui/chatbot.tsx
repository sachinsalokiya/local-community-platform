"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm here to help you navigate through our platform. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }])

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Thanks for your message! I'll help you find what you're looking for.",
        },
      ])
    }, 1000)

    setInput("")
  }

  return (
    <>
      {/* Floating button */}
      <Button
        className={`fixed bottom-6 right-6 rounded-full p-4 shadow-lg transition-transform hover:scale-110 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      <Card
        className={`fixed bottom-6 right-6 w-96 overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-primary p-4 text-white">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">Community Assistant</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-primary/50"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.type === "user"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </>
  )
}