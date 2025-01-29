'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import productList from "./productList"
import { useParams } from 'next/navigation';

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

  return (
    <div className="font-shortStack bg-[#FFC600] flex flex-col md:flex-row gap-y-8 justify-center items-start p-8">
      <div className='flex flex-row md:flex-col gap-3 px-4'>
        {photos.map((photoSrc, ind) => <Image key={ind} src={photoSrc} alt='Product Image' height={150} width={150} className='rounded-lg w-1/3 sm:w-auto' onClick={() => setCurrentImage(photos[ind])} />)}
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={currentImage}
          alt={name}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="md:w-1/2 px-4 md:pl-8">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-gray-500 mb-4">Rs. {price}</p>
        <p className="mb-4">{description}</p>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Buy Now
        </button>
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
