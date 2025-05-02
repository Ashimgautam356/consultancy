"use client"

import { useState, useEffect } from "react"
import { ChatSidebar } from "../../components/chat/chat-sidebar"
import { ChatWindow } from "../../components/chat/chat-window"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const session = useSession()
  
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


  if(session.status==='loading'){
    return <h1>Loadin the page</h1>
  }
  if(!session.data?.user){
    redirect("/signin")
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

        
      <div className="flex flex-1 overflow-hidden">
        {/* Show sidebar on desktop or when no chat is selected on mobile */}
        {(!isMobile || !selectedChat) && <ChatSidebar onSelectChat={setSelectedChat} selectedChatId={selectedChat} onSelectSocket={setSocket} user={session?.data.user.jwtToken}/>}
    
        {/* Show chat window when a chat is selected */}
        {(selectedChat || isMobile) && (
          <ChatWindow chatId={selectedChat} onBack={() => setSelectedChat(null)} isMobile={isMobile} selectedSocket={socket} user={session?.data.user}/>
        )}
      </div>
    </div>
  )
}

