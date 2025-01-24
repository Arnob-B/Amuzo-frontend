"use client"
import { useSearchParams } from "next/navigation";
import data, { productType } from "../data";

import Filters from "./Filter";


const ProductCard = ({
  images,
  currentPrice,
  name,
}: {
  images: Array<string>,
  currentPrice: number,
  name: string,

}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full m-4">
      <img src={images[0]} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg font-bold text-gray-800 mt-2">${currentPrice}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
          View Details
        </button>
        <button className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const price = searchParams.get('price');
  const age = searchParams.get('age');
  return (
    <div>
      <div className="flex bg-orange-300 min-h-screen">
        {/* Sidebar Filters */}
        <div className="w-1/3 md:1/4 lg:w-1/6">
          <Filters />
        </div>
        {/* Main Content */}
        <div className="w-2/3 md:3/4 lg:w-5/6 p-2 md:p-4 lg:p-6 border-2 border-black">
          <h1 className="text-3xl font-bold mb-4">Product Listings</h1>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pr-4">
            {data.filter((e: productType) => {
              if (category && category != e.category) return false;
              if (age && parseInt(age) < e.age) return false; // age smaller than the param age will be discarded
              if (price && parseInt(price) < e.currentPrice) return false; // price above the param price will be discarded
              return true;
            }).map(
              e => {
                return (
                  <div>
                    <ProductCard
                      images={e.images}
                      currentPrice={e.currentPrice}
                      name={e.name}
                    />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
