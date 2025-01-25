'use client'
import React, { useState, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay';
import Link from "next/link";

function ReelCarousel({ reels }: { reels: { src: string, link: string }[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  //const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return
    }

    //setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return <>
    <Carousel opts={{
      loop: true
    }}
      className='w-full'
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}>
      <CarouselContent>
        {reels.map((reel, ind) =>
          <CarouselItem key={ind} className='basis-1/3 hover:cursor-grab'>
            <Link href={reel.link} target='_blank'>
              <video width={current === ind + 1 ? 600 : 400} height={current === ind + 1 ? 300 : 100} preload='none' autoPlay playsInline muted loop className='rounded-md'>
                <source src='/toys1.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Link>
          </CarouselItem>)}
      </CarouselContent>
    </Carousel>
  </>
}

function Reels() {

  const reels = [
    {
      src: "/toys1.mp4",
      link: "/product"
    },
    {
      src: "/toys1.mp4",
      link: "/product"
    },
    {
      src: "/toys1.mp4",
      link: "/product"
    },
    {
      src: "/toys1.mp4",
      link: "/product"
    },
    {
      src: "/toys1.mp4",
      link: "/product"
    }
  ]

  return (
    <div className='h-screen p-8 bg-[#FFC600] flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold'>Shop from Reels</h1>
      <ReelCarousel reels={reels} />
    </div>
  )
}

export default Reels
