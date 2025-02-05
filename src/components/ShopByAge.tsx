import React from 'react';
import Link from "next/link";

function ShopByAge() {
  return (
    <div id='age' className='min-h-[50vh] p-8 flex flex-col items-center gap-y-12 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Shop By Age</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 text-xl'>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>1-3 years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=3" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>3+ years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=4" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>4+ years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=8" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>8+ years</p>
        </div>
      </div>
    </div>
  )
}

export default ShopByAge
