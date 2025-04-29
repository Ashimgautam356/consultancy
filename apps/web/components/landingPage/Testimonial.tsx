import Image from "next/image"

const Testimonial = () => {
  return (
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
  )
}

export default Testimonial