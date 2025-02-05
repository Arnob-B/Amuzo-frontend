import Image from 'next/image';
import React from 'react'

function Reviews() {

  const reviews = [
    {
      image: "/DkitReel.png",
      name: "John Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab."
    },
    {
      image: "/DkitReel.png",
      name: "Jane Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab."
    },
    {
      image: "/DkitReel.png",
      name: "Another Human",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab."
    }
  ]

  return (
    <div id="reviews" className='min-h-[80vh] p-8 flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Reviews</h1>
      <div className='flex flex-col sm:flex-row gap-6 sm:w-4/5'>
        {reviews.map((review, ind) =>
          <div key={ind} className='rounded-md border border-dashed border-gray-400 px-4 py-6 flex flex-col gap-y-3 w-full'>
            <Image src={review.image} alt={review.name} height={100} width={100} className='rounded-full aspect-square' />
            <h3 className='text-2xl font-semibold'>{review.name}</h3>
            <p className='text-sm leading-relaxed'>{review.review}</p>
          </div>)}
      </div>
    </div>
  )
}

export default Reviews;
