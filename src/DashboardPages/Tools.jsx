import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ToolsContent from "../components/ToolsContent";

const Tools = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <ToolsContent />
    </div>
  );
};

export default Tools;
