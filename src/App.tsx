import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ImpactInsights from "./components/ImpactInsights";
import SignInPage from "./Auth/SignInPage";
import SignUpPage from "./Auth/SignUpPage";
import WelcomeScreen from "./components/WelcomeScreen";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWelcome, setIsWelcome] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on app load
    const checkAuthentication = async () => {
      const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
      const isWelcome = await AsyncStorage.getItem("isStarted");

      if (isWelcome === "true" && isAuthenticated === "true") {
        setIsWelcome(true);
        setIsAuthenticated(true); // Set to true if authenticated
      } else if (isWelcome === "true" && isAuthenticated !== "true") {
        setIsWelcome(true);
        setIsAuthenticated(false); // User has passed welcome, but not logged in
      } else {
        setIsWelcome(false); // User hasn't started yet
        setIsAuthenticated(false); // Not authenticated
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {!isWelcome ? (
          <WelcomeScreen onStart={() => setIsWelcome(true)} />
        ) : (
          <>
            {isAuthenticated ? (
              <div className="flex flex-row">
                <div className=" w-1/5 h-1/6 text-white">
                  <Sidebar />
                </div>
                <div className="flex-grow p-3">
                  <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/impact-insights" element={<ImpactInsights />} />
                    <Route path="*" element={<Navigate to="/Dashboard" />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-screen">
                <Routes>
                  <Route path="/" element={<SignInPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            )}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
