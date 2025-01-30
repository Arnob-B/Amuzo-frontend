'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import productList from "./productList"
import { useParams } from 'next/navigation';
import { ClipboardCheck, Truck, MapPin } from 'lucide-react';

interface ProductData {
  name: string;
  price: string;
  description: string;
  photos: string[];
}

const ProductPage: React.FC<ProductData> = ({
  name,
  price,
  description,
  photos,
}) => {

  const [currentImage, setCurrentImage] = useState<string>(photos[0]);
  const orderingDate = new Date();
  const orderReadyDate = new Date();
  orderReadyDate.setDate(orderingDate.getDate() + 2);
  const expectedDateStart = new Date();
  expectedDateStart.setDate(orderingDate.getDate() + 5);
  const expectedDateEnd = new Date();
  expectedDateEnd.setDate(orderingDate.getDate() + 7);

  return (
    <div className="font-shortStack bg-[#FFC600] flex flex-col md:flex-row gap-y-8 justify-center items-start p-8">
      <div className='flex flex-row md:flex-col gap-3 px-4'>
        {photos.map((photoSrc, ind) => <Image key={ind} src={photoSrc} alt='Product Image' height={150} width={150} className='rounded-lg w-1/3 sm:w-full aspect-square' onClick={() => setCurrentImage(photos[ind])} />)}
      </div>
      <div className="md:w-4/5 flex justify-center items-center">
        <Image
          src={currentImage}
          alt={name}
          width={400}
          height={400}
          className="object-contain w-4/5 h-auto aspect-square"
        />
      </div>
      <div className="md:w-4/5 px-4 md:pl-8 flex flex-col gap-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
        <p className="text-gray-500">Rs. {price}</p>
        <p>{description}</p>
        <div className='grid grid-cols-5 w-full my-3'>
          <div className='grid grid-cols-1 justify-items-center gap-y-2'>
            <div className='bg-black text-white h-12 w-12 aspect-square rounded-full grid place-items-center'><ClipboardCheck height={24} /></div>
            <p className='text-center text-sm'>Ordering</p>
            <p className='text-center text-sm text-gray-600'>{orderingDate.toLocaleDateString()}</p>
          </div>
          <div className='h-[1px] mt-6 w-full bg-black'></div>
          <div className='grid grid-cols-1 justify-items-center gap-y-2'>
            <div className='bg-black text-white h-12 w-12 aspect-square rounded-full grid place-items-center'><Truck height={24} /></div>
            <p className='text-center text-sm'>Order Ready</p>
            <p className='text-center text-sm text-gray-600'>{orderingDate.toLocaleDateString()} - {orderReadyDate.toLocaleDateString()}</p>
          </div>
          <div className='h-[1px] mt-6 w-full bg-black'></div>
          <div className='grid grid-cols-1 justify-items-center gap-y-2'>
            <div className='bg-black text-white h-12 w-12 aspect-square rounded-full grid place-items-center'><MapPin height={24} /></div>
            <p className='text-center text-sm'>Expected Delivery</p>
            <p className='text-center text-sm text-gray-600'>{expectedDateStart.toLocaleDateString()} - {expectedDateEnd.toLocaleDateString()}</p>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full">
          Buy Now
        </button>
        <div className='flex gap-x-4'>
          <Truck height={44} />
          <p>Expected delivery 5-7 days PAN India. Same day delivery in Kolkata.</p>
        </div>
      </div>
    </div>
  );
};

function page() {

  const searchParams = useParams();
  const product = productList.find((product) => product.name === searchParams.slug);
  if (!product) return;

  return (
    <ProductPage price={product.price} name={product.name} description={product.description} photos={product.photos} />
  )
}

export default page
