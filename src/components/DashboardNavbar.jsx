import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <nav className=" bg-gray-800 px-4 py-3 flex justify-between ml-64">
      {/* left side */}
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer" />
        <span className="text-white font-semibold">Nexa</span>
      </div>
      {/* right side */}
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>

        <div className="text-white cursor-pointer">
          <FaBell className="w-6 h-6" />
        </div>

        <div className="relative">
          <button className="text-white group cursor-pointer">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0 ">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
