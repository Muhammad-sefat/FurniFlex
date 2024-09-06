import React, { useContext, useState } from "react";
import { UserContext } from "../provider/userProvider";
import SingleCart from "../pages/SingleCart";

const Product = () => {
  const { products } = useContext(UserContext);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="flex gap-5">
      <div className="w-[15%] border-r-2 text-left  space-y-2">
        <p
          className={`cursor-pointer ${
            activeCategory === "All"
              ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
              : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All Chairs
        </p>
        <p
          className={`cursor-pointer ${
            activeCategory === "Rocking Chair"
              ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
              : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
          }`}
          onClick={() => setActiveCategory("Rocking Chair")}
        >
          Rocking Chair
        </p>
        <p
          className={`cursor-pointer ${
            activeCategory === "Side Chair"
              ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
              : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
          }`}
          onClick={() => setActiveCategory("Side Chair")}
        >
          Side Chair
        </p>
        <p
          className={`cursor-pointer ${
            activeCategory === "Lounge Chair"
              ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
              : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
          }`}
          onClick={() => setActiveCategory("Lounge Chair")}
        >
          Lounge Chair
        </p>
      </div>
      <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((product, index) => (
          <SingleCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
