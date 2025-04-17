import React from 'react'
import Image from 'next/image'

const FamilyBusinessCard = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 max-lg:px-4 py-12 max-lg:py-8 flex flex-col md:flex-row rounded-lg overflow-hidden '>
      {/* Left side with image */}
      <div className='w-full md:w-1/3 p-6'>
        <div className='flex flex-col items-center'>
          <Image
            src='/images/book-1.png'
            alt='Lightbulb icon'
            width={0}
            height={0}
            sizes='100vw'
            className='mx-auto w-full h-auto object-contain'
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className='w-full md:w-2/3 p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Family Business Management
        </h1>
        <p className='text-sm text-gray-700 mb-4'>By Dr. Andreas Svoboda</p>

        <p className='text-sm text-gray-700 mb-4'>
          Running a family business is a balancing act—blending tradition with
          innovation, family ties with financial responsibility. Family Business
          Management explores the unique challenges and opportunities of family
          enterprises, offering insights for success.
        </p>

        <p className='text-sm text-gray-700 mb-6'>
          Family businesses thrive on relationships—both their greatest strength
          and challenge. Family Business Management explores ownership,
          governance, succession, and family dynamics while addressing fiscal
          responsibilities and global influences. Through real-life case
          studies, it highlights successes, common pitfalls, and strategies for
          sustainable growth. Whether you`&apos;`re passing the torch or
          stepping into leadership, this guide ensures business longevity
          without compromising family bonds.
        </p>

        <div className='mt-4'>
          <a href='https://www.amazon.com/Family-Business-Management-Andreas-Svoboda/dp/B0CN5QJSDJ'>
            <button className='w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded transition duration-300'>
              Read More Here
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FamilyBusinessCard
