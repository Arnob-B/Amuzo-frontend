import { useState } from "react";

export default function Filters() {
  const [isAgeOpen, setIsAgeOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  return (
    <div className="bg-[#F48F1B] w-full p-4 flex flex-col gap-6 shadow-lg">
      <h2 className="text-black text-2xl font-bold">Filters</h2>

      {/* Age Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsAgeOpen(!isAgeOpen)}
        >
          <h3 className="text-black text-lg font-semibold">Age</h3>
          <span>{isAgeOpen ? "−" : "+"}</span>
        </div>
        {isAgeOpen && (
          <ul className="space-y-2 mt-2">
            <li className="hover:underline cursor-pointer">below 6m</li>
            <li className="hover:underline cursor-pointer">below 1yr</li>
            <li className="hover:underline cursor-pointer">below 6yr</li>
            <li className="hover:underline cursor-pointer">below 10yr</li>
          </ul>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <h3 className="text-black text-lg font-semibold">Price</h3>
          <span>{isPriceOpen ? "−" : "+"}</span>
        </div>
        {isPriceOpen && (
          <ul className="space-y-2 mt-2">
            <li className="hover:underline cursor-pointer">under $10</li>
            <li className="hover:underline cursor-pointer">$10 - $50</li>
            <li className="hover:underline cursor-pointer">$50 - $100</li>
          </ul>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <h3 className="text-black text-lg font-semibold">Category</h3>
          <span>{isCategoryOpen ? "−" : "+"}</span>
        </div>
        {isCategoryOpen && (
          <ul className="space-y-2 mt-2">
            <li className="hover:underline cursor-pointer">Toys</li>
            <li className="hover:underline cursor-pointer">Games</li>
            <li className="hover:underline cursor-pointer">Books</li>
          </ul>
        )}
      </div>
    </div>
  );
}
