import data, { productType } from "../data";


const ProductCard = ({
  images,
  currentPrice,
  category,
  name,
  description,
}: {
  images: Array<string>,
  currentPrice: number,
  category: string,
  name: string,
  description: string,

}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-72 m-4">
      <img src={images[0]} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-gray-700 mt-2">{description}</p>
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

export default function Page({ searchParams }: {
  searchParams: {
    category?: string,
    price?: string,
    age?: string
  }
}) {
  const category = searchParams.category;
  const price = searchParams.price;
  const age = searchParams.age;
  return (
    <div>
      {data.filter((e: productType) => {
        if (category && category != e.category) return false;
        if (age && parseInt(age) > e.age) return false;
        if (price && parseInt(price) < e.currentPrice) return false;
        return true;
      }).map(
        e => {
          return (
            <div>
              <ProductCard
                images={e.images}
                currentPrice={e.currentPrice}
                category={e.category}
                name={e.name}
                description={e.description}
              />
            </div>
          )
        }
      )}
    </div>
  )
}
