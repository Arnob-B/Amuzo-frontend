'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: { item: { name: string, image: string, hoverImage: string, link: string, price: string } }) {

  const [imageLink, setImageLink] = useState<string>(item.image);

  return (
    <Link href={item.link}>
      <div className='flex flex-col items-center gap-y-2 rounded-md p-3 bg-[#F48F1B]'>
        <div className='overflow-hidden h-72 w-64'>
          <Image src={imageLink} alt={item.name} height={500} width={200} className='object-cover h-72 w-64 hover:scale-125 transition-all duration-500 ease-in-out' onMouseEnter={() => setImageLink(item.hoverImage)} onMouseLeave={() => setImageLink(item.image)} />
        </div>
        <h3 className='text-xl mt-8 font-semibold'>{item.name}</h3>
        <p>&#8377; <span className='text-lg'>
          {item.price}
        </span></p>
      </div>
    </Link>
  )
}

export default ProductCard
