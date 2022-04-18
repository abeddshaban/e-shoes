import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ authenticated, children }) => {
  if (!authenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children ? children : <Outlet />;
};
