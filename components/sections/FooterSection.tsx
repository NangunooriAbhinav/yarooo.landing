import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, Globe } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#f5f5f5] dark:bg-[#1f2937] pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto max-w-7xl ">
        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="#" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/new-logo.png"
                  alt="logo"
                  width={160}
                  height={40}
                  className="max-w-full w-24 "
                />
              </Link>
              <div className="flex flex-col space-y-2">
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email: <a href="mailto:team@noobsverse.com" className="hover:text-[#4fb472]">team@noobsverse.com</a></span>
                </p>
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Phone: <a href="tel:+917569236628" className="hover:text-[#4fb472]">+91 7569236628</a></span>
                </p>
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>Website: <a className="hover:text-[#4fb472]" href="https://www.coffeecodes.in/">coffeecodes</a></span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">Resources</h4>
              <ul>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    SaaS Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    User Flow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    User Strategy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">Company</h4>
              <ul>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    About TailGrids
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Contact & Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Success History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Setting & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
              <ul>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Premium Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Know Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]">
                    Download App
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">Follow Us On</h4>
              <div className="mb-6 flex items-center">
                <Link
                  href="#"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-base text-gray-600 dark:text-white/70">&copy; {new Date().getFullYear()} Yarooo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

