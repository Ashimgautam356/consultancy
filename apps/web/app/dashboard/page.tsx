"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { DocumentProgress } from "@/components/dashboard/document-progress"
import { RecentChats } from "@/components/dashboard/recent-chats"
import { VideoLibrary } from "@/components/dashboard/video-library"
import { BlogSection } from "@/components/dashboard/blog-section"
import { mockDocuments } from "@/lib/mock-data"

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"overview" | "videos" | "documents" | "chat" | "blog">("overview")

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login?redirect=/dashboard")
    }
  }, [router])

  // Calculate document completion percentage
  const completedDocs = mockDocuments.filter((doc) => doc.status === "verified").length
  const totalDocs = mockDocuments.length
  const completionPercentage = Math.round((completedDocs / totalDocs) * 100)

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Sarah! Track your study abroad journey.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
              Premium Member
            </span>
            <Link
              href="/chat"
              className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors flex items-center"
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
              Open Chat
            </Link>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                className={`px-4 py-2 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === "overview"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("overview")}
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Overview
              </button>
              <button
                className={`px-4 py-2 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === "videos"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("videos")}
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Videos
              </button>
              <button
                className={`px-4 py-2 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === "documents"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("documents")}
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Documents
              </button>
              <button
                className={`px-4 py-2 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === "chat"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("chat")}
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
                Chat
              </button>
              <button
                className={`px-4 py-2 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === "blog"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("blog")}
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Blog
              </button>
            </nav>
          </div>
        </div>

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Application Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Application Status</h2>
                <p className="text-gray-600 text-sm">Track your university application progress</p>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium">University of Melbourne</span>
                      <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        Australia
                      </span>
                    </div>
                    <span className="text-sm text-indigo-600 font-medium">75% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 rounded-full h-2 w-3/4"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>Application Submitted</span>
                    <span>Documents Verified</span>
                    <span className="text-gray-300">Offer Letter</span>
                    <span className="text-gray-300">Visa</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium">Stanford University</span>
                      <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded-full">USA</span>
                    </div>
                    <span className="text-sm text-indigo-600 font-medium">50% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 rounded-full h-2 w-1/2"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>Application Submitted</span>
                    <span>Documents Verified</span>
                    <span className="text-gray-300">Offer Letter</span>
                    <span className="text-gray-300">Visa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Completion */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">Document Completion</h2>
                  <p className="text-gray-600 text-sm">Track your document submission progress</p>
                </div>
                <div className="relative h-20 w-20">
                  <svg className="w-20 h-20" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="3"
                      strokeDasharray={`${completionPercentage}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" fontSize="8" fill="#4F46E5" fontWeight="bold">
                      {completionPercentage}%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Completed</h3>
                      <p className="text-sm text-gray-600">{completedDocs} documents</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="rounded-full bg-yellow-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-600"
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
                    </div>
                    <div>
                      <h3 className="font-medium">Pending</h3>
                      <p className="text-sm text-gray-600">{totalDocs - completedDocs} documents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard/documents"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  View all documents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Recent Videos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Recent Videos</h2>
                  <p className="text-gray-600 text-sm">Watch helpful tutorials and webinars</p>
                </div>
                <button
                  onClick={() => setActiveTab("videos")}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  View all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Video Preview 1 */}
                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="Video thumbnail"
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
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">How to Write a Winning Statement of Purpose</h3>
                    <p className="text-xs text-gray-500 mt-1">15 min • Uploaded 2 days ago</p>
                  </div>
                </div>

                {/* Video Preview 2 */}
                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="Video thumbnail"
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
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">UK Student Visa Process Explained</h3>
                    <p className="text-xs text-gray-500 mt-1">22 min • Uploaded 5 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Chats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Recent Conversations</h2>
                  <p className="text-gray-600 text-sm">Stay connected with your counselors and peers</p>
                </div>
                <Link
                  href="/chat"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image src="/placeholder.svg?height=40&width=40" alt="John Davis" fill className="object-cover" />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">John Davis</p>
                      <p className="text-xs text-gray-500">2:30 PM</p>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      Your application looks good, just a few changes needed
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-xs font-medium text-white">
                    1
                  </span>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      AU
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Australia Study Group</p>
                      <p className="text-xs text-gray-500">10:45 AM</p>
                    </div>
                    <p className="text-xs text-gray-500 truncate">Has anyone applied to University of Melbourne?</p>
                  </div>
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-xs font-medium text-white">
                    3
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/chat"
                  className="w-full py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors flex items-center justify-center"
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
                  Open Chat Center
                </Link>
              </div>
            </div>

            {/* Recent Blog Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Recent Blog Posts</h2>
                  <p className="text-gray-600 text-sm">Stay updated with the latest news and tips</p>
                </div>
                <button
                  onClick={() => setActiveTab("blog")}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  View all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Blog Post 1 */}
                <div className="flex items-start">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Blog thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-sm">How to Choose the Right University</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Factors to consider when selecting your ideal institution abroad for your academic journey.
                    </p>
                    <p className="text-xs text-indigo-600 mt-1">Read more</p>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="flex items-start">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Blog thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-sm">Top Scholarships for International Students</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Comprehensive list of scholarships available for study abroad opportunities.
                    </p>
                    <p className="text-xs text-indigo-600 mt-1">Read more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab Content */}
        {activeTab === "videos" && <VideoLibrary />}

        {/* Documents Tab Content */}
        {activeTab === "documents" && <DocumentProgress documents={mockDocuments} />}

        {/* Chat Tab Content */}
        {activeTab === "chat" && <RecentChats />}

        {/* Blog Tab Content */}
        {activeTab === "blog" && <BlogSection />}
      </main>
    </div>
  )
}

