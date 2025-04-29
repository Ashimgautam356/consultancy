
import Image from "next/image"
import Link from "next/link"

const WebinarSection = () => {
  return (
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
  )
}

export default WebinarSection