import React, { useState } from "react";
import { Layout, LineChart, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation for navigation and getting current route

const Sidebar: React.FC = () => {
  const location = useLocation(); // Get current route
  const [hoveredLink, setHoveredLink] = useState<string>(""); // Manage hover state for animation

  return (
    <div className="w-64 bg-black text-white min-h-screen p-6 fixed left-0 top-0 right-0">
      {/* Title of Sidebar */}
      <div className="text-2xl font-black mb-12 bg-yellow-400 text-black p-2 text-center">
        ART FINDER
      </div>

      {/* Navigation Links */}
      <nav className="space-y-6">
        <Link
          to="/Dashboard"
          className={`flex items-center gap-2 text-lg transition-all ${
            location.pathname === "/Dashboard" || location.pathname === "/" 
              ? "text-yellow-400" 
              : "hover:text-yellow-400"
          } ${hoveredLink === "/Dashboard" ? "bg-gray-700" : ""}`}
          onMouseEnter={() => setHoveredLink("/Dashboard")}
          onMouseLeave={() => setHoveredLink("")}
        >
          <Layout /> Dashboard
        </Link>
        <Link
          to="/impact-insights"
          className={`flex items-center gap-2 text-lg transition-all ${
            location.pathname === "/impact-insights" ? "text-yellow-400" : "hover:text-yellow-400"
          } ${hoveredLink === "/impact-insights" ? "bg-gray-700" : ""}`}
          onMouseEnter={() => setHoveredLink("/impact-insights")}
          onMouseLeave={() => setHoveredLink("")}
        >
          <LineChart /> Impact Insights
        </Link>
        <a
          href="#"
          className={`flex items-center gap-2 text-lg transition-all ${
            hoveredLink === "community" ? "bg-gray-700" : "hover:text-yellow-400"
          }`}
          onMouseEnter={() => setHoveredLink("community")}
          onMouseLeave={() => setHoveredLink("")}
        >
          <Users /> Community
        </a>
        <a
          href="#"
          className={`flex items-center gap-2 text-lg transition-all ${
            hoveredLink === "settings" ? "bg-gray-700" : "hover:text-yellow-400"
          }`}
          onMouseEnter={() => setHoveredLink("settings")}
          onMouseLeave={() => setHoveredLink("")}
        >
          <Settings /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
