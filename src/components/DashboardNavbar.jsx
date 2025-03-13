import React, { useState, useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

const DashboardHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar component with proper props */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : isMobile ? "ml-0" : "md:ml-16"
        }`}
      >
        {/* Navbar component with sidebar state prop */}
        <DashboardNavbar isSidebarOpen={sidebarOpen} />

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
    </div>
  );
};

export default DashboardHome;
