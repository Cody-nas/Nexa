import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Nexa
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/platform" className="text-[#12285f] hover:text-blue-600">
              Platform
            </Link>
            <Link
              to="/solutions"
              className="text-[#12285f] hover:text-blue-600"
            >
              Solutions
            </Link>
            <Link to="/develop" className="text-[#12285f] hover:text-blue-600">
              Develop
            </Link>
            <Link to="/download" className="text-[#12285f] hover:text-blue-600">
              Download
            </Link>
            <Link to="/support" className="text-[#12285f] hover:text-blue-600">
              Get Support
            </Link>
            <Link to="/connect" className="text-[#12285f] hover:text-blue-600">
              Connect
            </Link>
            <Link
              to="/support-drupal"
              className="text-[#12285f] hover:text-blue-600"
            >
              Support Nexa
            </Link>

            {/* User Icon */}
            <Link to={"/login"}>
              <FaRegUser className="text-[#12285f] rounded-full  cursor-pointer hover:text-blue-600" />
            </Link>
            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
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
          } lg:hidden mt-4 space-y-2`}
        >
          <Link
            to="/platform"
            className="block text-gray-800 hover:text-blue-600"
          >
            Platform
          </Link>
          <Link
            to="/solutions"
            className="block text-gray-800 hover:text-blue-600"
          >
            Solutions
          </Link>
          <Link
            to="/develop"
            className="block text-gray-800 hover:text-blue-600"
          >
            Develop
          </Link>
          <Link
            to="/download"
            className="block text-gray-800 hover:text-blue-600"
          >
            Download
          </Link>
          <Link
            to="/support"
            className="block text-gray-800 hover:text-blue-600"
          >
            Get Support
          </Link>
          <Link
            to="/connect"
            className="block text-gray-800 hover:text-blue-600"
          >
            Connect
          </Link>
          <Link
            to="/support-drupal"
            className="block text-gray-800 hover:text-blue-600"
          >
            Support Drupal
          </Link>
          <Link
            to="/get-started"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
