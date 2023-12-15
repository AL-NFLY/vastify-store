import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='container relative flex flex-col items-center justify-center pt-20 lg:px-0'>
        <div className='flex flex-col mx-auto w-full sm:w-80 justify-center space-y-6'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <h2 className='text-2xl font-semibold'>NEW CLIENT</h2>
                <p className='text-slate-600'>Create a brand new account</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default page