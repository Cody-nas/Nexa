import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import MediaComponent from "../components/MediaComponent";

const Media = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <MediaComponent />
    </div>
  );
};

export default Media;
