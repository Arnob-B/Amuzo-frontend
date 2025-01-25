import React from 'react'

function ShopByCategory() {
  return (
    <div className='h-[50vh] p-8 bg-[#FFC600] flex flex-col items-center gap-y-12 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Shop By Category</h1>
      <div className='grid grid-cols-2 gap-y-4 gap-x-8 text-xl'>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>Education</span>
          <span>and STEM</span>
        </div>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>Art and</span>
          <span>Crafts</span>
        </div>
      </div>
    </div>
  )
}

export default ShopByCategory
