import React from "react";
import DashboardNavbar from "./DashboardNavbar";

const DashboardHome = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar component */}
      <DashboardNavbar />

      {/* Dashboard content */}
      <main className="flex-1 p-6 mt-16 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to Nexa admin dashboard</p>
        </div>

        {/* Your dashboard content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p>Your dashboard content will appear here.</p>
          </div>

          {/* More cards can be added here */}
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
