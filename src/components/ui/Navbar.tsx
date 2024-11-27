import { useAuth } from "@/context/AuthContext";
import { Button } from "./button";
import { logoutUser } from "@/lib/apiService";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav
      className={`bg-black shadow-md p-4 flex text-center text-white font-bold text-3xl ${
        auth?.isAuthenticated ? "justify-between" : "justify-center"
      }`}
    >
      <div>
        <span className="text-red-700">A</span>cademia
      </div>
      {auth?.isAuthenticated && (
        <Button
          onClick={() => {
            logoutUser();
            auth.setIsAuthenticated(false);
          }}
          className="bg-red-700 text-white font-semibold hover:bg-red-500"
        >
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
