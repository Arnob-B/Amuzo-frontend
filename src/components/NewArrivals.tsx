import React from 'react'
import ProductCard from './ProductCard'

function NewArrivals() {

  const newArrivals = [
    {
      name: "Product 1",
      image: "/DkitBanner.png",
      hoverImage: "",
      price: "473.00",
      link: "",
    }
  ]

  return (
    <div className='h-screen p-8 bg-[#FFC600] flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>New Arrivals</h1>
      <div className='flex mt-6 gap-x-8'>
        {newArrivals.map((item, ind) => <ProductCard key={ind} item={item} />)}
      </div>
    </div>
  )
}

export default NewArrivals
