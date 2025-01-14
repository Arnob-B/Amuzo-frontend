import Image from "next/image"

import dkitBanner from "./../assets/DkitBanner.png"
import dkMain from "./../assets/DkitBanner.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Caraousel() {
  return (
    <div className="w-full h-[50vh] bg-black ">
      {/*
      <Carousel className="w-full h-full">
        <CarouselContent className=" h-full bg-white">
          <CarouselItem className="w-24 h-full">
            <Image
              src="/DkitBanner.png"
              alt="Dkit Banner"
              layout="fill"
            />
          </CarouselItem>
          <CarouselItem className="w-24 h-full">
            <Image
              src="/DkitReel.png"
              alt="Dkit Banner"
              layout="fill"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      */}
    </div>
  )
}
