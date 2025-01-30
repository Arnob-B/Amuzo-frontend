import Link from 'next/link'
import React from 'react'
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className='flex flex-col gap-y-4 bg-[#F48F1B] font-shortStack' id="contact">
      <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 justify-around py-5 px-10'>
        <form className='flex flex-col items-center sm:pl-10 sm:items-start gap-y-3'>
          <h3 className='font-semibold text-lg'>Get in touch</h3>
          <input type="text" className='bg-white rounded-sm w-full outline-none px-2 py-1' placeholder='Email Address' />
          <button className='bg-yellow-500 text-white rounded-sm w-fit px-2 py-1'>Subscribe</button>
        </form>
        <div className='flex flex-col gap-y-2 items-center font-medium'>
          <h3 className='font-semibold text-lg'>Quick Links</h3>
          <Link href={"/"} className='hover:underline hover:underline-offset-1'>Home</Link>
          <Link href={"/product"} className='hover:underline hover:underline-offset-1'>Products</Link>
          <Link href={"/#gallery"} className='hover:underline hover:underline-offset-1'>Gallery</Link>
          <Link href={"/#reviews"} className='hover:underline hover:underline-offset-1'>Reviews</Link>
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-col gap-y-3'>
            <h2 className='font-semibold text-lg text-center'>Contact Us</h2>
            <div className='flex gap-x-4 text-center'>
              <MapPin size={36} />
              <p>OHM INDUSTRIAL COMPLEX, Dhulagori
                Howrah, West Bengal, 711302</p>
            </div>
            <div className='flex gap-x-4 w-full'>
              <Mail />
              <Link href={"mailto:connect@amuzo.in"} className='hover:underline hover:underline-offset-1 text-center w-4/5'>connect@amuzo.in</Link>
            </div>
            <div className='flex justify-center gap-x-8'>
              <Link href={"https://www.instagram.com/amuzo.in/"}>
                <Instagram />
              </Link>
              <Link href={"https://www.linkedin.com/company/amuzo-shop/"}>
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-white text-sm pb-4'>&copy; Amuzo 2025. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
