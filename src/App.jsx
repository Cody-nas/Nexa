import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Content from "./DashboardPages/Content";
import Templates from "./DashboardPages/Templates";
import Media from "./DashboardPages/Media";
import Tools from "./DashboardPages/Tools";
import Tutorial from "./DashboardPages/Tutorials";
import Comments from "./DashboardPages/Comments";
import Profile from "./DashboardPages/Profile";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

// Component to conditionally render the Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/login",
    "/",
    "/content",
    "/templates",
    "/media",
    "/profile",
  ]; // Add paths where Navbar should be hidden
  return (
    <>
      {!hideNavbarRoutes.some((path) => location.pathname.startsWith(path)) && (
        <Navbar />
      )}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/media" element={<Media />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profile" element={<Profile />} />

          {/* Protected Route */}
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />

          {/* Dashboard Routes
          <Route
            path="/content"
            element={<PrivateRoute element={<Content />} />} */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
