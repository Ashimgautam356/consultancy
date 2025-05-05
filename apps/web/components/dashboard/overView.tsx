"use state"

import { mockDocuments } from "../../lib/mock-data"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"

const completedDocs = mockDocuments.filter((doc) => doc.status === "verified").length
const totalDocs = mockDocuments.length
const completionPercentage = Math.round((completedDocs / totalDocs) * 100)

const OverView = ({setActiveTab}:{setActiveTab: (data:any)=> void}) => {
  const [applicationStatus, setApplicationStatus] = useState("start")
  const sessoin  = useSession()
  

  
  useEffect(()=>{
    axios.get("http://localhost:3005/api/v1/student/application-status",{
      headers:{
        Authorization: `Bearer ${sessoin.data?.user.jwtToken}`
      }
    }).then(res=>{
      if(res.status===200){
        console.log(res)
        if(res.data?.status){
          setApplicationStatus(res.data?.status)
        }
      }
    })  

  },[])
  
  const color:any={
  start:"w-1",
  Documents_Verified:"w-3/6",
  Application_Submitted : "w-1/6",
  Offer_Letter: "w-5/6",
  Visa:"w-6/6",
 
  }
  return (
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

                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    {/* here is the logic to color blue line  */}
                    <div className={`bg-indigo-600 rounded-full h-2 ${color[applicationStatus]}`}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span >Application Submitted</span>
                    <span >Documents Verified</span>
                    <span >Offer Letter</span>
                    <span >Visa</span>
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
  )
}

export default OverView