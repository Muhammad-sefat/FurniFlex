import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../provider/userProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
