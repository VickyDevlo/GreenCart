import React from "react";
import ProductCard from "../card/ProductCard";
import { useAppContext } from "../../context/appContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium text-gray-700">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
