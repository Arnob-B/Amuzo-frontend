import React from 'react';
import Link from "next/link";

function ShopByAge() {
  return (
    <div id='age' className='min-h-[50vh] p-8 flex flex-col items-center gap-y-12 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold text-center'>Shop By Category</h1>
      <div className='sm:w-1/4 grid grid-cols-2 gap-y-4 gap-x-8 text-center text-xl'>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>Education and STEM</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=3" className='flex flex-col items-center text-center bg-white rounded-full aspect-square border-gray-500 border border-dashed p-8 hover:bg-gray-200 transition-colors duration-150 h-full w-full'>
          </Link>
          <p>Arts and Crafts</p>
        </div>
      </div>
    </div>
  )
}

export default ShopByAge
