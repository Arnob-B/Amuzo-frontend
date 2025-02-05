'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

function Gallery() {

  const photos = ["/hero-image-1.jpg", "/gallery-image-2.jpg", "/hero-image-2.jpg", "/gallery-image-1.jpg", "/hero-image-3.jpg"];

  return (
    <div id="gallery" className='sm:min-h-[60vh] p-3 sm:p-8 flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Gallery</h1>
      <Carousel opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]} className='hover:cursor-grab'>
        <CarouselContent>
          {photos.map((photo, ind) => <CarouselItem key={ind} className='sm:basis-1/3'>
            <Image src={photo} alt='Gallery Image' height={800} width={800} className='aspect-video' />
          </CarouselItem>)}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Gallery;
