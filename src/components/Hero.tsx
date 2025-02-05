'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Package, Phone, Smile, Truck } from 'lucide-react';

function Hero() {
  return (
    <>
      <div className='h-[70vh] sm:h-screen bg-[#f5f5f5] relative gap-y-6 font-shortStack'>
        <Image width={500} height={500} src={"/hero-image-1.jpg"} alt='Image' className='absolute top-0 opacity-0 w-full h-full object-cover object-bottom hero-image-1' />
        <Image width={500} height={500} src={"/hero-image-2.jpg"} alt='Image' className='absolute top-0 opacity-0 w-full h-full object-cover object-bottom hero-image-2' />
        <Image width={500} height={500} src={"/hero-image-3.jpg"} alt='Image' className='absolute top-0 opacity-0 w-full h-full object-cover object-bottom hero-image-3' />
      </div>
      <div className='h-[60vh] py-10 font-shortStack'>
        <Carousel opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000
            })
          ]} className='hover:cursor-grab'>
          <CarouselContent>
            <CarouselItem className='sm:basis-1/3 grid place-items-center py-6'>
              <Truck height={150} width={150} />
              <h2 className='my-2 text-2xl font-semibold'>Free Delivery</h2>
              <p>On all orders above &#8377;499</p>
            </CarouselItem>
            <CarouselItem className='sm:basis-1/3 grid place-items-center py-6'>
              <Phone height={150} width={150} />
              <h2 className='my-2 text-2xl font-semibold'>Give us a call</h2>
              <p>Or Whatsapp on - 1234567891</p>
            </CarouselItem>
            <CarouselItem className='sm:basis-1/3 grid place-items-center py-6'>
              <Package height={150} width={150} />
              <h2 className='my-2 text-2xl font-semibold'>For Bulk Enquiry</h2>
              <p>Reach us at connect@amuzo.in</p>
            </CarouselItem>
            <CarouselItem className='sm:basis-1/3 grid place-items-center py-6'>
              <Smile height={150} width={150} />
              <h2 className='my-2 text-2xl font-semibold'>Quality Assurance</h2>
              <p>High quality products</p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default Hero
