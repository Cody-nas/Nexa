import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import MediaComponent from "../components/MediaComponent";

const Media = () => {
  return (
    <div className="f;ex flex-col h-screen">
      <DashboardNavbar />
      <Sidebar />
      <div className="flex-1 lg:pt-0 pt-16">
        <MediaComponent />
      </div>
    </div>
  );
};

export default Media;
