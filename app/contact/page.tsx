"use client"

import Navbar from "@/components/Navbar"
import FooterSection from "@/components/sections/FooterSection"
import ThemeSwitcher from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar hideNavLinks={true} />
      <main>
        {/* Page Header */}
        <div className="bg-gray-100 dark:bg-gray-800 py-16 md:py-16">
          
        </div>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#121929]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#121929]"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-[#121929]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#121929]"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Our team is here to help. Reach out to us through any of these channels and we&apos;ll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#4fb472]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#4fb472]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">+91 7569236628</p>
                      
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#4fb472]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#4fb472]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">team@noobsverse.com</p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">We&apos;ll respond as soon as possible</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#4fb472]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#4fb472]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">Noobsverse Tech Pvt Ltd</p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                       Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>

                          </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <FooterSection />

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </main>
    </div>
  )
}