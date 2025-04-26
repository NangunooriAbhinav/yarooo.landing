"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar({ hideNavLinks = false }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleNavbar = () => setNavbarOpen(!navbarOpen)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#features", label: "Features" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`left-0 top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "fixed bg-white/80 shadow-sm backdrop-blur-sm dark:bg-gray-900/90" : "absolute"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative flex items-center justify-between py-2">
          {/* Logo */}
          <div className="w-60 max-w-full">
            <Link href="/" className={`block w-full ${scrolled ? "py-2" : "py-5"} transition-all`}>
              <Image
                src="/new-logo.png"
                alt="logo"
                width={150}
                height={40}
                className="block dark:hidden w-24"
                priority
              />
              <Image
                src="/whiteLogo.png"
                alt="logo"
                width={150}
                height={40}
                className="hidden dark:block w-24"
                priority
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between">
            {/* Mobile Menu Button - Only show if navLinks aren't hidden */}
            {!hideNavLinks && (
              <button
                onClick={toggleNavbar}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 lg:hidden"
                aria-expanded={navbarOpen}
                aria-label="Toggle navigation menu"
              >
                {navbarOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            )}

            {/* Navigation - Only show if navLinks aren't hidden */}
            {!hideNavLinks && (
              <nav
                className={`absolute right-4 top-full z-20 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all dark:bg-gray-900 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:dark:bg-transparent ${
                  navbarOpen
                    ? "translate-y-0 opacity-100"
                    : "invisible -translate-y-5 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
                }`}
                id="mainNav"
              >
                <ul className="block lg:flex">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex py-2 text-base font-medium text-gray-900 transition-colors hover:text-[#4eb570] dark:text-white lg:ml-10 lg:inline-flex dark:hover:text-[#4eb570]"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* CTA Buttons */}
            <div className={`${hideNavLinks ? 'flex w-full' : 'hidden'} justify-end sm:flex lg:pr-0`}>
                <Link
                href="/coming-soon"
                className={`${hideNavLinks? "dark:bg-[#1f2937]" : "bg-gray-900" } bg-gray-900 rounded-md  px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#637381] dark:bg-[#1f2a37]`}
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

