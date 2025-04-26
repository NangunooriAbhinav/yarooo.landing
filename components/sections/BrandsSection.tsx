import Image from "next/image"
import Link from "next/link"

export default function BrandsSection() {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-gray-900 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="h-10 w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <Link
                href="#"
                className="flex h-20 min-w-[150px] max-w-[225px] items-center justify-center rounded-full border border-transparent px-7 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <Image
                  src="/logo.png"
                  alt="brand"
                  width={150}
                  height={40}
                  className="h-10 max-w-full"
                />
              </Link>
              <Link
                href="#"
                className="flex h-20 min-w-[150px] max-w-[225px] items-center justify-center rounded-full border border-transparent px-7 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="brand"
                  width={150}
                  height={40}
                  className="h-10 max-w-full"
                />
              </Link>
              <Link
                href="#"
                className="flex h-20 min-w-[150px] max-w-[225px] items-center justify-center rounded-full border border-transparent px-7 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="brand"
                  width={150}
                  height={40}
                  className="h-10 max-w-full"
                />
              </Link>
              <Link
                href="#"
                className="flex h-20 min-w-[150px] max-w-[225px] items-center justify-center rounded-full border border-transparent px-7 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="brand"
                  width={150}
                  height={40}
                  className="h-10 max-w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

