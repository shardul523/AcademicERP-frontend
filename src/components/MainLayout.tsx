import { Outlet } from "react-router";
import Navbar from "./ui/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
