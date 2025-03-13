import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaComment,
  FaPaintBrush,
  FaPhotoVideo,
  FaGraduationCap,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome size={22} className="" />,
    },
    { name: "Content", path: "/content", icon: <FaBook size={22} /> },
    {
      name: "Tutorial",
      path: "/tutorial",
      icon: <FaGraduationCap size={22} />,
    },
    { name: "Comments", path: "/comments", icon: <FaComment size={22} /> },
    {
      name: "Templates & Themes",
      path: "/themes",
      icon: <FaPaintBrush size={22} />,
    },
    { name: "Media", path: "/media", icon: <FaPhotoVideo size={22} /> },
  ];

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {/* {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )} */}

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden focus:outline-none hover:bg-gray-700"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0A2342] text-white font-bold transition-all duration-300 shadow-lg z-30 ${
          isOpen ? "w-64" : isMobile ? "w-0" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="py-6 px-4 flex items-center justify-center">
          {isOpen ? (
            <h1 className="text-2xl font-bold">Nexa</h1>
          ) : (
            !isMobile && <h1 className="text-2xl font-bold">N</h1>
          )}
        </div>
        <hr className="border-gray-700 mx-3" />

        {/* Navigation Links */}
        <ul className="mt-6 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`mb-2 rounded-md hover:bg-blue-600 transition-colors duration-200 py-3 px-3 flex items-center gap-3 ${
                    isActive ? "bg-blue-700" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  {(isOpen || !isMobile) && (
                    <span
                      className={`${
                        isOpen ? "opacity-100" : "opacity-0 w-0"
                      } transition-all duration-300 whitespace-nowrap overflow-hidden`}
                    >
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main content spacer */}
      <div
        className={`${
          isOpen ? "md:ml-64" : "md:ml-16"
        } transition-all duration-300`}
      />
    </>
  );
};

export default Sidebar;
