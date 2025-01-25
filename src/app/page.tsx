import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Reels from "@/components/Reels";
import ShopByAge from "@/components/ShopByAge";
import ShopByCategory from "@/components/ShopByCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <Reels />
      <ShopByAge />
      <ShopByCategory />
      <NewArrivals />
    </>
  );
}
