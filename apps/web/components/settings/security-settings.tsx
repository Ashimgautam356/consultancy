"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Loader2, Eye, EyeOff } from "lucide-react"

export function SecuritySettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send the password data to your API
    console.log("Password changed")

    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })

    setIsLoading(false)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Security Settings</h2>

      <div className="space-y-8">
        {/* Change Password */}
        <div>
          <h3 className="text-lg font-medium mb-4">Change Password</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="currentPassword">Current Password</label>
                <div className="relative">
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type={showPassword ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="newPassword">New Password</label>
                <div className="relative">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Update Password
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Two-Factor Authentication */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            {/* <switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} /> */}
          </div>

          {twoFactorEnabled && (
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-sm mb-4">
                Two-factor authentication adds an extra layer of security to your account by requiring a verification
                code in addition to your password when you sign in.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="phone-2fa">Phone Number for 2FA</label>
                  <input id="phone-2fa" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>

                <Button>Set Up Two-Factor Authentication</Button>
              </div>
            </div>
          )}
        </div>

        {/* Login Sessions */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-4">Active Sessions</h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Current Session</p>
                  <p className="text-sm text-gray-500">San Francisco, CA, USA • Chrome on Windows</p>
                  <p className="text-xs text-gray-500 mt-1">Started: April 6, 2025 at 1:30 PM</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Active Now</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Mobile App</p>
                  <p className="text-sm text-gray-500">San Francisco, CA, USA • iPhone 15</p>
                  <p className="text-xs text-gray-500 mt-1">Last active: April 5, 2025 at 8:45 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  Sign Out
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="destructive">Sign Out All Other Sessions</Button>
            </div>
          </div>
        </div>

        {/* Account Deletion */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-2">Delete Account</h3>
          <p className="text-sm text-gray-500 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive">Delete My Account</Button>
        </div>
      </div>
    </div>
  )
}

