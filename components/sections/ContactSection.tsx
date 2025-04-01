"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <section className="relative z-40 bg-white py-16 dark:bg-gray-900 lg:py-[120px]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative bg-white shadow-xl dark:bg-gray-800 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full">
            {/* Left sidebar */}
            <div className="relative w-full md:w-[387px] bg-gradient-to-b from-blue-600 to-emerald-500">
              <div className="absolute top-0 right-0 p-6">
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-blue-400"></div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between h-full min-h-[400px] md:min-h-[600px]">
                {/* Contact Us vertical text */}
                <div className="p-8 md:p-16">
                  <div className="flex items-center">
                    <div className="w-1 h-8 bg-white mr-4"></div>
                    <div className="text-white font-semibold tracking-widest text-xl">CONTACT US</div>
                  </div>
                </div>

                {/* Social media section */}
                <div className="p-8 md:p-12 text-white">
                  <h3 className="text-lg font-medium mb-6">Follow Us On</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="hover:text-blue-200 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-200 transition-colors">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-200 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-200 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form section */}
            <div className="w-full bg-white p-6 md:p-8 lg:p-16 dark:bg-gray-800">
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch With Us</h1>
                <p className="text-gray-600 mb-8 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
                  some form.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:text-gray-400"
                      />
                    </div>
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:text-gray-400"
                      />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Type Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[100px] border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none bg-transparent dark:text-gray-400"
                    />
                  </div>

                  <div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

