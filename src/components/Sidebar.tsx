import React, { useEffect, useState } from "react";
import { Layout, LineChart, LogOut, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [, setHoveredLink] = useState<string>("");

  const [email, setEmail] = useState<string>("Guest User");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-2 left-2 z-50 bg-purple-600 text-white p-2 rounded-md border-2 border-white hover:bg-purple-700 transition-colors"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Main Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen bg-yellow-300 p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-56 z-40 border-r border-gray-700`}
      >
        {/* Title Section */}
        <div className="text-xl text-yellow-300 mt-1 font-bold mb-6 tracking-wider text-center">
          <div className="p-3  text-black rounded-md">ART FINDER</div>
        </div>

        {/* Profile Section */}
        <div className="mb-4"> 
      <div className="p-4 bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all -rotate-2"> 
        <h2 className="text-lg font-black text-black truncate hover:scale-105 transition-transform"> 
          {email} 
        </h2> 
        <p className="text-base font-bold text-black mt-2">Welcome back!</p> 
      </div> 
    </div>

        {/* Navigation Section */}
        <nav className="space-y-4">
          <Link
           to="/impact-insights"
           className={`flex items-center gap-3 px-4 py-3 border-4 border-black transition-all ${
             location.pathname === "/impact-insights"
               ? "bg-pink-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
               : "bg-white hover:bg-pink-400 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
           }`}
            onMouseEnter={() => setHoveredLink("/Dashboard")}
            onMouseLeave={() => setHoveredLink("")}
          >
            <Layout size={20} className="text-black" />
            <span className="font-bold text-black">Dashboard</span>
          </Link>

          <Link
            to="/impact-insights"
            className={`flex items-center gap-3 px-4 py-3 border-4 border-black transition-all ${
              location.pathname === "/impact-insights"
                ? "bg-pink-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                : "bg-white hover:bg-pink-400 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            }`}
            onMouseEnter={() => setHoveredLink("/impact-insights")}
            onMouseLeave={() => setHoveredLink("")}
          >
            <LineChart size={20} className="text-black" />
            <span className="font-bold text-black">Impact Insights</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full bg-white text-black border-4 border-black hover:bg-red-500 transition-all rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <LogOut size={20} />
            <span className="font-bold">Logout</span>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
