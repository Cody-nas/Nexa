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
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Initialize without window reference
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    // Set initial value inside useEffect to avoid SSR issues
    setIsMobile(window.innerWidth < 768);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    // { name: "Dashboard", path: "/", icon: <FaHome size={22} /> },
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
      path: "/themes",
      icon: <HiOutlineTemplate size={22} />,
    },
    { name: "Media", path: "/media", icon: <MdOutlinePermMedia size={22} /> },
    { name: "Tools", path: "/", icon: <FaTools size={22} /> },
  ];

  return (
    <>
      {/* Toggle Button (Always visible) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 text-white rounded-md focus:outline-none hover:bg-[#087E8B]"
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
        className={`fixed top-0 left-0 h-full bg-[#0A2342] text-white transition-all duration-300 shadow-lg z-30 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="py-6 px-4 flex items-center justify-center">
          {isOpen ? (
            <h1 className="text-2xl font-bold transition-all">Nexa</h1>
          ) : (
            <h1 className="text-2xl font-bold">N</h1>
          )}
        </div>
        <hr className="border-gray-700 mx-3" />

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
                      isActive ? "bg-[#C7FFDA]" : ""
                    }`}
                  >
                    <span>{item.icon}</span>
                    {isOpen && (
                      <span className="whitespace-nowrap overflow-hidden">
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

      {/* Adjust Main Content */}
      <div
        className={`${
          isOpen ? "md:ml-64" : "md:ml-16"
        } transition-all duration-300`}
      />
    </>
  );
};

export default Sidebar;
