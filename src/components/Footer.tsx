import Link from 'next/link'
import React from 'react'
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className='flex flex-col gap-y-4 bg-[#f5f5f5] font-shortStack' id="contact">
      <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 justify-around py-3 px-10'>
        <form className='flex flex-col items-center sm:pl-10 sm:items-start gap-y-3 h-full'>
          <h3 className='font-semibold text-lg'>Get in touch</h3>
          <div className='flex gap-x-1 p-2 border-pink border border-dashed rounded-xl w-full'>
            <input type="text" className='bg-[#f5f5f5] placeholder:text-gray-600 rounded-sm w-full outline-none px-2 py-1' placeholder='Enter your email here' />
            <button className='bg-pink text-white rounded-lg w-fit p-4 text-sm'>Subscribe</button>
          </div>
        </form>
        <div className='flex flex-col gap-y-2 items-center font-medium'>
          <h3 className='font-semibold text-lg'>Quick Links</h3>
          <Link href={"/"} className='hover:text-pink transition-colors duration-300'>Home</Link>
          <Link href={"/product"} className='hover:text-pink transition-colors duration-300'>Products</Link>
          <Link href={"/#gallery"} className='hover:text-pink transition-colors duration-300'>Gallery</Link>
          <Link href={"/#reviews"} className='hover:text-pink transition-colors duration-300'>Reviews</Link>
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-col items-center gap-y-3'>
            <h2 className='font-semibold text-lg text-center'>Contact Us</h2>
            <div className='flex gap-x-4 text-center w-4/5 sm:text-left'>
              <MapPin size={52} className='text-pink' />
              <p>OHM INDUSTRIAL COMPLEX, Dhulagori
                Howrah, West Bengal, 711302</p>
            </div>
            <div className='flex gap-x-4 w-4/5'>
              <Mail className='text-pink' />
              <Link href={"mailto:connect@amuzo.in"} className='hover:text-pink transition-colors duration-300 text-center sm:text-left w-4/5'>connect@amuzo.in</Link>
            </div>
            <div className='flex justify-center gap-x-8'>
              <Link href={"https://www.instagram.com/amuzo.in/"} className='hover:text-pink transition-colors duration-300'>
                <Instagram />
              </Link>
              <Link href={"https://www.linkedin.com/company/amuzo-shop/"} className='hover:text-pink transition-colors duration-300'>
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-sm mb-4'>&copy; Amuzo 2025. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
