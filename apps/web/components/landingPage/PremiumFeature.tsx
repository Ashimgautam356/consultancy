import Link from "next/link"


const PremiumFeature = () => {
  return (
          <section className="py-16 bg-indigo-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Unlock Premium Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Create an account and pay a service fee to access exclusive features designed to make your study abroad
                  journey seamless
                </p>
              </div>
    
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">One-on-One Expert Counseling</h3>
                  <p className="text-gray-600">Personalized guidance from certified education consultants</p>
                </div>
    
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="rounded-full bg-purple-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community Networking</h3>
                  <p className="text-gray-600">Connect with other students heading to the same country or university</p>
                </div>
    
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Sessions & Webinars</h3>
                  <p className="text-gray-600">Exclusive access to all live and recorded sessions with education experts</p>
                </div>
    
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Document Process Tracking</h3>
                  <p className="text-gray-600">Real-time updates on your application and visa processing status</p>
                </div>
              </div>
    
              <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-indigo-600 transition-colors">
                    <div className="flex items-start mb-4">
                      <div className="rounded-full bg-indigo-100 p-3 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Pay Online</h4>
                        <p className="text-gray-600 text-sm">Secure payment for instant access to premium features</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                          Instant Access
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 ml-12">
                      <li>• Credit/Debit Cards</li>
                      <li>• PayPal</li>
                      <li>• Bank Transfer</li>
                    </ul>
                  </div>
    
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-indigo-600 transition-colors">
                    <div className="flex items-start mb-4">
                      <div className="rounded-full bg-indigo-100 p-3 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Visit Our Office</h4>
                        <p className="text-gray-600 text-sm">Make payment in person at any of our branch offices</p>
                        <span className="inline-block mt-2 px-2 py-1 border border-gray-300 text-gray-600 text-xs font-medium rounded-full">
                          24-48 Hour Activation
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 ml-12">
                      <li>• Cash Payment</li>
                      <li>• Check/Demand Draft</li>
                      <li>• POS Terminal Available</li>
                    </ul>
                  </div>
                </div>
              </div>
    
              <div className="mt-12 text-center">
                <Link
                  href="/auth/signup"
                  className="px-8 py-3 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors inline-block"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
  )
}

export default PremiumFeature