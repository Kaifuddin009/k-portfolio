import React from 'react'

const SubHerosection = () => {
  return (
    <div className='w-full border-y border-white dark:border-black  flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-gradient-to-r from-gray-200 to-gray-700 text-white sm:width-w-full md:width-w-full xl:width-w-full'>
        <p className='md:block sm:hidden'>Quick Learner </p>
        <p className='md:block sm:hidden'>Leadership</p>
        <p className=''>Detailed Master</p>
    </div>
  )
}

export default SubHerosection