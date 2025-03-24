import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineTemplate } from "react-icons/hi";
import {
  MdOutlineMessage,
  MdContentCopy,
  MdOutlinePermMedia,
} from "react-icons/md";
import { TiMediaFastForward } from "react-icons/ti";
import { FaTools } from "react-icons/fa";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Default closed on mobile
  const [isMobile, setIsMobile] = useState(false); // Track screen size
  const location = useLocation();

  // Handle screen resize and set initial state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Open by default on large screens, closed on mobile
    };

    // Set initial value
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Navigation items
  const navItems = [
    { name: "Content", path: "/content", icon: <MdContentCopy size={22} /> },
    {
      name: "Tutorial",
      path: "/tutorial",
      icon: <TiMediaFastForward size={22} />,
    },
    {
      name: "Comments",
      path: "/comments",
      icon: <MdOutlineMessage size={22} />,
    },
    {
      name: "Templates & Themes",
      path: "/templates",
      icon: <HiOutlineTemplate size={22} />,
    },
    { name: "Media", path: "/media", icon: <MdOutlinePermMedia size={22} /> },
    { name: "Tools", path: "/tools", icon: <FaTools size={22} /> },
  ];

  return (
    <>
      {/* Toggle Button (Visible on all screens) */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 text-white rounded-md focus:outline-none hover:bg-[#087E8B] transition-colors duration-200 ${
          isOpen && isMobile ? "left-60" : "left-4"
        }`}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <GoSidebarCollapse size={24} />
        ) : (
          <GoSidebarExpand size={24} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0A2342] text-white transition-all duration-300 shadow-lg z-40 ${
          isOpen ? "w-64" : "w-16"
        } ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* Logo */}
        <div className="py-6 px-4 flex items-center justify-center">
          {isOpen ? (
            <Link
              to="/
            "
            >
              <h1 className="text-2xl font-bold transition-all">Nexa</h1>
            </Link>
          ) : (
            <h1 className="text-2xl font-bold"></h1>
          )}
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="mt-6 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`mb-2 rounded-md hover:bg-[#087E8B] transition-colors duration-200 py-3 px-3 flex items-center gap-3 ${
                      isActive ? "bg-[#C7FFDA] text-black" : ""
                    }`}
                  >
                    <span>{item.icon}</span>
                    {isOpen && (
                      <span className="whitespace-nowrap overflow-hidden text-sm">
                        {item.name}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {/* {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )} */}

      {/* Adjust Main Content Margin */}
      <div
        className={`${
          isOpen && !isMobile ? "lg:ml-64" : "lg:ml-16"
        } transition-all duration-300`}
      />
    </>
  );
};

export default Sidebar;
