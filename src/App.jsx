import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
// import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
// import { useAuth } from "./context/AuthContext"; // Ensure you have AuthContext

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

// Component to conditionally render the Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/dashboard"]; // Add paths where Navbar should be hidden
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
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
