import React from 'react'
import ProductCard from './ProductCard'

function NewArrivals() {

  const newArrivals = [
    {
      name: "Product 1",
      image: "/gallery-image-1.jpg",
      hoverImage: "/gallery-image-2.jpg",
      price: "473.00",
      link: "/product/product1",
    },
    {
      name: "Product 2",
      image: "/gallery-image-2.jpg",
      hoverImage: "/gallery-image-1.jpg",
      price: "473.00",
      link: "",
    }

  ]

  return (
    <div className='min-h-screen p-3 sm:p-8 mt-12 grid grid-cols-1 justify-items-center gap-y-4 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold h-fit'>New Arrivals</h1>
      <div className='grid grid-cols-1 h-full sm:grid-cols-2 gap-8 w-5/6 sm:w-2/3'>
        {newArrivals.map((item, ind) => <ProductCard key={ind} item={item} />)}
      </div>
    </div>
  )
}

export default NewArrivals
