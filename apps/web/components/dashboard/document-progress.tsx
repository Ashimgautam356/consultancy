"use client"

import { useState } from "react"
import type { Document } from "../../lib/mock-data"

interface DocumentProgressProps {
  documents: Document[]
}

export function DocumentProgress({ documents }: DocumentProgressProps) {
  const [filter, setFilter] = useState<"all" | "verified" | "pending" | "action_required" | "not_started">("all")

  const filteredDocuments = documents.filter((doc) => {
    if (filter === "all") return true
    return doc.status === filter
  })

  // Calculate completion percentages
  const totalDocs = documents.length
  const verifiedDocs = documents.filter((doc) => doc.status === "verified").length
  const pendingDocs = documents.filter((doc) => doc.status === "pending").length
  const actionRequiredDocs = documents.filter((doc) => doc.status === "action_required").length
  const notStartedDocs = documents.filter((doc) => doc.status === "not_started").length

  const completionPercentage = Math.round((verifiedDocs / totalDocs) * 100)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Verified
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Under Review
          </span>
        )
      case "action_required":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Action Required
          </span>
        )
      case "not_started":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Not Started
          </span>
        )
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      case "pending":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
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
        )
      case "action_required":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        )
      case "not_started":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Document Completion Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Document Completion</h2>
            <p className="text-gray-600 text-sm">Track your document submission progress</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
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
            <div className="ml-4">
              <div className="text-sm text-gray-500">Overall Progress</div>
              <div className="text-2xl font-bold text-indigo-600">
                {verifiedDocs}/{totalDocs} Documents
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <h3 className="font-medium">Verified</h3>
                <p className="text-sm text-gray-600">{verifiedDocs} documents</p>
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
                <p className="text-sm text-gray-600">{pendingDocs} documents</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-red-100 p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Action Required</h3>
                <p className="text-sm text-gray-600">{actionRequiredDocs} documents</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-gray-100 p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Not Started</h3>
                <p className="text-sm text-gray-600">{notStartedDocs} documents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All Documents
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "verified" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("verified")}
          >
            Verified
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "pending" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("pending")}
          >
            Under Review
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "action_required" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("action_required")}
          >
            Action Required
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              filter === "not_started" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("not_started")}
          >
            Not Started
          </button>
        </div>
      </div>

      {/* Document List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Document
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Updated
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full ${
                          doc.status === "verified"
                            ? "bg-green-100"
                            : doc.status === "pending"
                              ? "bg-yellow-100"
                              : doc.status === "action_required"
                                ? "bg-red-100"
                                : "bg-gray-100"
                        }`}
                      >
                        {getStatusIcon(doc.status)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                        {doc.message && <div className="text-sm text-red-600">{doc.message}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(doc.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.date || "Not available"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {doc.status === "verified" ? (
                      <button className="text-indigo-600 hover:text-indigo-900 font-medium">View</button>
                    ) : doc.status === "not_started" ? (
                      <button className="text-indigo-600 hover:text-indigo-900 font-medium">Upload</button>
                    ) : doc.status === "action_required" ? (
                      <button className="text-indigo-600 hover:text-indigo-900 font-medium">Update</button>
                    ) : (
                      <span className="text-gray-500">Processing</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

