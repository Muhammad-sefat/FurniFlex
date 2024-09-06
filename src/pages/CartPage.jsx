import React, { useContext } from "react";
import { UserContext } from "../provider/userProvider";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(UserContext);
  return (
    <div className="md:flex gap-6 text-left md:px-5 mx-auto">
      <div className="md:w-[70%]">
        <p className="text-xl font-medium">An Overview of you Order</p>
        {cart.length > 0 ? (
          <table className="mt-6 bg-gray-200 rounded px-6">
            {/* <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead> */}
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img className="w-[20%]" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="flex-1">
        <p className="text-xl font-medium">Order Details</p>
      </div>
    </div>
  );
};

export default CartPage;
