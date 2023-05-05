import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='relative p-1 w-full h-[calc(100svh_-_92px)] flex flex-col gap-5  justify-center items-center bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition duration-200'>
      <h1 className='text-3xl font-bold'>About Page</h1>
      <p className='text-sm font-medium'>Still in Development</p>
      <Link aria-label='Home Page' href={'/'} className='flex items-center gap-1 px-5 py-2 rounded-full dark:bg-secondaryColor bg-secondaryColorL text-white hover:bg-secondaryColor hover:text-black dark:hover:text-white dark:hover:bg-secondaryColorL dark:text-black hover:rounded-2xl transition-all  duration-200'><button>Go Back</button></Link>
    </div>
  )
}

export default AboutPage