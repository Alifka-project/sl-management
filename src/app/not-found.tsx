import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center p-8 max-w-md'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
          Page Not Found
        </h2>
        <p className='text-gray-600 mb-8'>
          We couldn&apos;t find the page you were looking for. It might have
          been moved, deleted, or never existed.
        </p>
        <Link
          href='/'
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md transition-colors'
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
