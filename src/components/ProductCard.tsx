'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: { item: { name: string, image: string, hoverImage: string, link: string, price: string } }) {

  const [imageLink, setImageLink] = useState<string>(item.image);

  return (
    <Link href={item.link} className='grid place-items-center'>
      <div className='flex flex-col items-center w-full gap-y-2 rounded-md'>
        <div className='overflow-hidden grid place-items-center rounded-[12px]'>
          <Image src={imageLink} alt={item.name} height={500} width={300} className='object-cover aspect-square w-full rounded-[12px] hover:scale-125 transition-all duration-500 ease-in-out' onMouseEnter={() => setImageLink(item.hoverImage)} onMouseLeave={() => setImageLink(item.image)} />
        </div>
        <h3 className='text-xl font-semibold w-fit'>{item.name}</h3>
        <p>&#8377; <span className='text-lg'>
          {item.price}
        </span></p>
      </div>
    </Link>
  )
}

export default ProductCard
