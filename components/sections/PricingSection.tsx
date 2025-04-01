import Link from "next/link"

export default function PricingSection() {
  return (
    <section className="bg-white pt-20 dark:bg-gray-900 lg:pt-[120px]" id="pricing">
      <div className="container mx-auto max-w-7xl">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-blue-600">Pricing Table</span>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
                Awesome Pricing Plan
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 overflow-hidden rounded-xl bg-white p-11 shadow-lg dark:bg-gray-800">
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="w-1/4 min-w-[200px] px-5 xl:pt-6"></th>
                  <th className="w-1/4 min-w-[200px] px-5 xl:pt-6">
                    <div className="mb-10 text-left">
                      <span className="mb-[18px] text-lg font-medium text-gray-900 dark:text-white">Starter</span>
                      <h4 className="mb-3 text-[28px] font-bold text-gray-900 dark:text-white lg:text-[32px]">
                        <span className="pr-0.5">$59</span>
                        <span className="text-base font-medium text-gray-600 dark:text-gray-400">Per Month</span>
                      </h4>
                      <p className="mb-6 text-sm font-normal text-gray-600 dark:text-gray-400">
                        Best suited for freelancers who works individually.
                      </p>
                      <Link
                        href="#"
                        className="block w-full rounded-md bg-blue-600 p-3 text-center text-base font-medium text-white transition hover:bg-blue-700"
                      >
                        Purchase Now
                      </Link>
                    </div>
                  </th>
                  <th className="w-1/4 min-w-[200px] px-5 xl:pt-6">
                    <div className="mb-10 text-left">
                      <span className="mb-[18px] text-lg font-medium text-gray-900 dark:text-white">Agency</span>
                      <h4 className="mb-3 text-[28px] font-bold text-gray-900 dark:text-white lg:text-[32px]">
                        <span className="pr-0.5">$99</span>
                        <span className="text-base font-medium text-gray-600 dark:text-gray-400">Per Month</span>
                      </h4>
                      <p className="mb-6 text-sm font-normal text-gray-600 dark:text-gray-400">
                        Best suited for agencies and small business.
                      </p>
                      <Link
                        href="#"
                        className="block w-full rounded-md bg-gray-500 p-3 text-center text-base font-medium text-white transition hover:bg-gray-600"
                      >
                        Purchase Now
                      </Link>
                    </div>
                  </th>
                  <th className="w-1/4 min-w-[200px] px-5 xl:pt-6">
                    <div className="mb-10 text-left">
                      <span className="mb-[18px] text-lg font-medium text-gray-900 dark:text-white">Extended</span>
                      <h4 className="mb-3 text-[28px] font-bold text-gray-900 dark:text-white lg:text-[32px]">
                        <span className="pr-0.5">$149</span>
                        <span className="text-base font-medium text-gray-600 dark:text-gray-400">Per Month</span>
                      </h4>
                      <p className="mb-6 text-sm font-normal text-gray-600 dark:text-gray-400">
                        Best suited for agencies and large business.
                      </p>
                      <Link
                        href="#"
                        className="block w-full rounded-md bg-blue-600 p-3 text-center text-base font-medium text-white transition hover:bg-blue-700"
                      >
                        Purchase Now
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <h5 className="text-base font-medium text-gray-900 dark:text-white">Key Features</h5>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <h5 className="text-center text-base font-medium text-gray-900 dark:text-white">Features Limits</h5>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <h5 className="text-center text-base font-medium text-gray-900 dark:text-white">Features Limits</h5>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <h5 className="text-center text-base font-medium text-gray-900 dark:text-white">Features Limits</h5>
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400">Seats</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">1 Developer</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">5 Developer</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">20 Developer</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400">Domains/Products</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">5 Products</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">5 Products</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">5 Products</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400">Email Support</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">6 Months</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">6 Months</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-center text-base text-gray-600 dark:text-gray-400">6 Months</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400">All Pro Components</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                          fill="#13C296"
                        ></path>
                        <path
                          d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                          fill="#13C296"
                        ></path>
                      </svg>
                    </p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                          fill="#13C296"
                        ></path>
                        <path
                          d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                          fill="#13C296"
                        ></path>
                      </svg>
                    </p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                          fill="#13C296"
                        ></path>
                        <path
                          d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                          fill="#13C296"
                        ></path>
                      </svg>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400">Design Source Files</p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                          fill="#FF9494"
                        ></path>
                        <path
                          d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
                          fill="#FF9494"
                        ></path>
                      </svg>
                    </p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                          fill="#13C296"
                        ></path>
                        <path
                          d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                          fill="#13C296"
                        ></path>
                      </svg>
                    </p>
                  </td>
                  <td className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">
                    <p className="flex justify-center text-center text-base text-gray-600">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                          fill="#13C296"
                        ></path>
                        <path
                          d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                          fill="#13C296"
                        ></path>
                      </svg>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

