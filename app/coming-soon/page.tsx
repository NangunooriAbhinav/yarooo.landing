"use client"

import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import ThemeSwitcher from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ComingSoonPage() {
  // Countdown timer (set to 30 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [email, setEmail] = useState("")

  useEffect(() => {
    // Set launch date (30 days from now)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()
      
      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    alert(`Thank you! We'll notify ${email} when we launch.`)
    setEmail("")
  }

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              We&apos;re Launching <span className="text-[#4fb472]">Soon</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto">
            We&apos;re working hard to bring you the best cashback and affiliate platform. Be the first to know when we launch.
            </p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-10">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 w-full aspect-square flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-[#4fb472]">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
            
                 </div>
        </div>
      </main>
      
      {/* Social Links */}
      <div className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with us on social media</p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
  )
}