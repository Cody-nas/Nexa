import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <ProfileContent />
    </div>
  );
};

export default Profile;
