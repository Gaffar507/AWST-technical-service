import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-7xl font-extrabold text-[#0077B6] mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Sorry, the page you are looking for doesn't exist or has been moved to another URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#0077B6] hover:bg-[#005f92] text-white font-medium rounded-lg transition duration-200 shadow-md text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition duration-200 text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}