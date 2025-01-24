import Caraousel from "@/components/Caraousel";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <>
      <Caraousel />
      <div className="bg-black" >
        <div className="text-white text-4xl font-bold text-shadow" >
          Shop With Reels
        </div>
      </div>
      <NewArrivals />
    </>
  );
}
