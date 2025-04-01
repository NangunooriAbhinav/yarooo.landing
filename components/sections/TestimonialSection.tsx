import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="pb-20 pt-20 bg-white dark:bg-gray-900 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">What People Says</span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
                Client Testimonials
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
            <div className="relative items-center rounded-lg bg-gray-100 px-10 py-10 dark:bg-gray-800 md:flex lg:px-[70px]">
              <div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
                <Image
                  src="/placeholder.svg?height=165&width=165"
                  alt="testimonial"
                  width={165}
                  height={165}
                  className="w-full rounded-full"
                />
                <div className="absolute left-0 top-0 z-[-1]">
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="-6.88525"
                      y="18.9728"
                      width="36.731"
                      height="209.602"
                      rx="18.3655"
                      transform="rotate(-45 -6.88525 18.9728)"
                      fill="#13C296"
                    ></rect>
                  </svg>
                </div>
                <div className="absolute -left-2 top-5 z-[-2]">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="-5"
                      y="12.5433"
                      width="24.9386"
                      height="204.237"
                      rx="12.4693"
                      transform="rotate(-45 -5 12.5433)"
                      fill="#3758F9"
                    ></rect>
                  </svg>
                </div>
              </div>
              <div className="w-full pl-0 md:pl-14">
                <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                  Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or
                  randomised words which don&#39;t look slightly believable, If you are to passage.
                </p>
                <h4 className="mb-1 text-lg font-semibold text-blue-600">Healther Bennit</h4>
                <h6 className="text-sm font-normal italic text-gray-600 dark:text-gray-400">Founder - Dailousm</h6>
              </div>
            </div>
          </div>
          <div className="w-full pt-12">
            <div className="flex items-center justify-center">
              <button className="mx-4 h-2 w-2 rounded-full bg-gray-500 hover:bg-blue-600"></button>
              <button className="mx-4 h-2 w-2 rounded-full bg-gray-300 hover:bg-blue-600"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

