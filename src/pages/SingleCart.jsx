import React from "react";

const SingleCart = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[90%] text-left">
        <figure>
          <img
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            src={product.image}
            alt="product"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="font-medium my-1">${product.price}</p>
          <p>{product.description}</p>
          <div className="w-full">
            <button className="btn w-full bg-black text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
