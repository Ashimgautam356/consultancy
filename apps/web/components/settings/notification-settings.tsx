"use client"

import type React from "react"

import { useState } from "react"

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [notifications, setNotifications] = useState({
    email: {
      applicationUpdates: true,
      documentReminders: true,
      chatMessages: false,
      marketingEmails: false,
    },
    push: {
      applicationUpdates: true,
      documentReminders: true,
      chatMessages: true,
      newWebinars: true,
    },
  })

  const handleToggle = (category: "email" | "push", setting: string) => {
    // setNotifications((prev) => ({
    //   ...prev,
    //   [category]: {
    //     ...prev[category],
    //     [setting]: !prev[category][setting as keyof (typeof prev)[category]],
    //   },
    // }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send the notification settings to your API
    console.log("Notification settings saved:", notifications)

    setIsLoading(false)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Notification Settings</h2>

      <h1>Under Construction</h1>

    </div>
  )
}

