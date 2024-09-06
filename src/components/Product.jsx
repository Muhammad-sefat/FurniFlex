import React, { useContext } from "react";
import { UserContext } from "../provider/userProvider";
import SingleCart from "../pages/SingleCart";

const Product = () => {
  const { products } = useContext(UserContext);
  return (
    <div className="flex gap-5">
      <div className="w-[15%] border-r-2">
        <p>All Chair</p>
        <p>Roking Chair</p>
        <p>Side Chair</p>
        <p>Tounge Chair</p>
      </div>
      <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <SingleCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
