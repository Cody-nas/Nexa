import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "../components/DashboardHome";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
};

export default Dashboard;
