import amuzoLogo from "@/../public/amuzologo.png"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function SortByAge() {
  return (
    <div className="w-52 h-28 overflow-scroll">
      <p>sort by age</p>
      <ul>
        <button>below 2</button>
      </ul>
      <ul>
        <button>below 2</button>
      </ul>
      <ul>
        <button>below 2</button>
      </ul>
      <ul>
        <button>below 2</button>
      </ul>

    </div>
  )
}

export default function Navbar() {
  return (
    <div className="grid grid-cols-4 bg-[#F48F1B] p-2">
      <Image
        className="col-span-1"
        src="/../../public/amuzologo.png"
        alt="amuzo logo"
        width={100}
        height={100}
      >
      </Image>
      <NavigationMenu className="h-auto border-2 border-blue-400 col-span-3">
        <NavigationMenuList className="p-2 border-red-400 border-2 flex w-full  justify-normal">
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-400 transition">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-400 transition">Age</NavigationMenuLink>
            <NavigationMenuContent>
              <SortByAge></SortByAge>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-400 transition">Category</NavigationMenuLink>
            <NavigationMenuContent>
              <SortByAge></SortByAge>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-400 transition">Blog</NavigationMenuLink>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-400 transition">Contact</NavigationMenuLink>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div >
  )
}
