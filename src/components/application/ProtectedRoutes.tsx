import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";

function ProtectedRoutes() {
  const auth = useAuth();

  if (!auth?.isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoutes;
