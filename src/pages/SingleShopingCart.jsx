import React from "react";
import { RxCross1 } from "react-icons/rx";

const SingleShopingCart = ({ item, removeFromCart, updateQuantity }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  return (
    <div className="my-2">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="flex items-center ">
            <button
              className="btn bg-white px-3 py-1 border"
              onClick={handleDecrement}
            >
              <span className="text-xl">-</span>
            </button>
            <span className="mx-2">{item.quantity ? item.quantity : 1} </span>
            <button
              className="btn bg-white px-3 py-1 border"
              onClick={handleIncrement}
            >
              <span className="text-xl">+</span>
            </button>
          </div>
          <img className="w-[20%] rounded" src={item.image} alt={item.name} />
          <h1 className="text-base font-medium">{item.name}</h1>
        </div>
        <p
          className="text-xl font-semibold"
          onClick={() => removeFromCart(item.id)}
        >
          <RxCross1 />
        </p>
      </div>
      <p className="text-right text-lg font-semibold">
        ${item.totalPrice ? item.totalPrice.toFixed(2) : item.price.toFixed(2)}
      </p>
      <hr className="my-3 w-full" />
    </div>
  );
};

export default SingleShopingCart;
