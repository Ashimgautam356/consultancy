"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { mockChats } from "../../lib/mock-data"

export function RecentChats() {
  const [filter, setFilter] = useState<"all" | "countries" | "private">("all")

  const filteredChats = mockChats.filter((chat) => {
    if (filter === "all") return true
    if (filter === "countries") return !chat.isPrivate
    if (filter === "private") return chat.isPrivate
    return true
  })

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All Chats
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "countries" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("countries")}
          >
            Country Groups
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "private" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("private")}
          >
            Private Chats
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredChats.map((chat) => (
            <Link href={`/chat?id=${chat.id}`} key={chat.id} className="block hover:bg-gray-50">
              <div className="flex items-center p-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  {chat.isPrivate ? (
                    <Image
                      src={chat.avatar || "/placeholder.svg?height=48&width=48"}
                      alt={chat.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                      {chat.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{chat.name}</h3>
                    <p className="text-xs text-gray-500">{chat.lastMessageTime}</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    {chat.unreadCount > 0 && (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-xs font-medium text-white">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/chat"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
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
          Open Full Chat
        </Link>
      </div>
    </div>
  )
}

