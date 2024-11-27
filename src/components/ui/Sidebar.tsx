import { Home, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
  onClick?: () => void;
}

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname);

  const sidebarItems: SidebarItem[] = [
    {
      icon: Home,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Calendar,
      label: "Timetable",
      href: "/timetable",
    },
    // {
    //   icon: BookOpen,
    //   label: "Courses",
    //   href: "/courses",
    // },
  ];

  return (
    <div className={` bg-white border-r shadow-md h-screen w-64`}>
      <nav className="mt-4">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.href}
            key={index}
            className={`
              flex items-center p-3 cursor-pointer 
              ${
                pathname.startsWith(item.href)
                  ? "bg-red-500 text-red-50"
                  : "hover:bg-gray-100"
              }
              transition-colors duration-200
            `}
          >
            <item.icon className="mr-4" size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
