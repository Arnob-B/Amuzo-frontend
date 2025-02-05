'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay';
import Link from "next/link";

function ReelCarousel({ reels }: { reels: { src: string, link: string }[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const reelsRef = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (reelsRef.current) {
      reelsRef.current.forEach((reel, ind) => {
        if (ind + 1 === current) reel?.play();
        else reel?.pause();
      })
    }
  }, [current]);

  return <>
    <Carousel opts={{
      loop: true
    }}
      className='w-full h-full'
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}>
      <CarouselContent className='h-full flex justify-end items-end'>
        {reels.map((reel, ind) =>
          <CarouselItem key={ind} className='grid justify-items-center items-end sm:basis-1/3 md:basis-1/5 hover:cursor-grab'>
            <Link href={reel.link} target='_blank' className='h-fit'>
              <video width={current === ind + 1 ? 275 : 250} height={800} preload='none' autoPlay playsInline muted loop className='object-cover rounded-2xl' ref={(ref) => { reelsRef.current[ind] = ref }}>
                <source src={reel.src} type='video/mp4' />
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
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
    {
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
    {
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
    {
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
    {
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
    {
      src: "/reels/discovery-kit-reel-1.mp4",
      link: "/product"
    },
  ]

  return (
    <div className='min-h-screen p-8 flex flex-col items-center gap-y-8 font-shortStack'>
      <h1 className='w-fit text-4xl sm:text-5xl font-bold text-center'>Shop from Reels</h1>
      <ReelCarousel reels={reels} />
    </div>
  )
}

export default Reels
