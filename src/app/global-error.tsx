'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
          <div className='text-center p-8 max-w-md'>
            <h1 className='text-3xl font-bold text-red-600 mb-4'>
              Something went wrong!
            </h1>
            <p className='text-gray-700 mb-6'>
              We apologize for the inconvenience. Our team has been notified of
              this issue.
            </p>
            <button
              onClick={() => reset()}
              className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md transition-colors'
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
