"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Moon, Sun, Monitor } from "lucide-react"

type Theme = "light" | "dark" | "system"

export function ThemeSettings() {
  const [theme, setTheme] = useState<Theme>("light")

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const handleThemeChange = (value: Theme) => {
    setTheme(value)
    localStorage.setItem("theme", value)
    applyTheme(value)
  }

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement

    if (selectedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.toggle("dark", systemTheme === "dark")
    } else {
      root.classList.toggle("dark", selectedTheme === "dark")
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Appearance</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Theme</h3>

          {/* <label value={theme} onValueChange={(value:any) => handleThemeChange(value as Theme)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`
                  w-full aspect-video rounded-lg border-2 p-2 mb-2 cursor-pointer
                  ${theme === "light" ? "border-indigo-600" : "border-gray-200"}
                `}
                >
                  <div className="bg-white h-full w-full rounded flex items-center justify-center">
                    <Sun className="h-8 w-8 text-amber-500" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input value="light" id="light" />
                  <label htmlFor="light">Light</label>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`
                  w-full aspect-video rounded-lg border-2 p-2 mb-2 cursor-pointer
                  ${theme === "dark" ? "border-indigo-600" : "border-gray-200"}
                `}
                >
                  <div className="bg-gray-900 h-full w-full rounded flex items-center justify-center">
                    <Moon className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input value="dark" id="dark" />
                  <label htmlFor="dark">Dark</label>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`
                  w-full aspect-video rounded-lg border-2 p-2 mb-2 cursor-pointer
                  ${theme === "system" ? "border-indigo-600" : "border-gray-200"}
                `}
                >
                  <div className="bg-gradient-to-r from-white to-gray-900 h-full w-full rounded flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input value="system" id="system" />
                  <label htmlFor="system">System</label>
                </div>
              </div>
            </div>
          </label> */}
          <p className="text-sm text-gray-500 mt-2">
            Choose how EduConsult appears to you. Select a single theme, or sync with your system.
          </p>
        </div>


      </div>
    </div>
  )
}

