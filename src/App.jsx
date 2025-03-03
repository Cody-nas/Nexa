import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Platform from "./pages/Platform";
// import Solutions from "./pages/Solutions";
// import Develop from "./pages/Develop";
// import Download from "./pages/Download";
// import Support from "./pages/Support";
// import Connect from "./pages/Connect";
// import SupportDrupal from "./pages/SupportDrupal";
// import GetStarted from "./pages/GetStarted";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/support-drupal" element={<SupportDrupal />} />
        <Route path="/get-started" element={<GetStarted />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
