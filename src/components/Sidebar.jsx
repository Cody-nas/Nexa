import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Handle clicks outside dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#0A2342] px-4 py-3 flex justify-between items-center shadow-md fixed top-0 right-0 left-0 z-10">
      {/* Left side - Title */}
      <div className="text-white font-bold text-xl">
        <span>Nexa Dashboard</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:block"
          />
          <button className="p-2 rounded-full hover:bg-blue-800 text-white md:hidden">
            <FaSearch />
          </button>
        </div>

        <div className="text-white cursor-pointer">
          <button className="relative p-2 rounded-full hover:bg-blue-800">
            <FaBell className="w-5 h-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-white p-2 rounded-full hover:bg-blue-800 focus:outline-none"
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
