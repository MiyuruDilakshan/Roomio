import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Pages - Public
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFoundPage from "./pages/NotFoundPage";
import HowItWorks from "./pages/HowItWorks";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactPage from "./pages/ContactPage";

// Pages - Customer
import Dashboard from "./pages/customer/Dashboard";
import MyDesigns from "./pages/customer/MyDesigns";
import Library from "./pages/customer/Library";
import Inspiration from "./pages/customer/Inspiration";
import Settings from "./pages/customer/Settings";

// Pages - Designer
import DesignerDashboard from "./pages/designer/dashboard";
import DesignerPortfolio from "./pages/designer/portfolio";
import DesignerLibrary from "./pages/designer/library";
import DesignerInspiration from "./pages/designer/inspiration";
import DesignerSettings from "./pages/designer/settings";
import DesignerClients from "./pages/designer/clients";

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isDashboardRoute = location.pathname.startsWith('/designer') || location.pathname.startsWith('/customer');

  return (
    <div key={isDashboardRoute ? 'dashboard' : location.pathname} className={isDashboardRoute ? "" : "rt-fade"}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

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

        {/* Designer Routes */}
        <Route path="/designer" element={<Navigate to="/designer/dashboard" replace />} />
        <Route path="/designer/dashboard" element={<DesignerDashboard />} />
        <Route path="/designer/portfolio" element={<DesignerPortfolio />} />
        <Route path="/designer/library" element={<DesignerLibrary />} />
        <Route path="/designer/inspiration" element={<DesignerInspiration />} />
        <Route path="/designer/clients" element={<DesignerClients />} />
        <Route path="/designer/settings" element={<DesignerSettings />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;