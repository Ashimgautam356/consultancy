"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { ThemeSettings } from "@/components/settings/theme-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { isAuthenticated } from "@/lib/auth"

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"profile" | "theme" | "notifications" | "security">("profile")

  // Check if user is authenticated
  useEffect(() => {
    


    if (!isAuthenticated()) {
      router.push("/auth/login?redirect=/dashboard/settings")
    }



  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Settings Navigation */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="p-2">
                <button
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "profile" ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile Information
                </button>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "theme" ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("theme")}
                >
                  Appearance
                </button>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "notifications" ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                </button>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "security" ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("security")}
                >
                  Security
                </button>
              </nav>
            </div>
          </div>


          {/* Settings Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === "profile" && <ProfileSettings />}
              {activeTab === "theme" && <ThemeSettings />}
              {activeTab === "notifications" && <NotificationSettings />}
              {activeTab === "security" && <SecuritySettings />}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

