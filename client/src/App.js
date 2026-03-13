import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import HowItWorks from "./pages/HowItWorks";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";

function injectStyles() {
  if (document.getElementById("roomio-transitions")) return;

  const s = document.createElement("style");
  s.id = "roomio-transitions";
  s.textContent = `
    @keyframes page-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .rt-fade { animation: page-fade 0.4s ease both; }
  `;

  document.head.appendChild(s);
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <div key={location.pathname} className="rt-fade">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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