import Link from "next/link"
import { TypewriterEffect } from "../components/typewriter-effect"
import Image from "next/image"

import { Navigation } from "../components/landingPage/Navigation"
import PremiumFeature from "../components/landingPage/PremiumFeature"
import WebinarSection from "../components/landingPage/WebinarSection"
import { BlogSection } from "../components/dashboard/blog-section"
import Testimonial from "../components/landingPage/Testimonial"
import ProcessTimeline from "../components/landingPage/ProcessTimeline"
import Footer from "../components/landingPage/Footer"


export default function Home() {
  const destinations = ["Australia", "USA", "UK", "Germany", "Canada", "Denmark"]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}

      <Navigation></Navigation>

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
      <PremiumFeature></PremiumFeature>

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
      <ProcessTimeline></ProcessTimeline>

      {/* Testimonials */}
      <Testimonial></Testimonial>

      {/* Blog Section */}
      <BlogSection></BlogSection>

      {/* Webinar Section */}
      <WebinarSection></WebinarSection>

    </main>
  )
}

