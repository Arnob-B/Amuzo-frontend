import { Search } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

function Navbar() {

  return (
    <>
      <nav className="flex justify-between items-center font-shortStack text-white p-5 bg-[#F48F1B]">
        <Image src={"/amuzologo.png"} alt="Amuzo Logo" height={200} width={200} />
        <div className="flex gap-x-6 col-span-3 items-center">
          <Link href={"/"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Home</Link>
          <Link href={"/#age"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Age</Link>
          <Link href={"/#category"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Category</Link>
          <Link href={"/#contact"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Contact Us</Link>
        </div>
        <form className="flex items-center gap-x-1">
          <input type="text" className="bg-white px-2 py-1 rounded-sm outline-none placeholder:text-gray-600 text-black" placeholder="Search" />
          <button type="submit"><Search className="hover:text-orange-300 transition-colors duration-150" /></button>
        </form>
      </nav >
    </>
  )
}

export default Navbar;
