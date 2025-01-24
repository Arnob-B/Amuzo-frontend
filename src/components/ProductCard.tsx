import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: { item: { name: string, image: string, hoverImage: string, link: string, price: string } }) {
  return (
    <Link href={item.link}>
      <div className='flex flex-col items-center gap-y-2 rounded-md p-3 bg-[#F48F1B]'>
        <Image src={item.image} alt={item.name} height={500} width={200} className='object-cover h-72 w-64' />
        <h3 className='text-xl mt-8 font-semibold'>{item.name}</h3>
        <p>&#8377; <span className='text-lg'>
          {item.price}
        </span></p>
      </div>
    </Link>
  )
}

export default ProductCard
