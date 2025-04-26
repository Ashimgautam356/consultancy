"use client"

import { useState } from "react"
import Image from "next/image"
import { mockVideos } from "../../lib/mock-data"

export function VideoLibrary() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [filter, setFilter] = useState<"all" | "university" | "visa" | "preparation">("all")

  const filteredVideos = mockVideos.filter((video) => {
    if (filter === "all") return true
    return video.category === filter
  })

  return (
    <div className="space-y-6">
      {/* Video Player */}
      {selectedVideo && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative aspect-video bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <Image
              src={selectedVideo.thumbnail || "/placeholder.svg?height=480&width=854"}
              alt={selectedVideo.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">{selectedVideo.title}</h2>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {selectedVideo.duration}
              </span>
              <span className="mx-2">•</span>
              <span>{selectedVideo.uploadDate}</span>
              <span className="mx-2">•</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {selectedVideo.category}
              </span>
            </div>
            <p className="mt-4 text-gray-600">{selectedVideo.description}</p>
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
            All Videos
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
              filter === "preparation" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("preparation")}
          >
            Preparation
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={video.thumbnail || "/placeholder.svg?height=192&width=384"}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-indigo-600 bg-opacity-80 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-base line-clamp-2">{video.title}</h3>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <span>{video.uploadDate}</span>
                <span className="mx-2">•</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {video.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

