import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
// import Profile from "../pages/dashboard/Profile";
// import Settings from "../pages/dashboard/Settings";
// import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
