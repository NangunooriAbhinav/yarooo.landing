"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-white shadow-lg transition duration-500 hover:bg-gray-200 dark:hover:bg-gray-500"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun  className="h-6 w-6 text-[#6d7c89]" /> : <Moon color="#6d7c89" className="h-6 w-6" />}
      </button>
    </div>
  )
}

