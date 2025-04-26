"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

export default function ComingSoonPage() {
  // Countdown timer (set to 30 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");

  useEffect(() => {
    // Set launch date to May 1, 2025 at 12 AM UTC
    const launchDate = new Date(Date.UTC(2025, 4, 1, 0, 0, 0));

    // Calculate initial time left to avoid delay in first render
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Set initial state immediately
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you! We'll notify ${email} when we launch.`);
    setEmail("");
  };

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
              We&apos;re working hard to bring you the best cashback and
              affiliate platform. Be the first to know when we launch.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-10">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 w-full aspect-square flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-[#4fb472]">
                      {item.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {item.label}
                  </span>
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
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with us on social media
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/yarooo.com_?igsh=anlrN3p6MDUxbHMy&utm_source=qr"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
  );
}
