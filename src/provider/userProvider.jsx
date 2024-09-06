// UserContext.js
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/data/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("logout success");
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      Swal.fire({
        icon: "warning",
        title: "Product already in cart",
        text: "This product is already added to your cart.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      Swal.fire({
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const removeFromCart = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        Swal.fire({
          title: "Deleted!",
          text: "The item has been removed from your cart.",
          icon: "success",
        });
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) quantity = 1;

    const updatedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity,
            totalPrice: product.price * quantity,
          }
        : product
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
