import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const auth = useAuth();

  if (!auth?.isAuthenticated) return <Navigate to={"/login"} />;

  return <Outlet />;
}

export default ProtectedRoutes;
