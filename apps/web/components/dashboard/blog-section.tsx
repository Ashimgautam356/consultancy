"use client"

import { useState } from "react"
import Image from "next/image"
import { mockBlogPosts } from "../../lib/mock-data"

export function BlogSection() {
  const [filter, setFilter] = useState<"all" | "university" | "visa" | "preparation" | "scholarship">("all")
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const filteredPosts = mockBlogPosts.filter((post) => {
    if (filter === "all") return true
    return post.category === filter
  })

  return (
    <div className="space-y-6">
      {/* Selected Blog Post */}
      {selectedPost && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative h-64 w-full">
            <Image
              src={selectedPost.image || "/placeholder.svg?height=256&width=768"}
              alt={selectedPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {selectedPost.category}
              </span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-sm text-gray-500">{selectedPost.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">{selectedPost.content}</p>
            </div>
            <div className="mt-6 flex items-center">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={selectedPost.authorAvatar || "/placeholder.svg?height=40&width=40"}
                  alt={selectedPost.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{selectedPost.author}</p>
                <p className="text-xs text-gray-500">{selectedPost.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All Posts
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "university" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("university")}
          >
            University Selection
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "visa" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("visa")}
          >
            Visa Process
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "scholarship" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("scholarship")}
          >
            Scholarships
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "preparation" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("preparation")}
          >
            Preparation
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedPost(post)}
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={post.image || "/placeholder.svg?height=192&width=384"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {post.category}
                </span>
                <span className="mx-2 text-gray-500 text-xs">•</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h3 className="font-medium text-base line-clamp-2 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-3">{post.excerpt}</p>
              <div className="flex items-center">
                <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                  <Image
                    src={post.authorAvatar || "/placeholder.svg?height=24&width=24"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs text-gray-700">{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

