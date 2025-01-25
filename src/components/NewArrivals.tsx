import React from 'react'
import ProductCard from './ProductCard'

function NewArrivals() {

  const newArrivals = [
    {
      name: "Product 1",
      image: "/DkitBanner.png",
      hoverImage: "/DkitReel.png",
      price: "473.00",
      link: "/product/product1",
    },
    {
      name: "Product 2",
      image: "/DkitBanner.png",
      hoverImage: "/DkitReel.png",
      price: "473.00",
      link: "",
    }

  ]

  return (
    <div className='min-h-screen p-8 bg-[#FFC600] flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>New Arrivals</h1>
      <div className='flex flex-col sm:flex-row mt-6 justify-around w-2/3'>
        {newArrivals.map((item, ind) => <ProductCard key={ind} item={item} />)}
      </div>
    </div>
  )
}

export default NewArrivals
