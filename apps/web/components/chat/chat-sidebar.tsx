"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { mockChats } from "../../lib/mock-data"
import axios from "axios"
import { useSession } from "next-auth/react"


interface ChatSidebarProps {
  onSelectChat: (chatId: number) => void
  selectedChatId: number | null
  onSelectSocket: (ws:WebSocket)=>void
  user: string
}

export  function ChatSidebar({ onSelectChat, selectedChatId,onSelectSocket,user }: ChatSidebarProps) {

  const [activeTab, setActiveTab] = useState<"countries" | "private">("countries")
  const [searchTerm, setSearchTerm] = useState("")


  const filteredChats = mockChats.filter((chat) => {
    if (activeTab === "countries" && !chat.isPrivate) {
      return chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    } else if (activeTab === "private" && chat.isPrivate) {
      return chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return false
  })

  const [groupChat, setGroupChat] = useState([])

  useEffect(()=>{
       axios.get("http://localhost:3005/api/v1/chat",{headers:{Authorization:`Bearer ${user}`}}).then(res=>{
        if(res.status==200){
          setGroupChat(res?.data?.groupChats)
        }
      }).catch(err=>{
        console.log(err)
      })

  },[])

// connected to websocket after selecting the specific group 
  async function selectGroupHandler (id:number){
    onSelectChat(id)
    console.log("clicked")
  }

  useEffect(()=>{
    if (!selectedChatId) return;

        const ws = new WebSocket(`ws://localhost:8080?token=${user}`)
        
        ws.onopen=()=>{
          onSelectSocket(ws)
          console.log("connected")
          ws.send(JSON.stringify({
            type:"join-room",
            roomId:selectedChatId
          }))
        }

        return () => {
          ws.close()
        }
  },[selectedChatId])
  return (
    <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold mb-4">Messages</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === "countries" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("countries")}
          >
            Country Groups
          </button>
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === "private" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("private")}
          >
            Private Chats
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {groupChat.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            {searchTerm
              ? "No conversations found"
              : `No ${activeTab === "countries" ? "country groups" : "private chats"} available`}
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {groupChat.map((chat:any) => (
              <li
                key={chat.id}
                className={`hover:bg-gray-50 cursor-pointer ${selectedChatId == chat.id ? "bg-indigo-50" : ""}`}
                onClick={()=>selectGroupHandler(chat.id)}
              >
                <div className="flex items-center px-4 py-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    {chat.isPrivate ? (
                      <Image
                        src={chat.avatar || "/placeholder.svg?height=48&width=48"}
                        alt={chat.chatName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                        {chat.roomLink.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    {chat && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{chat.chatName}</p>
                      <p className="text-xs text-gray-500">{chat.lastMessageTime}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                      {chat.unreadCount > 0 && (
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-xs font-medium text-white">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

