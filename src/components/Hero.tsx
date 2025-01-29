import React from 'react'

function Hero() {
  return (
    <div className='h-[70vh] sm:h-screen p-6 bg-[#FFC600] flex flex-col items-center gap-y-6 font-shortStack'>
      <h1 className='text-4xl sm:text-5xl font-bold text-center'>Welcome to Amuzo</h1>
      <video width={720} height={640} preload='none' autoPlay playsInline muted loop>
        <source src='/toys1.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero
