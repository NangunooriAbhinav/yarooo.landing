import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function TeamSection() {
  return (
    <section className="pb-10 pt-20 bg-white dark:bg-gray-900 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto max-w-7xl">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-blue-600">Our Team</span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
                Meet Our Team
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full max-w-[270px] px-4">
            <div className="group relative mb-10 overflow-hidden rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="opacity-0 duration-300 group-hover:opacity-100">
                <span className="absolute right-0 top-0 z-20">
                  <svg width="58" height="19" viewBox="0 0 58 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="-10" r="29" fill="#13C296"></circle>
                  </svg>
                </span>
                <span className="absolute right-0 top-0 z-10">
                  <svg width="35" height="62" viewBox="0 0 35 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="46.5" cy="15" rx="46.5" ry="47" fill="#3056D3"></ellipse>
                  </svg>
                </span>
              </div>
              <div className="mb-[22px] h-20 w-20 overflow-hidden rounded-[5px]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="team member"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Jackie Sanders</h4>
                <h6 className="mb-[10px] text-[10px] font-medium uppercase leading-loose text-gray-600 dark:text-gray-400">
                  CONTENT WRITER
                </h6>
                <p className="mb-8 max-w-[185px] text-xs text-gray-600 dark:text-gray-400">
                  Fermentum massa justo sit amet risus morbi leo.
                </p>
                <div className="flex items-center gap-5">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[270px] px-4">
            <div className="group relative mb-10 overflow-hidden rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="opacity-0 duration-300 group-hover:opacity-100">
                <span className="absolute right-0 top-0 z-20">
                  <svg width="58" height="19" viewBox="0 0 58 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="-10" r="29" fill="#13C296"></circle>
                  </svg>
                </span>
                <span className="absolute right-0 top-0 z-10">
                  <svg width="35" height="62" viewBox="0 0 35 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="46.5" cy="15" rx="46.5" ry="47" fill="#3056D3"></ellipse>
                  </svg>
                </span>
              </div>
              <div className="mb-[22px] h-20 w-20 overflow-hidden rounded-[5px]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="team member"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Andrieo Gloree</h4>
                <h6 className="mb-[10px] text-[10px] font-medium uppercase leading-loose text-gray-600 dark:text-gray-400">
                  Web Developer
                </h6>
                <p className="mb-8 max-w-[185px] text-xs text-gray-600 dark:text-gray-400">
                  Fermentum massa justo sit amet risus morbi leo.
                </p>
                <div className="flex items-center gap-5">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[270px] px-4">
            <div className="group relative mb-10 overflow-hidden rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="opacity-0 duration-300 group-hover:opacity-100">
                <span className="absolute right-0 top-0 z-20">
                  <svg width="58" height="19" viewBox="0 0 58 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="-10" r="29" fill="#13C296"></circle>
                  </svg>
                </span>
                <span className="absolute right-0 top-0 z-10">
                  <svg width="35" height="62" viewBox="0 0 35 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="46.5" cy="15" rx="46.5" ry="47" fill="#3056D3"></ellipse>
                  </svg>
                </span>
              </div>
              <div className="mb-[22px] h-20 w-20 overflow-hidden rounded-[5px]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="team member"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Adveen Desuza</h4>
                <h6 className="mb-[10px] text-[10px] font-medium uppercase leading-loose text-gray-600 dark:text-gray-400">
                  Digital Marketer
                </h6>
                <p className="mb-8 max-w-[185px] text-xs text-gray-600 dark:text-gray-400">
                  Fermentum massa justo sit amet risus morbi leo.
                </p>
                <div className="flex items-center gap-5">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

