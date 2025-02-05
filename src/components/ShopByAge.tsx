import React from 'react';
import Link from "next/link";
import Image from "next/image";

function ShopByAge() {
  return (
    <div id='age' className='min-h-[50vh] p-8 flex flex-col items-center gap-y-12 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Shop By Age</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 text-xl'>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='text-center rounded-full aspect-square border-gray-500 border border-dashed transition-all duration-300 h-full w-full bg-[url("/shopBy/shopByAge1-3.webp")] bg-contain hover:scale-110'>
          </Link>
          <p>1-3 years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='text-center rounded-full aspect-square border-gray-500 border border-dashed transition-all duration-300 h-full w-full bg-[url("/shopBy/shopByAge3.webp")] bg-contain hover:scale-110'>
          </Link>
          <p>3+ years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='text-center rounded-full aspect-square border-gray-500 border border-dashed transition-all duration-300 h-full w-full bg-[url("/shopBy/shopByAge4.webp")] bg-contain hover:scale-110'>
          </Link>
          <p>4+ years</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <Link href="/product?age=1" className='text-center rounded-full aspect-square border-gray-500 border border-dashed transition-all duration-300 h-full w-full bg-[url("/shopBy/shopByAge8.webp")] bg-contain hover:scale-110'>
          </Link>
          <p>8+ years</p>
        </div>
      </div>
    </div>
  )
}

export default ShopByAge
