import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Pages - Public
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFoundPage from "./pages/NotFoundPage";
import HowItWorks from "./pages/HowItWorks";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";

// Pages - Customer
import Dashboard from "./pages/customer/Dashboard";
import MyDesigns from "./pages/customer/MyDesigns";
import Library from "./pages/customer/Library";
import Inspiration from "./pages/customer/Inspiration";
import Settings from "./pages/customer/Settings";

function injectStyles() {
  if (document.getElementById("roomio-transitions")) return;

  const styleElement = document.createElement("style");
  styleElement.id = "roomio-transitions";
  styleElement.textContent = `
    @keyframes page-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .rt-fade { animation: page-fade 0.4s ease both; }
  `;

  document.head.appendChild(styleElement);
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <div key={location.pathname} className="rt-fade">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Customer Routes */}
        <Route path="/customer" element={<Navigate to="/customer/dashboard" replace />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/my-designs" element={<MyDesigns />} />
        <Route path="/customer/library" element={<Library />} />
        <Route path="/customer/inspiration" element={<Inspiration />} />
        <Route path="/customer/settings" element={<Settings />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;