import React from 'react'

function ShopByAge() {
  return (
    <div className='h-[50vh] p-8 bg-[#FFC600] flex flex-col items-center gap-y-12 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Shop By Age</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 text-xl'>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>1-3</span>
          <span>years</span>
        </div>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>3+</span>
          <span>years</span>
        </div>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>4+</span>
          <span>years</span>
        </div>
        <div className='flex flex-col items-center text-center bg-white rounded-md p-5 hover:bg-gray-200 transition-colors duration-150 h-fit w-fit'>
          <span>8+</span>
          <span>years</span>
        </div>
      </div>
    </div>
  )
}

export default ShopByAge
