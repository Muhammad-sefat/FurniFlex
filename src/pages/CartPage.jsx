import React, { useContext } from "react";
import { UserContext } from "../provider/userProvider";
import SingleShopingCart from "./SingleShopingCart";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(UserContext);
  return (
    <div className="md:flex gap-6 text-left md:px-5 mx-auto">
      <div className="md:w-[70%]">
        <p className="text-xl font-medium">An Overview of you Order</p>

        <div className="my-6 bg-gray-100 rounded p-5">
          {cart.length > 0 ? (
            cart.map((item) => (
              <SingleShopingCart
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xl font-medium">Order Details</p>
      </div>
    </div>
  );
};

export default CartPage;
