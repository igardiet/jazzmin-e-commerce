import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { CHECKOUT } from "./paths";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={CHECKOUT} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
