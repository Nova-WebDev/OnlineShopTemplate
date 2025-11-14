import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);


  return (
    <main className="pt-24 pb-32 bg-orange-50 text-right font-sans">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-4 py-3 border border-orange-200">
          <input
            type="text"
            placeholder="جستجوی محصول..."
            className="grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
          <i className="fas fa-search text-orange-500 text-lg"></i>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} {...item}/>
          ))}
        </div>
      </section>
    </main>
  );
};
