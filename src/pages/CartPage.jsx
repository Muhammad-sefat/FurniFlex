import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/userProvider";
import SingleShopingCart from "./SingleShopingCart";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(UserContext);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const calculatedSubtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [cart]);
  return (
    <div className="md:flex gap-8 text-left md:px-5 mx-auto">
      <div className="md:w-[65%]">
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
            <p className="text-2xl font-semibold">Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xl font-medium">Order Details</p>
        <div className="border bg-gray-100 rounded-md p-5 mt-6 font-semibold space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p> ${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Tax</p>
            <p>$$</p>
          </div>
        </div>
        <div className="my-2 w-full">
          <button className="btn btn-neutral w-full">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
