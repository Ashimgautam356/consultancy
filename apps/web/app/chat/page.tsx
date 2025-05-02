"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChatSidebar } from "../../components/chat/chat-sidebar"
import { ChatWindow } from "../../components/chat/chat-window"
import { useRouter } from "next/navigation"
import { DashboardNavbar } from "../../components/dashboard/dashboard-navbar"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const [socket, setSocket] = useState<WebSocket | null>(null)

  // Check if user is authenticated (simplified - in a real app, use a proper auth check)
//   useEffect(() => {
//     const token = localStorage.getItem("jwt_token")
//     if (!token) {
//       router.push("/auth/login?redirect=/chat")
//     }
//   }, [router])

  // Handle responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Chat Navbar */}
      
        <DashboardNavbar></DashboardNavbar>

        
      <div className="flex flex-1 overflow-hidden">
        {/* Show sidebar on desktop or when no chat is selected on mobile */}
        {(!isMobile || !selectedChat) && <ChatSidebar onSelectChat={setSelectedChat} selectedChatId={selectedChat} onSelectSocket={setSocket} />}

        {/* Show chat window when a chat is selected */}
        {(selectedChat || isMobile) && (
          <ChatWindow chatId={selectedChat} onBack={() => setSelectedChat(null)} isMobile={isMobile} selectedSocket={socket} />
        )}
      </div>
    </div>
  )
}

