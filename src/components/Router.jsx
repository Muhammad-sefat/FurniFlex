import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "./Product";
import Home from "./Home";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default router;
