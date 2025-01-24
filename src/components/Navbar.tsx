import Image from "next/image"
import Link from "next/link";

function Navbar() {

  return (
    <>
      <nav className="flex justify-between items-center font-shortStack text-white p-5 bg-[#F48F1B]">
        <Image src={"/amuzologo.png"} alt="Amuzo Logo" height={200} width={200} />
        <div className="flex gap-x-6 col-span-3 items-center">
          <Link href={"/"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Home</Link>
          <button className="bg-yellow-500 py-1 px-4 rounded-[2px]">Age</button>
          <button className="bg-yellow-500 py-1 px-4 rounded-[2px]">Category</button>
          <Link href={"/#contact"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Contact Us</Link>
          <Link href={"/blogs"} className="bg-yellow-500 py-1 px-4 rounded-[2px]">Blogs</Link>
        </div>
      </nav >
    </>
  )
}

export default Navbar;
