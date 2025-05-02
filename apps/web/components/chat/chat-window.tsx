"use client"

import type React from "react"
import { useSession } from "next-auth/react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import axios from "axios"

interface ChatWindowProps {
  chatId: number | null
  onBack: () => void
  isMobile: boolean
  selectedSocket: WebSocket | null
  user: string
}

interface MyId{
  userId:number,
  fullName:string

}
export function ChatWindow({ chatId, onBack, isMobile, selectedSocket,user }: ChatWindowProps) {
  console.log(user)
  const [messages, setMessages] = useState<any[]>([])
  const [toAppend, setToAppend] = useState<any[]>([])

  const [newMessage, setNewMessage] = useState("")
  const [chat, setChat] = useState<any>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const session = useSession()
  useEffect(() => {
    if (chatId) {
      axios.get(`http://localhost:3005/api/v1/chat/${chatId}`, { withCredentials: true, headers:{Authorization:`Bearer ${user}`} }).then(res => {
        if (res.status == 200) {
          setChat(res.data?.groupChats)
        }
      })

      // Get messages for this chat
      axios.get(`http://localhost:3005/api/v1/message/${chatId}`, { withCredentials: true,headers:{Authorization:`Bearer ${user}`} }).then(res => {
        if (res.status == 200) {
          setMessages(res.data?.messages.map((msg:any)=>{
            return {senderId:msg.senderId,message:msg.message}
          }))
        }
      })

    } else {
      setChat(null)
      setMessages([])
    }
  }, [chatId])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])


  const myId = localStorage.getItem("userInfo") 
    if (!myId) return
  const parsedInfo:MyId = JSON.parse(myId)





 
 


  const handleSendMessage = (e: any) => {
    e.preventDefault()

    if (!newMessage.trim() || !chatId) return

    if (selectedSocket && selectedSocket.readyState === WebSocket.OPEN) {
      // Create a new message
      selectedSocket?.send(JSON.stringify({
        type: "chat",
        roomId: chatId,
        message: JSON.stringify({
          newMessage
        })
      }))
    
      setNewMessage("");
    }else{
      console.log("Web socket is not connected")
    }


  }


  useEffect(() => {
    if (!selectedSocket) return;
  
    selectedSocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "chat") {
          setMessages((prev) => [...prev, {

            senderId: data.senderId,
            message: data.message
          }]);
        }
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };
  }, [selectedSocket]);



  if (!chat && chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation to start messaging</p>
      </div>
    )
  }

  if (!chatId && !isMobile) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-indigo-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Your Messages</h3>
          <p className="text-gray-500">Select a conversation to start messaging</p>
        </div>
      </div>
    )
  }




  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Chat header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
        {isMobile && (
          <button onClick={onBack} className="mr-2 p-1 rounded-full hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {chat && (
          <>
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              {chat[0].chatType == "PRIVATE" ? (
                <Image
                  src={chat.avatar || "/placeholder.svg?height=40&width=40"}
                  alt={chat.chatName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  {chat[0]?.chatName?.substring(0, 2).toUpperCase()}
                </div>
              )}
              {chat && (
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white"></span>
              )}
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-900">{chat[0].chatName}</h2>
              <p className="text-xs text-gray-500">
                {chat[0].isPrivate ? (chat[0].online ? "Online" : "Offline") : `${chat.memberCount} members`}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Messages */}
      <div className="relative flex-1 overflow-y-auto p-4">
        <div className="space-y-4 border border-">
          {messages.map((message,id) => {
            const isCurrentUser = message.senderId === parsedInfo.userId

            return (
              <div key={id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                <div className="flex items-end">
                  {!isCurrentUser && (
                    <div className="flex-shrink-0 mr-2">
                      {message.senderId ? (
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                          {chat[0].chatName?.substring(0, 2).toUpperCase()}
                        </div>
                      ) : (
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={chat.avatar || "/placeholder.svg?height=32&width=32"}
                            alt={chat.chatName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs lg:max-w-md ${isCurrentUser
                        ? "bg-indigo-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <div
                      className={`text-xs mt-1 flex justify-end ${isCurrentUser ? "text-indigo-200" : "text-gray-500"}`}
                    >
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form className="flex items-center">
          <button type="button" className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border-0 focus:ring-0 focus:outline-none px-4 py-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="p-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newMessage.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

