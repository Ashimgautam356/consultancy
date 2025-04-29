import Image from "next/image"

const BlogSection = () => {
  return (
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
  )
}

export default BlogSection