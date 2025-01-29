'use client';
import { MenuIcon, Search, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import React, { useState } from "react";

function LargeNavbar() {
  return (
    <nav className="justify-between items-center font-shortStack text-white p-5 bg-[#F48F1B] hidden md:flex">
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
    </nav>
  );
}

function SmallNavbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden font-shortStack w-full flex justify-between items-center p-4 bg-[#F48F1B]">
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
        className={`bg-[#F48F1B] transition-all duration-150 p-6 fixed flex-col items-center gap-y-12 top-0 right-0 left-20 bottom-0 shadow-2xl shadow-hray-800/60 z-50 ${navOpen ? `flex` : `hidden opacity-0`
          }`}>
        <button onClick={() => setNavOpen(false)} className="self-end text-3xl">
          <X />
        </button>
        <Image
          src="/amuzologo.png"
          alt="DoubleSlash 3.0 Logo"
          width={300}
          height={100}
          className="h-32 w-auto"
        />
        <ul className="flex flex-col gap-y-4 text-center text-xl font-medium">
          <Link href={"/"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Home</Link>
          <Link href={"/#age"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Age</Link>
          <Link href={"/#category"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Category</Link>
          <Link href={"/#contact"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Contact Us</Link>
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
