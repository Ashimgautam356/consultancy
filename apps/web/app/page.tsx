import Image from "next/image"
import Link from "next/link"
import { TypewriterEffect } from "../components/typewriter-effect"
import img1 from './image/img1.jpeg'


export default function Home() {
  const destinations = ["Australia", "USA", "UK", "Germany", "Canada", "Denmark"]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span className="text-xl font-bold">EduConsult</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#destinations" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Destinations
            </a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Testimonials
            </a>
            <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex space-x-3">
            <Link
              href="/auth/login"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Dream of Studying Abroad Starts Here</h1>
            <div className="h-12">
              <TypewriterEffect words={destinations} />
            </div>
            <p className="text-gray-600 text-lg">
              We guide ambitious students to prestigious universities worldwide with personalized counseling and support
              at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consultation"
                className="px-8 py-3 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors text-center"
              >
                Book a Free Consultation
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
              <Link
                href="/auth/signup"
                className="px-8 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-center"
              >
                Create Account
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/img1.jpg"
              alt="Diverse students at university campus"
              width={800}
              height={500}
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-indigo-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Expert Counseling</h3>
              <p className="text-gray-600 text-center">Personalized guidance from certified education consultants</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-indigo-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">95% Visa Success</h3>
              <p className="text-gray-600 text-center">Outstanding track record of successful visa applications</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-indigo-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">5000+ Students</h3>
              <p className="text-gray-600 text-center">Thousands of students successfully placed worldwide</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-indigo-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Top Partnerships</h3>
              <p className="text-gray-600 text-center">Direct partnerships with prestigious global universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Study Destinations */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top Study Destinations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore popular study destinations and find the perfect fit for your academic journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/img4.jpeg"
                    alt={`${destination} universities`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-2xl font-bold">{destination}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Popular Programs</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Business", "Engineering", "Medicine", "Arts"].map((program, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Average Cost</h4>
                      <p className="text-sm">$20,000 - $45,000 per year</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Duration</h4>
                      <p className="text-sm">2-4 years</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-center text-sm"
                    >
                      Visa Details
                    </a>
                    <a
                      href="#"
                      className="flex-1 px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors text-center text-sm"
                    >
                      Scholarships
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View All Destinations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A step-by-step guide to your journey from consultation to university admission
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 relative">
              {[
                {
                  title: "Free Consultation",
                  description: "Meet with our expert counselors to discuss your academic goals and preferences",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "University Selection",
                  description: "We help you choose the right universities based on your profile and aspirations",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Application Process",
                  description: "Our team assists with preparing and submitting applications to selected universities",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  ),
                },
                {
                  title: "Visa Processing",
                  description: "Comprehensive guidance for visa application with our 95% success rate",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Pre-Departure Support",
                  description: "Preparation for your journey including accommodation, travel, and orientation",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className={`w-full max-w-md shadow-md p-6 bg-white rounded-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                    >
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        {step.icon}
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center bg-indigo-600 text-white rounded-full w-10 h-10 shadow-md">
                    {index + 1}
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from our students who are now pursuing their dreams at top universities worldwide
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Sarah Johnson</h3>
                    <p className="text-gray-600 text-center">University of Melbourne, Australia</p>
                  </div>

                  <div className="md:w-2/3 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -top-2 -left-2 h-8 w-8 text-indigo-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic text-lg leading-relaxed pl-6">
                      EduConsult made my dream of studying in Australia come true. Their guidance throughout the
                      application and visa process was invaluable. I'm now pursuing my Master's degree at the University
                      of Melbourne!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                <button className="w-3 h-3 rounded-full bg-indigo-600"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              </div>

              <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-indigo-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Study Destination</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take our quick quiz to discover which country and program best matches your academic goals and
                preferences
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              <div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question 1 of 3</span>
                    <span>33% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 rounded-full h-2 w-1/3"></div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">What field of study are you interested in?</h3>

                <div className="space-y-3">
                  {[
                    "Business & Management",
                    "Engineering & Technology",
                    "Medicine & Health Sciences",
                    "Arts & Humanities",
                  ].map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="radio" id={`option-${index}`} name="field" className="h-4 w-4 text-indigo-600" />
                      <label htmlFor={`option-${index}`} className="text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-3 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors">
                  Next Question
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <a
              href="#"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
            >
              View All Articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Choose the Right University",
                excerpt: "Factors to consider when selecting your ideal institution abroad",
                category: "University Selection",
                date: "Mar 10, 2025",
              },
              {
                title: "Complete Guide to Student Visa Applications",
                excerpt: "Step-by-step process to ensure a successful visa application",
                category: "Visa Process",
                date: "Mar 5, 2025",
              },
              {
                title: "Top Scholarships for International Students",
                excerpt: "Comprehensive list of scholarships available for study abroad",
                category: "Scholarships",
                date: "Feb 28, 2025",
              },
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=300&width=500" alt={blog.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {blog.date}
                    </div>
                    <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Webinars</h2>
              <p className="text-gray-600">Join our free virtual sessions to learn more about studying abroad</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-indigo-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm text-gray-600">Premium members get access to all recorded sessions</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Studying in Australia: Requirements & Opportunities",
                date: "March 20, 2025",
                time: "3:00 PM - 4:30 PM",
                host: "Sarah Johnson",
                country: "Australia",
                isPremium: false,
              },
              {
                title: "Scholarship Opportunities in the USA",
                date: "March 25, 2025",
                time: "5:00 PM - 6:30 PM",
                host: "Michael Brown",
                country: "USA",
                isPremium: true,
              },
              {
                title: "UK Student Visa Process Explained",
                date: "April 2, 2025",
                time: "4:00 PM - 5:30 PM",
                host: "Emma Wilson",
                country: "UK",
                isPremium: true,
              },
            ].map((webinar, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt={webinar.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {webinar.country}
                  </div>
                  {webinar.isPremium && (
                    <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Premium
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{webinar.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {webinar.date}
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {webinar.time}
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {webinar.host}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 border-t">
                  {webinar.isPremium ? (
                    <Link
                      href="/auth/signup"
                      className="w-full py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Unlock Premium
                    </Link>
                  ) : (
                    <button className="w-full py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span className="text-xl font-bold">EduConsult</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for international education consultancy, helping students achieve their academic
                dreams abroad.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Study Destinations
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Study Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <a
                      href={`#${destination.toLowerCase()}`}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on scholarships and opportunities.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <button className="w-full py-2 border border-gray-600 rounded-md text-white hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
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
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} EduConsult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

