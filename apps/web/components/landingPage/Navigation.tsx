import Link from "next/link"



export const Navigation = () => {
  return (
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
          href="/signin"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Log In
        </Link>
        <Link
          href="/signup"
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
  )
}
