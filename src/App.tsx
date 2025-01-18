import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Make sure the Sidebar is imported
import Dashboard from "./components/Dashboard";
import ImpactInsights from "./components/ImpactInsights";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <div className="ml-64 p-8 w-full"> {/* Ensure content is not overlapping with the sidebar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/impact-insights" element={<ImpactInsights />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
