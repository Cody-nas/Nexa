import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Platform from "./pages/Platform";
// import Solutions from "./pages/Solutions";
// import Develop from "./pages/Develop";
// import Download from "./pages/Download";
// import Support from "./pages/Support";
// import Connect from "./pages/Connect";
// import SupportDrupal from "./pages/SupportDrupal";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        {/* <Route path="/develop" element={<Develop />} /> */}
        {/* <Route path="/download" element={<Download />} /> */}
        {/* <Route path="/support" element={<Support />} /> */}
        {/* <Route path="/connect" element={<Connect />} /> */}
        {/* <Route path="/support-drupal" element={<SupportDrupal />} /> */}

        {/* protected route - only logged- in users can access */}
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
