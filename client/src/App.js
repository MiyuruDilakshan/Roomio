import React from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

const AUTH = ["/login", "/signup"];

function injectStyles() {
  if (document.getElementById("roomio-transitions")) return;
  const s = document.createElement("style");
  s.id = "roomio-transitions";
  s.textContent = `
    @keyframes page-fade {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .rt-fade { animation: page-fade 0.4s ease both; }
  `;
  document.head.appendChild(s);
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => { injectStyles(); }, []);

  return (
    <div key={location.pathname} className="rt-fade">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
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
