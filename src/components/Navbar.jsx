import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0A2342] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#C7FFDA]">
            Nexa
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link
              to="/platform"
              className="text-[#C7FFDA] hover:text-[#087E8B]"
            >
              Platform
            </Link>
            <Link
              to="/solutions"
              className="text-[#C7FFDA] hover:text-[#087E8B]"
            >
              Solutions
            </Link>
            <Link to="/develop" className="text-[#C7FFDA] hover:text-[#087E8B]">
              Develop
            </Link>
            <Link
              to="/download"
              className="text-[#C7FFDA] hover:text-[#087E8B]"
            >
              Download
            </Link>
            <Link to="/support" className="text-[#C7FFDA] hover:text-[#087E8B]">
              Get Support
            </Link>
            <Link to="/connect" className="text-[#C7FFDA] hover:text-[#087E8B]">
              Connect
            </Link>
            <Link className="text-[#C7FFDA] hover:text-[#087E8B]">
              Support Nexa
            </Link>

            {/* User Icon */}
            <Link to={"/login"}>
              <FaRegUser className="text-[#C7FFDA] rounded-full  cursor-pointer hover:text-[#087E8B]" />
            </Link>
            <Link
              to="/get-started"
              className="bg-[#087E8B] text-white px-4 py-2 rounded-md hover:bg-[#C7FFDA] hover:text-black"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#C7FFDA] focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden mt-4 flex flex-col items-center justify-center space-y-6`}
        >
          <Link
            to="/platform"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Platform
          </Link>
          <Link
            to="/solutions"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Solutions
          </Link>
          <Link
            to="/develop"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Develop
          </Link>
          <Link
            to="/download"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Download
          </Link>
          <Link
            to="/support"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Get Support
          </Link>
          <Link
            to="/connect"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Connect
          </Link>
          <Link
            to="/support-nexa"
            className="block text-[#C7FFDA] hover:text-[#087E8B]"
          >
            Support Nexa
          </Link>
          <Link
            to="/get-started"
            className="bg-[#087E8B] text-white px-6 py-3 rounded-md hover:bg-[#C7FFDA] hover:text-black"
          >
            Get Started
          </Link>

          {/* Close Button */}
          <button
            className="text-[#C7FFDA] text-lg hover:text-[#087E8B] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✖
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
