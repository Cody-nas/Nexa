import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ContentPage from "../components/ContentPage";
const Content = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <ContentPage />
    </div>
  );
};

export default Content;
