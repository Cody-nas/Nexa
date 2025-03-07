import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className=" text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />

      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Dashboard
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Content
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Tutorial
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Comments
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Template & Themes
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            {/* img */}
            Media
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
