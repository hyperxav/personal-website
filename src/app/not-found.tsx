import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="gradient-text">404</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 via-green-400 to-blue-500 hover:from-orange-600 hover:via-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 