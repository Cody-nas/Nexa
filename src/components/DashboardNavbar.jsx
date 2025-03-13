import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const DashboardNavbar = ({ isSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize without window reference
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Set initial value inside useEffect to avoid SSR issues
    setIsMobile(window.innerWidth < 768);

    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkScreenSize);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-[#0A2342] px-4 py-3 flex justify-between items-center shadow-md fixed top-0 right-0 z-10 transition-all duration-300 ${
        isMobile ? "left-0" : isSidebarOpen ? "left-64" : "left-16"
      }`}
      style={{
        width: isMobile
          ? "100%"
          : isSidebarOpen
          ? "calc(100% - 16rem)"
          : "calc(100% - 4rem)",
      }}
    >
      {/* Left Side - Title */}
      {(isMobile || !isSidebarOpen) && (
        <div className="text-white font-bold text-xl ml-12 md:ml-0">
          {!isMobile && <span>Nexa Dashboard</span>}
        </div>
      )}

      {/* Right Side */}
      <div className="flex items-center gap-x-5 ml-auto">
        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 pl-10 rounded-lg shadow bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Search Button */}
        <button
          className="p-2 rounded-full hover:bg-[#087E8B] text-white md:hidden"
          aria-label="Search"
        >
          <FaSearch />
        </button>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-full hover:bg-[#087E8B] text-white"
          aria-label="Notifications"
        >
          <FaBell className="w-5 h-5" />
          <span
            className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"
            aria-label="New notification"
          ></span>
        </button>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-white p-2 rounded-full hover:bg-[#087E8B] focus:outline-none"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            aria-label="User menu"
          >
            <FaUserCircle className="w-6 h-6" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                <div className="font-medium">James Wilson</div>
                <div className="truncate">james@example.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
