import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className=" text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <nav className="mt-3"></nav>
    </div>
  );
};

export default Sidebar;
