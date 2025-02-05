'use client';
import { MenuIcon, Search, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import React, { useState } from "react";

function LargeNavbar() {
  return (
    <nav className="justify-between items-center font-shortStack p-5 hidden md:flex">
      <Image src={"/amuzologo.png"} alt="Amuzo Logo" height={200} width={200} />
      <div className="flex gap-x-6 col-span-3 items-center">
        <Link href={"/"} className="py-1 px-4 rounded-[2px] hover:text-pink transition-colors duration-300">Home</Link>
        <Link href={"/#age"} className="py-1 px-4 rounded-[2px] hover:text-pink transition-colors duration-300">Age</Link>
        <Link href={"/#category"} className="py-1 px-4 rounded-[2px] hover:text-pink transition-colors duration-300">Category</Link>
        <Link href={"/#contact"} className="py-1 px-4 rounded-[2px] hover:text-pink transition-colors duration-300">Contact Us</Link>
      </div>
      <form className="flex items-center gap-x-1 p-2 rounded-md bg-gray-200">
        <input type="text" className="bg-gray-200 px-2 py-1 rounded-sm outline-none placeholder:text-gray-600 text-black" placeholder="Search" />
        <button type="submit"><Search className="hover:text-orange-300 transition-colors duration-150" /></button>
      </form>
    </nav>
  );
}

function SmallNavbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden font-shortStack w-full flex justify-between items-center p-4">
      <Link href="/">
        <Image
          src="/amuzologo.png"
          alt="DoubleSlash 3.0 Logo"
          width={300}
          height={100}
          className="h-16 w-auto"
        />
      </Link>
      <div className="text-2xl" onClick={() => {
        setNavOpen(true);
      }}>
        <MenuIcon />
      </div>

      <nav
        className={`bg-white transition-all duration-700 p-6 fixed flex flex-col items-center gap-y-12 top-0 right-0 left-20 bottom-0 shadow-2xl shadow-hray-800/60 z-50 ${navOpen ? `left-[20%]` : `left-[120%]`
          }`}>
        <button onClick={() => setNavOpen(false)} className="self-end text-3xl">
          <X />
        </button>
        <Image
          src="/amuzologo.png"
          alt="DoubleSlash 3.0 Logo"
          width={300}
          height={100}
          className="h-24 w-auto"
        />
        <ul className="flex flex-col gap-y-4 text-center text-xl font-medium">
          <Link href={"/"} className="hover:text-pink transition-colors duration-150 py-1 px-4 rounded-[2px]">Home</Link>
          <Link href={"/#age"} className="hover:text-pink transition-colors duration-150 py-1 px-4 rounded-[2px]">Age</Link>
          <Link href={"/#category"} className="hover:text-pink transition-colors duration-150 py-1 px-4 rounded-[2px]">Category</Link>
          <Link href={"/#contact"} className="hover:text-pink transition-colors duration-150 py-1 px-4 rounded-[2px]">Contact Us</Link>
        </ul>
      </nav>
    </div>
  );
}

function Navbar() {

  return (
    <>
      <LargeNavbar />
      <SmallNavbar />
    </>
  )
}

export default Navbar;
