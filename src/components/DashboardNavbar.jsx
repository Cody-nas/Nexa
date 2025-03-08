import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <nav className=" bg-gray-800 px-4 py-3 flex justify-between">
      {/* left side */}
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer" />
        <span>Nexa</span>
      </div>
      {/* right side */}
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button>
              <FaSearch />
            </button>
          </span>
          <input type="text" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
