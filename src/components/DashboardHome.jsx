import React from "react";
import Navbar from "./DashboardNavbar";
import HomeContent from "./HomeContent";
const DashboardHome = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HomeContent />
    </div>
  );
};

export default DashboardHome;
